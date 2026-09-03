import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  CardComponent, CardBodyComponent, CardHeaderComponent, CardFooterComponent,
  RowComponent, ColComponent, ContainerComponent, ButtonDirective, BadgeComponent,
  TableModule, SpinnerComponent, ModalModule, FormModule, ProgressComponent, AlertComponent
} from '@coreui/angular';
import { DataService } from '../../../shared/service/DataService';
import { MessageService } from '../../../shared/service/message.service';

/**
 * ✅ FIXED VERSION:
 * - RFQ-specific Scriteria management (won't affect admin criteria)
 * - Supplier name shown first in dropdown
 * - Supplier details displayed clearly
 * - Real-time accordion update after saving scores
 */

@Component({
  selector: 'app-supplier-evaluation',
  templateUrl: './supplier-evaluation.component.html',
  styleUrls: ['./supplier-evaluation.component.css'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, ContainerComponent, RowComponent, ColComponent,
    CardComponent, CardBodyComponent, CardHeaderComponent, CardFooterComponent, ButtonDirective,
    BadgeComponent, TableModule, SpinnerComponent, ModalModule, FormModule, ProgressComponent, AlertComponent
  ]
})
export class SupplierEvaluationComponent implements OnInit {
  
  // ==================== PROPERTIES ====================
  
  rfqId: number = 0;
  userId: number = 0;
  rfqDetails: any = null;
  suppliers: any[] = [];
  quotedSuppliers: any[] = [];
  
  currentStep: 'selectCriteria' | 'weightages' | 'score' | 'results' = 'selectCriteria';

  // All active admin criteria, with a `selected` flag the RFQ creator toggles.
  // Mandatory criteria (e.g. Market Review, Cost) are pre-checked and locked.
  criteriaPool: any[] = [];

  // Criteria
  availableCriteria: any[] = [];
  assignedCriteria: any[] = [];
  
  // ✅ NEW: Track RFQ-specific criteria IDs
  rfqSpecificCriteriaIds: Set<number> = new Set();
  
  // Supplier selection for scoring
  selectedSupplierId: number | null = null;

  // "RFQ Scoring" (pre-award, editable, existing) vs "Service Performance" (post-award,
  // view-only, new) — mutually exclusive tabs shown once a supplier is selected in Step 2.
  evalTab: 'rfq' | 'performance' = 'rfq';
  isLoadingPerformance = false;
  performanceSummary: any = null;

  // Scoring (max score = 5, integers only 1-5)
  supplierScores: Map<number, Map<number, number>> = new Map();
  scoredSupplierIds: Set<number> = new Set();
  readonly MAX_SCORE = 5;
  
  // Rankings
  rankings: any[] = [];
  selectedSupplierScorecard: any = null;
  recommendedSupplier: any = null;
  
  // Loading states
  isLoading: boolean = false;
  isLoadingCriteria: boolean = false;
  isAssigningCriteria: boolean = false;
  isSavingScores: boolean = false;
  isCalculatingRankings: boolean = false;
  isLoadingRankings: boolean = false;
  
  // Modal states
  showScorecardModal: boolean = false;
  showAddCriteriaModal: boolean = false;
  showEditCriteriaModal: boolean = false;
  showDeleteConfirmModal: boolean = false;
  
  addCriteriaForm!: FormGroup;
  editCriteriaForm!: FormGroup;
  
  // For delete/edit operations
  criterionToDelete: any = null;
  criterionToEdit: any = null;

  // ==================== AI SCORE STATE ====================
  // Holds the raw result returned by the AI scoring service (Market Review, Delivery,
  // Warranty, Cost, Financial Stability, Location, or Payment Terms) keyed by
  // `${supplierId}-${criterionId}` - field names match the Python service's dataclasses
  // (snake_case), see AI_SUBSCORE_CONFIG below for which two fields each criterion shows.
  reviewData: Map<string, any> = new Map();
  reviewFetchLoading: Map<string, boolean> = new Map();
  reviewFetchError: Map<string, string> = new Map();

  // criterionName (lowercased) -> AI scoring service key. Mirrors
  // AiScoringService.CRITERION_NAME_TO_KEY on the backend.
  private readonly AI_SCORER_KEYS: Record<string, string> = {
    'market review rating': 'market_review',
    'market review': 'market_review',
    'delivery': 'delivery',
    'delivery performance': 'delivery',
    'warranty': 'warranty',
    'cost': 'cost',
    'financial stability': 'financial_stability',
    'location': 'location',
    'payment terms': 'payment_terms',
  };

  // Per-criterion sub-score box labels/fields, mirroring the Python service's own UI
  // (app.py's render_subscore_box calls) so the two boxes shown here match what each
  // scorer actually computes.
  private readonly AI_SUBSCORE_CONFIG: Record<string, { label1: string; field1: string; sub1: string; label2: string; field2: string; sub2: string }> = {
    market_review: { label1: 'Star Rating Score', field1: 'star_score', sub1: 'From Google rating — auto-filled', label2: 'Comments Score', field2: 'comments_score', sub2: 'From AI review analysis' },
    delivery: { label1: 'On-Time Score', field1: 'on_time_score', sub1: 'GRN received date vs PO lead time', label2: 'Fulfillment Score', field2: 'fulfillment_score', sub2: 'Accepted qty / ordered qty across all GRNs' },
    warranty: { label1: 'Warranty Length Score', field1: 'warranty_length_score', sub1: 'Avg months offered on covered items', label2: 'Coverage Score', field2: 'coverage_score', sub2: '% of line items with any warranty term' },
    cost: { label1: 'Negotiation Savings Score', field1: 'savings_score', sub1: 'Avg % reduction, quoted → finalized', label2: 'Price Competitiveness Score', field2: 'competitiveness_score', sub2: 'Rate vs avg market rate on same items' },
    financial_stability: { label1: 'Credit Rating Score', field1: 'credit_rating_score', sub1: 'From credit rating / cash-flow label', label2: 'Financial Health Score', field2: 'financial_health_score', sub2: 'Debt/equity, cash flow, years in business' },
    location: { label1: 'Proximity Score', field1: 'proximity_score', sub1: 'Closest match vs buyer site(s)', label2: 'Logistics Readiness Score', field2: 'logistics_readiness_score', sub2: 'From location type' },
    payment_terms: { label1: 'Favorability Score', field1: 'favorability_score', sub1: 'Avg days of credit to the buyer', label2: 'Coverage Score', field2: 'coverage_score', sub2: '% of POs with a recorded payment term' },
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {}
  
  ngOnInit(): void {
    this.rfqId = Number(this.route.snapshot.paramMap.get('rfqId'));
    this.userId = Number(localStorage.getItem('userId')) || 0;
    
    if (!this.rfqId || this.rfqId === 0) {
      this.messageService.showMessage('error', 'Error', 'Invalid RFQ ID');
      this.goBack();
      return;
    }
    
    console.log('🎯 Supplier Evaluation for RFQ:', this.rfqId);
    console.log('  ✅ RFQ-specific criteria support added');
    console.log('  ✅ Supplier name in dropdown');
    console.log('  ✅ Real-time accordion update');
    
    this.initAddCriteriaForm();
    this.initEditCriteriaForm();
    this.loadRFQDetails();
    this.checkExistingEvaluation();
  }
  
  // ==================== INITIALIZATION ====================
  
  initAddCriteriaForm(): void {
    this.addCriteriaForm = this.fb.group({
      criterionName: ['', [Validators.required, Validators.minLength(2)]],
      description: [''],
      weightage: [0, [Validators.required, Validators.min(1), Validators.max(99)]]
    });
  }
  
  initEditCriteriaForm(): void {
    this.editCriteriaForm = this.fb.group({
      weightage: [0, [Validators.required, Validators.min(1), Validators.max(99)]]
    });
  }
  
  loadRFQDetails(): void {
    this.isLoading = true;
    
    this.dataService.getQuoteComparison(this.rfqId).subscribe({
      next: (response: any) => {
        if (response && response.success && response.data) {
          const data = response.data;
          
          this.rfqDetails = {
            rfqId: data.rfqId,
            rfqNumber: data.rfqNumber,
            rfqTitle: data.rfqTitle
          };
          
          this.suppliers = data.suppliers || [];
          this.quotedSuppliers = this.suppliers.filter((s: any) => s.status === 'RESPONDED');
          
          console.log('✅ Loaded RFQ:', this.rfqDetails.rfqNumber);
          console.log('👥 Total Suppliers:', this.suppliers.length);
          console.log('✅ Quoted Suppliers:', this.quotedSuppliers.length);
        }
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error('❌ Error loading RFQ:', error);
        this.messageService.showMessage('error', 'Error', 'Failed to load RFQ details');
        this.isLoading = false;
      }
    });
  }
  
  checkExistingEvaluation(): void {
    this.isLoadingCriteria = true;
    
    this.dataService.getRFQCriteria(this.rfqId).subscribe({
      next: (response: any) => {
        if (response && response.success && response.data && response.data.length > 0) {
          this.assignedCriteria = response.data;
          
          // ✅ NEW: Track which criteria are RFQ-specific
          this.assignedCriteria.forEach(ac => {
            if (ac.isRfqSpecific) {
              this.rfqSpecificCriteriaIds.add(ac.criterion.id);
            }
          });
          
          console.log('✅ Found existing criteria:', this.assignedCriteria.length);
          console.log('  RFQ-specific:', this.rfqSpecificCriteriaIds.size);
          this.checkExistingScores();
        } else {
          console.log('ℹ️ No criteria assigned');
          this.loadAvailableCriteria();
        }
        this.isLoadingCriteria = false;
      },
      error: () => {
        this.loadAvailableCriteria();
        this.isLoadingCriteria = false;
      }
    });
  }
  
  loadAvailableCriteria(): void {
    this.dataService.getAllActiveCriteria().subscribe({
      next: (response: any) => {
        let criteria: any[] = [];

        if (response && response.success && response.data) {
          criteria = response.data;
        } else if (Array.isArray(response)) {
          criteria = response;
        }

        if (criteria.length === 0) {
          this.messageService.showMessage('warning', 'No Criteria', 'No evaluation criteria configured');
          this.goBack();
          return;
        }

        // Mandatory criteria (e.g. Market Review, Cost) are pre-checked and
        // locked; everything else starts unchecked — the RFQ creator picks
        // the rest, must reach at least 5 selected in total.
        this.criteriaPool = criteria.map(c => ({
          ...c,
          maxScore: 5,
          isRfqSpecific: false,
          selected: c.isMandatory === true
        }));

        console.log('✅ Loaded criteria pool:', this.criteriaPool.length);

        this.currentStep = 'selectCriteria';
      },
      error: (error: any) => {
        console.error('❌ Error:', error);
        this.messageService.showMessage('error', 'Error', 'Failed to load criteria');
      }
    });
  }

  // ==================== SELECT CRITERIA STEP ====================

  toggleCriterionSelection(criterion: any): void {
    if (criterion.isMandatory) return; // locked — always selected
    criterion.selected = !criterion.selected;
  }

  getSelectedCriteriaCount(): number {
    return this.criteriaPool.filter(c => c.selected).length;
  }

  proceedFromSelection(): void {
    const selected = this.criteriaPool.filter(c => c.selected);

    if (selected.length < 5) {
      this.messageService.showMessage('warning', 'Select at Least 5 Criteria',
        `You must select at least 5 evaluation criteria (currently ${selected.length}).`);
      return;
    }

    const equalWeight = Math.floor(100 / selected.length);
    const remainder = 100 - (equalWeight * selected.length);

    this.availableCriteria = selected.map((c, index) => ({
      ...c,
      maxScore: 5,
      weightage: index === 0 ? equalWeight + remainder : equalWeight,
      isRfqSpecific: false
    }));

    console.log('✅ Proceeding to weightages with', this.availableCriteria.length, 'criteria');

    this.currentStep = 'weightages';
  }
  
  checkExistingScores(): void {
    this.dataService.getSupplierRankings(this.rfqId).subscribe({
      next: (response: any) => {
        if (response && response.success && response.data && response.data.length > 0) {
          console.log('✅ Found existing rankings');
          this.currentStep = 'results';
          this.loadRankings();
        } else {
          console.log('ℹ️ No rankings, start scoring');
          this.currentStep = 'score';
          this.initializeScoring();
          this.loadExistingScores();
        }
      },
      error: () => {
        this.currentStep = 'score';
        this.initializeScoring();
        this.loadExistingScores();
      }
    });
  }
  
  loadExistingScores(): void {
    console.log('🔍 Loading existing scores from backend...');
    
    let loadedCount = 0;
    const totalSuppliers = this.quotedSuppliers.length;
    
    this.quotedSuppliers.forEach(supplier => {
      this.dataService.getSupplierScorecard(this.rfqId, supplier.supplierId).subscribe({
        next: (response: any) => {
          loadedCount++;
          
          if (response && response.success && response.data) {
            const scorecard = response.data;
            if (scorecard.criteriaScores && scorecard.criteriaScores.length > 0) {
              this.scoredSupplierIds.add(supplier.supplierId);
              
              const scores = new Map<number, number>();
              scorecard.criteriaScores.forEach((cs: any) => {
                const criterion = this.assignedCriteria.find(c => 
                  c.criterion.criterionName === cs.criterionName
                );
                if (criterion && cs.rawScore > 0) {
                  scores.set(criterion.criterion.id, cs.rawScore);
                }
              });
              this.supplierScores.set(supplier.supplierId, scores);
              
              console.log(`✅ Loaded scores for ${supplier.supplierName}:`, scores.size, 'criteria');
            }
          }
          
          if (loadedCount === totalSuppliers) {
            console.log('✅ Finished loading existing scores');
            console.log('📊 Scored suppliers:', Array.from(this.scoredSupplierIds));
            console.log('📊 Total scored:', this.getScoredSuppliersCount());
            this.cdr.detectChanges(); // ✅ Force change detection
          }
        },
        error: (error: any) => {
          loadedCount++;
          console.log(`ℹ️ No scores found for ${supplier.supplierName}`);
          
          if (loadedCount === totalSuppliers) {
            console.log('✅ Finished checking all suppliers');
            console.log('📊 Scored suppliers:', Array.from(this.scoredSupplierIds));
            this.cdr.detectChanges();
          }
        }
      });
    });
  }
  
  // ==================== STEP 1: ASSIGN WEIGHTAGES ====================
  
  getTotalWeightage(): number {
    return this.availableCriteria.reduce((sum, c) => sum + (parseInt(c.weightage) || 0), 0);
  }
  
  onWeightageChange(): void {
    const total = this.getTotalWeightage();
    console.log('💰 Total weightage:', total + '%');
  }
  
  validateWeightageInput(event: any, criterion: any): void {
    const value = event.target.value;
    
    if (value.includes('.')) {
      event.target.value = Math.floor(parseFloat(value));
      criterion.weightage = parseInt(event.target.value);
      this.messageService.showMessage('warning', 'Integers Only', 'Weightage must be an integer (no decimals)');
    }
    
    this.onWeightageChange();
  }
  
  openAddCriteriaModal(): void {
    this.addCriteriaForm.reset({ weightage: 0 });
    this.showAddCriteriaModal = true;
  }
  
  /**
   * ✅ FIXED: Create RFQ-specific criterion
   * This criterion will NOT appear in admin's global criteria list
   */
  addRFQSpecificCriterion(): void {
    if (this.addCriteriaForm.invalid) {
      this.addCriteriaForm.markAllAsTouched();
      return;
    }

    const criterionData = {
      criterionName: this.addCriteriaForm.value.criterionName,
      description: this.addCriteriaForm.value.description,
      criterionType: 'MANUAL',
      maxScore: 5,
      isActive: true
    };

    console.log('📤 Creating RFQ-specific criterion:', criterionData);

    this.dataService.createCriterion(criterionData).subscribe({
      next: (response: any) => {
        if (response && response.success && response.data) {
          const newCriterion = {
            ...response.data,
            weightage: parseInt(this.addCriteriaForm.value.weightage),
            isRfqSpecific: true // ✅ Mark as RFQ-specific
          };
          
          this.availableCriteria.push(newCriterion);
          
          // ✅ Track this as RFQ-specific
          this.rfqSpecificCriteriaIds.add(response.data.id);

          this.messageService.showMessage('success', 'Success', 
            'RFQ-specific criterion added (won\'t affect admin\'s global criteria)');
          this.showAddCriteriaModal = false;
          this.onWeightageChange();
        }
      },
      error: (error: any) => {
        console.error('❌ Error:', error);
        this.messageService.showMessage('error', 'Error', 'Failed to add criterion');
      }
    });
  }
  
  openEditCriteriaModal(criterion: any): void {
    this.criterionToEdit = criterion;
    this.editCriteriaForm.patchValue({
      weightage: parseInt(criterion.weightage)
    });
    this.showEditCriteriaModal = true;
  }
  
  saveEditedWeightage(): void {
    if (this.editCriteriaForm.invalid) {
      this.editCriteriaForm.markAllAsTouched();
      return;
    }
    
    const newWeightage = parseInt(this.editCriteriaForm.value.weightage);
    const oldWeightage = parseInt(this.criterionToEdit.weightage);
    
    this.criterionToEdit.weightage = newWeightage;
    const total = this.getTotalWeightage();
    
    if (total !== 100) {
      this.criterionToEdit.weightage = oldWeightage;
      this.messageService.showMessage('error', 'Invalid Total', 
        `Total weightage must be exactly 100%. Current: ${total}%`);
      return;
    }
    
    this.messageService.showMessage('success', 'Updated', 
      `Weightage updated to ${newWeightage}%`);
    this.showEditCriteriaModal = false;
    this.criterionToEdit = null;
  }
  
  confirmDeleteCriterion(criterion: any): void {
    if (criterion.isMandatory) {
      this.messageService.showMessage('warning', 'Cannot Remove',
        `"${criterion.criterionName}" is a mandatory criterion and must be included in every RFQ's evaluation.`);
      return;
    }
    this.criterionToDelete = criterion;
    this.showDeleteConfirmModal = true;
  }
  
  /**
   * ✅ FIXED: Delete criterion from evaluation
   * - If admin criterion: Remove from this RFQ only (doesn't delete globally)
   * - If RFQ-specific: Can be removed
   */
  deleteCriterion(): void {
    if (!this.criterionToDelete) return;
    
    const index = this.availableCriteria.indexOf(this.criterionToDelete);
    if (index > -1) {
      const isRfqSpecific = this.criterionToDelete.isRfqSpecific || 
                           this.rfqSpecificCriteriaIds.has(this.criterionToDelete.id);
      
      this.availableCriteria.splice(index, 1);
      
      const message = isRfqSpecific 
        ? 'RFQ-specific criterion removed'
        : 'Criterion removed from this evaluation (admin\'s global criterion unchanged)';
      
      this.messageService.showMessage('success', 'Removed', message);
      
      this.showDeleteConfirmModal = false;
      this.criterionToDelete = null;
      
      this.onWeightageChange();
    }
  }
  
  assignWeightagesAndProceed(): void {
    // Mandatory criteria can't be removed via the UI (see confirmDeleteCriterion),
    // so by this point they're guaranteed present — the backend re-validates
    // this too as a safety net for direct API calls.
    if (this.availableCriteria.length < 5) {
      this.messageService.showMessage('warning', 'Select at Least 5 Criteria',
        `You must select at least 5 evaluation criteria (currently ${this.availableCriteria.length}).`);
      return;
    }

    const total = this.getTotalWeightage();

    if (total !== 100) {
      this.messageService.showMessage('warning', 'Invalid',
        `Total must be exactly 100% (currently ${total}%)`);
      return;
    }

    this.isAssigningCriteria = true;
    
    const criteriaWeightages: any = {};
    this.availableCriteria.forEach(c => {
      criteriaWeightages[c.id] = parseFloat(c.weightage);
    });
    
    this.dataService.assignCriteriaToRFQ(this.rfqId, this.userId, criteriaWeightages).subscribe({
      next: (response: any) => {
        console.log('✅ Criteria assigned');
        
        this.dataService.getRFQCriteria(this.rfqId).subscribe({
          next: (resp: any) => {
            if (resp && resp.success && resp.data) {
              this.assignedCriteria = resp.data;
              
              this.currentStep = 'score';
              this.initializeScoring();
            }
            this.isAssigningCriteria = false;
          }
        });
      },
      error: (error: any) => {
        console.error('❌ Error:', error);
        this.messageService.showMessage('error', 'Error', 'Failed to assign criteria');
        this.isAssigningCriteria = false;
      }
    });
  }
  
  // ==================== STEP 2: SCORE SUPPLIERS ====================
  
  initializeScoring(): void {
    this.selectedSupplierId = null;
    
    this.quotedSuppliers.forEach(supplier => {
      if (!this.supplierScores.has(supplier.supplierId)) {
        this.supplierScores.set(supplier.supplierId, new Map());
      }
    });
    
    console.log('📊 Scoring initialized for', this.quotedSuppliers.length, 'suppliers');
    console.log('📊 Already scored:', this.getScoredSuppliersCount());
  }
  
  getManualCriteria(): any[] {
    return this.assignedCriteria;
  }

  /**
   * "Back to Weightages" from the Score step. On a fresh pass through this
   * component, availableCriteria was already populated by proceedFromSelection().
   * But if criteria were assigned in an earlier visit (this.assignedCriteria
   * loaded from the backend on init), availableCriteria was never filled in
   * this session at all — rebuild it from the saved assignment so the
   * weightages screen doesn't show empty.
   */
  goBackToWeightages(): void {
    if (this.availableCriteria.length === 0 && this.assignedCriteria.length > 0) {
      this.availableCriteria = this.assignedCriteria.map((ac: any) => ({
        id: ac.criterion.id,
        criterionName: ac.criterion.criterionName,
        description: ac.criterion.description,
        maxScore: ac.criterion.maxScore || 5,
        weightage: ac.weightage,
        isRfqSpecific: ac.isRfqSpecific || false,
        isMandatory: ac.criterion.isMandatory || false
      }));
    }
    this.currentStep = 'weightages';
  }
  
  /**
   * ✅ FIXED: Get selected supplier with proper type handling
   */
  getSelectedSupplier(): any {
    if (!this.selectedSupplierId) {
      return null;
    }
    
    const supplierId = typeof this.selectedSupplierId === 'string' 
      ? parseInt(this.selectedSupplierId) 
      : this.selectedSupplierId;
    
    const supplier = this.quotedSuppliers.find(s => s.supplierId === supplierId);
    
    return supplier || null;
  }
  
  /**
   * ✅ NEW: Get supplier name by ID
   */
  getSupplierNameById(supplierId: number): string {
    const supplier = this.quotedSuppliers.find(s => s.supplierId === supplierId);
    return supplier?.supplierName || supplier?.companyName || 'Unknown Supplier';
  }
  
  getSupplierScoredCriteriaCount(supplierId: number): number {
    const scores = this.supplierScores.get(supplierId);
    if (!scores) return 0;
    
    let count = 0;
    this.assignedCriteria.forEach(criterion => {
      if (scores.has(criterion.criterion.id) && scores.get(criterion.criterion.id)! > 0) {
        count++;
      }
    });
    
    return count;
  }
  
  editSupplierRatings(supplierId: number): void {
    this.selectedSupplierId = supplierId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    this.messageService.showMessage('info', 'Edit Mode', 
      'You can now edit the ratings for ' + this.getSupplierNameById(supplierId));
  }
  
  trackByCriterion(index: number, item: any): number {
    return item.criterion.id;
  }
  
  onScoreBlur(event: any, supplierId: number, criterionId: number): void {
    const inputElement = event.target as HTMLInputElement;
    const currentScore = this.getSupplierScore(supplierId, criterionId);
    
    if (currentScore > 0) {
      inputElement.value = currentScore.toString();
    } else {
      inputElement.value = '';
    }
  }
  
  onSupplierChange(): void {
    console.log('📊 Selected supplier ID:', this.selectedSupplierId);

    const supplier = this.getSelectedSupplier();
    if (supplier) {
      console.log('📊 Selected supplier:', supplier.supplierName || supplier.companyName);
    }

    // Always land back on RFQ Scoring when switching to a different supplier.
    this.evalTab = 'rfq';
    this.performanceSummary = null;

    // ✅ Force change detection to update UI
    this.cdr.detectChanges();

    setTimeout(() => {
      if (this.selectedSupplierId) {
        const inputs = document.querySelectorAll(`input[id^="score-${this.selectedSupplierId}-"]`);
        inputs.forEach((input: any) => {
          const criterionId = parseInt(input.id.split('-')[2]);
          const score = this.getSupplierScore(this.selectedSupplierId!, criterionId);
          input.value = score > 0 ? score.toString() : '';
        });
      }
    }, 0);

    // Any "auto-fill from Service Performance History" criterion re-pulls its score for the
    // newly-selected supplier automatically — nothing for the RFQ creator to click or type.
    if (this.selectedSupplierId) {
      for (const rfqCriterion of this.assignedCriteria) {
        if (this.isAutoPerformanceCriterion(rfqCriterion)) {
          this.fetchPerformanceScore(this.selectedSupplierId, rfqCriterion);
        }
      }
    }
  }

  /** Loads (once per supplier selection) the view-only aggregated Service Performance summary. */
  switchToPerformanceTab(): void {
    this.evalTab = 'performance';
    const supplierId = this.getSelectedSupplier()?.supplierId;
    if (!supplierId) return;

    this.isLoadingPerformance = true;
    this.performanceSummary = null;
    this.dataService.getSupplierPerformanceSummary(supplierId).subscribe({
      next: (res: any) => {
        this.performanceSummary = res?.success ? res.data : (res?.data || res);
        this.isLoadingPerformance = false;
      },
      error: () => {
        this.performanceSummary = { reviewCount: 0, metricAverages: [], reviews: [] };
        this.isLoadingPerformance = false;
      }
    });
  }

  getScoredSuppliersCount(): number {
    return this.scoredSupplierIds.size;
  }
  
  isCurrentSupplierScored(): boolean {
    if (!this.selectedSupplierId) return false;
    const scores = this.supplierScores.get(this.selectedSupplierId);
    return scores !== undefined && scores.size > 0;
  }
  
  isSupplierScored(supplierId: number | string): boolean {
    const id = typeof supplierId === 'string' ? parseInt(supplierId) : supplierId;
    
    if (this.scoredSupplierIds.has(id)) {
      return true;
    }
    
    const scores = this.supplierScores.get(id);
    if (scores && scores.size > 0) {
      this.scoredSupplierIds.add(id);
      return true;
    }
    
    return false;
  }
  
  /**
   * ✅ FIXED: Real-time accordion update after saving
   */
  saveCurrentSupplierScores(): void {
    if (!this.selectedSupplierId) return;
    
    const scores = this.supplierScores.get(this.selectedSupplierId);
    
    if (!scores || scores.size === 0) {
      this.messageService.showMessage('warning', 'No Scores Entered', 
        'Please enter scores for at least one criterion before saving');
      return;
    }
    
    const scoresObj: any = {};
    scores.forEach((score, criterionId) => {
      const rfqCriterion = this.assignedCriteria.find(c => c.criterion.id === criterionId);
      if (rfqCriterion && score > 0) {
        scoresObj[rfqCriterion.id] = score;
      }
    });
    
    const currentSupplierId = this.selectedSupplierId;
    const supplierName = this.getSupplierNameById(currentSupplierId);
    
    this.isSavingScores = true;
    
    this.dataService.scoreSupplier(this.rfqId, this.selectedSupplierId, this.userId, scoresObj).subscribe({
      next: () => {
        const scoredCount = scores.size;
        const totalCriteria = this.assignedCriteria.length;
        
        // ✅ Add to scored Set and force change detection
        this.scoredSupplierIds.add(currentSupplierId);
        
        this.messageService.showMessage('success', '✅ Saved Successfully', 
          `Scores saved for criteria.`);
        
        // Clear selection
        this.selectedSupplierId = null;
        this.isSavingScores = false;
        
        // ✅ Force Angular to detect changes immediately
        this.cdr.detectChanges();
        
        // Scroll to accordion
        setTimeout(() => {
          const accordionSection = document.querySelector('.saved-ratings-section');
          if (accordionSection) {
            accordionSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }, 300);
        
        console.log('✅ Supplier scored:', currentSupplierId);
        console.log('📊 Total scored:', this.getScoredSuppliersCount());
        console.log('📋 Accordion should update now');
      },
      error: (error: any) => {
        console.error('❌ Error saving scores:', error);
        this.messageService.showMessage('error', 'Error', 'Failed to save scores');
        this.isSavingScores = false;
      }
    });
  }
  
  getSupplierScore(supplierId: number, criterionId: number): number {
    const scores = this.supplierScores.get(supplierId);
    if (!scores) return 0;
    return scores.get(criterionId) || 0;
  }
  
  updateSupplierScore(supplierId: number, criterionId: number, value: any): void {
    if (value === '' || value === null || value === undefined) {
      const scores = this.supplierScores.get(supplierId);
      if (scores) {
        scores.delete(criterionId);
      }
      return;
    }
    
    let score = parseFloat(value);
    
    if (isNaN(score)) {
      return;
    }
    
    score = Math.floor(score);
    
    if (score < 1 || score > this.MAX_SCORE) {
      this.messageService.showMessage('warning', 'Invalid Score', 
        `Score must be between 1 and ${this.MAX_SCORE}`);
      return;
    }
    
    let scores = this.supplierScores.get(supplierId);
    if (!scores) {
      scores = new Map<number, number>();
      this.supplierScores.set(supplierId, scores);
    }
    
    scores.set(criterionId, score);
    console.log(`✅ Stored: Supplier ${supplierId}, Criterion ${criterionId} = ${score}`);
  }
  
  saveAllScoresAndCalculateRankings(): void {
    const unScoredCount = this.quotedSuppliers.length - this.scoredSupplierIds.size;
    
    if (unScoredCount > 0) {
      this.messageService.showMessage('warning', 'Incomplete Scoring', 
        `Please score all ${this.quotedSuppliers.length} suppliers before calculating rankings. ${unScoredCount} supplier(s) not scored yet.`);
      return;
    }
    
    console.log('💾 Saving all scores and calculating rankings...');
    this.isSavingScores = true;
    
    let completed = 0;
    const total = this.quotedSuppliers.length;
    
    this.quotedSuppliers.forEach(supplier => {
      const scores = this.supplierScores.get(supplier.supplierId);
      const scoresObj: any = {};
      
      if (scores) {
        scores.forEach((score, criterionId) => {
          const rfqCriterion = this.assignedCriteria.find(c => c.criterion.id === criterionId);
          if (rfqCriterion && score > 0) {
            scoresObj[rfqCriterion.id] = score;
          }
        });
      }
      
      this.dataService.scoreSupplier(this.rfqId, supplier.supplierId, this.userId, scoresObj).subscribe({
        next: () => {
          completed++;
          if (completed === total) {
            this.messageService.showMessage('success', 'Success', 'All suppliers scored');
            this.calculateFinalRankingsAutomatic();
          }
        },
        error: () => {
          completed++;
          if (completed === total) {
            this.calculateFinalRankingsAutomatic();
          }
        }
      });
    });
  }
  
  logCurrentState(): void {
    console.log('=== CURRENT STATE ===');
    console.log('Quoted Suppliers:', this.quotedSuppliers.length);
    console.log('Scored Count:', this.getScoredSuppliersCount());
    console.log('Scored Supplier IDs (Set):', Array.from(this.scoredSupplierIds));
    console.log('Supplier Scores Map:');
    this.supplierScores.forEach((scores, supplierId) => {
      const supplier = this.getSupplierNameById(supplierId);
      const isScored = this.isSupplierScored(supplierId);
      console.log(`  ${supplier} (ID: ${supplierId}):`, scores.size, 'criteria scored', '| isScored:', isScored);
      scores.forEach((score, criterionId) => {
        console.log(`    - Criterion ${criterionId}: ${score}`);
      });
    });
  }
  
  // ==================== AUTOMATIC FINAL RANKING ====================
  
  calculateFinalRankingsAutomatic(): void {
    console.log('🏆 Calculating final rankings AUTOMATICALLY...');
    
    this.isSavingScores = false;
    this.isCalculatingRankings = true;
    
    this.dataService.calculateFinalRankings(this.rfqId).subscribe({
      next: (response: any) => {
        console.log('✅ Final rankings calculated:', response);
        
        this.messageService.showMessage('success', 'Success', 
          'Final rankings calculated automatically!');
        
        this.currentStep = 'results';
        this.loadRankings();
        
        this.isCalculatingRankings = false;
      },
      error: (error: any) => {
        console.error('❌ Error calculating rankings:', error);
        
        this.messageService.showMessage('error', 'Error', 
          error.error?.message || 'Failed to calculate rankings');
        this.isCalculatingRankings = false;
      }
    });
  }
  
  // ==================== STEP 3: VIEW RESULTS ====================
  
  loadRankings(): void {
    this.isLoadingRankings = true;
    
    this.dataService.getSupplierRankings(this.rfqId).subscribe({
      next: (response: any) => {
        if (response && response.success && response.data) {
          this.rankings = response.data;
        } else if (Array.isArray(response)) {
          this.rankings = response;
        }
        
        if (this.rankings.length > 0) {
          this.recommendedSupplier = this.rankings[0];
          console.log('🏆 Top:', this.recommendedSupplier.supplierName);
        }
        
        this.isLoadingRankings = false;
      },
      error: (error: any) => {
        console.error('❌ Error:', error);
        this.messageService.showMessage('error', 'Error', 'Failed to load rankings');
        this.isLoadingRankings = false;
      }
    });
  }
  
  viewScorecard(supplier: any): void {
    this.dataService.getSupplierScorecard(this.rfqId, supplier.supplierId).subscribe({
      next: (response: any) => {
        if (response && response.success && response.data) {
          this.selectedSupplierScorecard = response.data;
          this.showScorecardModal = true;
        }
      },
      error: (error: any) => {
        console.error('❌ Error:', error);
        this.messageService.showMessage('error', 'Error', 'Failed to load scorecard');
      }
    });
  }
  
  // ==================== NAVIGATION ====================
  
  goBack(): void {
    this.router.navigate(['/quote-comparison', this.rfqId]);
  }
  
  goToQuoteComparison(): void {
    this.router.navigate(['/quote-comparison', this.rfqId]);
  }

  // ==================== AI SCORE HELPERS ====================

  /** The AI scoring service key for this criterion (e.g. 'financial_stability'), or null
   * if it has no auto-scorer and should stay a plain manual 1-5 entry. */
  getAiScorerKey(rfqCriterion: any): string | null {
    const name: string = rfqCriterion?.criterion?.criterionName?.toLowerCase()?.trim() || '';
    return this.AI_SCORER_KEYS[name] || null;
  }

  isAiScorableCriterion(rfqCriterion: any): boolean {
    return this.getAiScorerKey(rfqCriterion) !== null;
  }

  // Java-native (deterministic, non-AI) scoring supports the same criteria except Market
  // Review, which stays AI-only - it needs live Google review data, not just DB records.
  isNativeScorableCriterion(rfqCriterion: any): boolean {
    const key = this.getAiScorerKey(rfqCriterion);
    return key !== null && key !== 'market_review';
  }

  // Which mode is active for a criterion: 'ai'/'java' produced (or are producing) the
  // currently-displayed result, 'manual' means the user is typing the score in by hand.
  // Undefined = nothing chosen yet (just the three buttons are shown).
  reviewSource: Map<string, 'ai' | 'java' | 'manual'> = new Map();

  getReviewSource(supplierId: number | null, criterionId: number): 'ai' | 'java' | 'manual' | null {
    if (!supplierId) return null;
    return this.reviewSource.get(this.getReviewKey(supplierId, criterionId)) || null;
  }

  // Switches a criterion into manual-entry mode - no fetch, just a single plain input box
  // (same as criteria with no scorer at all), so the user can type the score in themselves
  // if the AI/Java options aren't wanted or aren't working.
  setManualMode(supplierId: number | null, rfqCriterion: any): void {
    if (!supplierId) return;
    const key = this.getReviewKey(supplierId, rfqCriterion.criterion.id);
    this.reviewSource.set(key, 'manual');
    this.reviewFetchError.set(key, '');
    this.cdr.detectChanges();
  }

  getAiSubScoreConfig(rfqCriterion: any) {
    const key = this.getAiScorerKey(rfqCriterion);
    return key ? this.AI_SUBSCORE_CONFIG[key] : null;
  }

  getReviewKey(supplierId: number, criterionId: number): string {
    return `${supplierId}-${criterionId}`;
  }

  fetchAiScore(supplierId: number | null, rfqCriterion: any): void {
    if (!supplierId) return;

    const scorerKey = this.getAiScorerKey(rfqCriterion);
    if (!scorerKey) return;

    // Convert to number — dropdown may pass string "17" instead of number 17
    const sid = typeof supplierId === 'string' ? parseInt(supplierId as any, 10) : supplierId;

    const supplier = this.quotedSuppliers.find(
      (s: any) => Number(s.supplierId) === sid
    );

    // Try every possible field name the backend might use
    const companyName: string = supplier?.companyName
      || supplier?.supplierName
      || supplier?.company
      || supplier?.organizationName
      || '';

    const key = this.getReviewKey(supplierId, rfqCriterion.criterion.id);
    this.reviewSource.set(key, 'ai');
    this.reviewFetchLoading.set(key, true);
    this.reviewFetchError.set(key, '');
    this.cdr.detectChanges();

    this.dataService.fetchAiScore(rfqCriterion.criterion.criterionName, sid, companyName || undefined).subscribe({
      next: (response: any) => {
        this.reviewFetchLoading.set(key, false);

        if (!response || response.success === false) {
          this.reviewFetchError.set(key, response?.message || 'Failed to fetch AI score. Score manually.');
          this.cdr.detectChanges();
          return;
        }

        const data = response.data;
        this.reviewData.set(key, data);
        this.reviewSource.set(key, 'ai');

        // Pre-fill the two sub-score inputs from whichever fields this criterion uses
        const config = this.AI_SUBSCORE_CONFIG[scorerKey];
        if (config) {
          const sub1 = data?.[config.field1];
          const sub2 = data?.[config.field2];
          if (sub1 !== null && sub1 !== undefined) this.reviewStarScores.set(key, sub1);
          if (sub2 !== null && sub2 !== undefined) this.reviewCommentsScores.set(key, sub2);
        }

        // Auto-fill combined criterion score
        if (data?.suggested_score !== null && data?.suggested_score !== undefined) {
          this.updateSupplierScore(sid, rfqCriterion.criterion.id, Math.round(data.suggested_score));
        }
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        this.reviewFetchLoading.set(key, false);
        const msg: string = err?.error?.message || err?.userMessage || 'Failed to fetch AI score. Score manually.';
        this.reviewFetchError.set(key, msg);
        this.cdr.detectChanges();
      }
    });
  }

  // Deterministic, non-AI alternative - same result shape as fetchAiScore, computed
  // directly from the database (no LLM call) via NativeScoringController.
  fetchNativeScore(supplierId: number | null, rfqCriterion: any): void {
    if (!supplierId) return;

    const scorerKey = this.getAiScorerKey(rfqCriterion);
    if (!scorerKey || scorerKey === 'market_review') return;

    const sid = typeof supplierId === 'string' ? parseInt(supplierId as any, 10) : supplierId;
    const key = this.getReviewKey(supplierId, rfqCriterion.criterion.id);
    this.reviewSource.set(key, 'java');
    this.reviewFetchLoading.set(key, true);
    this.reviewFetchError.set(key, '');
    this.cdr.detectChanges();

    this.dataService.fetchNativeScore(rfqCriterion.criterion.criterionName, sid).subscribe({
      next: (response: any) => {
        this.reviewFetchLoading.set(key, false);

        if (!response || response.success === false) {
          this.reviewFetchError.set(key, response?.message || 'Failed to calculate score. Score manually.');
          this.cdr.detectChanges();
          return;
        }

        const data = response.data;
        this.reviewData.set(key, data);
        this.reviewSource.set(key, 'java');

        const config = this.AI_SUBSCORE_CONFIG[scorerKey];
        if (config) {
          const sub1 = data?.[config.field1];
          const sub2 = data?.[config.field2];
          if (sub1 !== null && sub1 !== undefined) this.reviewStarScores.set(key, sub1);
          if (sub2 !== null && sub2 !== undefined) this.reviewCommentsScores.set(key, sub2);
        }

        if (data?.suggested_score !== null && data?.suggested_score !== undefined) {
          this.updateSupplierScore(sid, rfqCriterion.criterion.id, Math.round(data.suggested_score));
        }
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        this.reviewFetchLoading.set(key, false);
        const msg: string = err?.error?.message || err?.userMessage || 'Failed to calculate score. Score manually.';
        this.reviewFetchError.set(key, msg);
        this.cdr.detectChanges();
      }
    });
  }

  // ==================== AUTO-PERFORMANCE CRITERION (Service Performance History) ====================
  // A criterion the admin flagged "Auto-fill from Service Performance History" — its score is
  // pulled from the supplier's real Service Performance Review average instead of being typed
  // in. Reuses the exact same updateSupplierScore()/scoreSupplier() path as every other
  // criterion, so nothing about scoring/ranking/weightage changes for the rest of the wizard.

  isAutoPerformanceCriterion(rfqCriterion: any): boolean {
    return rfqCriterion?.criterion?.criterionType === 'AUTO_PERFORMANCE';
  }

  fetchPerformanceScore(supplierId: number | null, rfqCriterion: any): void {
    if (!supplierId) return;
    const sid = typeof supplierId === 'string' ? parseInt(supplierId as any, 10) : supplierId;
    const criterionId = rfqCriterion.criterion.id;
    const key = this.getReviewKey(sid, criterionId);

    this.reviewFetchLoading.set(key, true);
    this.reviewFetchError.set(key, '');
    this.cdr.detectChanges();

    this.dataService.getSupplierPerformanceSummary(sid).subscribe({
      next: (res: any) => {
        this.reviewFetchLoading.set(key, false);
        const data = res?.success ? res.data : (res?.data || res);
        const overall = data?.overallScore;

        if (overall === null || overall === undefined || !data?.reviewCount) {
          this.reviewFetchError.set(key, 'No service performance history yet for this supplier.');
          this.cdr.detectChanges();
          return;
        }

        const score = Math.min(this.MAX_SCORE, Math.max(1, Math.round(Number(overall))));
        this.updateSupplierScore(sid, criterionId, score);
        this.cdr.detectChanges();
      },
      error: () => {
        this.reviewFetchLoading.set(key, false);
        this.reviewFetchError.set(key, 'Failed to load performance history.');
        this.cdr.detectChanges();
      }
    });
  }

  getReviewData(supplierId: number | null, criterionId: number): any | undefined {
    if (!supplierId) return undefined;
    return this.reviewData.get(this.getReviewKey(supplierId, criterionId));
  }

  isReviewLoading(supplierId: number | null, criterionId: number): boolean {
    if (!supplierId) return false;
    return this.reviewFetchLoading.get(this.getReviewKey(supplierId, criterionId)) || false;
  }

  getReviewError(supplierId: number | null, criterionId: number): string {
    if (!supplierId) return '';
    return this.reviewFetchError.get(this.getReviewKey(supplierId, criterionId)) || '';
  }

  getLabelColor(label: string): string {
    switch (label?.toUpperCase()) {
      case 'EXCELLENT': return 'success';
      case 'GOOD':      return 'info';
      case 'AVERAGE':   return 'warning';
      case 'BELOW AVERAGE': return 'warning';
      case 'POOR':      return 'danger';
      case 'VERY POOR': return 'danger';
      default:          return 'secondary';
    }
  }

  getDataQualityColor(quality: string): string {
    switch (quality?.toUpperCase()) {
      case 'HIGH':     return 'success';
      case 'MEDIUM':   return 'warning';
      case 'LOW':      return 'danger';
      case 'VERY_LOW': return 'danger';
      case 'ERROR':    return 'danger';
      default:         return 'secondary';
    }
  }

  getStarArray(rating: number | null): number[] {
    if (!rating) return [];
    const full = Math.round(rating);
    return Array.from({ length: 5 }, (_, i) => i < full ? 1 : 0);
  }

  // Generic sub-score maps, shared across whichever AI-scorable criterion is being fetched
  // (field names kept for minimal diff; semantics generalized beyond just Market Review).
  reviewStarScores:     Map<string, number> = new Map();
  reviewCommentsScores: Map<string, number> = new Map();

  updateReviewSubScore(
    supplierId: number | null,
    criterionId: number,
    type: 'sub1' | 'sub2',
    value: any
  ): void {
    if (!supplierId || value === '' || value === null || value === undefined) return;
    const score = Math.max(1, Math.min(5, Math.floor(parseFloat(value))));
    if (isNaN(score)) return;
    const key = this.getReviewKey(supplierId, criterionId);
    if (type === 'sub1') {
      this.reviewStarScores.set(key, score);
    } else {
      this.reviewCommentsScores.set(key, score);
    }
    // Recalculate combined score → update criterion score
    const sub1 = this.reviewStarScores.get(key);
    const sub2 = this.reviewCommentsScores.get(key);
    let combined: number;
    if (sub1 !== undefined && sub2 !== undefined) {
      combined = Math.max(1, Math.min(5, Math.round((sub1 + sub2) / 2)));
    } else {
      combined = sub1 ?? sub2 ?? score;
    }
    this.updateSupplierScore(supplierId, criterionId, combined);
    this.cdr.detectChanges();
  }

  getReviewSubScore(supplierId: number | null, criterionId: number, type: 'sub1' | 'sub2'): number | null {
    if (!supplierId) return null;
    const key = this.getReviewKey(supplierId, criterionId);
    return type === 'sub1'
      ? (this.reviewStarScores.get(key) ?? null)
      : (this.reviewCommentsScores.get(key) ?? null);
  }
}
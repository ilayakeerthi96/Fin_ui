import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardComponent, CardBodyComponent, CardHeaderComponent, RowComponent, ColComponent,
  ContainerComponent, ButtonDirective, AlertComponent, BadgeComponent
} from '@coreui/angular';
import { DataService } from '../../../shared/service/DataService';
import { MessageService } from '../../../shared/service/message.service';

interface ApprovalTypeSection {
  type: string;
  label: string;
  description: string;
  selectedLevelIds: number[];
  isSaving: boolean;
  isUsingDefault: boolean; // true = admin hasn't configured this type yet (falls back to "all levels")
}

/**
 * Admin screen: choose exactly which hierarchy levels approve each kind of
 * request (RFQ, PO, Budget, Supplier Registration) instead of every request
 * type always walking the whole hierarchy. Backed by ApprovalFlowConfig /
 * ApprovalFlowConfigService on the backend - if a type is left unconfigured
 * here, that flow keeps working exactly as it always has (all active
 * levels), so this is purely additive/opt-in per type.
 */
@Component({
  selector: 'app-approval-flow-config',
  templateUrl: './approval-flow-config.component.html',
  styleUrls: ['./approval-flow-config.component.css'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, CardComponent, CardBodyComponent, CardHeaderComponent,
    RowComponent, ColComponent, ContainerComponent, ButtonDirective, AlertComponent, BadgeComponent
  ]
})
export class ApprovalFlowConfigComponent implements OnInit {

  companyName: string = '';
  allLevels: any[] = [];
  isLoading: boolean = true;
  loadError: string = '';

  // Built-in approval types - unchanged from before. Custom types (admin-defined,
  // see customTypes below) are appended to `sections` dynamically after load.
  sections: ApprovalTypeSection[] = [
    { type: 'RFQ', label: 'RFQ Approval', description: 'Approvers for newly submitted RFQs before they\'re published.', selectedLevelIds: [], isSaving: false, isUsingDefault: true },
    { type: 'PO', label: 'PO Approval', description: 'Approvers for Purchase Orders before they\'re issued to the supplier.', selectedLevelIds: [], isSaving: false, isUsingDefault: true },
    { type: 'BUDGET', label: 'Budget Approval', description: 'Approvers for budget increase requests, after Finance\'s initial review.', selectedLevelIds: [], isSaving: false, isUsingDefault: true },
    { type: 'SUPPLIER_REGISTRATION', label: 'Supplier Registration Approval', description: 'Approvers for new supplier registrations before they\'re activated.', selectedLevelIds: [], isSaving: false, isUsingDefault: true },
    { type: 'CONTRACT', label: 'Contract Approval', description: 'Approvers for MSA contracts, before they go to the supplier for signature.', selectedLevelIds: [], isSaving: false, isUsingDefault: true }
  ];

  // ---- Custom Approval Types (admin-defined categories beyond the 5 above) ----
  customTypes: any[] = [];
  isLoadingCustomTypes: boolean = false;
  newTypeName: string = '';
  newTypeDescription: string = '';
  isCreatingType: boolean = false;
  showCreateTypeForm: boolean = false;

  constructor(
    private dataService: DataService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.companyName = localStorage.getItem('companyName') || '';
    if (!this.companyName) {
      this.loadError = 'Could not determine your organization. Please re-login.';
      this.isLoading = false;
      return;
    }
    this.loadLevelsThenConfig();
    this.loadCustomTypes();
  }

  private loadLevelsThenConfig(): void {
    this.isLoading = true;
    this.dataService.getHierarchyLevelsByCompany(this.companyName).subscribe({
      next: (response: any) => {
        this.allLevels = (response?.data || response || []).filter((l: any) => l.isActive);
        this.loadConfig();
      },
      error: () => {
        this.loadError = 'Failed to load hierarchy levels';
        this.isLoading = false;
      }
    });
  }

  private loadConfig(): void {
    this.dataService.getApprovalFlowConfig(this.companyName).subscribe({
      next: (response: any) => {
        const byType: Record<string, number[]> = (response?.data || {}) as any;
        this.applyConfigToSections(byType);
        this.isLoading = false;
      },
      error: () => {
        this.loadError = 'Failed to load approval configuration';
        this.isLoading = false;
      }
    });
  }

  private applyConfigToSections(byType: Record<string, number[]>): void {
    for (const section of this.sections) {
      const configured = byType[section.type] || [];
      section.isUsingDefault = configured.length === 0;
      section.selectedLevelIds = configured.length > 0 ? [...configured] : this.allLevels.map(l => l.id);
    }
  }

  // ---------------- Custom Approval Types management ----------------

  private loadCustomTypes(): void {
    this.isLoadingCustomTypes = true;
    this.dataService.getCustomApprovalTypesForCompany(this.companyName).subscribe({
      next: (response: any) => {
        this.customTypes = response?.data || response || [];
        this.isLoadingCustomTypes = false;
        this.syncCustomTypeSections();
      },
      error: () => {
        this.isLoadingCustomTypes = false;
      }
    });
  }

  /** Keeps `sections` in sync with active custom types, without disturbing the 5 built-in ones. */
  private syncCustomTypeSections(): void {
    // Remove any previously-added custom sections, then re-add current active ones.
    this.sections = this.sections.filter(s => !s.type.startsWith('CUSTOM_'));
    const activeTypes = this.customTypes.filter(t => t.isActive);
    for (const t of activeTypes) {
      this.sections.push({
        type: `CUSTOM_${t.id}`,
        label: t.typeName,
        description: t.description || 'Custom approval type defined by your admin.',
        selectedLevelIds: [],
        isSaving: false,
        isUsingDefault: true
      });
    }
    // Re-fetch config so the newly-appended custom sections get their saved levels/order too.
    if (activeTypes.length > 0) {
      this.dataService.getApprovalFlowConfig(this.companyName).subscribe({
        next: (response: any) => {
          const byType: Record<string, number[]> = (response?.data || {}) as any;
          this.applyConfigToSections(byType);
        }
      });
    }
  }

  toggleCreateTypeForm(): void {
    this.showCreateTypeForm = !this.showCreateTypeForm;
    this.newTypeName = '';
    this.newTypeDescription = '';
  }

  createCustomType(): void {
    if (!this.newTypeName || !this.newTypeName.trim()) {
      this.messageService.showMessage('error', 'Error', 'Please enter a name for the new approval type');
      return;
    }
    this.isCreatingType = true;
    const payload = {
      companyName: this.companyName,
      typeName: this.newTypeName.trim(),
      description: this.newTypeDescription?.trim() || '',
      createdByUserId: Number(localStorage.getItem('userId')) || 0,
      createdByName: localStorage.getItem('fullName') || 'Admin'
    };
    this.dataService.createCustomApprovalType(payload).subscribe({
      next: () => {
        this.isCreatingType = false;
        this.showCreateTypeForm = false;
        this.messageService.showMessage('success', 'Success', `Approval type "${payload.typeName}" created. Configure its approvers below.`);
        this.loadCustomTypes();
      },
      error: (err: any) => {
        this.isCreatingType = false;
        this.messageService.showMessage('error', 'Error', err.error?.message || 'Failed to create approval type');
      }
    });
  }

  toggleCustomTypeActive(type: any): void {
    this.dataService.toggleCustomApprovalTypeActive(type.id).subscribe({
      next: () => {
        this.messageService.showMessage('success', 'Success', `"${type.typeName}" is now ${type.isActive ? 'inactive' : 'active'}`);
        this.loadCustomTypes();
      },
      error: (err: any) => {
        this.messageService.showMessage('error', 'Error', err.error?.message || 'Failed to update approval type');
      }
    });
  }

  deleteCustomType(type: any): void {
    if (!confirm(`Delete approval type "${type.typeName}"? This cannot be undone. Existing requests of this type will keep their history.`)) {
      return;
    }
    this.dataService.deleteCustomApprovalType(type.id).subscribe({
      next: () => {
        this.messageService.showMessage('success', 'Success', `"${type.typeName}" deleted`);
        this.loadCustomTypes();
      },
      error: (err: any) => {
        this.messageService.showMessage('error', 'Error', err.error?.message || 'Failed to delete approval type');
      }
    });
  }

  isLevelSelected(section: ApprovalTypeSection, levelId: number): boolean {
    return section.selectedLevelIds.includes(levelId);
  }

  /** Clicking a level chip appends it to the END of the approval order (or removes it).
   *  Reorder afterward with the up/down arrows in the "Approval Order" list. */
  toggleLevel(section: ApprovalTypeSection, levelId: number): void {
    if (this.isLevelSelected(section, levelId)) {
      section.selectedLevelIds = section.selectedLevelIds.filter(id => id !== levelId);
    } else {
      section.selectedLevelIds = [...section.selectedLevelIds, levelId];
    }
  }

  useAllLevels(section: ApprovalTypeSection): void {
    section.selectedLevelIds = this.allLevels.map(l => l.id);
  }

  clearAll(section: ApprovalTypeSection): void {
    section.selectedLevelIds = [];
  }

  moveUp(section: ApprovalTypeSection, index: number): void {
    if (index <= 0) return;
    const ids = [...section.selectedLevelIds];
    [ids[index - 1], ids[index]] = [ids[index], ids[index - 1]];
    section.selectedLevelIds = ids;
  }

  moveDown(section: ApprovalTypeSection, index: number): void {
    if (index >= section.selectedLevelIds.length - 1) return;
    const ids = [...section.selectedLevelIds];
    [ids[index + 1], ids[index]] = [ids[index], ids[index + 1]];
    section.selectedLevelIds = ids;
  }

  save(section: ApprovalTypeSection): void {
    // The array order IS the approval sequence now, so (unlike before) we
    // always save the explicit order the admin arranged - even a "select
    // all" set may be in a deliberately different order than the default
    // fallback (highest levelOrder first) would produce.
    const levelIdsToSave = section.selectedLevelIds;

    section.isSaving = true;
    this.dataService.setApprovalFlowConfigForType(this.companyName, section.type, levelIdsToSave).subscribe({
      next: (response: any) => {
        section.isSaving = false;
        if (response?.success) {
          section.isUsingDefault = levelIdsToSave.length === 0;
          this.messageService.showMessage('success', 'Success', `${section.label} routing updated`);
        } else {
          this.messageService.showMessage('error', 'Error', response?.message || 'Failed to save');
        }
      },
      error: (err: any) => {
        section.isSaving = false;
        this.messageService.showMessage('error', 'Error', err.error?.message || 'Failed to save');
      }
    });
  }

  getLevelName(levelId: number): string {
    return this.allLevels.find(l => l.id === levelId)?.levelName || `Level #${levelId}`;
  }
}

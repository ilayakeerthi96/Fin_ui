import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  CardComponent, CardBodyComponent, RowComponent, ColComponent,
  ContainerComponent, ButtonDirective, AlertComponent
} from '@coreui/angular';
import { DataService } from '../../../shared/service/DataService';
import { MessageService } from '../../../shared/service/message.service';

interface ShipLine {
  poLineItemId: number;
  itemCode: string;
  itemDescription: string;
  orderedQuantity: number;
  shippedQuantity: number;
  uom: string;
}

/**
 * "Create ASN" — supplier raises an Advance Shipping Notice against one of
 * their approved POs: which items are shipping, how much, via which
 * carrier/tracking number, and when it's expected to arrive. Fully separate
 * from the existing GRN feature (that still confirms actual physical
 * receipt later) - this is just the "shipment is on its way" notice.
 */
@Component({
  selector: 'app-asn-create',
  templateUrl: './asn-create.component.html',
  styleUrls: ['./asn-create.component.css'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, CardComponent, CardBodyComponent,
    RowComponent, ColComponent, ContainerComponent, ButtonDirective, AlertComponent
  ]
})
export class AsnCreateComponent implements OnInit {

  supplierId = 0;
  supplierName = '';
  userId = 0;

  eligiblePOs: any[] = [];
  isLoadingPOs = true;
  loadError = '';

  selectedPO: any = null;
  lines: ShipLine[] = [];

  shipmentDate = '';
  expectedDeliveryDate = '';
  transportMode = '';
  carrierName = '';
  trackingNumber = '';
  vehicleNumber = '';
  remarks = '';
  isSubmitting = false;

  // Which fields make sense for each transport mode — Vehicle Number only
  // applies to road transport; a courier shipment has no lorry/vehicle number.
  transportModes = [
    { value: 'COURIER', label: 'Courier' },
    { value: 'ROAD', label: 'By Road (Lorry/Truck)' },
    { value: 'RAIL', label: 'Rail' },
    { value: 'AIR', label: 'Air' },
    { value: 'SHIP', label: 'Ship' },
    { value: 'OTHER', label: 'Other' }
  ];

  get showVehicleNumber(): boolean {
    return this.transportMode === 'ROAD';
  }

  get trackingNumberLabel(): string {
    switch (this.transportMode) {
      case 'ROAD': return 'LR Number';
      case 'AIR': return 'AWB Number';
      case 'SHIP': return 'Bill of Lading Number';
      case 'RAIL': return 'RR Number';
      default: return 'Tracking Number';
    }
  }

  get carrierNameLabel(): string {
    return this.transportMode === 'ROAD' ? 'Transporter Name' : 'Carrier Name';
  }

  onTransportModeChange(): void {
    if (!this.showVehicleNumber) {
      this.vehicleNumber = '';
    }
  }

  constructor(
    private router: Router,
    private dataService: DataService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.supplierId = Number(localStorage.getItem('supplierId')) || 0;
    this.supplierName = localStorage.getItem('supplierName') || '';
    this.userId = Number(localStorage.getItem('userId')) || this.supplierId;

    if (!this.supplierId) {
      this.loadError = 'Could not determine your supplier account. Please re-login.';
      this.isLoadingPOs = false;
      return;
    }
    this.loadEligiblePOs();
  }

  private loadEligiblePOs(): void {
    this.isLoadingPOs = true;
    this.dataService.getASNEligiblePOs(this.supplierId).subscribe({
      next: (response: any) => {
        this.eligiblePOs = (response?.data || response || []);
        this.isLoadingPOs = false;
      },
      error: () => {
        this.loadError = 'Failed to load your purchase orders';
        this.isLoadingPOs = false;
      }
    });
  }

  onPOChange(): void {
    if (!this.selectedPO) {
      this.lines = [];
      return;
    }
    const items = this.selectedPO.lineItems || [];
    this.lines = items.map((item: any) => ({
      poLineItemId: item.id,
      itemCode: item.itemCode,
      itemDescription: item.itemDescription,
      orderedQuantity: item.quantity,
      shippedQuantity: item.quantity,
      uom: item.uom
    }));
  }

  submit(): void {
    if (!this.selectedPO) {
      this.messageService.showMessage('error', 'Error', 'Please select a purchase order');
      return;
    }
    if (!this.shipmentDate) {
      this.messageService.showMessage('error', 'Error', 'Please enter a shipment date');
      return;
    }
    if (this.lines.length === 0 || this.lines.every(l => !l.shippedQuantity || l.shippedQuantity <= 0)) {
      this.messageService.showMessage('error', 'Error', 'Please enter a shipped quantity for at least one item');
      return;
    }

    this.isSubmitting = true;
    const payload = {
      poId: this.selectedPO.id,
      supplierId: this.supplierId,
      shipmentDate: this.shipmentDate,
      expectedDeliveryDate: this.expectedDeliveryDate || null,
      transportMode: this.transportMode,
      carrierName: this.carrierName,
      trackingNumber: this.trackingNumber,
      vehicleNumber: this.showVehicleNumber ? this.vehicleNumber : '',
      remarks: this.remarks,
      createdByUserId: this.userId,
      createdByName: this.supplierName,
      lineItems: this.lines
        .filter(l => l.shippedQuantity && l.shippedQuantity > 0)
        .map(l => ({
          poLineItemId: l.poLineItemId,
          itemCode: l.itemCode,
          itemDescription: l.itemDescription,
          orderedQuantity: l.orderedQuantity,
          shippedQuantity: l.shippedQuantity,
          uom: l.uom
        }))
    };

    this.dataService.createASN(payload).subscribe({
      next: (response: any) => {
        this.isSubmitting = false;
        if (response?.success) {
          this.messageService.showMessage('success', 'Success', 'ASN created — the buyer can now track this shipment');
          this.router.navigate(['/asn-list']);
        } else {
          this.messageService.showMessage('error', 'Error', response?.message || 'Failed to create ASN');
        }
      },
      error: (err: any) => {
        this.isSubmitting = false;
        this.messageService.showMessage('error', 'Error', err.error?.message || 'Failed to create ASN');
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  CardComponent, CardBodyComponent, RowComponent, ColComponent,
  ContainerComponent, ButtonDirective, BadgeComponent
} from '@coreui/angular';
import { DataService } from '../../../shared/service/DataService';
import { MessageService } from '../../../shared/service/message.service';

/** Supplier's list of RFIs they've been invited to respond to. */
@Component({
  selector: 'app-rfi-inbox',
  templateUrl: './rfi-inbox.component.html',
  styleUrls: ['./rfi-inbox.component.css'],
  standalone: true,
  imports: [
    CommonModule, CardComponent, CardBodyComponent, RowComponent, ColComponent,
    ContainerComponent, ButtonDirective, BadgeComponent
  ]
})
export class RfiInboxComponent implements OnInit {

  supplierId: number = 0;
  rows: any[] = [];
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private dataService: DataService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.supplierId = Number(localStorage.getItem('supplierId')) || 0;
    this.loadRfis();
  }

  loadRfis(): void {
    this.isLoading = true;
    this.dataService.getSupplierRfis(this.supplierId).subscribe({
      next: (response: any) => {
        this.rows = (response?.success && response.data) ? response.data : [];
        this.isLoading = false;
      },
      error: () => {
        this.messageService.showMessage('error', 'Error', 'Failed to load RFIs');
        this.isLoading = false;
      }
    });
  }

  respond(rfiId: number): void {
    this.router.navigate(['/rfi-response', rfiId]);
  }
}

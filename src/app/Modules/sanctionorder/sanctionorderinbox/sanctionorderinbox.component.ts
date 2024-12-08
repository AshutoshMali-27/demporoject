import { Component, Injector } from '@angular/core';
import { basePlacements } from '@popperjs/core';
import { BaseComponent } from '../../../shared/Ui-Component/BaseComponent';
import { SanctionorderService } from '../../../shared/Services/sanctionorder.service';
import { sanctionorderdetailinbox } from '../../../shared/Models/sanctiondetailsinbox';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-sanctionorderinbox',
  // standalone: true,
  // imports: [],
  templateUrl: './sanctionorderinbox.component.html',
  styleUrl: './sanctionorderinbox.component.css'
})
export class SanctionorderinboxComponent extends BaseComponent {
  tableActions: any[] = [];

  constructor(injector: Injector, private service: SanctionorderService) {
    super(injector);
    
  }

  sanctionorderinbox: sanctionorderdetailinbox[] = [];


  ngOnInit(): void {
debugger;
    this.loadSanctionorderinbox();
    this.tableActions = [
      {
        label: 'View Slip',
        handler: (row: sanctionorderdetailinbox) => this.viewItem(row.id, row.approvalMasterID, row.masterID),
      },
    ];

  }
  loadSanctionorderinbox() {
    this.service.getSanctionDetailsinbox().subscribe({
      next: (data) => {
        console.log(data);
        this.sanctionorderinbox = data;
        console.log(this.sanctionorderinbox);
      },
      error: (err) => {
        console.error('Error fetching dropdown items', err);
      },
    });
  }



  viewItem(id: number, approvalMasterID: number, masterID: number): void {
    console.log(`View item details for ID: ${id}, Approval Master ID: ${approvalMasterID}, Master ID: ${masterID}`);

  }




}

import { Component, Injector } from '@angular/core';
import { BaseComponent } from '../../../shared/Ui-Component/BaseComponent';
import { SanctionorderService } from '../../../shared/Services/sanctionorder.service';
import { sanctionorderdetailinbox } from '../../../shared/Models/sanctiondetailsinbox';

@Component({
  selector: 'app-sanctionorderinboxnew',
  templateUrl: './sanctionorderinboxnew.component.html',
  styleUrls: ['./sanctionorderinboxnew.component.css'],
})
export class SanctionorderinboxnewComponent extends BaseComponent {

  rowsPerPage = 5; // Default to 5 rows per page
  rowsPerPageOptions = [5, 10, 20, 50];
  currentPage = 1;
  searchTerm = ''; // Search term for the global search
  sanctionorderinbox: sanctionorderdetailinbox[] = []; // Initialize as an empty array

  constructor(injector: Injector, private service: SanctionorderService) {
    super(injector);
  }

  ngOnInit(): void {
    this.loadSanctionorderinbox();
  }

  loadSanctionorderinbox() {
    this.service.getSanctionDetailsinbox().subscribe({
      next: (data) => {
        this.sanctionorderinbox = data;
        this.updatePagination();  // Ensure pagination is updated after loading data
      },
      error: (err) => {
        console.error('Error fetching data', err);
      },
    });
  }

  get filteredData() {
    // If searchTerm is empty, return the full data; else filter the data
    if (!this.searchTerm) {
      return this.sanctionorderinbox;
    }
    return this.sanctionorderinbox.filter(item => 
      item.financialYear.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.schemename.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.componentName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.sanctionnumber.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  get paginatedData() {
    // Calculate the start index based on currentPage and rowsPerPage
    const startIndex = (this.currentPage - 1) * this.rowsPerPage;
    return this.filteredData.slice(startIndex, startIndex + this.rowsPerPage);
  }

  viewItem(id: number, approvalMasterID: number, masterID: number) {
    console.log('View item with ID:', id);
    console.log('Approval Master ID:', approvalMasterID);
    console.log('Master ID:', masterID);
    this.router.navigate(['/sanction-order/sanction-order-slip', id, approvalMasterID, masterID]);
  }

  updatePagination() {
    // Reset currentPage to 1 if search is cleared
    if (!this.searchTerm) {
      this.currentPage = 1;
    } else {
      this.currentPage = Math.min(this.currentPage, this.totalPages);
    }
  }

  changePage(page: number) {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  get totalAmount() {
    return this.filteredData.reduce((sum, item) => sum + item.amount, 0);
  }

  get pageTotal() {
    return this.paginatedData.reduce((sum, item) => sum + item.amount, 0);
  }

  get totalPages() {
    return Math.ceil(this.filteredData.length / this.rowsPerPage);
  }

  get pages() {
    const totalPages = this.totalPages;
    const pagesArray = [];
    for (let i = 1; i <= totalPages; i++) {
      pagesArray.push(i);
    }
    return pagesArray;
  }
}

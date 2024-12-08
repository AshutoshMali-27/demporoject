import { CurrencyPipe, KeyValuePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, Signal, signal, computed, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports:[NgIf,NgClass,CurrencyPipe,NgFor,KeyValuePipe],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() headers: string[] = [];
  @Input() rowsPerPageOptions: number[] = [5, 10, 20, 50]; // Default values
  @Input() actions: any[] = [];

  rowsPerPage = signal(5); // Default rows per page
  currentPage = signal(1);
  searchTerm = signal('');

  ngOnInit() {

    if (!this.rowsPerPageOptions.includes(this.rowsPerPage())) {
      this.rowsPerPage.set(this.rowsPerPageOptions[0]);
    }

  }

  
 
  paginatedData = computed(() => {
    const startIndex = (this.currentPage() - 1) * this.rowsPerPage();
    const paginated = this.data.slice(startIndex, startIndex + this.rowsPerPage());
    console.log('Paginated Data:', paginated);
    return paginated;
  });
  
  totalAmount = computed(() => this.data.reduce((sum, row) => sum + (row.amount || 0), 0));
  
  pageTotal = computed(() => this.paginatedData().reduce((sum, row) => sum + (row.amount || 0), 0));
  
  totalPages = computed(() => Math.ceil(this.data.length / this.rowsPerPage()));

  pages = computed(() => Array.from({ length: this.totalPages() }, (_, i) => i + 1));

  // Handlers
  updateRowsPerPage(event: any) {
    this.rowsPerPage.set(+event.target.value);
    this.currentPage.set(1);
  }

  updateSearchTerm(event: any) {
    this.searchTerm.set(event.target.value);
    this.currentPage.set(1);
  }

  changePage(page: number) {
    if (page > 0 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }

  getObjectEntries(row: any): { key: string; value: any }[] {
    console.log('Row:', row);  // Add this to check the row being passed
    return Object.entries(row).map(([key, value]) => ({ key, value }));
  }
}
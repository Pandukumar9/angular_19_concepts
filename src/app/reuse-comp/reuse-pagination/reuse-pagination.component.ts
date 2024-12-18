import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-reuse-pagination',
  imports: [NgIf, NgFor],
  templateUrl: './reuse-pagination.component.html',
  styleUrl: './reuse-pagination.component.scss'
})
export class ReusePaginationComponent {
  @Input() totalItems: number = 0;         // Total number of items
  @Input() itemsPerPage: number = 10;      // Items per page
  @Input() currentPage: number = 1;        // Current page
  @Output() pageChange = new EventEmitter<number>(); // Emits page changes

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageChange.emit(this.currentPage);
    }
  }

  get pages(): number[] {
    const totalPages = this.totalPages;
    const currentPage = this.currentPage;

    // Show all pages if totalPages <= 7
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Logic to include ellipsis
    const pages: number[] = [];

    // Always include the first page
    pages.push(1);

    // Add ellipsis if currentPage > 4
    if (currentPage > 4) {
      pages.push(0); // 0 represents ellipsis
    }

    // Add pages around the current page
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Add ellipsis if currentPage < totalPages - 3
    if (currentPage < totalPages - 3) {
      pages.push(0); // 0 represents ellipsis
    }

    // Always include the last page
    pages.push(totalPages);

    return pages;
  }

}

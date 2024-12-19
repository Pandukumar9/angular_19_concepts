import { Component } from '@angular/core';
import { ReactFormComponent } from './forms/react-form/react-form.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { CommonModule, IMAGE_CONFIG, NgFor } from '@angular/common';
import { ReuseSkeletonComponent } from './reuse-comp/reuse-skeleton/reuse-skeleton.component';
import { ReusePaginationComponent } from './reuse-comp/reuse-pagination/reuse-pagination.component';
import { ReuseLoaderComponent } from './reuse-comp/reuse-loader/reuse-loader.component';
import { ReuseTableComponent } from './reuse-comp/reuse-table/reuse-table.component';
import { ReuseCardComponent } from './reuse-comp/reuse-card/reuse-card.component';
import { ReuseDeleteComponent } from "./reuse-comp/reuse-delete/reuse-delete.component";

@Component({
  selector: 'app-root',
  imports: [ReactFormComponent, TemplateFormComponent, ReuseSkeletonComponent, ReusePaginationComponent, NgFor, ReuseLoaderComponent, ReuseTableComponent, ReuseCardComponent, ReuseDeleteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // providers: [
  //   {
  //     provide: IMAGE_CONFIG,
  //     useValue: {
  //       placeholderResolution: 40
  //     }
  //   },
  // ],
})
export class AppComponent {
  title = 'angular_19_concepts';

  isLoading:boolean = false;

  data = ['test' , 'test1' , 'test3'];

  items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`); // Example data
  itemsPerPage = 5;
  currentPage = 1;

  get paginatedItems(): string[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.items.slice(start, start + this.itemsPerPage);
  }

  onPageChange(newPage: number) {
    this.currentPage = newPage;
  }

  isLoadingspinner: boolean = false;

  toggleLoading() {
    this.isLoadingspinner = !this.isLoadingspinner;
    setTimeout(() => {
      this.isLoadingspinner = !this.isLoadingspinner;
    }, 4000);
  }

  productData = [
    { id: 101, name: 'Apple', price: 1.5 },
    { id: 102, name: 'Banana', price: 0.8 },
    { id: 103, name: 'Cherry', price: 2.0 },
  ];

  productColumns = [
    { key: 'id', header: 'Product ID' },
    { key: 'name', header: 'Product Name' },
    { key: 'price', header: 'Price ($)' },
  ];

  productActions = [
    { key: 'edit', label: 'Edit' },
    { key: 'delete', label: 'Delete' },
  ];

  paginationConfig = {
    total: 50,
    pageSize: 10,
    pageSizeOptions: [5, 10, 20],
  };

  handleActionClick(event: { action: string; row: any }) {
    console.log('Action:', event.action, 'Row:', event.row);
  }

  handlePageChange(event: any) {
    console.log('Page Change:', event);
  }

  handleConfirm(): void {
    console.log('Confirmed!');
    // Add your logic for the confirm action here (e.g., delete an item)
  }

  handleCancel(): void {
    console.log('Cancelled!');
    // Add your logic for the cancel action here (e.g., close the dialog)
  }
}

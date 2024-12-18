import { Component } from '@angular/core';
import { ReactFormComponent } from './forms/react-form/react-form.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { IMAGE_CONFIG, NgFor } from '@angular/common';
import { ReuseSkeletonComponent } from './reuse-comp/reuse-skeleton/reuse-skeleton.component';
import { ReusePaginationComponent } from './reuse-comp/reuse-pagination/reuse-pagination.component';

@Component({
  selector: 'app-root',
  imports: [ReactFormComponent,TemplateFormComponent,ReuseSkeletonComponent,ReusePaginationComponent,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: {
        placeholderResolution: 40
      }
    },
  ],
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
}

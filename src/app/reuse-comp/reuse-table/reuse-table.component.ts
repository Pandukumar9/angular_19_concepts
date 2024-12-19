import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgFor, NgIf } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-reuse-table',
  imports: [MatPaginatorModule,NgIf,NgFor,MatTableModule],
  templateUrl: './reuse-table.component.html',
  styleUrl: './reuse-table.component.scss'
})
export class ReuseTableComponent implements OnChanges  {
  @Input() data: any[] = []; // Data to display in the table
  @Input() columns: { key: string; header: string }[] = []; // Column definitions
  @Input() actions?: { key: string; label: string }[]; // Action buttons (optional)
  @Input() pagination?: {
    total: number;
    pageSize: number;
    pageSizeOptions: number[];
  }; // Pagination settings (optional)

  @Output() actionClick = new EventEmitter<{ action: string; row: any }>(); // Action click event
  @Output() pageChange = new EventEmitter<any>(); // Pagination change event

  dataSource = new MatTableDataSource<any>(); // Data source for the table
  displayedColumns: string[] = []; // Columns to display in the table

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] || changes['columns']) {
      this.dataSource.data = this.data;
      this.displayedColumns = this.columns.map((col) => col.key);
      if (this.actions?.length) {
        this.displayedColumns.push('actions');
      }
    }
  }

  onActionClick(action: string, row: any): void {
    this.actionClick.emit({ action, row });
  }

  onPageChange(event: any): void {
    this.pageChange.emit(event);
  }
}

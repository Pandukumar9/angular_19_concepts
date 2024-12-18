import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reuse-skeleton',
  imports: [NgFor,NgStyle,NgClass,NgIf],
  templateUrl: './reuse-skeleton.component.html',
  styleUrl: './reuse-skeleton.component.scss'
})
export class ReuseSkeletonComponent {

  @Input() itemCount: number = 5; // Default number of skeleton items
  @Input() width: string = '100%'; // Width in percentage or pixels
  @Input() height: string = '20px'; // Height in percentage or pixels
  @Input() type: 'circle' | 'square' | 'rectangle' = 'rectangle'; // Shape type
  @Input() color: string = '#e0e0e0'; // Skeleton base color
  @Input() shimmerColor: string = '#f0f0f0'; // Shimmer effect color
  @Input() customClass: string = ''; // Custom class for styling
  @Input() imageUrl: string = ''; // Image URL for the circular loader

  get items(): number[] {
    return Array(this.itemCount).fill(0);
  }
}

import { NgIf } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-reuse-loader',
  imports: [NgIf],
  templateUrl: './reuse-loader.component.html',
  styleUrl: './reuse-loader.component.scss'
})
export class ReuseLoaderComponent implements OnChanges{
  @Input() show: boolean = false; // Control the visibility of the spinner
  @Input() message: string = ''; // Optional loading message
  @Input() imageUrl: string = ''; // Optional image URL
  @Input() spinnerSize: number = 50; // Spinner size in pixels

  constructor(private document:Document){}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['show']) {
      if (this.show) {
        this.document.body.classList.add('no-scroll'); // Disable background scrolling
      } else {
        this.document.body.classList.remove('no-scroll'); // Re-enable scrolling
      }
    }
  }
}

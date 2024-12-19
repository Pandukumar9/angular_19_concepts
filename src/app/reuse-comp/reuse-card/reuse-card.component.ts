import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reuse-card',
  imports: [NgIf],
  templateUrl: './reuse-card.component.html',
  styleUrl: './reuse-card.component.scss'
})
export class ReuseCardComponent {
  @Input() title: string = ''; // Title of the card
  @Input() content: string = ''; // Content/body of the card
  @Input() footer: string = ''; // Footer content
  @Input() imageUrl: string = ''; // Image URL
}

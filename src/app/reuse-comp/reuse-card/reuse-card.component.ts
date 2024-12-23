import { CommonModule, NgIf } from '@angular/common';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-reuse-card',
  imports: [NgIf,CommonModule],
  templateUrl: './reuse-card.component.html',
  styleUrl: './reuse-card.component.scss'
})
export class ReuseCardComponent {
  @Input() title: string = ''; // Title of the card
  @Input() content: string = ''; // Content/body of the card
  @Input() footer: string = ''; // Footer content
  @Input() imageUrl: string = ''; // Image URL

  // Detect projected footer content
  @ContentChild('footer', { static: false }) footerContent!: TemplateRef<any>;

  hasFooterContent(): boolean {
    return !!this.footerContent;
  }
}

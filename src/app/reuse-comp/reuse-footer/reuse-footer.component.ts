import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reuse-footer',
  imports: [NgIf,NgFor,NgStyle],
  templateUrl: './reuse-footer.component.html',
  styleUrl: './reuse-footer.component.scss'
})
export class ReuseFooterComponent {
  @Input() footerText: string = '© 2024 My Company'; // Footer text
  @Input() links: { label: string; url: string }[] = []; // Footer links
  @Input() customClass: string = ''; // For applying custom CSS classes
  @Input() customStyles: { [key: string]: string } = {}; // For inline styles

}

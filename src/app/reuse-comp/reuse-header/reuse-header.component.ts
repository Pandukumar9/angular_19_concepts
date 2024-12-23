import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reuse-header',
  imports: [NgIf,NgFor,NgStyle],
  templateUrl: './reuse-header.component.html',
  styleUrl: './reuse-header.component.scss'
})
export class ReuseHeaderComponent {
  @Input() title: string = ''; // Title displayed in the header
  @Input() logoUrl: string = ''; // Optional logo URL
  @Input() navLinks: { label: string; url: string }[] = []; // Navigation links
  @Input() customClass: string = ''; // For applying custom CSS classes
  @Input() customStyles: { [key: string]: string } = {}; // For inline styles

}

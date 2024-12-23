import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-qr-scanner',
  imports: [ZXingScannerModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './qr-scanner.component.html',
  styleUrl: './qr-scanner.component.scss'
})
export class QrScannerComponent {
  onScanSuccess(tableId: string): void {
    console.log('Scanned Table ID:', tableId);
    // Navigate to menu-display with tableId as a parameter
  }
}

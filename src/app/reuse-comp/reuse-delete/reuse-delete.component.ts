import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-reuse-delete',
  imports: [],
  templateUrl: './reuse-delete.component.html',
  styleUrl: './reuse-delete.component.scss'
})
export class ReuseDeleteComponent {
  @Input() title: string = 'Confirmation'; // Title of the card
  @Input() message: string = 'Are you sure?'; // Confirmation message
  @Input() confirmText: string = 'Confirm'; // Text for the confirm button
  @Input() cancelText: string = 'Cancel'; // Text for the cancel button

  @Output() onConfirm = new EventEmitter<void>(); // Event for confirming
  @Output() onCancel = new EventEmitter<void>(); // Event for canceling

  confirm(): void {
    this.onConfirm.emit();
  }

  cancel(): void {
    this.onCancel.emit();
  }
}

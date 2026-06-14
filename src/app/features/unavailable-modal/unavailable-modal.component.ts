import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UnavailableMessage } from '../../core/models/portfolio.models';
import { SafeHtmlPipe } from '../../shared/pipes/safe-html.pipe';

@Component({
  selector: 'app-unavailable-modal',
  imports: [CommonModule, SafeHtmlPipe],
  templateUrl: './unavailable-modal.component.html',
  styleUrl: './unavailable-modal.component.css',
})
export class UnavailableModalComponent {
  @Input() message: UnavailableMessage | null = null;

  @Output() close = new EventEmitter<void>();

  onOverlayClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.close.emit();
    }
  }
}

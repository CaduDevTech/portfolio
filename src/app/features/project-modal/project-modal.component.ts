import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  LucideAngularModule,
  X,
} from 'lucide-angular';
import { Project, UnavailableMessage } from '../../core/models/portfolio.models';
import { SafeHtmlPipe } from '../../shared/pipes/safe-html.pipe';

@Component({
  selector: 'app-project-modal',
  imports: [CommonModule, LucideAngularModule, SafeHtmlPipe],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css',
})
export class ProjectModalComponent implements OnChanges {
  @Input() project: Project | null = null;

  @Output() close = new EventEmitter<void>();
  @Output() openUnavailable = new EventEmitter<UnavailableMessage>();

  currentMediaIndex = 0;

  readonly closeIcon = X;
  readonly previousIcon = ChevronLeft;
  readonly nextIcon = ChevronRight;
  readonly externalLinkIcon = ExternalLink;
  readonly githubIcon = Github;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['project']) {
      this.currentMediaIndex = 0;
    }
  }

  get currentMedia(): string {
    if (!this.project || this.project.media.length === 0) {
      return '';
    }

    return this.project.media[this.currentMediaIndex] ?? '';
  }

  isVideo(media: string): boolean {
    return media.endsWith('.mp4');
  }

  previousMedia(): void {
    if (!this.project || this.project.media.length <= 1) {
      return;
    }

    this.currentMediaIndex =
      (this.currentMediaIndex - 1 + this.project.media.length) % this.project.media.length;
  }

  nextMedia(): void {
    if (!this.project || this.project.media.length <= 1) {
      return;
    }

    this.currentMediaIndex = (this.currentMediaIndex + 1) % this.project.media.length;
  }

  onOverlayClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.close.emit();
    }
  }

  emitUnavailable(): void {
    if (!this.project) {
      return;
    }

    this.openUnavailable.emit(this.project.unavailable);
  }
}

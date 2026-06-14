import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  ArrowRight,
  Calendar,
  LucideAngularModule,
} from 'lucide-angular';
import { BlogPost } from '../../core/models/portfolio.models';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-blog',
  imports: [CommonModule, LucideAngularModule, RevealOnScrollDirective],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  @Input({ required: true }) posts: BlogPost[] = [];

  readonly calendarIcon = Calendar;
  readonly arrowRightIcon = ArrowRight;

  formatDate(dateString: string): string {
    const resolvedDate = /^\d{4}-\d{2}$/.test(dateString)
      ? `${dateString}-01`
      : dateString;

    const date = new Date(resolvedDate);

    if (Number.isNaN(date.getTime())) {
      return dateString;
    }

    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
    });
  }
}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TechnologyGroup } from '../../core/models/portfolio.models';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-technologies',
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css',
})
export class TechnologiesComponent {
  @Input({ required: true }) technologies: TechnologyGroup[] = [];
  @Input({ required: true }) additionalSkills: string[] = [];

  getLevelColor(level: string): string {
    switch (level) {
      case 'Expert':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
      case 'Avançado':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Intermediário':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Básico':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      default:
        return 'bg-muted text-foreground';
    }
  }
}

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  ExternalLink,
  Eye,
  Github,
  LucideAngularModule,
} from 'lucide-angular';
import {
  Project,
  ProjectCategory,
  UnavailableMessage,
} from '../../core/models/portfolio.models';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, LucideAngularModule, RevealOnScrollDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  @Input({ required: true }) projects: Project[] = [];
  @Input({ required: true }) filters: ProjectCategory[] = [];
  @Input() activeFilter: ProjectCategory = 'all';

  @Output() filterChange = new EventEmitter<ProjectCategory>();
  @Output() openProject = new EventEmitter<Project>();
  @Output() openUnavailable = new EventEmitter<UnavailableMessage>();

  readonly eyeIcon = Eye;
  readonly externalLinkIcon = ExternalLink;
  readonly githubIcon = Github;

  trackByProjectId(_: number, project: Project): number {
    return project.id;
  }

  getPreviewMedia(project: Project): string {
    return project.media[0] ?? '';
  }

  isVideo(media: string): boolean {
    return media.endsWith('.mp4');
  }

  emitUnavailable(project: Project): void {
    this.openUnavailable.emit(project.unavailable);
  }

  onFilterChange(filter: ProjectCategory): void {
    this.filterChange.emit(filter);
  }
}

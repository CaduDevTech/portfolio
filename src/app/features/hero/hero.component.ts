import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  ArrowDown,
  Github,
  Linkedin,
  LucideAngularModule,
} from 'lucide-angular';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  @Input() heroTitle = 'Full Stack Developer';

  @Output() navigateToProjects = new EventEmitter<void>();

  readonly arrowDownIcon = ArrowDown;
  readonly githubIcon = Github;
  readonly linkedinIcon = Linkedin;
}

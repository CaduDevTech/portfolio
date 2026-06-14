import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  Github,
  Linkedin,
  LucideAngularModule,
  Mail,
} from 'lucide-angular';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  @Output() navigate = new EventEmitter<string>();

  readonly githubIcon = Github;
  readonly linkedinIcon = Linkedin;
  readonly mailIcon = Mail;

  onNavigate(sectionId: string): void {
    this.navigate.emit(sectionId);
  }
}

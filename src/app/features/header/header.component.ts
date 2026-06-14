import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import {
  LucideAngularModule,
  Menu,
  Moon,
  Sun,
  X,
} from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() isDark = true;
  @Input() isMobileMenuOpen = false;
  @Input() isScrolled = false;

  @Output() navigate = new EventEmitter<string>();
  @Output() toggleTheme = new EventEmitter<void>();
  @Output() toggleMobileMenu = new EventEmitter<void>();

  readonly menuIcon = Menu;
  readonly closeIcon = X;
  readonly sunIcon = Sun;
  readonly moonIcon = Moon;

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth >= 768 && this.isMobileMenuOpen) {
      this.toggleMobileMenu.emit();
    }
  }

  onNavigate(sectionId: string): void {
    this.navigate.emit(sectionId);
  }
}

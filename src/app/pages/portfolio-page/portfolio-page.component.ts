import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  computed,
  signal,
} from '@angular/core';
import { BLOG_POSTS_DATA } from '../../core/data/blog-posts.data';
import { PROJECT_FILTERS, PROJECTS_DATA } from '../../core/data/projects.data';
import {
  ADDITIONAL_SKILLS,
  TECHNOLOGIES_DATA,
} from '../../core/data/technologies.data';
import {
  Project,
  ProjectCategory,
  UnavailableMessage,
} from '../../core/models/portfolio.models';
import { FinisherBackgroundService } from '../../core/services/finisher-background.service';
import { ThemeService } from '../../core/services/theme.service';
import { BlogComponent } from '../../features/blog/blog.component';
import { FooterComponent } from '../../features/footer/footer.component';
import { HeaderComponent } from '../../features/header/header.component';
import { HeroComponent } from '../../features/hero/hero.component';
import { ProjectModalComponent } from '../../features/project-modal/project-modal.component';
import { ProjectsComponent } from '../../features/projects/projects.component';
import { TechnologiesComponent } from '../../features/technologies/technologies.component';
import { UnavailableModalComponent } from '../../features/unavailable-modal/unavailable-modal.component';

@Component({
  selector: 'app-portfolio-page',
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    ProjectsComponent,
    TechnologiesComponent,
    BlogComponent,
    FooterComponent,
    ProjectModalComponent,
    UnavailableModalComponent,
  ],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.css',
})
export class PortfolioPageComponent implements OnInit, AfterViewInit, OnDestroy {
  readonly projects = PROJECTS_DATA;
  readonly filters = PROJECT_FILTERS;
  readonly technologies = TECHNOLOGIES_DATA;
  readonly additionalSkills = ADDITIONAL_SKILLS;
  readonly blogPosts = BLOG_POSTS_DATA;

  readonly activeFilter = signal<ProjectCategory>('all');
  readonly selectedProject = signal<Project | null>(null);
  readonly unavailableMessage = signal<UnavailableMessage | null>(null);
  readonly isMobileMenuOpen = signal(false);
  readonly isHeaderScrolled = signal(false);
  readonly heroTitle = signal('');

  readonly filteredProjects = computed(() => {
    const currentFilter = this.activeFilter();

    if (currentFilter === 'all') {
      return this.projects;
    }

    return this.projects.filter((project) => project.category === currentFilter);
  });

  private readonly heroTitles = ['Full Stack Developer', 'Carlos Santos'];
  private readonly typingDelayMs = 90;
  private readonly deletingDelayMs = 45;
  private readonly titlePauseMs = 1200;
  private heroTitleTimeoutId?: ReturnType<typeof setTimeout>;
  private heroTitleIndex = 0;

  constructor(
    private readonly themeService: ThemeService,
    private readonly finisherBackgroundService: FinisherBackgroundService,
  ) {}

  isDark(): boolean {
    return this.themeService.isDark();
  }

  ngOnInit(): void {
    this.themeService.initTheme();
    this.typeHeroTitle();
  }

  ngAfterViewInit(): void {
    this.finisherBackgroundService.init(this.isDark());
  }

  ngOnDestroy(): void {
    if (this.heroTitleTimeoutId) {
      clearTimeout(this.heroTitleTimeoutId);
    }

    this.lockBodyScroll(false);
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isHeaderScrolled.set(window.scrollY > 50);
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.finisherBackgroundService.applyTheme(this.isDark());
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((value) => !value);
  }

  navigateToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);

    if (!element) {
      return;
    }

    const headerElement = document.getElementById('header');
    const headerHeight = headerElement?.offsetHeight ?? 0;
    const top = element.getBoundingClientRect().top + window.scrollY - headerHeight - 16;

    window.scrollTo({
      top: Math.max(top, 0),
      behavior: 'smooth',
    });

    if (this.isMobileMenuOpen()) {
      this.isMobileMenuOpen.set(false);
    }
  }

  onFilterChange(filter: ProjectCategory): void {
    this.activeFilter.set(filter);
  }

  openProjectModal(project: Project): void {
    this.selectedProject.set(project);
    this.lockBodyScroll(true);
  }

  closeProjectModal(): void {
    this.selectedProject.set(null);
    this.syncBodyScroll();
  }

  openUnavailableModal(message: UnavailableMessage): void {
    this.unavailableMessage.set(message);
    this.lockBodyScroll(true);
  }

  closeUnavailableModal(): void {
    this.unavailableMessage.set(null);
    this.syncBodyScroll();
  }

  private syncBodyScroll(): void {
    const modalIsOpen = !!this.selectedProject() || !!this.unavailableMessage();
    this.lockBodyScroll(modalIsOpen);
  }

  private lockBodyScroll(lock: boolean): void {
    document.body.style.overflow = lock ? 'hidden' : 'auto';
  }

  private typeHeroTitle(): void {
    const fullTitle = this.heroTitles[this.heroTitleIndex];
    const currentTitle = this.heroTitle();

    if (currentTitle.length < fullTitle.length) {
      this.heroTitle.set(fullTitle.slice(0, currentTitle.length + 1));
      this.scheduleHeroTitleStep(() => this.typeHeroTitle(), this.typingDelayMs);
      return;
    }

    this.scheduleHeroTitleStep(() => this.deleteHeroTitle(), this.titlePauseMs);
  }

  private deleteHeroTitle(): void {
    const currentTitle = this.heroTitle();

    if (currentTitle.length > 0) {
      this.heroTitle.set(currentTitle.slice(0, -1));
      this.scheduleHeroTitleStep(() => this.deleteHeroTitle(), this.deletingDelayMs);
      return;
    }

    this.heroTitleIndex = (this.heroTitleIndex + 1) % this.heroTitles.length;
    this.scheduleHeroTitleStep(() => this.typeHeroTitle(), this.typingDelayMs);
  }

  private scheduleHeroTitleStep(callback: () => void, delayMs: number): void {
    this.heroTitleTimeoutId = setTimeout(callback, delayMs);
  }
}

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
  readonly heroTitle = signal('Full Stack Developer');

  readonly filteredProjects = computed(() => {
    const currentFilter = this.activeFilter();

    if (currentFilter === 'all') {
      return this.projects;
    }

    return this.projects.filter((project) => project.category === currentFilter);
  });

  private heroIntervalId?: ReturnType<typeof setInterval>;

  constructor(
    private readonly themeService: ThemeService,
    private readonly finisherBackgroundService: FinisherBackgroundService,
  ) {}

  isDark(): boolean {
    return this.themeService.isDark();
  }

  ngOnInit(): void {
    this.themeService.initTheme();
    this.startHeroTitleRotation();
  }

  ngAfterViewInit(): void {
    this.finisherBackgroundService.init(this.isDark());
  }

  ngOnDestroy(): void {
    if (this.heroIntervalId) {
      clearInterval(this.heroIntervalId);
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

    element?.scrollIntoView({ behavior: 'smooth' });

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

  private startHeroTitleRotation(): void {
    const titles = ['Full Stack Developer', 'Carlos Santos'];
    let index = 0;

    this.heroTitle.set(titles[index]);

    this.heroIntervalId = setInterval(() => {
      index = (index + 1) % titles.length;
      this.heroTitle.set(titles[index]);
    }, 3500);
  }

  private syncBodyScroll(): void {
    const modalIsOpen = !!this.selectedProject() || !!this.unavailableMessage();
    this.lockBodyScroll(modalIsOpen);
  }

  private lockBodyScroll(lock: boolean): void {
    document.body.style.overflow = lock ? 'hidden' : 'auto';
  }
}

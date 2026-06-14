import { computed, Injectable, signal } from '@angular/core';

export type ThemeMode = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly storageKey = 'theme';
  readonly theme = signal<ThemeMode>('dark');
  readonly isDark = computed(() => this.theme() === 'dark');

  initTheme(): void {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const storedTheme = window.localStorage.getItem(this.storageKey);
    const resolvedTheme: ThemeMode = storedTheme === 'light' ? 'light' : 'dark';
    this.theme.set(resolvedTheme);
    this.applyTheme();
  }

  toggleTheme(): void {
    this.theme.update((value) => (value === 'dark' ? 'light' : 'dark'));
    this.applyTheme();
  }

  private applyTheme(): void {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const dark = this.theme() === 'dark';
    document.documentElement.classList.toggle('dark', dark);
    window.localStorage.setItem(this.storageKey, dark ? 'dark' : 'light');
  }
}

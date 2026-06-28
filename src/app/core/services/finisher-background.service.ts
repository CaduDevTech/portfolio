import { Injectable, NgZone } from '@angular/core';

interface FinisherConfig {
  count: number;
  size: {
    min: number;
    max: number;
    pulse: number;
  };
  speed: {
    x: {
      min: number;
      max: number;
    };
    y: {
      min: number;
      max: number;
    };
  };
  colors: {
    background: string;
    particles: string[];
  };
  blending: string;
  opacity: {
    center: number;
    edge: number;
  };
  skew: number;
  shapes: string[];
  className?: string;
}

interface FinisherHeaderInstance {
  init(config: FinisherConfig): void;
}

declare global {
  interface Window {
    FinisherHeader?: new (config: FinisherConfig) => FinisherHeaderInstance;
  }
}

@Injectable({
  providedIn: 'root',
})
export class FinisherBackgroundService {
  private readonly hostClass = 'finisher-header';
  private instance?: FinisherHeaderInstance;
  private currentIsDark = true;
  private resizeObserver?: ResizeObserver;
  private initTimeoutId?: ReturnType<typeof setTimeout>;
  private resizeTimeoutId?: ReturnType<typeof setTimeout>;
  private firstFrameId?: number;
  private secondFrameId?: number;
  private scheduledLoadRefresh = false;
  private scheduledFontsRefresh = false;

  private readonly handleWindowLoad = (): void => {
    this.refreshCurrentTheme();
  };

  constructor(private readonly ngZone: NgZone) {}

  init(isDark: boolean): void {
    this.applyTheme(isDark);
  }

  applyTheme(isDark: boolean): void {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    this.currentIsDark = isDark;
    this.scheduleApplyTheme();
  }

  private scheduleApplyTheme(): void {
    this.clearScheduledInit();

    this.ngZone.runOutsideAngular(() => {
      this.initTimeoutId = window.setTimeout(() => {
        this.firstFrameId = window.requestAnimationFrame(() => {
          this.secondFrameId = window.requestAnimationFrame(() => {
            this.createOrUpdateBackground();
          });
        });
      });
    });
  }

  private createOrUpdateBackground(): void {
    const FinisherHeader = window.FinisherHeader;
    const host = document.querySelector(`.${this.hostClass}`) as HTMLElement | null;

    if (!FinisherHeader || !host) {
      return;
    }

    if (!this.hasUsableSize(host)) {
      this.scheduleApplyTheme();
      return;
    }

    const config = this.getConfig(this.currentIsDark);
    const currentCanvas = host.querySelector('#finisher-canvas');

    if (this.instance && currentCanvas) {
      this.instance.init(config);
    } else {
      host.querySelectorAll('canvas').forEach((canvas) => canvas.remove());
      this.instance = new FinisherHeader(config);
    }

    this.observeHost(host);
    this.schedulePostLoadRefreshes();
  }

  private observeHost(host: HTMLElement): void {
    if (this.resizeObserver || typeof ResizeObserver === 'undefined') {
      return;
    }

    this.resizeObserver = new ResizeObserver(() => {
      this.scheduleResizeRefresh();
    });
    this.resizeObserver.observe(host);
  }

  private scheduleResizeRefresh(): void {
    if (typeof window === 'undefined') {
      return;
    }

    window.clearTimeout(this.resizeTimeoutId);

    this.ngZone.runOutsideAngular(() => {
      this.resizeTimeoutId = window.setTimeout(() => {
        this.refreshCurrentTheme();
      }, 150);
    });
  }

  private schedulePostLoadRefreshes(): void {
    window.setTimeout(() => this.refreshCurrentTheme(), 120);
    window.setTimeout(() => this.refreshCurrentTheme(), 400);

    if (!this.scheduledLoadRefresh && document.readyState !== 'complete') {
      this.scheduledLoadRefresh = true;
      window.addEventListener('load', this.handleWindowLoad, { once: true });
    }

    if (!this.scheduledFontsRefresh && document.fonts?.ready) {
      this.scheduledFontsRefresh = true;
      document.fonts.ready.then(() => this.refreshCurrentTheme());
    }
  }

  private refreshCurrentTheme(): void {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const host = document.querySelector(`.${this.hostClass}`) as HTMLElement | null;

    if (!this.instance || !host || !host.querySelector('#finisher-canvas')) {
      this.scheduleApplyTheme();
      return;
    }

    if (!this.hasUsableSize(host)) {
      return;
    }

    this.instance.init(this.getConfig(this.currentIsDark));
  }

  private hasUsableSize(host: HTMLElement): boolean {
    return host.clientWidth > 0 && host.clientHeight > 0;
  }

  private clearScheduledInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    window.clearTimeout(this.initTimeoutId);

    if (this.firstFrameId !== undefined) {
      window.cancelAnimationFrame(this.firstFrameId);
      this.firstFrameId = undefined;
    }

    if (this.secondFrameId !== undefined) {
      window.cancelAnimationFrame(this.secondFrameId);
      this.secondFrameId = undefined;
    }
  }

  private getConfig(isDark: boolean): FinisherConfig {
    return isDark ? this.getDarkConfig() : this.getLightConfig();
  }

  private getDarkConfig(): FinisherConfig {
    return {
      className: this.hostClass,
      count: 10,
      size: {
        min: 400,
        max: 900,
        pulse: 2,
      },
      speed: {
        x: {
          min: 0,
          max: 2,
        },
        y: {
          min: 2.2,
          max: 2.2,
        },
      },
      colors: {
        background: '#020817',
        particles: ['#020817', '#3576df', '#26549e', '#020817'],
      },
      blending: 'overlay',
      opacity: {
        center: 0.5,
        edge: 0,
      },
      skew: 0,
      shapes: ['c'],
    };
  }

  private getLightConfig(): FinisherConfig {
    return {
      className: this.hostClass,
      count: 12,
      size: {
        min: 400,
        max: 700,
        pulse: 2,
      },
      speed: {
        x: {
          min: 0.6,
          max: 1.2,
        },
        y: {
          min: 0.6,
          max: 2.2,
        },
      },
      colors: {
        background: '#ffffff',
        particles: ['#3a72ed', '#ffffff', '#3a72ed'],
      },
      blending: 'overlay',
      opacity: {
        center: 0.4,
        edge: 0,
      },
      skew: 0,
      shapes: ['c'],
    };
  }
}

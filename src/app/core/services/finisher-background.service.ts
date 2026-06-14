import { Injectable } from '@angular/core';

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

declare global {
  interface Window {
    FinisherHeader?: new (config: FinisherConfig) => unknown;
  }
}

@Injectable({
  providedIn: 'root',
})
export class FinisherBackgroundService {
  private readonly hostClass = 'finisher-header';

  init(isDark: boolean): void {
    this.applyTheme(isDark);
  }

  applyTheme(isDark: boolean): void {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const FinisherHeader = window.FinisherHeader;
    const host = document.querySelector(`.${this.hostClass}`) as HTMLElement | null;

    if (!FinisherHeader || !host) {
      return;
    }

    host.querySelectorAll('canvas').forEach((canvas) => canvas.remove());

    const darkConfig: FinisherConfig = {
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

    const lightConfig: FinisherConfig = {
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
        background: '#3a72ed',
        particles: ['#ffffff', '#3a72ed'],
      },
      blending: 'overlay',
      opacity: {
        center: 0.4,
        edge: 0,
      },
      skew: 0,
      shapes: ['c'],
    };

    // eslint-disable-next-line no-new
    new FinisherHeader(isDark ? darkConfig : lightConfig);
  }
}

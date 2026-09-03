import { ChangeDetectionStrategy, Component, inject, LOCALE_ID, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  imports: [MatButtonModule, MatMenuModule, MatDivider],
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './header.css',
  host: {
    class: 'fixed md:sticky top-0 left-0 right-0 z-50 block w-full pointer-events-none md:pointer-events-auto',
  },
  templateUrl: './header.html',
})
export class Header {
  protected readonly currentLocale = inject(LOCALE_ID);

  protected isOpen = signal(false);

  setLanguage(lang: 'fr' | 'en-US') {
    localStorage.setItem('preferred_locale', lang);
    document.cookie = `preferred_locale=${lang};path=/;max-age=31536000;SameSite=Lax`;
    window.location.href = lang === 'fr' ? '/' : '/en-US/';
  }

  scrollTo(event: Event, elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      event.preventDefault();
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      history.pushState(null, '', `#${elementId}`);
    }
  }

  scrollToTop(event: Event): void {
    const isHome = window.location.pathname === '/' || window.location.pathname === '/fr/' || window.location.pathname === '/en-US/';
    if (isHome) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      history.pushState(null, '', window.location.pathname);
    }
  }
}

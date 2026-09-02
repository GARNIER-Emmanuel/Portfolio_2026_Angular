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

}

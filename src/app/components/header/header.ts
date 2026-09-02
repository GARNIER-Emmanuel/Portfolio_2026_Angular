import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  imports: [MatButtonModule, MatMenuModule],
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './header.css',
  host: {
    class: 'fixed md:sticky top-0 left-0 right-0 z-50 block w-full pointer-events-none md:pointer-events-auto',
  },
  templateUrl: './header.html',
})
export class Header { }

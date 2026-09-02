import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  imports: [MatButtonModule, MatMenuModule],
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './header.css',
  host: {
    class: 'sticky top-0 z-50 block w-full',
  },
  templateUrl: './header.html',
})
export class Header { }

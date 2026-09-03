import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-notfound',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './notfound.css',
  templateUrl: './notfound.html',
})
export class Notfound {}

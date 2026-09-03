import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cv-refonte',
  imports: [],
  templateUrl: './cv-refonte.html',
  styleUrl: './cv-refonte.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvRefonte {
  printCv(): void {
    window.print();
  }
}

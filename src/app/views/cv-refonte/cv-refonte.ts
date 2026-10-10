import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CvOptimized } from './cv-optimized/cv-optimized';

type CvLayout = 'columns' | 'candidature' | 'optimized';

@Component({
  selector: 'app-cv-refonte',
  imports: [CvOptimized],
  templateUrl: './cv-refonte.html',
  styleUrl: './cv-refonte.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvRefonte {
  protected readonly layout = signal<CvLayout>('columns');
  protected readonly isAtsLayout = computed(() => this.layout() !== 'columns');
  protected readonly isOptimizedLayout = computed(() => this.layout() === 'optimized');

  protected setLayout(layout: CvLayout): void {
    this.layout.set(layout);
  }

  printCv(): void {
    window.print();
  }
}

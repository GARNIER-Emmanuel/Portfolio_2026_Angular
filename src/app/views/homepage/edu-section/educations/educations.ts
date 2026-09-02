import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Experience } from '../../../../shared/interfaces';

@Component({
  imports: [],
  selector: 'app-educations',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './educations.css',
  templateUrl: './educations.html',
})
export class Educations {
  readonly formations = input.required<Experience[]>();
  readonly selectedFormationId = input.required<Experience['id'] | null>();
  readonly formationSelected = output<Experience>();

  selectFormation(edu: Experience) {
    this.formationSelected.emit(edu);

    if (window.innerWidth < 1024) {
      document.getElementById('infosschool')?.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

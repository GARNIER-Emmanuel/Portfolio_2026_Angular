import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Experience } from '../../../../shared/interfaces';

@Component({
  imports: [],
  selector: 'app-experiences',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './experiences.css',
  templateUrl: './experiences.html',
})
export class Experiences {
  readonly experiences = input.required<Experience[]>();
  readonly selectedExperienceId = input.required<Experience['id'] | null>();
  readonly experienceSelected = output<Experience>();

  selectExperience(exp: Experience) {
    this.experienceSelected.emit(exp);
    if (window.innerWidth < 1024) {
      document.getElementById('infoscompany')?.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

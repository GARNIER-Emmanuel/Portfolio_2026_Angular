import { Component, input, output } from '@angular/core';
import { Experience } from '../../../shared/interfaces';

@Component({
  imports: [],
  selector: 'app-experiences',
  styleUrl: './experiences.css',
  templateUrl: './experiences.html',
})
export class Experiences {
  readonly experiences = input.required<Experience[]>();
  readonly selectedId = input.required<Experience['id'] | null>();
  readonly experienceSelected = output<Experience>();

  selectExperience(exp: Experience) {
    this.experienceSelected.emit(exp);
  }
}

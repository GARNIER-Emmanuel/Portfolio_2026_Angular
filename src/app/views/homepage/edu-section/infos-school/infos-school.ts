import { Component, input } from '@angular/core';
import { Experience } from '../../../../shared/interfaces';
import { NgOptimizedImage } from '@angular/common';

@Component({
  imports: [NgOptimizedImage],
  selector: 'app-infos-school',
  styleUrl: './infos-school.css',
  templateUrl: './infos-school.html',
})
export class InfosSchool {
  readonly formation = input.required<Experience>();
}

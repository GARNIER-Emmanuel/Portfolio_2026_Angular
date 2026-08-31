import { Component, signal } from '@angular/core';
import { Skills } from "./skills/skills";
import { NgOptimizedImage } from '@angular/common';
import { Experiences } from './experiences/experiences';
import { InfosCompany } from "./infos-company/infos-company";
import { Experience } from '../../shared/interfaces';
import { EXPERIENCES_DATA } from '../../shared/data';

@Component({
  imports: [Skills, NgOptimizedImage, Experiences, InfosCompany],
  selector: 'app-homepage',
  styleUrl: './homepage.css',
  templateUrl: './homepage.html',
})
export class Homepage {
  protected readonly experiences = signal<Experience[]>(EXPERIENCES_DATA);
  protected readonly selectedExperience = signal<Experience>(EXPERIENCES_DATA[0]);

  onSelectExperience(exp: Experience) {
    this.selectedExperience.set(exp);
  }
}

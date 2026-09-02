import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Skills } from "../../components/skills/skills";
import { NgOptimizedImage } from '@angular/common';
import { Experience } from '../../shared/interfaces';
import { EXPERIENCES_DATA } from '../../shared/data';
import { Certifications } from "./certifications/certifications";
import { Educations } from './edu-section/educations/educations';
import { Experiences } from './exp-section/experiences/experiences';
import { InfosCompany } from './exp-section/infos-company/infos-company';
import { InfosSchool } from './edu-section/infos-school/infos-school';
import { Contact } from './contact/contact';
import { Projects } from './projects/projects';
import { Interests } from './interests/interests';

@Component({
  imports: [Skills, NgOptimizedImage, Experiences, InfosCompany, Certifications, Educations, InfosSchool, Interests, Projects, Contact],
  selector: 'app-homepage',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './homepage.css',
  host: {
    class: 'bg-primary-90'
  },
  templateUrl: './homepage.html',
})
export class Homepage {
  protected readonly experiences = signal<Experience[]>(EXPERIENCES_DATA);
  private readonly birthDate = new Date(2002, 6, 22);

  // Dérivés automatiques (évite les @if dans les templates)
  protected readonly workExperiences = computed(() => this.experiences().filter(e => !e.school));
  protected readonly schoolFormations = computed(() => this.experiences().filter(e => e.school));
  private readonly careerStartDate = new Date(2021, 8, 1);

  // États de sélection indépendants
  protected readonly selectedExperience = signal<Experience>(this.workExperiences()[0]);
  protected readonly selectedFormation = signal<Experience>(this.schoolFormations()[0]);
  onSelectExperience(exp: Experience) {
    this.selectedExperience.set(exp);
  }

  onSelectFormation(edu: Experience) {
    this.selectedFormation.set(edu);
  }

  protected readonly age = computed(() => {
    const today = new Date();
    let age = today.getFullYear() - this.birthDate.getFullYear();
    const m = today.getMonth() - this.birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < this.birthDate.getDate())) age--;
    return age;
  });

  protected readonly yearsOfExperience = computed(() => {
    const today = new Date();
    let years = today.getFullYear() - this.careerStartDate.getFullYear();
    const m = today.getMonth() - this.careerStartDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < this.careerStartDate.getDate())) years--;
    return Math.max(1, years);
  });
}

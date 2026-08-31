import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Certification } from '../../../shared/interfaces';
import { CERTIFICATIONS_DATA } from '../../../shared/data/certifications.data';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  imports: [NgOptimizedImage, MatTooltipModule],
  selector: 'app-certifications',
  styleUrl: './certifications.css',
  templateUrl: './certifications.html',
})
export class Certifications {
  protected readonly certifications = signal<Certification[]>(CERTIFICATIONS_DATA);
}

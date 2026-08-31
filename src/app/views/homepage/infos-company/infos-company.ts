import { Component, input } from '@angular/core';
import { Experience } from '../../../shared/interfaces';
import { NgOptimizedImage } from '@angular/common';

@Component({
  imports: [NgOptimizedImage],
  selector: 'app-infos-company',
  styleUrl: './infos-company.css',
  templateUrl: './infos-company.html',
})
export class InfosCompany {
  readonly experience = input.required<Experience>();
}

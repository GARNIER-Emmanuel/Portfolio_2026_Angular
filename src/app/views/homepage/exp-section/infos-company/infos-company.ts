import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Experience } from '../../../../shared/interfaces';

@Component({
  imports: [NgOptimizedImage],
  selector: 'app-infos-company',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './infos-company.css',
  templateUrl: './infos-company.html',
})
export class InfosCompany {
  readonly experience = input.required<Experience>();
}

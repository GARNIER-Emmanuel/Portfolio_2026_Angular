import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Skill } from '../../../shared/interfaces';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  imports: [MatIconModule, MatTooltipModule],
  selector: 'app-skills',
  styleUrl: './skills.css',
  templateUrl: './skills.html',
})
export class Skills {
  readonly skills = input.required<Skill[]>();
}

import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Skill } from '../../shared/interfaces';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  imports: [MatIconModule, MatTooltipModule],
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './skills.css',
  host: {
    class: 'flex flex-wrap justify-center items-center gap-6 w-full'
  },
  templateUrl: './skills.html',
})
export class Skills {
  readonly skills = input.required<Skill[]>();
}

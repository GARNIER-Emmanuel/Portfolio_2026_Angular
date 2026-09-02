import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Project } from '../../../shared/interfaces';
import { PROJECT_DATA } from '../../../shared/data';
import { Skills } from '../../../components/skills/skills';

@Component({
  imports: [MatCardModule, MatButtonModule, Skills],
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly projects = signal<Project[]>(PROJECT_DATA);
}

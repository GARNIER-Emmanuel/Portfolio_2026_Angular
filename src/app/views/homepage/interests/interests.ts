import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { INTERESTS_DATA } from '../../../shared/data';
import { Interest } from '../../../shared/interfaces';

@Component({
  imports: [MatButtonToggleModule, MatCardModule],
  selector: 'app-interests',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './interests.css',
  templateUrl: './interests.html',
})
export class Interests {
  protected readonly interests = signal<Interest[]>(INTERESTS_DATA);

  protected readonly selectedInterest = signal<Interest>(this.interests()[0]);

  selectInterest(interest: Interest) {
    this.selectedInterest.set(interest);
  }
}

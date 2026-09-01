import { Component, computed, input, signal } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { INTERESTS_DATA } from '../../../shared/data';
import { Interest } from '../../../shared/interfaces';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [MatButtonToggleModule, MatCardModule, MatMenuModule, MatButtonModule],
  selector: 'app-centers',
  styleUrl: './centers.css',
  templateUrl: './centers.html',
})
export class Centers {
  protected readonly interests = signal<Interest[]>(INTERESTS_DATA);

  protected readonly selectedInterest = signal<Interest>(this.interests()[0]);

  selectInterest(interest: Interest) {
    this.selectedInterest.set(interest);
  }
}

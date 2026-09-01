import { NgOptimizedImage } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Certification } from '../../../shared/interfaces';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialog } from '@angular/material/dialog';
import { DialogCertif } from './dialog-certif/dialog-certif';
import { CERTIFICATIONS_DATA } from '../../../shared/data';

@Component({
  imports: [NgOptimizedImage, MatTooltipModule, MatExpansionModule],
  selector: 'app-certifications',
  styleUrl: './certifications.css',
  templateUrl: './certifications.html',
})
export class Certifications {
  protected readonly certifications = signal<Certification[]>(CERTIFICATIONS_DATA);
  readonly dialogCertif = inject(MatDialog);

  openDialogCertif(certification: Certification) {
    this.dialogCertif.open(DialogCertif, {
      data: certification,
      width: '90vw',
      maxWidth: '1000px',
      maxHeight: '90vh',
    });
  }
}

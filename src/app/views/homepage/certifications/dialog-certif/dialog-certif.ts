import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';
import { Certification } from '../../../../shared/interfaces';

@Component({
  imports: [MatDialogModule, MatButtonModule, NgOptimizedImage],
  selector: 'app-dialog-certif',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './dialog-certif.css',
  templateUrl: './dialog-certif.html',
})
export class DialogCertif {
  readonly certification = inject<Certification>(MAT_DIALOG_DATA);
}

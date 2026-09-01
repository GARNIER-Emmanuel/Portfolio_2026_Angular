import { Component, inject } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Certification } from '../../../../shared/interfaces';
import { NgOptimizedImage } from '@angular/common';

@Component({
  imports: [MatDialogModule, MatButtonModule, NgOptimizedImage],
  selector: 'app-dialog-certif',
  styleUrl: './dialog-certif.css',
  templateUrl: './dialog-certif.html',
})
export class DialogCertif {
  readonly certification = inject<Certification>(MAT_DIALOG_DATA);
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  imports: [MatDialogModule],
  selector: 'app-contact-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './contact-dialog.css',
  templateUrl: './contact-dialog.html',
})
export class ContactDialog { }

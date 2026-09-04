import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Certification } from '../../../shared/interfaces';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialog } from '@angular/material/dialog';
import { DialogCertif } from './dialog-certif/dialog-certif';
import { CERTIFICATIONS_DATA } from '../../../shared/data';

@Component({
  imports: [NgOptimizedImage, MatTooltipModule, MatExpansionModule],
  selector: 'app-certifications',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './certifications.css',
  templateUrl: './certifications.html',
})
export class Certifications {
  protected readonly certifications = signal<Certification[]>(CERTIFICATIONS_DATA);
  readonly dialogCertif = inject(MatDialog);

  protected readonly obtainedBySite = computed(() => {
    const map = new Map<string, Certification[]>();
    for (const cert of this.certifications()) {
      if (cert.status === 'obtained') {
        const list = map.get(cert.site) ?? [];
        list.push(cert);
        map.set(cert.site, list);
      }
    }
    return Array.from(map, ([site, items]) => ({ site, items }));
  });

  openDialogCertif(certification: Certification) {
    this.dialogCertif.open(DialogCertif, {
      data: certification,
      width: '90vw',
      maxWidth: '800px',
      maxHeight: '90vh',
      autoFocus: false,
    });
  }

}

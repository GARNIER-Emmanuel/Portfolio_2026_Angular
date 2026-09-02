import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { email, form, FormField, FormRoot, required } from '@angular/forms/signals';
import { ContactService } from '../../../shared/services/contact-service';
import { ContactForm } from '../../../shared/interfaces/contact-form.interface';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialog } from './contact-dialog/contact-dialog';
import { ContactDialogFailed } from './contact-dialog-failed/contact-dialog-failed';

@Component({
  imports: [FormRoot, FormField],
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  private readonly contactService = inject(ContactService);
  private contactDialog = inject(MatDialog);

  contactModel = signal<ContactForm>({
    lastname: '',
    firstname: '',
    email: '',
    message: '',
  })

  contactForm = form(this.contactModel, (schemaPath) => {
    required(schemaPath.lastname, { message: $localize`:@@contact_err_lastname:Le nom est requis` })
    required(schemaPath.firstname, { message: $localize`:@@contact_err_firstname:Le prénom est requis` })
    required(schemaPath.email, { message: $localize`:@@contact_err_email:L'email est requis` })
    required(schemaPath.message, { message: $localize`:@@contact_err_message:Le message est requis` })
    email(schemaPath.email, { message: $localize`:@@contact_err_email_invalid:L'email est invalide` })
  }, {
    submission: {
      action: async (contactForm) => {
        try {
          await this.contactService.sendEmail(contactForm().value());
          this.contactDialog.open(ContactDialog);
          this.contactModel.set({ lastname: '', firstname: '', email: '', message: '' });
        } catch {
          this.contactDialog.open(ContactDialogFailed);
        }
      },
      onInvalid: (form) => {
        console.warn('Formulaire invalide :', form().errors);
        this.contactDialog.open(ContactDialogFailed);
      }
    }
  });
}
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { email, form, FormField, FormRoot, required } from '@angular/forms/signals';
import { ContactService } from '../../../shared/services/contact-service';
import { ContactForm } from '../../../shared/interfaces/contact-form.interface';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialog } from './contact-dialog/contact-dialog';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  imports: [FormRoot, FormField, MatTooltip],
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
    required(schemaPath.lastname, { message: 'Le nom est requis' })
    required(schemaPath.firstname, { message: 'Le prénom est requis' })
    required(schemaPath.email, { message: 'L\'email est requis' })
    required(schemaPath.message, { message: 'Le message est requis' })
    email(schemaPath.email, { message: 'L\'email est invalide' })


  }, {
    submission: {
      action: async (contactForm) => {
        await this.contactService.sendEmail(contactForm().value());
        this.contactDialog.open(ContactDialog);
        this.contactModel.set({ lastname: '', firstname: '', email: '', message: '' });
      },
      onInvalid: (form) => {
        console.warn('Formulaire invalide :', form().errors);
      }
    }
  }

  )







}
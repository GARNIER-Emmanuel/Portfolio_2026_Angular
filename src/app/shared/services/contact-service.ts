import { Injectable } from '@angular/core';
import { ContactForm } from '../interfaces/contact-form.interface';

@Injectable({
    providedIn: 'root',
})
export class ContactService {
    private readonly ACCESS_KEY = '9431e9d7-7363-444b-8ff7-ad044dfd12e3';
    private readonly API_URL = 'https://api.web3forms.com/submit';

    async sendEmail(formData: ContactForm): Promise<boolean> {
        const response = await fetch(this.API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                access_key: this.ACCESS_KEY,
                name: `${formData.firstname} ${formData.lastname}`,
                email: formData.email,
                message: formData.message,
            }),
        });

        const result = await response.json();
        if (!response.ok || !result.success) {
            throw new Error(result.message || "Erreur lors de l'envoi du message.");
        }

        return true;
    }
}


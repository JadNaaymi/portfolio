import { LightningElement } from 'lwc';
import INSTA_ICON from '@salesforce/resourceUrl/instaIcon';
import saveContactRequest from '@salesforce/apex/ContactController.saveContactRequest';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ContactSection extends LightningElement {
   instaUrl = INSTA_ICON;

    get currentYear() {
        return new Date().getFullYear();
    }
    // Handling the form submission
    async handleSendMessage() {
        // Grab values from the inputs
        const name = this.template.querySelector('input[data-id="name"]').value;
        const email = this.template.querySelector('input[data-id="email"]').value;
        const message = this.template.querySelector('textarea[data-id="message"]').value;
        console.log('Form Values:', { name, email, message }); // Debugging log

        // Simple validation
        if (!name || !email || !message) {
            console.log('in validation');
            
            this.showToast('Error', 'Please fill in all fields', 'error');
            console.log('after tost');
            
            return;
        }

        try {
            console.log('in try');
            
            // Call Apex to save the record
            await saveContactRequest({ name, email, message });
            
            this.showToast('Success', 'Message sent! I will get back to you soon.', 'success');
            
            // Clear the form
            this.template.querySelectorAll('.glass-input, .glass-textarea').forEach(input => {
                input.value = '';
            });
        } catch (error) {
            this.showToast('Error', 'Failed to send message.', 'error');
        }
    }

    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({ title, message, variant }));
    }
}
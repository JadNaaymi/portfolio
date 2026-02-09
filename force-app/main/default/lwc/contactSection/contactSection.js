import { LightningElement } from 'lwc';

export default class ContactSection extends LightningElement {
    handleFormSubmit(event) {
        event.preventDefault();
        
        // Logic to capture data and show a toast or alert
        alert('Thanks for reaching out! I will get back to you soon.');
        
        // Reset form
        event.target.reset();
    }
}
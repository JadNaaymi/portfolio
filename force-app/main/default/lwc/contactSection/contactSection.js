import { LightningElement,track } from 'lwc';
import INSTA_ICON from '@salesforce/resourceUrl/instaIcon';
import saveContactRequest from '@salesforce/apex/ContactController.saveContactRequest';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ContactSection extends LightningElement {
   instaUrl = INSTA_ICON;
    
    // 2. Added these new variables
    @track showCustomModal = false;
    @track showErrorModal = false;  // Error
    @track senderFirstName = '';

    get currentYear() {
        return new Date().getFullYear();
    }

    async handleSendMessage() {
        console.log('Button Clicked!'); // Check 1
        
        const nameInput = this.template.querySelector('input[data-id="name"]');
        const emailInput = this.template.querySelector('input[data-id="email"]');
        const messageInput = this.template.querySelector('textarea[data-id="message"]');

        const name = nameInput.value;
        const email = emailInput.value;
        const message = messageInput.value;

        if (!name || !email || !message) {
            this.triggerError('Please fill in all fields before sending.');
            return;
        }
        // 2. Validation for Email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            this.triggerError('That email doesn\'t look right. Please check it.');
            return;
        }

        try {
            console.log('Attempting to call Apex with:', { name, email, message });
            
            this.senderFirstName = name.split(' ')[0];

            // This is usually where it fails if the Apex class is not shared
            await saveContactRequest({ name: name, email: email, message: message });
            
            console.log('Apex Call Successful!'); 
            this.showCustomModal = true; // Trigger Pop-up
            
            // Clear inputs
            nameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';

        } catch (error) {
            console.error('APEX ERROR:', error);
            alert('Apex Error: ' + error.body.message); // This will tell us the EXACT Salesforce error
        }
    }

    // 4. Added this function to close the popup
    closeModal() {
        this.showCustomModal = false;
    }
    triggerError(msg) {
        this.errorPopupMessage = msg;
        this.showErrorModal = true;
        
        // Auto-hide error after 4 seconds (Optional)
        setTimeout(() => { this.showErrorModal = false; }, 4000);
    }

    closeErrorModal() {
        this.showErrorModal = false;
    }

    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({ title, message, variant }));
    }
}
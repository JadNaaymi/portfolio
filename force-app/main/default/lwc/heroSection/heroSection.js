import { LightningElement,track } from 'lwc';

import ARROW_IMAGE from '@salesforce/resourceUrl/ARROW_IMAGE';
import ME_IMAGE from '@salesforce/resourceUrl/me';
import ME_GLOW_IMAGE from '@salesforce/resourceUrl/meGlow';
import CIRCLE_IMAGE from '@salesforce/resourceUrl/circle';
// import WEBHR_IMAGE from '@salesforce/resourceUrl/webhr';
import JAD_CV_FILE from '@salesforce/resourceUrl/Jad_CV';
import logDownload from '@salesforce/apex/DownloadController.logDownload';

export default class HeroSection extends LightningElement {
   

   // Expose images to the template
    arrowUrl = ARROW_IMAGE;
    meUrl = ME_IMAGE;
    meGlowUrl = ME_GLOW_IMAGE;
    circleUrl = CIRCLE_IMAGE;
    // webhrUrl = WEBHR_IMAGE;
    cvUrl = JAD_CV_FILE;
   

    // Reactive state properties
    @track displayedText = '';
    texts = ["Salesforce Consultant","Software Engineer", "Flutter Developer","Full Stack web Developer"];
    currentTextIndex = 0;
    isDeleting = false;
    typingSpeed = 100;

    connectedCallback() {
        this.handleTyping();
    }

    handleTyping() {
        const currentFullText = this.texts[this.currentTextIndex];
        
        if (!this.isDeleting) {
            // Typing Logic
            this.displayedText = currentFullText.slice(0, this.displayedText.length + 1);
            
            if (this.displayedText === currentFullText) {
                // Pause at the end of typing
                this.isDeleting = true;
                this.typingSpeed = 50; // Speed up for deleting
                setTimeout(() => this.handleTyping(), 2000);
            } else {
                setTimeout(() => this.handleTyping(), this.typingSpeed);
            }
        } else {
            // Deleting Logic
            this.displayedText = currentFullText.slice(0, this.displayedText.length - 1);
            
            if (this.displayedText === '') {
                this.isDeleting = false;
                this.typingSpeed = 100; // Reset typing speed
                this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
                setTimeout(() => this.handleTyping(), 500);
            } else {
                setTimeout(() => this.handleTyping(), this.typingSpeed);
            }
        }
    }
    

    
    
    async handleDownloadCV(event) {
        try {
            // 1. Tell Salesforce someone clicked
            await logDownload();
            
            // 2. Proceed with the professional download logic
            const downloadLink = document.createElement("a");
            downloadLink.href = this.cvUrl;
            downloadLink.download = "Jad_Naaymi_Software_Engineer_CV.pdf";
            downloadLink.click();
        } catch (error) {
            console.error('Error logging download', error);
        }
    }
}
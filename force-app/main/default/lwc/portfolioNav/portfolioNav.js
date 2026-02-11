import { LightningElement } from 'lwc';
import ME_IMAGE from '@salesforce/resourceUrl/me'; // 
export default class PortfolioNav extends LightningElement {
    logoUrl = ME_IMAGE;
    

    // Optional: Smooth scroll logic if standard anchors don't behave 
    // perfectly in Experience Cloud
    handleLinkClick(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        const element = this.template.ownerDocument.querySelector(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    handleAboutClick(event){
       const nav = new CustomEvent('myevent', {
    detail: {
        navigationName:event.target.name
    },
    bubbles: true,
    composed: true
});

this.dispatchEvent(nav);
    }
}
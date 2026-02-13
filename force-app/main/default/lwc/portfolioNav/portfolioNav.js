import { LightningElement } from 'lwc';
import ME_IMAGE from '@salesforce/resourceUrl/me'; // 
export default class PortfolioNav extends LightningElement {
    logoUrl = ME_IMAGE;
    isMenuOpen = false;

    // Computes the class for the <ul>
    get navLinksClass() {
        return this.isMenuOpen ? 'nav-links active' : 'nav-links';
    }

    // Computes the class for the hamburger icon animation
    get hamburgerClass() {
        return this.isMenuOpen ? 'hamburger open' : 'hamburger';
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }

    closeMenu() {
        this.isMenuOpen = false;
    }

   
    

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
         this.closeMenu();
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
import { LightningElement,track } from 'lwc';

export default class BaseLayout extends LightningElement {
    @track isDark = true;
    currentSection = 'home';
    get themeClass() {
        return this.isDark ? 'dark' : 'light';
    }

    handleThemeToggle() {
        this.isDark = !this.isDark;
    }
    handleAboutEvent(event){
        console.log('event ',event.detail);
        this.currentSection = event.detail.navigationName;
        
        requestAnimationFrame(() => {
            const topDiv = this.template.querySelector('.about-child');
            if (topDiv) {
                topDiv.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
        
    }
}
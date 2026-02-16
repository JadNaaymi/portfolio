import { LightningElement,track } from 'lwc';

export default class PortfolioHero extends LightningElement {
    @track isDarkMode = true;

    get themeClass() {
        return this.isDarkMode ? 'dark-mode' : 'light-mode';
    }

    get buttonLabel() {
        return this.isDarkMode ? '☀️' : '🌙';
    }

    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
    }

    // This runs after the component is put on the page
    renderedCallback() {
        this.initializeAnimation();
    }

    initializeAnimation() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        this.template.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }
}
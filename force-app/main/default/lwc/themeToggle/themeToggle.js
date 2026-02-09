import { LightningElement,track } from 'lwc';

export default class ThemeToggle extends LightningElement {
    @track isDarkMode = false;

    get themeIcon() {
        return this.isDarkMode ? '🌙' : '☀️';
    }

    handleThemeChange(event) {
        this.isDarkMode = event.target.checked;
        
        // Notify the parent (baseLayout) about the change
        const themeChangeEvent = new CustomEvent('themestatereach', {
            detail: { darkMode: this.isDarkMode },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(themeChangeEvent);
    }
}
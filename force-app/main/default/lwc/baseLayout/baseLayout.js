import { LightningElement,track } from 'lwc';

export default class BaseLayout extends LightningElement {
    @track isDark = true;

    get themeClass() {
        return this.isDark ? 'dark' : 'light';
    }

    handleThemeToggle() {
        this.isDark = !this.isDark;
    }
}
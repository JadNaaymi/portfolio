import { LightningElement } from 'lwc';
import CARD1 from '@salesforce/resourceUrl/card1';
import CARD2 from '@salesforce/resourceUrl/card2';
import CARD3 from '@salesforce/resourceUrl/card3';
import CARD4 from '@salesforce/resourceUrl/card4';
export default class PortfolioExperience extends LightningElement {
// Array of experience data
    experienceCards = [
        {
            id: 1,
            title: "WebHR - HR Management App",
            description: "WebHR automates all of your company's HR processes such as Recruitment, Onboarding, Payroll, Time & Attendance, Leaves & PTO, Performance, and much more.",
            icon: CARD1,
        },
        {
            id: 2,
            title: "WebHR Kiosk - Time Clock Kiosk",
            description: "WebHR Kiosk is a time clock kiosk that allows you to clock in and out of your work. It is a simple and easy to use app that allows you to clock in and out of your work.",
            icon: CARD2,
        },
        {
            id: 3,
            title: "Somezing - AI-Powered Agents",
            description: "Somezing is a AI-Powered Agents to Automate Your Workflows. It is a simple and easy to use app that allows you to automate your workflows.",
            icon: CARD3,
        },
        {
            id: 4,
            title: "FileIT - File Sharing App",
            description: "FileIT is a file sharing app that allows you to share files with your friends and family. It is a simple and easy to use app that allows you to share files with your friends and family.",
            icon: CARD4,
        }
    ];
}
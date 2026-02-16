import { LightningElement } from 'lwc';

export default class PortfolioTechStack extends LightningElement {
    skillsData = [
        {
            id: 1,
            name: 'LWC & Salesforce Platform',
            level: 100, // 5/5 on your radar
            barStyle: 'width: 100%',
            category: 'Salesforce & Cloud',
            description: 'Expertise in Lightning Web Components, Salesforce Automotive Cloud, and Experience Cloud.'
        },
        {
            id: 2,
            name: 'Apex & Salesforce Flows',
            level: 80, // 4/5 on your radar
            barStyle: 'width: 80%',
            category: 'Salesforce & Cloud',
            description: 'Developing complex backend logic with Apex, SOQL, and automated Salesforce Flows.'
        },
        {
            id: 3,
            name: 'Modern JavaScript (ES6+)',
            level: 100, // 5/5 on your radar
            barStyle: 'width: 100%',
            category: 'Programming',
            description: 'Advanced programming using JavaScript, Java, and modern Design Patterns.'
        },
        {
            id: 4,
            name: 'CI/CD & DevOps',
            level: 80, // 4/5 on your radar
            barStyle: 'width: 80%',
            category: 'Tools & Practices',
            description: 'Utilizing Git/GitHub, Azure DevOps, and AutoRABIT for continuous integration.'
        },
        {
            id: 5,
            name: 'Web Technologies',
            level: 90,
            barStyle: 'width: 90%',
            category: 'Programming',
            description: 'Fluent in HTML, CSS, PHP, and database management with MySQL.'
        },
        {
            id: 6,
            name: 'Agile & Design Tools',
            level: 85,
            barStyle: 'width: 85%',
            category: 'Tools & Practices',
            description: 'Experienced in Agile/Scrum methodologies using Jira and Figma for UI/UX.'
        }
    ];
    
}
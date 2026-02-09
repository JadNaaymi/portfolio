import { LightningElement } from 'lwc';

export default class SkillsSection extends LightningElement {
    skillCategories = [
        {
            name: 'Core Development',
            skills: ['JavaScript (ES6+)', 'HTML5 & CSS3', 'TypeScript', 'Node.js']
        },
        {
            name: 'Salesforce Stack',
            skills: ['LWC', 'Apex', 'SOQL/SOSL', 'Experience Cloud', 'Flow Builder']
        },
        {
            name: 'Frameworks & Tools',
            skills: ['React', 'Salesforce DX', 'Git/GitHub', 'Jest', 'Postman']
        },
        {
            name: 'Design & UI',
            skills: ['SLDS', 'Tailwind CSS', 'Figma', 'Responsive Design']
        }
    ];
}
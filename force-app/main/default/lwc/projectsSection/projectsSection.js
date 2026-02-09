import { LightningElement } from 'lwc';

export default class ProjectsSection extends LightningElement {
    projects = [
        {
            id: 1,
            title: 'Salesforce-Slack Integration',
            description: 'Automated notification system using Apex Triggers and Slack API for lead management.',
            techStack: ['Apex', 'Slack API', 'Flow'],
            imageUrl: '',
            githubUrl: '#',
            demoUrl: '#'
        },
        {
            id: 2,
            title: 'Custom LWC Data Table',
            description: 'A dynamic data table with inline editing and advanced filtering capabilities.',
            techStack: ['LWC', 'JavaScript', 'SOQL'],
            imageUrl: '',
            githubUrl: '#',
            demoUrl: '#'
        },
        {
            id: 3,
            title: 'Portfolio Website',
            description: 'The site you are currently viewing, built entirely with modern LWC architecture.',
            techStack: ['HTML', 'CSS Grid', 'LWC'],
            imageUrl: '',
            githubUrl: '#',
            demoUrl: '#'
        }
    ];
}
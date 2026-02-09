import { LightningElement } from 'lwc';

export default class CertificationsSection extends LightningElement {
    certs = [
        {
            id: 1,
            name: 'Salesforce Certified Administrator',
            issuer: 'Salesforce',
            date: 'Jan 2024',
            logo: '/resource/admin_badge', // Replace with your static resource
            verifyUrl: 'https://trailhead.salesforce.com/en/credentials/verification/'
        },
        {
            id: 2,
            name: 'Platform Developer I',
            issuer: 'Salesforce',
            date: 'March 2024',
            logo: '/resource/pd1_badge',
            verifyUrl: 'https://trailhead.salesforce.com/en/credentials/verification/'
        },
        {
            id: 3,
            name: 'JavaScript Developer I',
            issuer: 'Salesforce',
            date: 'June 2024',
            logo: '/resource/js1_badge',
            verifyUrl: 'https://trailhead.salesforce.com/en/credentials/verification/'
        }
    ];
}
import { LightningElement } from 'lwc';
export default class CertificationsSection extends LightningElement {
    // Exact certifications from your list
    certs = [
        { id: 1, name: 'Salesforce Certified AI Associate', year: '2025', delay: 'animation-delay: 0s' },
        { id: 2, name: 'Salesforce Certified AI Specialist', year: '2024', delay: 'animation-delay: 1.2s' },
        { id: 3, name: 'Salesforce Certified Platform Developer I', year: '2024', delay: 'animation-delay: 0.5s' },
        { id: 4, name: 'Salesforce Certified Administrator', year: '2023', delay: 'animation-delay: 2s' },
        { id: 5, name: 'AI Certification - Dot Lebanon', year: '2025', delay: 'animation-delay: 1.5s' },
        { id: 6, name: 'Internet Society - Network', year: '2025', delay: 'animation-delay: 0.8s' }
    ];
}
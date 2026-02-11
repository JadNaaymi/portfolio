import { LightningElement } from 'lwc';
import PROJECT_1 from '@salesforce/resourceUrl/project1';
import PROJECT_2 from '@salesforce/resourceUrl/project2';
export default class ProjectsSection extends LightningElement {
    projects = [
        {
            id: 1,
            title: "NeuraWeb – Futuristic AI Website Landing Design",
            description: "A sleek, dark-themed AI-powered landing page concept built in Figma. Designed for modern startups and futuristic digital products, it features glowing neon visuals, immersive UI, and a dynamic tone.",
            link: "https://www.figma.com/community/file/1441377868897233703/ai-website-landing-design",
            image: PROJECT_1,
            isEven: false,
            containerClass: "project-row"
        },
        {
            id: 2,
            title: "Apple Vision Pro – HR Software Design",
            description: "A futuristic HR software concept designed for Apple Vision Pro, built in Figma to reimagine attendance, leave tracking, and employee experience - all in one immersive interface.",
            link: "https://www.figma.com/community/file/1371824014208363481/apple-vision-pro-hr-software-design",
            image: PROJECT_2,
            isEven: true,
            containerClass: "project-row reverse"
        }
    ];
}
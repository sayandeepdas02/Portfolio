export interface Experience {
    role: string;
    company: string;
    period: string;
    location: string;
    description: string[];
    techStack: string[];
    logo?: string;
}

export const experiences: Experience[] = [
    {
        role: "Software Engineer Intern",
        company: "Kagaar",
        period: "Mar 2025 - May 2025",
        location: "Remote (Delhi, IN)",
        description: [
            "Redesigned core sections of the website by developing modular, reusable React components and optimizing layouts with Tailwind CSS, improving page load speed by 25% and reducing code duplication.",
            "Collaborated with design and product teams to revamp UI/UX, delivering an enhanced navigation flow and cross-device responsiveness, which increased user engagement by 15%."
        ],
        techStack: ["React.js", "Tailwind CSS", "UI/UX Design"],
        logo: "/logos/kagaar.jpg"
    },
    {
        role: "Software Engineer Intern",
        company: "Wolf Pixel Ltd.",
        period: "Dec 2024 - Feb 2025",
        location: "Remote (London, UK)",
        description: [
            "Built and deployed end-to-end full-stack web applications using React.js, Node.js, and REST APIs, improving system scalability and reducing feature development time by 30%.",
            "Designed and launched 4 high-conversion landing pages for international clients (Australia & UAE), optimizing UI/UX and contributing to a 15% average increase in lead generation."
        ],
        techStack: ["React.js", "Node.js", "REST APIs", "UI/UX Design"],
        logo: "/logos/wolf-pixel.jpg"
    },
];


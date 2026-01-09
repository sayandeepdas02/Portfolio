export interface Project {
    name: string;
    description: string;
    details?: string[];
    image: string;
    techStack: string[];
    githubUrl?: string;
    liveUrl?: string;
    date?: string;
}

export const projects: Project[] = [
    {
        name: "Fluxhire AI - Automating Interviews for Hiring Process",
        description: "Built an AI-powered interview platform with resume parsing, dynamic Q&A, and automated scoring using React, Redux, and OpenAI GPT models.",
        details: [
            "Improved interviewer efficiency with session creation, shareable links, candidate tracking, and AI-driven evaluation, reducing manual review by 70%."
        ],
        image: "/logos/flux-hire-logo.png",
        techStack: ["React.js", "Redux", "Node.js", "OpenAI API", "Tailwind CSS"],
        githubUrl: "https://github.com/sayandeepdas02/Flux-Hire-AI",
    },
    {
        name: "Plixa Meetups - A collaborative app for discussions, planning and more",
        description: "Built a real-time collaborative board with drawing and live video chat using WebRTC and Socket.io.",
        details: [
            "Enhanced collaboration with low-latency, seamless communication, and responsive UI for cross-device use."
        ],
        image: "/logos/plixa-logo.png",
        techStack: ["JavaScript", "React.js", "Node.js", "Socket.io", "Express.js", "Tailwind CSS"],
        githubUrl: "https://github.com/sayandeepdas02/Plixa-Meetups",
    },
    {
        name: "Swift Invoice - Modern invoicing for the next-gen freelancers & businesses",
        description: "Built a MERN app to generate PDF invoices with payment modes and QR codes for instant payments.",
        details: [
            "Developed secure REST APIs and optimized MongoDB for efficient invoice management."
        ],
        image: "/logos/swift-invoice-logo.png",
        techStack: ["JavaScript", "React.js", "Node.js", "Socket.io", "Express.js", "Tailwind CSS"],
        githubUrl: "https://github.com/sayandeepdas02/Swift-Invoice",
    },
    {
        name: "Plinko - A game built using physics logic for gambling",
        description: "Built an interactive physics-based Plinko game with real-time win/loss logic, secure authentication, and betting mechanics.",
        details: [
            "Delivered engaging gameplay with risk-reward mechanics, transaction security, and responsive design using React and TypeScript."
        ],
        image: "/logos/plinko-logo.png",
        techStack: ["TypeScript", "React.js", "Node.js", "Express.js", "Tailwind CSS"],
        githubUrl: "https://github.com/sayandeepdas02/Plinko",
    },
];



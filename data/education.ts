export interface Education {
    degree: string;
    institution: string;
    year: string;
    location?: string;
    logo?: string;
}

export const education: Education[] = [
    {
        degree: "Bachelor of Science in Data Science and Artificial Intelligence",
        institution: "Indian Institute of Technology (IIT) Guwahati",
        year: "2024 - 2027",
        location: "Guwahati, INDIA",
        logo: "/logos/iitg.png",
    },
    {
        degree: "Bachelor of Science in Mathematics (Hons), Computer Science & Physics",
        institution: "WB State University",
        year: "2022 - 2026",
        location: "Kolkata, INDIA",
        logo: "/logos/wbsu.png",
    },
];


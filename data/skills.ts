export interface Skill {
  name: string;
  category?: string;
}

export const skills: Skill[] = [
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Python", category: "Backend" },
  { name: "React.js", category: "Frontend" },
  { name: "Redux", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "SQL", category: "Database" },
  { name: "REST APIs", category: "Backend" },
  { name: "Git/GitHub", category: "Tools" },
  { name: "Vite", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "Socket.io", category: "Backend" },
  { name: "WebRTC", category: "Backend" },
  { name: "OpenAI API", category: "Tools" },
];


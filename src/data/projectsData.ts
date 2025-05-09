export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Spy Game",
    description: "A clue-based guessing game built in React using local state and game logic utilities.",
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["React", "TypeScript", "Context API", "Custom Hooks"],
    demoUrl: "https://incandescent-bienenstitch-caece4.netlify.app",
    githubUrl: "https://github.com/DeeGemini",
  },
  {
    id: 2,
    title: "Typing Challenge Game",
    description: "A speed typing game powered by a Python backend and React frontend for real-time word challenge interaction.",
    image: "https://images.pexels.com/photos/3059747/pexels-photo-3059747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["React", "TypeScript", "Python", "Custom Backend"],
    demoUrl: "https://jovial-genie-99d8fd.netlify.app",
    githubUrl: "https://github.com/DeeGemini",
  },
  {
    id: 3,
    title: "Weather & Clothing Advisor App - In progress",
    description: "Smart clothing recommendations based on real-time weather data.",
    image: "https://images.pexels.com/photos/1785493/pexels-photo-1785493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["React", "TypeScript", "Context API", "OpenWeather API"],
    demoUrl: "https://deluxe-melomakarona-164c21.netlify.app",
    githubUrl: "https://github.com/DeeGemini",
  },
  {
    id: 4,
    title: "AI Job Helper App - Wireframe",
    description: "An AI-powered assistant to help users prepare for job applications, likely using language models for content generation.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["TypeScript", "React", "AI Tools"],
    demoUrl: "https://v0-ai-job-helper-agent.vercel.app",
    githubUrl: "https://github.com/DeeGemini",
  },
  {
    id: 5,
    title: "Nontuthuzelo Ngwenya Landing Page",
    description: "A clean and responsive landing page built using Tailwind CSS and TypeScript.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["TypeScript", "Tailwind CSS", "HTML", "CSS"],
    demoUrl: "https://v0-nontuthuzelo-landing-page.vercel.app",
    githubUrl: "https://github.com/DeeGemini",
  },
];

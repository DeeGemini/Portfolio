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
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with cart functionality, user authentication, and payment integration.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/DeeGemini",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A task management application with drag-and-drop functionality, task categories, and deadline reminders.",
    image: "https://images.pexels.com/photos/7654096/pexels-photo-7654096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/DeeGemini",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current and forecasted weather data for multiple locations.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["HTML", "CSS", "JavaScript", "WeatherAPI"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/DeeGemini",
  },
  {
    id: 4,
    title: "Recipe Finder",
    description: "A recipe finder application that allows users to search for recipes based on ingredients, cuisine, and dietary restrictions.",
    image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["React", "CSS", "Spoonacular API"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/DeeGemini",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and contact information.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/DeeGemini",
  },
];
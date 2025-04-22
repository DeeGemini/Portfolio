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
    title: "Multi Device Call Tool",
    description: "A tool that allows users to use single cellphone number across different devices(smart phones and tablets), linking upto 3 devices.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/DeeGemini",
  },
  {
    id: 2,
    title: "KeyChaos Game",
    description: "A fun speed testing game that challenges users to type as fast as possible while avoiding distractions.",
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
    title: "Job Finder AI Wireframe",
    description: "A wireframe for a job finder application that uses AI to match users with job opportunities based on their skills and preferences.",
    image: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["React", "CSS", "Spoonacular API"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/DeeGemini",
  },
  {
    id: 5,
    title: "Baver Website",
    description: "An E-commerce clothing website for kids and teenagers, featuring a user-friendly interface and secure payment options.",
    image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/DeeGemini",
  },
];
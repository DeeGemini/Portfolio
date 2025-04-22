export interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  readingTime: string;
  url: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Lazy Programmer",
    description: "Exploring how automation and efficiency can make you a better programmer. Learn to work smarter, not harder.",
    image: "https://images.pexels.com/photos/7114/laptop-mobile.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "October 31, 2024",
    readingTime: "4 min read",
    url: "https://deegemini.hashnode.dev/the-lazy-programmer"
  },
  {
    id: 2,
    title: "Personal Branding as an Introverted Programmer",
    description: "Tips and strategies for building your personal brand as a developer, even if you're introverted.",
    image: "https://images.pexels.com/photos/6804073/pexels-photo-6804073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "November 04, 2024",
    readingTime: "4 min read",
    url: "https://deegemini.hashnode.dev/personal-branding-as-an-introverted-programmer"
  },
  {
    id: 3,
    title: "Programming Languages Are Invented Almost Like Art",
    description: "An exploration of the creative process behind programming language design and why it resembles art more than science.",
    image: "https://images.pexels.com/photos/1083619/pexels-photo-1083619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "November 14, 2024",
    readingTime: "4 min read",
    url: "https://deegemini.hashnode.dev/programming-languages-are-invented-almost-like-art"
  },
  {
    id: 4,
    title: "The Death of COBOL",
    description: "A retrospective on the decline of COBOL and its impact on the programming landscape. What does it mean for legacy systems?",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "December 6, 2024",
    readingTime: "4 min read",
    url: "https://deegemini.hashnode.dev/the-death-of-cobol"
  },
  {
    id: 5,
    title: "The First Programmer Was a Woman",
    description: "A look at Ada Lovelace's contributions to computing and how her legacy continues to inspire developers today.",
    image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "November 08, 2024",
    readingTime: "4 min read",
    url: "https://deegemini.hashnode.dev/the-first-programmer-was-a-woman"
  }
];
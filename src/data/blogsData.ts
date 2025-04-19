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
    date: "April 15, 2023",
    readingTime: "8 min read",
    url: "#"
  },
  {
    id: 2,
    title: "Personal Branding as an Introverted Programmer",
    description: "Tips and strategies for building your personal brand as a developer, even if you're introverted.",
    image: "https://images.pexels.com/photos/6804073/pexels-photo-6804073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "May 22, 2023",
    readingTime: "6 min read",
    url: "#"
  },
  {
    id: 3,
    title: "Programming Languages Are Invented Almost Like Art",
    description: "An exploration of the creative process behind programming language design and why it resembles art more than science.",
    image: "https://images.pexels.com/photos/1083619/pexels-photo-1083619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "June 10, 2023",
    readingTime: "10 min read",
    url: "#"
  },
  {
    id: 4,
    title: "The Future of Web Development",
    description: "A deep dive into emerging technologies and trends that will shape the future of web development.",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "July 8, 2023",
    readingTime: "9 min read",
    url: "#"
  },
  {
    id: 5,
    title: "Debugging Like a Detective",
    description: "How to approach debugging systematically and efficiently, treating each bug like a mystery to be solved.",
    image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "August 17, 2023",
    readingTime: "7 min read",
    url: "#"
  }
];
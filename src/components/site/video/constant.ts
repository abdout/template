import { ProjectItem } from "./type";

export const projects: ProjectItem[] = [
  {
    title: "Mkan",
    description: "Airbnb like Real estate, diversity of properties and hotels",
    link: "mkan",
    image: "/site/mkan.png",
    imageDark: "/site/mkan.png",
    imageLight: "/site/mkan.png",
    date: "2024",
    author: "Real Estate Platform"
  },
  {
    title: "Hogwarts",
    description: "School automation, attendance, exams, grades and more",
    link: "hogwarts",
    image: "/site/hogwarts.png",
    imageDark: "/site/hogwarts-light.png",
    imageLight: "/site/hogwarts-dark.png",
    date: "2024",
    author: "Education System"
  },
  {
    title: "NMBD",
    description: "National movement for building & development",
    link: "nmbd",
    image: "/site/nmbd-dark.png",
    imageDark: "/site/nmbd-light.png",
    imageLight: "/site/nmbd-dark.png",
    date: "2024",
    author: "Development Organization"
  }
];

export const featuredProjects = (count: number = 3) => {
  return projects.slice(0, count);
};
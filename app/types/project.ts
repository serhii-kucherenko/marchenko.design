export interface Project {
  id: string;
  title: string;
  year: string;
  description: string;
  status?: string;
  locked?: boolean;
  image: string;
  duration?: string;
  role?: string;
  client?: string;
  headline?: string;
  heroImage: string;
  panoramaImage: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "global-initiatives-mobile-app",
    title: "Mobile app for global initiatives",
    year: "2023",
    description:
      "A satellite white-labeling app for Forum Spaces designed for multi-stakeholder communities to scale engagement and multiply impact.",
    locked: true,
    image: "/images/projects/project1.png",
    heroImage: "/images/projects/project1/project1-hero.png",
    duration: "2021 - 2024",
    role: "Lead Designer",
    client: "World Economic Forum",
    panoramaImage: "/images/projects/project1/panorama.png",
  },
  {
    id: "global-initiatives-digital-spaces",
    title: "Digital spaces builder for global initiatives",
    year: "2021-2024",
    description:
      "A platform that helps initiatives connect with a global ecosystem to increase engagement and collective impact on global issues.",
    locked: true,
    image: "/images/projects/project2.png",
    heroImage: "/images/projects/project2/project2-hero.png",
    duration: "Q2 2023",
    role: "Lead Designer",
    client: "World Economic Forum",
    panoramaImage: "/images/projects/project2/panorama.png",
  },
  {
    id: "holistic-well-being-platform",
    title: "Holistic well-being platform",
    year: "2021",
    description:
      "A digital platform on a mission to facilitate people's journey toward health, happiness, and prosperity by combining tradition and integrated practices.",
    image: "/images/projects/project3.png",
    heroImage: "/images/projects/project3/project3-hero.png",
    panoramaImage: "/images/projects/project3/panorama.png",
    duration: "May 2021",
    role: "Lead Designer",
    client: "World Economic Forum",
  },
  {
    id: "creative-website",
    title: "Creative website",
    year: "2020-2021",
    description:
      "A website for an award-winning company that is shaping the future of work by reimagining virtual events and amplifying every organization's potential.",
    image: "/images/projects/project4.png",
    heroImage: "/images/projects/project4/project4-hero.png",
    panoramaImage: "/images/projects/project4/panorama.png",
    duration: "2020-2021",
    role: "UX/UI Designer",
    client: "Brandlive",
  },
  {
    id: "web-acquisition-drug-information",
    title: "Web Acquisition of drug-related information",
    year: "2021-2023",
    description:
      "A centralized repository for drug-related information. Redesigned and increased the efficiency of web content acquisition flows.",
    status: "coming-soon",
    locked: true,
    image: "/images/projects/project5.png",
    heroImage: "/images/projects/projects/project3/project3-hero.png",
    panoramaImage: "/images/projects/project5/panorama.png",
  },
  {
    id: "plastic-policy-creation-platform",
    title: "Plastic policy creation platform",
    year: "2020",
    description:
      "A digital platform for a public-private platform aimed at bringing together policymakers, businesses, and governments to tackle plastic pollution.",
    status: "coming-soon",
    image: "/images/projects/project6.png",
    heroImage: "/images/projects/projects/project3/project3-hero.png",
    panoramaImage: "/images/projects/project6/panorama.png",
  },
  {
    id: "medical-coding-system",
    title: "Medical coding system",
    year: "2018",
    description:
      "A platform that allows for coding of medical documents and tracks the efficiency of its workers.",
    status: "coming-soon",
    locked: true,
    image: "/images/projects/project7.png",
    heroImage: "/images/projects/projects/project3/project3-hero.png",
    panoramaImage: "/images/projects/project7/panorama.png",
  },
  {
    id: "340B-drug-pricing-program",
    title: "Healthcare",
    year: "2017",
    description:
      "A complex web platform helping healthcare providers manage inventory, track eligible patients, and ensure compliance with the 340B Drug Pricing Program.",
    status: "coming-soon",
    locked: true,
    image: "/images/projects/project8.png",
    heroImage: "/images/projects/projects/project3/project3-hero.png",
    panoramaImage: "/images/projects/project8/panorama.png",
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return PROJECTS_DATA.find((project) => project.id === id);
};

export const getRecommendedProjects = (id: string): Project[] => {
  return PROJECTS_DATA.filter((project) => project.id !== id);
};

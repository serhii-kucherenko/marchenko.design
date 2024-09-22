export interface Project {
  title: string;
  year: string;
  description: string;
  status?: string;
  locked?: boolean;
  image: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    title: "Mobile app for global initiatives",
    year: "2023",
    description:
      "A satellite white-labeling app for Forum Spaces designed for multi-stakeholder communities to scale engagement and multiply impact.",
    locked: true,
    image: "/images/projects/project1.svg",
  },
  {
    title: "Digital spaces builder for global initiatives",
    year: "2021-2024",
    description:
      "A platform that helps initiatives connect with a global ecosystem to increase engagement and collective impact on global issues.",
    locked: true,
    image: "/images/projects/project2.svg",
  },
  {
    title: "Holistic well-being platform",
    year: "2021",
    description:
      "A digital platform on a mission to facilitate people's journey toward health, happiness, and prosperity by combining tradition and integrated practices.",
    status: "coming soon",
    image: "/images/projects/project3.svg",
  },
  {
    title: "Creative website",
    year: "2020-2021",
    description:
      "A website for an award-winning company that is shaping the future of work by reimagining virtual events and amplifying every organization's potential.",
    status: "coming soon",
    image: "/images/projects/project4.svg",
  },
  {
    title: "Web Acquisition of drug-related information",
    year: "2021-2023",
    description:
      "A centralized repository for drug-related information. Redesigned and increased the efficiency of web content acquisition flows.",
    status: "coming soon",
    locked: true,
    image: "/images/projects/project5.svg",
  },
  {
    title: "Plastic policy creation platform",
    year: "2020",
    description:
      "A digital platform for a public-private platform aimed at bringing together policymakers, businesses, and governments to tackle plastic pollution.",
    status: "coming soon",
    image: "/images/projects/project6.svg",
  },
  {
    title: "Medical coding system",
    year: "2018",
    description:
      "A platform that allows for coding of medical documents and tracks the efficiency of its workers.",
    status: "coming soon",
    locked: true,
    image: "/images/projects/project7.svg",
  },
  {
    title: "Healthcare",
    year: "2017",
    description:
      "A complex web platform helping healthcare providers manage inventory, track eligible patients, and ensure compliance with the 340B Drug Pricing Program.",
    status: "coming soon",
    locked: true,
    image: "/images/projects/project8.svg",
  },
];

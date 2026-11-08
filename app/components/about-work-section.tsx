"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Box, Stack, Typography } from "@mui/material";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import LockIcon from "@/public/images/lock-icon.svg";
import { PROJECTS_DATA, Project } from "@/app/types/project";

const comingSoonProjects = [
  {
    title: "Enterprise event platform",
    year: "2026",
    image: "/images/eventbase-coming-soon.png",
    description:
      "Led the design of a major platform relaunch, redesigning the experience across organizer tools and attendee apps, from core workflows to the design systems behind them.",
  },
  {
    title: "Workforce management platform",
    year: "2025–2026",
    image: "/images/untether-coming-soon.png",
    description:
      "Led design direction across the platform, bringing consistency to workflows and design patterns while introducing new functionality and creating a mobile app for providers.",
  },
];

const recentProjects = PROJECTS_DATA.slice(0, 2).map((project) => {
  if (project.id === "global-initiatives-mobile-app") {
    return {
      ...project,
      description:
        "Led design of a white-label companion app for Forum Spaces, helping initiative members stay connected and take part in their communities on the go.",
    };
  }

  if (project.id === "global-initiatives-digital-spaces") {
    return {
      ...project,
      title: "Platform for global initiatives",
      description:
        "Led design from concept to launch, creating a platform for global initiatives. Now supporting 1,000+ organizations and 200+ initiatives.",
    };
  }

  return project;
});
const earlierProjects = PROJECTS_DATA.filter(
  (project) =>
    !["creative-website", "medical-coding-system"].includes(project.id),
).slice(2);

interface ProjectDetailsProps {
  project: Pick<Project, "title" | "year" | "description">;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => (
  <Box sx={{ width: { xs: 1, md: 400 } }}>
    <Typography
      variant="h4"
      fontWeight="600"
      lineHeight="24px"
      mb={0.5}
      className="transition-colors duration-150 group-hover:text-[#A72618]"
    >
      {project.title}
    </Typography>
    <Typography
      variant="h5"
      fontWeight="500"
      lineHeight="22px"
      color="primary.contrastText"
      mb={1}
    >
      {project.year}
    </Typography>
    <Typography variant="body1" fontWeight="300">
      {project.description}
    </Typography>
  </Box>
);

const ReachOutSection = () => (
  <Box
    sx={{
      position: "relative",
      mt: { md: 1 },
      pl: { md: 6 },
      pr: { md: 6 },
      pb: { md: 3.5 },
    }}
  >
    <Stack maxWidth={488}>
      <Typography
        variant="h4"
        component="a"
        href="mailto:hi.marchenko@gmail.com"
        color="primary.main"
        fontSize={16}
        lineHeight="24px"
        fontWeight="400"
      >
        hi.marchenko@gmail.com
      </Typography>
      <Typography variant="h1" fontWeight="500">
        Let’s build something great together
      </Typography>
    </Stack>

    <Box
      sx={{
        position: { xs: "relative", md: "absolute" },
        top: { md: 25 },
        right: { md: "48px" },
        mt: { xs: 3, md: 0 },
        ml: { xs: "auto", md: 0 },
        width: { xs: 128, md: 160 },
        height: { xs: 128, md: 160 },
      }}
    >
      <a
        href="mailto:hi.marchenko@gmail.com"
        aria-label="Reach out"
        className="group relative block h-full w-full animate-spin-slow"
      >
        <Image
          src="/images/reach-out.svg"
          alt=""
          width={160}
          height={160}
          className="absolute inset-0 h-full w-full transition-opacity duration-150 group-hover:opacity-0"
        />
        <Image
          src="/images/reach-out-hover.svg"
          alt=""
          width={160}
          height={160}
          className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-150 group-hover:opacity-100"
        />
      </a>
    </Box>
  </Box>
);

export const AboutWorkSection = () => {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const hoverX = useMotionValue(0);
  const previewRotate = useSpring(
    useTransform(hoverX, [-100, 100], [-12, 12]),
    { stiffness: 100, damping: 5 },
  );
  const previewTranslateX = useSpring(
    useTransform(hoverX, [-100, 100], [-16, 16]),
    { stiffness: 100, damping: 5 },
  );

  const updateCursor = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setCursor({ x: event.clientX, y: event.clientY });
    const bounds = event.currentTarget.getBoundingClientRect();
    hoverX.set(event.clientX - (bounds.left + bounds.width / 2));
  };

  return (
    <Stack
      sx={{
        pt: { xs: 6, sm: 9, md: 12 },
        gap: { xs: 8, sm: 9, md: 11 },
      }}
    >
      <Stack gap={3}>
        <Typography
          variant="subtitle1"
          textTransform="uppercase"
          color="text.secondary"
          sx={{ pl: { md: 6 } }}
        >
          Recent work
        </Typography>
        <Box className="grid grid-cols-1 gap-x-6 gap-y-12 sm:gap-y-16 md:grid-cols-2 md:gap-y-[88px]">
          {comingSoonProjects.map((project) => (
            <Box
              key={project.title}
              className="relative"
            >
              <Box className="relative mb-4 aspect-[424/288] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} coming soon`}
                  className="absolute inset-0 h-full w-full object-cover"
                  width={424}
                  height={288}
                />
              </Box>
              <ProjectDetails project={project} />
            </Box>
          ))}

          {recentProjects.map((project) => (
            <Link key={project.id} href={`/work/${project.id}`}>
              <Box
                className="group relative"
                sx={{
                  "&:hover .project-image": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Box className="relative mb-4 aspect-[424/288] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="project-image absolute inset-0 h-full w-full transition-transform duration-300"
                    width={424}
                    height={288}
                  />
                  {project.locked && (
                    <Box className="absolute right-5 top-5">
                      <LockIcon width={36} height={37} />
                    </Box>
                  )}
                </Box>
                <ProjectDetails project={project} />
              </Box>
            </Link>
          ))}
        </Box>
      </Stack>

      <Stack gap={3}>
        <Typography
          variant="subtitle1"
          textTransform="uppercase"
          color="text.secondary"
          sx={{ pl: { md: 6 } }}
        >
          Earlier work
        </Typography>
        <Box borderTop={1} borderColor="divider">
          <Box
            className="flex items-center gap-4 border-b border-solid border-[#e5e7eb] px-6 py-6"
            sx={{ opacity: 0.45 }}
          >
            <Typography
              variant="h4"
              width={64}
              flexShrink={0}
              color="primary.contrastText"
              fontWeight="500"
            >
              2024
            </Typography>
            <Typography variant="h3" flex={1} fontWeight="600">
              Gameofgo — Coming soon
            </Typography>
            <Typography
              variant="body1"
              fontWeight="300"
              className="hidden sm:block"
            >
              Principal Designer
            </Typography>
            <ArrowUpRight size={32} strokeWidth={1} color="rgba(2, 4, 5, 0.35)" />
          </Box>
          {earlierProjects.map((project, index) => (
            <Link
              key={project.id}
              href={`/work/${project.id}`}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseMove={updateCursor}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Box
                className={`group flex items-center gap-4 px-6 py-6 ${
                  index < earlierProjects.length - 1
                    ? "border-b border-solid border-[#e5e7eb]"
                    : ""
                }`}
                sx={{
                  transition: "background-color 150ms ease",
                  "&:hover": { backgroundColor: "rgba(166, 38, 24, 0.04)" },
                }}
              >
                <Typography
                  variant="h4"
                  width={64}
                  flexShrink={0}
                  color="primary.contrastText"
                  fontWeight="500"
                >
                  {project.year.split("-")[0]}
                </Typography>
                <Typography
                  variant="h3"
                  flex={1}
                  fontWeight="600"
                  className="transition-colors duration-150 group-hover:text-[#A72618]"
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body1"
                  fontWeight="300"
                  className="hidden sm:block"
                >
                  {project.role}
                </Typography>
                <ArrowUpRight
                  size={32}
                  strokeWidth={1}
                  className="h-8 w-8 transition-[width,height] duration-150 group-hover:h-9 group-hover:w-9"
                />
              </Box>
            </Link>
          ))}
        </Box>
      </Stack>

      <ReachOutSection />

      <AnimatePresence>
        {hoveredProject && (
          <Box
            aria-hidden
            className="pointer-events-none fixed z-50 hidden md:block"
            sx={{
              left: Math.min(cursor.x + 20, window.innerWidth - 260),
              top: Math.min(cursor.y + 20, window.innerHeight - 180),
            }}
          >
            <motion.div
              key={hoveredProject.id}
              initial={{ opacity: 0, y: 12, scale: 0.8 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { type: "spring", stiffness: 180, damping: 18 },
              }}
              exit={{ opacity: 0, y: 12, scale: 0.8 }}
              style={{ rotate: previewRotate, x: previewTranslateX }}
              className="w-60 overflow-hidden shadow-xl"
            >
              <Image
                src={hoveredProject.image}
                alt=""
                width={424}
                height={288}
                className="h-auto w-full"
              />
            </motion.div>
          </Box>
        )}
      </AnimatePresence>
    </Stack>
  );
};

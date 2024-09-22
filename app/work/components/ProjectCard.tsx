"use client";

import React from "react";
import LockIcon from "@/public/images/lock-icon.svg";
import { Box, Typography } from "@mui/material";
import { Project } from "@/app/types/project";
import Link from "next/link";
import Image from "next/image";

interface ProjectsProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectsProps) {
  return (
    <Link href={`/work/${project.id}`}>
      <Box
        className={`relative bg-white ${index % 2 !== 0 ? "md:mt-10 lg:mt-12" : ""}`}
      >
        <Box
          sx={{
            "&:hover": {
              cursor: "pointer",
              "& .img": {
                transform: "scale(1.05)",
              },
            },
          }}
        >
          {project.image && (
            <div className="relative mb-4">
              <div className="relative w-full aspect-[424/288] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full transition-transform duration-300 img"
                  width={424}
                  height={288}
                />
                {project.locked && (
                  <div className="absolute top-5 right-5 z-50">
                    <LockIcon width={36} height={37} />
                  </div>
                )}
              </div>
            </div>
          )}

          <Typography variant="h4" fontWeight="600" lineHeight="24px" mb={0.5}>
            {project.title}
          </Typography>

          <Typography
            variant="h5"
            fontWeight="500"
            lineHeight="18px"
            color="primary.contrastText"
            mb={1}
          >
            {project.year}
          </Typography>

          <Typography variant="body1" fontWeight="300">
            {project.description}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}

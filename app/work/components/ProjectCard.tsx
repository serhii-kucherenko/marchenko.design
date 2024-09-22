"use client";

import React from "react";
import LockIcon from "@/public/images/lock-icon.svg";
import { Typography } from "@mui/material";
import { Project } from "@/app/types/project";

interface ProjectsProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectsProps) {
  return (
    <div
      className={`relative bg-white ${index % 2 !== 0 ? "md:mt-10 lg:mt-12" : ""}`}
    >
      {project.image && (
        <div
          className="relative mb-4 w-full h-[216px] lg:h-[288px] hover:scale-105 cursor-pointer transition-transform duration-300"
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/*<img*/}
          {/*  src={project.image}*/}
          {/*  alt={project.title}*/}
          {/*  className="object-cover object-center"*/}
          {/*/>*/}

          {project.locked && (
            <div className="absolute top-5 right-5 z-50">
              <LockIcon width={36} height={37} />
            </div>
          )}
        </div>
      )}

      <Typography variant="h4" fontWeight="600" lineHeight="24px" mb={0.5}>
        {project.title}
      </Typography>

      <Typography variant="h5" fontWeight="500" lineHeight="22px" mb={1}>
        {project.year}
      </Typography>

      <Typography variant="body1" fontWeight="300">
        {project.description}
      </Typography>
    </div>
  );
}

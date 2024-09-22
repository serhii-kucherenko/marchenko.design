import React from "react";

import { PROJECTS_DATA } from "@/app/types/project";
import { ProjectCard } from "@/app/work/components/ProjectCard";

export const Projects: React.FC = () => {
  return (
    <div className="min-h-screen z-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12 sm:gap-y-24">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard project={project} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

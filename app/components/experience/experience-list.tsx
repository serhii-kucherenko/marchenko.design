import React from "react";
import { experience } from "./experience.data";
import { ExperienceItem } from "./experience-item";
import { InfoSection } from "../info-section";

export const ExperienceList: React.FC = () => {
  return (
    <InfoSection title="Experience">
      {experience.map((exp, index) => (
        <ExperienceItem
          key={index}
          title={exp.title}
          date={exp.date}
          bulletPoints={exp.bulletPoints}
        />
      ))}
    </InfoSection>
  );
};

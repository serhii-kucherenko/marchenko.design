import { Typography, useTheme } from "@mui/material";
import React from "react";
import { InfoSection } from "./info-section";

export const Skills: React.FC = () => {
  const theme = useTheme();

  return (
    <InfoSection title="Skills">
      <Typography variant="h4" fontWeight={600} pb={1}>
        UI/UX Design expertise • Design Thinking • User Centric Design •
        Usability Testing • Problem Solving • Project Management • Process
        Improvement • Decision Making • Research&Analytics • Mentoring • Team
        Collaboration • Natural Leadership
      </Typography>
    </InfoSection>
  );
};

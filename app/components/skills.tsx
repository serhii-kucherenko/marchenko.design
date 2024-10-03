import { Typography } from "@mui/material";
import React from "react";
import { InfoSection } from "./info-section";

export const Skills: React.FC = () => {
  return (
    <InfoSection title="Skills">
      <Typography variant="h5" fontWeight={600} pb={1} lineHeight="32px">
        UI/UX design expertise • Design thinking • User-centric design •
        Usability testing • Problem solving • Project management • Process
        improvement • Decision making • Research & analytics • Mentoring • Team
        collaboration • Natural leadership
      </Typography>
    </InfoSection>
  );
};

import { Typography } from "@mui/material";
import React from "react";
import { InfoSection } from "./info-section";

export const Skills: React.FC = () => {
  return (
    <InfoSection title="Skills">
      <Typography variant="h5" component="p" fontWeight={600} pb={1} lineHeight="32px">
        Product strategy • Stakeholder alignment • Interaction design •
        Information architecture • Web & mobile design • User research •
        Usability testing • Design systems • Mentoring
      </Typography>
    </InfoSection>
  );
};

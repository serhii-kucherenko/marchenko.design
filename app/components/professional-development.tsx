import { Typography } from "@mui/material";
import React from "react";
import { InfoSection } from "./info-section";

export const ProfessionalDevelopment: React.FC = () => {
  return (
    <InfoSection title="Professional Development">
      <Typography variant="h5" component="p" fontWeight={600} pb={1} lineHeight="32px">
        Strategic Communication (Stanford GSB Lecturer) • Google Stakeholder
        Management • Dare to Lead™ Trained • UBC Sauder Business Fundamentals •
        Designing for complex UI • multiple certifications from Interaction
        Design Foundation
      </Typography>
    </InfoSection>
  );
};

import { Stack, Typography } from "@mui/material";
import React from "react";
import { InfoSection } from "./info-section";

export const Education: React.FC = () => {
  return (
    <InfoSection title="Education & Courses">
      <Stack>
        <Typography variant="h4" fontWeight={600} pb={1}>
          Dare to Lead Trained
        </Typography>
        <Typography variant="h5" color="primary.contrastText" pb={2}>
          Douglas College
        </Typography>
        <Typography variant="h4" fontWeight={600} pb={1}>
          Professional Certificate in Business Fundamentals
        </Typography>
        <Typography variant="h5" color="primary.contrastText" pb={2}>
          UBC Sauder School of Business
        </Typography>
        <Typography variant="h4" fontWeight={600} pb={1}>
          Master of Business Administration
        </Typography>
        <Typography variant="h5" color="primary.contrastText" pb={2}>
          Lviv Polytechnic National University
        </Typography>
        <Typography variant="h4" fontWeight={600} pb={1}>
          Bachelor&apos;s Degree in Information Services
        </Typography>
        <Typography variant="h5" color="primary.contrastText" pb={2}>
          Odessa National Polytechnic University
        </Typography>
        <Typography variant="h4" fontWeight={600} pb={1}>
          Fine Arts (Extracurricular Education)
        </Typography>
        <Typography variant="h5" color="primary.contrastText" pb={2}>
          School of Arts, Odessa
        </Typography>
        <Typography
          variant="h5"
          fontWeight={600}
          pb={1}
          mt={2}
          lineHeight="36px"
        >
          Designing for complex UI • Build persuasive products • User research
          (IDF) • Mobile UX design (IDF) • Mobile UI / UX design • Web
          development • Commercial illustration • Brand identity
        </Typography>
      </Stack>
    </InfoSection>
  );
};

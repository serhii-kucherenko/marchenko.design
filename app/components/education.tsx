import { Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { InfoSection } from "./info-section";

export const Education: React.FC = () => {
  const theme = useTheme();

  return (
    <InfoSection title="Education & Courses">
      <Stack>
        <Typography variant="h4" fontWeight={600} pb={1}>
          Master of Business Administration 2016 - 2017
        </Typography>
        <Typography variant="h5" color="text.secondary" pb={2}>
          Lviv Polytechnic National University
        </Typography>
        <Typography variant="h4" fontWeight={600} pb={1}>
          Bachelor's degree in Information services 2012-2016
        </Typography>
        <Typography variant="h5" color="text.secondary" pb={2}>
          Odessa National Polytechnic University
        </Typography>
        <Typography variant="h4" fontWeight={600} pb={1}>
          Class of Fine Arts 2001-2007
        </Typography>
        <Typography variant="h5" color="text.secondary" pb={2}>
          School of Arts, Odessa
        </Typography>
        <Typography variant="h4" fontWeight={600} pb={1}>
          Designing for complex UI • Build persuasive products • User research
          (IDF) • Mobile UX Design (IDF) • Mobile UI / UX design • Web
          development • Commercial illustration • Brand identity
        </Typography>
      </Stack>
    </InfoSection>
  );
};

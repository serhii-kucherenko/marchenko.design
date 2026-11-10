import { Stack, Typography } from "@mui/material";
import React from "react";
import { InfoSection } from "./info-section";

export const Education: React.FC = () => {
  return (
    <InfoSection title="Education">
      <Stack>
        <Typography variant="h4" component="h3" fontWeight={600} pb={1}>
          Master of Business Administration
        </Typography>
        <Typography variant="h5" component="p" color="primary.contrastText" pb={2}>
          Lviv Polytechnic National University
        </Typography>
        <Typography variant="h4" component="h3" fontWeight={600} pb={1}>
          Bachelor&apos;s Degree in Information Services
        </Typography>
        <Typography variant="h5" component="p" color="primary.contrastText" pb={2}>
          Odessa National Polytechnic University
        </Typography>
        <Typography variant="h4" component="h3" fontWeight={600} pb={1}>
          Fine Arts (6-year program, extracurricular education)
        </Typography>
        <Typography variant="h5" component="p" color="primary.contrastText" pb={2}>
          School of Arts, Odessa
        </Typography>
      </Stack>
    </InfoSection>
  );
};

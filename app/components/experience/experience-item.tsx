import { Box, Typography } from "@mui/material";
import React from "react";

interface ExperienceProps {
  title: string;
  date: string;
  bulletPoints: string[];
}

export const ExperienceItem: React.FC<ExperienceProps> = ({
  title,
  date,
  bulletPoints,
}) => {
  return (
    <Box>
      <Typography variant="h4" fontWeight={600} pb={0.25}>
        {title}
      </Typography>
      <Typography variant="h5" color="primary.contrastText" pb={2}>
        {date}
      </Typography>
      <ul
        style={{
          paddingLeft: "20px",
        }}
      >
        {bulletPoints.map((bulletPoint, index) => (
          <li
            key={index}
            style={{
              listStyleType: "disc",
            }}
          >
            <Typography variant="body1" fontWeight={300}>
              {bulletPoint}
            </Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
};

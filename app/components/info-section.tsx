import { Stack, Typography, useTheme } from "@mui/material";
import React from "react";

interface IExperience {
  title: string;
  children: React.ReactNode;
}

export const InfoSection: React.FC<IExperience> = ({ title, children }) => {
  const theme = useTheme();

  return (
    <Stack>
      <Typography
        variant="h3"
        textTransform="uppercase"
        color="primary.contrastText"
        mb={2}
      >
        {title}
      </Typography>

      <Stack
        sx={{
          [theme.breakpoints.up("xs")]: {
            rowGap: 4,
          },
          [theme.breakpoints.up("sm")]: {
            pl: 3,
          },
          [theme.breakpoints.up("md")]: {
            rowGap: 6,
            pl: 6,
          },
        }}
      >
        {children}
      </Stack>
    </Stack>
  );
};

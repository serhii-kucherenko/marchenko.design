import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import CVIcon from "../../public/images/cv-icon.svg";
import CVMobileIcon from "../../public/images/cv-icon-mobile.svg";

export const CVCircle: React.FC = () => {
  const theme = useTheme();
  const isSMAndDown = useMediaQuery(theme.breakpoints.down("sm"));
  const size = isSMAndDown ? 160 : 200;

  if (isSMAndDown) {
    return (
      <Box
        sx={{
          position: "absolute",
          top: -70,
          right: -50,
          width: 160,
          height: 160,
        }}
        className="animate-spin-slow"
      >
        <CVMobileIcon width="160" height="160" />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        position: "absolute",
        top: -80,
        right: 48,
        width: size,
        height: size,
      }}
      className="animate-spin-slow"
    >
      <CVIcon width="200" height="200" />
    </Box>
  );
};

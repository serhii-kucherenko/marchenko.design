import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import BackIcon from "../../public/images/back-icon.svg";
import BackIconMobile from "../../public/images/back-icon-mobile.svg";

export const BackButton: React.FC = () => {
  const theme = useTheme();
  const isSMAndDown = useMediaQuery(theme.breakpoints.down("sm"));
  const size = isSMAndDown ? 160 : 200;

  if (isSMAndDown) {
    return (
      <Box
        sx={{
          position: "absolute",
          top: -72,
          right: -25,
          width: 160,
          height: 160,
        }}
      >
        <BackIconMobile width="160" height="160" />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        position: "absolute",
        top: -64,
        right: 48,
        width: size,
        height: size,
      }}
    >
      <BackIcon width="200" height="200" />
    </Box>
  );
};

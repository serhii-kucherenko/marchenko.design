import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";

export const ProfileAvatar: React.FC = () => {
  const theme = useTheme();
  const isMDAndDown = useMediaQuery(theme.breakpoints.down("md"));

  return isMDAndDown ? (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <img
        src="/images/avatar.png"
        alt="avatar"
        style={{ width: "100%", objectFit: "contain", objectPosition: "top" }}
      />
    </Box>
  ) : (
    <img
      src="/images/avatar.png"
      alt="avatar"
      style={{
        width: 424,
        height: 512,
      }}
    />
  );
};

import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

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
      <Image
        src="/images/avatar.png"
        alt="avatar"
        width={424}
        height={512}
        style={{ width: "100%", objectFit: "contain", objectPosition: "top" }}
      />
    </Box>
  ) : (
    <Image src="/images/avatar.png" alt="avatar" width={424} height={512} />
  );
};

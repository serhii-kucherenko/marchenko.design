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
        src="/images/cv_photo.png"
        alt="avatar"
        width={200}
        height={224}
        style={{
          width: 200,
          height: 224,
          objectFit: "cover",
          objectPosition: "top",
        }}
      />
    </Box>
  ) : (
    <Image
      src="/images/cv_photo.png"
      alt="avatar"
      width={200}
      height={224}
      style={{
        width: 200,
        height: 224,
        objectFit: "cover",
        objectPosition: "top",
      }}
    />
  );
};

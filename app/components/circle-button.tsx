import { Box, SxProps, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

interface IProps {
  mobileSX?: SxProps;
  desktopSX?: SxProps;
  mobileImageUrl: string;
  desktopImageUrl: string;
  className?: string;
}

export const CircleButton: React.FC<IProps> = ({
  mobileSX,
  desktopSX,
  mobileImageUrl,
  desktopImageUrl,
  className = "",
}) => {
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
          width: size,
          height: size,
          backgroundImage: `url(${mobileImageUrl}.svg)`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderRadius: "50%",

          "&:hover": {
            backgroundImage: `url(/images/${mobileImageUrl}-hover.svg)`,
          },

          ...mobileSX,
        }}
        className={className}
      />
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
        backgroundImage: `url(${desktopImageUrl}.svg)`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: "50%",

        "&:hover": {
          backgroundImage: `url(${desktopImageUrl}-hover.svg)`,
        },

        ...desktopSX,
      }}
      className={className}
    />
  );
};

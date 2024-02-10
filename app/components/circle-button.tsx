import { Box, SxProps, useMediaQuery, useTheme } from "@mui/material";
import React, { ReactNode } from "react";

interface IProps {
  mobileSX?: SxProps;
  desktopSX?: SxProps;
  mobileImage: (props: { width: number; height: number }) => ReactNode;
  desktopImage: (props: { width: number; height: number }) => ReactNode;
  className?: string;
}

export const CircleButton: React.FC<IProps> = ({
  mobileSX,
  desktopSX,
  mobileImage,
  desktopImage,
  className = "",
}) => {
  const theme = useTheme();
  const isSMAndDown = useMediaQuery(theme.breakpoints.down("sm"));
  const size = isSMAndDown ? 160 : 200;
  const styles: SxProps = {
    position: "absolute",
    width: size,
    height: size,
    borderRadius: "50%",

    "&:hover .colored": {
      fill: theme.palette.primary.dark,
    },
  };

  if (isSMAndDown) {
    return (
      <Box
        sx={{
          ...styles,
          ...mobileSX,
        }}
        className={className}
      >
        {mobileImage({
          width: size,
          height: size,
        })}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        ...styles,
        ...desktopSX,
      }}
      className={className}
    >
      {desktopImage({
        width: size,
        height: size,
      })}
    </Box>
  );
};

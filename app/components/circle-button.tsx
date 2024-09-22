import { Box, SxProps, useMediaQuery, useTheme } from "@mui/material";
import React, { ReactNode } from "react";
import { Breakpoint } from "@mui/system/createTheme/createBreakpoints";

interface IProps {
  mobileSX?: SxProps;
  desktopSX?: SxProps;
  mobileImage: (props: { width: number; height: number }) => ReactNode;
  desktopImage: (props: { width: number; height: number }) => ReactNode;
  className?: string;
  hoverColor: string;
  breakpointAndDown?: Breakpoint;
}

export const CircleButton: React.FC<IProps> = ({
  mobileSX,
  desktopSX,
  mobileImage,
  desktopImage,
  className = "",
  hoverColor,
  breakpointAndDown = "sm",
}) => {
  const theme = useTheme();
  const isXAndDown = useMediaQuery(theme.breakpoints.down(breakpointAndDown));
  const size = isXAndDown ? 160 : 200;
  const styles: SxProps = {
    position: "absolute",
    width: size,
    height: size,
    borderRadius: "50%",
    zIndex: 1,

    "&:hover svg, &:hover .colored": {
      fill: hoverColor,
    },
  };

  if (isXAndDown) {
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

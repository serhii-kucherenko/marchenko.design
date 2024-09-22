import { SxProps } from "@mui/material";
import React, { ReactNode } from "react";
import { CircleButton } from "./circle-button";
import { Breakpoint } from "@mui/system/createTheme/createBreakpoints";

interface IProps {
  mobileSX?: SxProps;
  desktopSX?: SxProps;
  mobileImage: (props: { width: number; height: number }) => ReactNode;
  desktopImage: (props: { width: number; height: number }) => ReactNode;
  hoverColor: string;
  breakpointAndDown?: Breakpoint;
}

export const AnimatedCircleButton: React.FC<IProps> = (props) => {
  return <CircleButton {...props} className="animate-spin-slow" />;
};

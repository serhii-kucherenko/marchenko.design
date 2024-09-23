import { SxProps } from "@mui/material";
import React, { ReactNode } from "react";
import { CircleButton } from "./circle-button";
import { Breakpoint } from "@mui/system/createTheme/createBreakpoints";
import { cn } from "@/lib/utils";

interface IProps {
  mobileSX?: SxProps;
  desktopSX?: SxProps;
  mobileImage: (props: { width: number; height: number }) => ReactNode;
  desktopImage: (props: { width: number; height: number }) => ReactNode;
  hoverColor?: string;
  breakpointAndDown?: Breakpoint;
  className?: string;
}

export const AnimatedCircleButton: React.FC<IProps> = ({
  className,
  ...props
}) => {
  return (
    <CircleButton {...props} className={cn("animate-spin-slow", className)} />
  );
};

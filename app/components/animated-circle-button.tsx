import { SxProps } from "@mui/material";
import React, { ReactNode } from "react";
import { CircleButton } from "./circle-button";

interface IProps {
  mobileSX?: SxProps;
  desktopSX?: SxProps;
  mobileImage: (props: { width: number; height: number }) => ReactNode;
  desktopImage: (props: { width: number; height: number }) => ReactNode;
}

export const AnimatedCircleButton: React.FC<IProps> = (props) => {
  return <CircleButton {...props} className="animate-spin-slow" />;
};

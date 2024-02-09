import { SxProps } from "@mui/material";
import React from "react";
import { CircleButton } from "./circle-button";

interface IProps {
  mobileSX?: SxProps;
  desktopSX?: SxProps;
  mobileImageUrl: string;
  desktopImageUrl: string;
}

export const AnimatedCircleButton: React.FC<IProps> = (props) => {
  return <CircleButton {...props} className="animate-spin-slow" />;
};

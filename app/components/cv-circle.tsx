import React from "react";
import { AnimatedCircleButton } from "./animated-circle-button";
import Link from "next/link";
import CircleIcon from "../../public/images/cv-icon.svg";
import CircleIconMobile from "../../public/images/cv-icon-mobile.svg";
import { useTheme } from "@mui/material";
import { getCircleButtonSX } from "@/utils/get-circle-button-sx";
import { Breakpoint } from "@mui/system/createTheme/createBreakpoints";

interface IProps {
  position?: "top" | "left";
  breakpointAndDown?: Breakpoint;
}

export const CVCircle: React.FC<IProps> = ({
  position = "top",
  breakpointAndDown,
}) => {
  const { mobileSX, desktopSX } = getCircleButtonSX(position);

  const theme = useTheme();

  return (
    <Link href="/cv" aria-label="View CV">
      <AnimatedCircleButton
        hoverColor={theme.palette.primary.dark}
        mobileImage={CircleIconMobile}
        desktopImage={CircleIcon}
        mobileSX={mobileSX}
        desktopSX={desktopSX}
        breakpointAndDown={breakpointAndDown}
      />
    </Link>
  );
};

import React from "react";
import AboutIcon from "../../public/images/about-icon.svg";
import AboutIconMobile from "../../public/images/about-icon-mobile.svg";
import Link from "next/link";
import { AnimatedCircleButton } from "@/app/components/animated-circle-button";
import { getCircleButtonSX } from "@/utils/get-circle-button-sx";
import { Breakpoint } from "@mui/system/createTheme/createBreakpoints";

interface IProps {
  position?: "top" | "left";
  breakpointAndDown?: Breakpoint;
}

export const AboutButton: React.FC<IProps> = ({
  position = "top",
  breakpointAndDown,
}) => {
  const { mobileSX, desktopSX } = getCircleButtonSX(position);

  return (
    <Link href="/">
      <AnimatedCircleButton
        hoverColor="#A726181A"
        mobileImage={AboutIconMobile}
        desktopImage={AboutIcon}
        mobileSX={mobileSX}
        desktopSX={desktopSX}
        breakpointAndDown={breakpointAndDown}
      />
    </Link>
  );
};

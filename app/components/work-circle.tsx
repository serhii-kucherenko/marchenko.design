import React from "react";
import { AnimatedCircleButton } from "./animated-circle-button";
import WorkIcon from "../../public/images/work-icon.svg";
import WorkIconMobile from "../../public/images/work-icon-mobile.svg";
import Link from "next/link";
import { getCircleButtonSX } from "@/utils/get-circle-button-sx";

interface IProps {
  position?: "top" | "left";
}

export const WorkCircle: React.FC<IProps> = ({ position = "top" }) => {
  const { mobileSX, desktopSX } = getCircleButtonSX(position);

  return (
    <Link href="/work">
      <AnimatedCircleButton
        hoverColor="#A726181A"
        desktopImage={WorkIcon}
        mobileImage={WorkIconMobile}
        mobileSX={mobileSX}
        desktopSX={desktopSX}
        breakpointAndDown="md"
      />
    </Link>
  );
};

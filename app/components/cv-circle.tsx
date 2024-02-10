import React from "react";
import { AnimatedCircleButton } from "./animated-circle-button";
import Link from "next/link";
import CircleIcon from "../../public/images/cv-icon.svg";
import CircleIconMobile from "../../public/images/cv-icon-mobile.svg";

export const CVCircle: React.FC = () => {
  return (
    <Link href="/cv">
      <AnimatedCircleButton
        mobileImage={CircleIconMobile}
        desktopImage={CircleIcon}
        desktopSX={{
          top: -64,
          right: 48,
        }}
        mobileSX={{
          top: -72,
          right: -25,
        }}
      />
    </Link>
  );
};

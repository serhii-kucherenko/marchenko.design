import React from "react";
import { AnimatedCircleButton } from "./animated-circle-button";
import ComingSoonIcon from "../../public/images/coming-soon-icon.svg";
import ComingSoonIconMobile from "../../public/images/coming-soon-icon-mobile.svg";

export const ComingSoonCircle: React.FC = () => {
  return (
    <AnimatedCircleButton
      desktopImage={ComingSoonIcon}
      mobileImage={ComingSoonIconMobile}
      mobileSX={{
        zIndex: 99,
        top: 272,
        left: -100,
      }}
      desktopSX={{
        zIndex: 99,
        top: 227,
        left: -100,
      }}
    />
  );
};

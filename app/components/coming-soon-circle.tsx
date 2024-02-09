import React from "react";
import { AnimatedCircleButton } from "./animated-circle-button";

export const ComingSoonCircle: React.FC = () => {
  return (
    <AnimatedCircleButton
      mobileImageUrl="/images/coming-soon-icon-mobile"
      desktopImageUrl="/images/coming-soon-icon"
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

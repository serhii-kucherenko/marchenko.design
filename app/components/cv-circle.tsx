import React from "react";
import { AnimatedCircleButton } from "./animated-circle-button";
import Link from "next/link";

export const CVCircle: React.FC = () => {
  return (
    <Link href="/cv">
      <AnimatedCircleButton
        mobileImageUrl="/images/cv-icon-mobile"
        desktopImageUrl="/images/cv-icon"
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

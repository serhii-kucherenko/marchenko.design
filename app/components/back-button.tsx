import React from "react";
import { CircleButton } from "./circle-button";

export const BackButton: React.FC = () => {
  return (
    <CircleButton
      mobileImageUrl="/images/back-icon-mobile"
      desktopImageUrl="/images/back-icon"
      mobileSX={{
        zIndex: 99,
        top: -72,
        right: -25,
      }}
      desktopSX={{
        zIndex: 99,
        top: -64,
        right: 48,
      }}
    />
  );
};

import React from "react";
import { CircleButton } from "./circle-button";
import BackIcon from "../../public/images/back-icon.svg";
import BackIconMobile from "../../public/images/back-icon-mobile.svg";

export const BackButton: React.FC = () => {
  return (
    <CircleButton
      mobileImage={BackIconMobile}
      desktopImage={BackIcon}
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

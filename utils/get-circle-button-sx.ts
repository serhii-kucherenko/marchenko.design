export const getCircleButtonSX = (position: "top" | "left") => {
  const mobileSXLeft = {
    zIndex: 1,
    top: 272,
    left: -100,
  };
  const desktopSXLeft = {
    zIndex: 1,
    top: 227,
    left: -100,
  };

  const mobileSXTop = {
    zIndex: 1,
    top: -72,
    right: -25,
  };

  const desktopSXTop = {
    zIndex: 1,
    top: -64,
    right: 48,
  };

  return {
    mobileSX: position === "top" ? mobileSXTop : mobileSXLeft,
    desktopSX: position === "top" ? desktopSXTop : desktopSXLeft,
  };
};

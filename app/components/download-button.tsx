import React from "react";
import DownloadIcon from "../../public/images/download-button.svg";
import { Box, SxProps, useMediaQuery, useTheme } from "@mui/material";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

export const DownloadButton: React.FC = () => {
  const theme = useTheme();
  const isSMAndDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mobileStyles = {
    right: 30,
    bottom: 30,
  };
  const desktopStyles = {};

  const styles: SxProps = {
    position: "fixed",
    right: 96,
    bottom: 48,

    ...(isSMAndDown ? mobileStyles : desktopStyles),
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Marchenko-Anastasiia-CV.pdf";
    link.download = "Marchenko-Anastasiia-CV.pdf";
    link.click();
  };

  if (isSMAndDown) {
    return (
      <Box sx={styles}>
        <div>
          <DownloadIcon
            width={48}
            height={48}
            className="cursor-pointer w-full h-full"
            onClick={downloadCV}
          />
        </div>
      </Box>
    );
  }

  return (
    <Box sx={styles}>
      <AnimatedTooltip
        items={[
          {
            id: 1,
            name: "Download CV",
            image: "/images/download-button.svg",
            imageClassName: "cursor-pointer",
            onClick: downloadCV,
          },
        ]}
      />
    </Box>
  );
};

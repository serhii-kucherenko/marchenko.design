import { Typography, useTheme } from "@mui/material";
import React from "react";
import { InfoSection } from "./info-section";
import Link from "next/link";

export const Contributions: React.FC = () => {
  const theme = useTheme();

  return (
    <InfoSection title="Contributions">
      <ul
        style={{
          paddingLeft: "20px",
        }}
      >
        <li
          style={{
            listStyleType: "disc",
          }}
        >
          <Typography variant="body1" fontWeight={300}>
            Gathered{" "}
            <Typography
              variant="body1"
              fontWeight={300}
              component={Link}
              href="https://www.windmill.digital/playbooks/the-design-sprint-playbook/"
              target="_blank"
            >
              The Design Sprint Playbook
            </Typography>
          </Typography>
        </li>
        <li
          style={{
            listStyleType: "disc",
          }}
        >
          <Typography variant="body1" fontWeight={300}>
            Sharing various templates with the Figma{" "}
            <Typography
              variant="body1"
              fontWeight={300}
              component={Link}
              href="https://www.figma.com/@anamarchenko"
              target="_blank"
            >
              community
            </Typography>
          </Typography>
        </li>
      </ul>
    </InfoSection>
  );
};

import { Link, Typography } from "@mui/material";
import React from "react";
import { InfoSection } from "./info-section";

export const Contributions: React.FC = () => {
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
              fontWeight={600}
              component={Link}
              href="https://www.windmill.digital/playbooks/the-design-sprint-playbook/"
              target="_blank"
            >
              The design sprint playbook
            </Typography>
          </Typography>
        </li>
        <li
          style={{
            listStyleType: "disc",
          }}
        >
          <Typography variant="body1" fontWeight={300}>
            Sharing various templates with the{" "}
            <Typography
              variant="body1"
              fontWeight={600}
              component={Link}
              href="https://www.figma.com/@anamarchenko"
              target="_blank"
            >
              Figma community
            </Typography>
          </Typography>
        </li>
      </ul>
    </InfoSection>
  );
};

import { Box, Link, Typography } from "@mui/material";
import React from "react";

interface ExperienceProps {
  title: string;
  date: string;
  bulletPoints: string[];
}

const renderBulletPoint = (bulletPoint: string) => {
  const linkMatch = bulletPoint.match(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/);

  if (!linkMatch || linkMatch.index === undefined) {
    return bulletPoint;
  }

  const [matchedLink, label, href] = linkMatch;
  const before = bulletPoint.slice(0, linkMatch.index);
  const after = bulletPoint.slice(linkMatch.index + matchedLink.length);

  return (
    <>
      {before}
      <Typography
        variant="body1"
        fontWeight={600}
        component={Link}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {label}
      </Typography>
      {after}
    </>
  );
};

export const ExperienceItem: React.FC<ExperienceProps> = ({
  title,
  date,
  bulletPoints,
}) => {
  return (
    <Box>
      <Typography variant="h4" fontWeight={600} pb={0.25}>
        {title}
      </Typography>
      <Typography variant="h5" color="primary.contrastText" pb={2}>
        {date}
      </Typography>
      {bulletPoints.length > 0 && (
        <ul
          style={{
            paddingLeft: "20px",
          }}
        >
          {bulletPoints.map((bulletPoint, index) => (
            <li
              key={index}
              style={{
                listStyleType: "disc",
              }}
            >
              <Typography variant="body1" fontWeight={300}>
                {renderBulletPoint(bulletPoint)}
              </Typography>
            </li>
          ))}
        </ul>
      )}
    </Box>
  );
};

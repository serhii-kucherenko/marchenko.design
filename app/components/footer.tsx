import { Box, Link, Stack, Typography, useTheme } from "@mui/material";
import React from "react";

export const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <footer>
      <Stack
        sx={{
          [theme.breakpoints.up("sm")]: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            px: 3,
          },

          [theme.breakpoints.up("md")]: {
            px: 6,
          },
        }}
      >
        <Stack
          sx={{
            mb: 3,
            [theme.breakpoints.up("sm")]: {
              mb: 0,
            },
          }}
        >
          <Typography
            variant="body2"
            textTransform="uppercase"
            color="primary.contrastText"
            sx={{
              mb: 1,
            }}
          >
            Find me on
          </Typography>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography
              variant="body2"
              textTransform="uppercase"
              color="primary.contrastText"
              component={Link}
              href="https://www.linkedin.com/in/anastasiia-marchenko/"
              target="_blank"
              sx={{
                textDecorationColor: (theme) => theme.palette.text.secondary,
              }}
            >
              Linkedin
            </Typography>
            <Typography
              variant="body2"
              textTransform="uppercase"
              color="primary.contrastText"
              sx={{
                px: 1,
              }}
            >
              |
            </Typography>
            <Typography
              variant="body2"
              textTransform="uppercase"
              color="primary.contrastText"
              component={Link}
              href="https://www.figma.com/@anamarchenko"
              target="_blank"
              sx={{
                textDecorationColor: (theme) => theme.palette.text.secondary,
              }}
            >
              Figma
            </Typography>
            <Typography
              variant="body2"
              textTransform="uppercase"
              color="primary.contrastText"
              sx={{
                px: 1,
              }}
            >
              |
            </Typography>
            <Typography
              variant="body2"
              textTransform="uppercase"
              color="primary.contrastText"
              component={Link}
              href="https://dribbble.com/A_March"
              target="_blank"
              sx={{
                textDecorationColor: (theme) => theme.palette.text.secondary,
              }}
            >
              Dribbble
            </Typography>
          </Box>
        </Stack>
        <Typography
          variant="body2"
          textTransform="uppercase"
          color="primary.contrastText"
          sx={{
            [theme.breakpoints.down("xs")]: {
              mb: 1,
            },
          }}
        >
          {new Date().getFullYear()} @ ALL RIGHTS RESERVED
        </Typography>
      </Stack>
    </footer>
  );
};

import {
  Box,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

export const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <footer>
      <Stack
        sx={{
          [theme.breakpoints.up("md")]: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            px: 3,
          },
        }}
      >
        <Stack
          sx={{
            [theme.breakpoints.down("sm")]: {
              mb: 3,
            },
          }}
        >
          <Typography
            variant="body2"
            textTransform="uppercase"
            color="text.secondary"
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
              color="text.secondary"
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
              color="text.secondary"
              sx={{
                px: 1,
              }}
            >
              |
            </Typography>
            <Typography
              variant="body2"
              textTransform="uppercase"
              color="text.secondary"
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
              color="text.secondary"
              sx={{
                px: 1,
              }}
            >
              |
            </Typography>
            <Typography
              variant="body2"
              textTransform="uppercase"
              color="text.secondary"
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
          color="text.secondary"
          sx={{
            mb: 1,
          }}
        >
          {new Date().getFullYear()} @ ALL RIGHTS RESERVED
        </Typography>
      </Stack>
    </footer>
  );
};

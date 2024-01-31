"use client";

import {
  Box,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { Footer } from "./footer";
import { PropsWithChildren } from "react";

interface IProps {
  floatButton?: React.ReactNode;
  subHeading?: React.ReactNode;
}

export const PageLayout: React.FC<PropsWithChildren<IProps>> = ({
  floatButton,
  subHeading,
  children,
}) => {
  const theme = useTheme();
  const isSMAndDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: 1,
      }}
      className="fadeIn"
    >
      <Stack sx={{ maxWidth: 872, width: 1 }}>
        <Stack sx={{ position: "relative" }}>
          {floatButton}
          <Stack
            sx={{
              [theme.breakpoints.up("xs")]: {
                pt: "112px",
                px: "32px",
              },
              [theme.breakpoints.up("sm")]: {
                pt: "168px",
                px: "48px",
              },
              [theme.breakpoints.up("md")]: {
                pt: "88px",
                px: 0,
              },
            }}
          >
            <Stack
              sx={{
                paddingBottom: subHeading ? 0 : isSMAndDown ? 3 : 6,

                [theme.breakpoints.up("xs")]: {
                  px: 2,
                },
                [theme.breakpoints.up("md")]: {
                  px: 6,
                },
              }}
            >
              <Typography
                variant="subtitle2"
                textTransform="uppercase"
                color="text.secondary"
              >
                Lead Product Designer
              </Typography>
              <Typography variant="h1">Marchenko Anastasiia</Typography>
            </Stack>
            {subHeading && (
              <Stack
                sx={{
                  paddingBottom: isSMAndDown ? 3 : 6,
                  pt: 2,

                  [theme.breakpoints.up("md")]: {
                    px: 6,
                  },
                }}
              >
                {subHeading}
              </Stack>
            )}

            <Box
              sx={{
                display: "flex",
                width: 1,

                [theme.breakpoints.up("xs")]: {
                  flexDirection: "column",
                },
                [theme.breakpoints.up("sm")]: {
                  flexDirection: "row",
                  gap: 3,
                },
                [theme.breakpoints.up("md")]: {
                  gap: 6,
                },
              }}
            >
              {children}
            </Box>

            <Divider
              sx={{
                mt: isSMAndDown ? 3 : 6,
                mb: 2,
                borderColor: "text.secondary",
              }}
            />

            <Footer />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

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
  floatSideButton?: React.ReactNode;
  subHeading?: React.ReactNode;
  title?: string;
  upperTitle?: string | React.ReactNode;
}

export const PageLayoutContainerless: React.FC<PropsWithChildren<IProps>> = ({
  title,
  upperTitle,
  floatButton,
  floatSideButton,
  subHeading,
  children,
}) => {
  const theme = useTheme();
  const isSMAndDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {floatSideButton && (
        <Stack
          sx={{
            position: "relative",
          }}
        >
          {floatSideButton}
        </Stack>
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: 1,

          [theme.breakpoints.up("xs")]: {
            pb: 5,
          },
          [theme.breakpoints.up("sm")]: {
            pb: 6,
          },
          [theme.breakpoints.up("md")]: {
            pb: 11,
          },
        }}
        className="animate-fadeIn bg-background min-h-screen"
      >
        <Stack
          sx={{
            width: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ position: "relative", width: 872 }}>{floatButton}</Box>
          <Stack
            sx={{
              alignItems: "center",

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
                paddingBottom: isSMAndDown ? 4 : 6,
                width: 1,
                maxWidth: 872,

                [theme.breakpoints.up("xs")]: {
                  px: 3,
                },
                [theme.breakpoints.up("md")]: {
                  px: 0,
                  pl: 6,
                },
              }}
            >
              {typeof upperTitle === "string" ? (
                <Typography
                  variant="subtitle2"
                  textTransform="uppercase"
                  color="text.secondary"
                  fontWeight="400"
                >
                  {upperTitle}
                </Typography>
              ) : (
                upperTitle
              )}
              <Typography variant="h1" fontWeight="500">
                {title}
              </Typography>
              {subHeading && (
                <Stack
                  sx={{
                    [theme.breakpoints.up("xs")]: {
                      pt: 2,
                    },
                    [theme.breakpoints.up("md")]: {
                      pt: 1,
                    },
                  }}
                >
                  {subHeading}
                </Stack>
              )}
            </Stack>

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
                mb: 2,
                borderColor: "text.secondary",
                maxWidth: 872,
                width: 1,
              }}
            />
            <Box sx={{ maxWidth: 872, width: 1 }}>
              <Footer />
            </Box>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

"use client";

import {
  Box,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { PageLayout } from "../components/page-layout";
import { AboutButton } from "../components/about-button";

import { CVCircle } from "@/app/components/cv-circle";
import { Projects } from "@/app/work/components/Projects";

export default function Home() {
  const theme = useTheme();
  const isMDAndDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <PageLayout
      title="Designing for impact"
      upperTitle="Selected works"
      floatSideButton={<AboutButton position="left" breakpointAndDown="md" />}
      floatButton={<CVCircle />}
      subHeading={
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 1,
            flexWrap: isMDAndDown ? "wrap" : "nowrap",
            rowGap: 0.5,

            [theme.breakpoints.up("xs")]: {
              width: "100%",
            },
            [theme.breakpoints.up("md")]: {
              width: "fit-content",
            },
          }}
        >
          <Typography
            variant="h4"
            fontSize="16px"
            fontWeight="500"
            sx={{
              [theme.breakpoints.up("xs")]: {
                width: "100%",
              },
              [theme.breakpoints.up("sm")]: {
                marginRight: 0,
              },
              [theme.breakpoints.up("md")]: {
                marginRight: "32px",
                width: "auto",
              },
            }}
          >
            Request access:{" "}
            <Typography
              variant="h4"
              component={Link}
              href="mailto:hi.marchenko@gmail.com"
              fontWeight="400"
              fontSize="16px"
            >
              hi.marchenko@gmail.com
            </Typography>
          </Typography>
          <Typography
            variant="h4"
            fontSize="16px"
            fontWeight="500"
            sx={{
              [theme.breakpoints.up("xs")]: {
                width: "100%",
              },
              [theme.breakpoints.up("md")]: {
                width: "auto",
              },
            }}
          >
            More on Dribbble:{" "}
            <Typography
              variant="h4"
              component={Link}
              href="https://dribbble.com/A_March"
              target="_blank"
              fontSize="16px"
              fontWeight="400"
            >
              A_March
            </Typography>
          </Typography>
        </Box>
      }
    >
      <Stack
        sx={{
          [theme.breakpoints.up("xs")]: {
            gap: 4,
            mb: 4,
          },
          [theme.breakpoints.up("sm")]: {
            gap: 8,
            mb: 8,
          },
          [theme.breakpoints.up("md")]: {
            gap: 9,
            mb: 12,
          },
        }}
        className="relative"
      >
        <Projects />
      </Stack>
    </PageLayout>
  );
}

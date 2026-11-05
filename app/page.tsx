"use client";

import {
  Box,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { CVCircle } from "./components/cv-circle";
import { ProfileAvatar } from "./components/profile-avatar";

import { PageLayout } from "./components/page-layout";
import { WorkCircle } from "./components/work-circle";

export default function Home() {
  const theme = useTheme();

  return (
    <PageLayout
      title="Marchenko Anastasiia"
      upperTitle="Principal Product Designer"
      floatButton={<CVCircle />}
      floatSideButton={<WorkCircle position="left" />}
    >
      <Box
        sx={{
          display: "flex",

          [theme.breakpoints.up("xs")]: {
            flexDirection: "column",
            gap: 4,
            paddingBottom: theme.spacing(6),
          },
          [theme.breakpoints.up("sm")]: {
            flexDirection: "row",
            gap: 3,
            alignItems: "center",
            paddingBottom: theme.spacing(9),
          },
          [theme.breakpoints.up("md")]: {
            gap: 6,
            paddingBottom: theme.spacing(12),
          },
        }}
      >
        <Box
          sx={{
            [theme.breakpoints.up("xs")]: {
              width: "100%",
            },
            [theme.breakpoints.up("sm")]: {
              width: 200,
              flexShrink: 0,
            },
          }}
        >
          <ProfileAvatar />
        </Box>
        <Stack
          sx={{
            mb: { xs: 6, sm: 0 },

            [theme.breakpoints.up("xs")]: {
              width: "100%",
            },
            [theme.breakpoints.up("sm")]: {
              flex: 1,
              minWidth: 0,
            },
          }}
        >
          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>
              11 years of experience taking products from concept to launch
            </strong>{" "}
            in the realms of social collaboration, healthcare and wellness.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            My background in fine arts, PR and business shapes how I work. I
            combine artistic vision and natural leadership to{" "}
            <strong>
              bring people and ideas together, shape where a product goes
            </strong>{" "}
            and work through the details to get it there.
          </Typography>
          <Typography variant="body1">
            <Link href="mailto:hi.marchenko@gmail.com">
              <strong>Shoot me an email</strong>
            </Link>{" "}
            I&apos;m happy to discuss how I can contribute to your team&apos;s
            success.
          </Typography>
        </Stack>
      </Box>
    </PageLayout>
  );
}

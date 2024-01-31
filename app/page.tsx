"use client";

import {
  Box,
  Divider,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { CVCircle } from "./components/cv-circle";
import { ProfileAvatar } from "./components/profile-avatar";

import { PageLayout } from "./components/page-layout";

export default function Home() {
  const theme = useTheme();
  const isSMAndDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <PageLayout
      floatButton={
        <Link href="/cv">
          <CVCircle />
        </Link>
      }
    >
      <Box
        sx={{
          display: "flex",

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
        <Box
          sx={{
            [theme.breakpoints.up("xs")]: {
              width: "100%",
            },
            [theme.breakpoints.up("sm")]: {
              width: "50%",
            },
          }}
        >
          <ProfileAvatar />
        </Box>
        <Stack
          sx={{
            [theme.breakpoints.up("xs")]: {
              width: "100%",
            },
            [theme.breakpoints.up("sm")]: {
              width: "50%",
            },
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ mt: isSMAndDown ? 4 : 8, mb: 1 }}
            textTransform="uppercase"
            color="text.secondary"
          >
            About
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            As a <strong>lead designer</strong> with over 8 years of experience,
            I specialize in{" "}
            <strong>
              crafting design solutions in the realms of social collaboration
              and healthcare/wellness.
            </strong>{" "}
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Leveraging my background in public relations and strong
            problem-solving skills, I bring a user-centric approach to inform
            design decisions.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            My unique{" "}
            <strong>blend of artistic vision and natural leadership</strong>{" "}
            makes me a valuable asset to various teams. I not only craft
            compelling experiences but also foster strong collaboration with
            cross-functional teams, creating an environment where diverse
            perspectives converge into cohesive, impactful solutions.{" "}
            <strong>
              I excel in overseeing projects from conception to completion.
            </strong>{" "}
          </Typography>
          <Typography variant="body1">
            So if you&apos;re seeking to elevate your project&apos;s design,
            foster teamwork, and navigate processes with an unwavering
            commitment to excellence,{" "}
            <Link href="mailto:hi.marchenko@gmail.com">
              <strong>shoot me an email</strong>
            </Link>{" "}
            I&apos;m happy to discuss how I can contribute to your team&apos;s
            success.
          </Typography>
        </Stack>
      </Box>
    </PageLayout>
  );
}

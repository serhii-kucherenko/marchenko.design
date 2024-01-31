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
import { BackButton } from "../components/back-button";
import { ExperienceList } from "../components/experience/experience-list";
import { Education } from "../components/education";
import { Skills } from "../components/skills";
import { Contributions } from "../components/contributions";

export default function Home() {
  const theme = useTheme();
  const isSMAndDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <PageLayout
      floatButton={
        <Link href="/">
          <BackButton />
        </Link>
      }
      subHeading={
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 1,
            flexWrap: "wrap",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              [theme.breakpoints.up("xs")]: {
                width: "100%",
              },
              [theme.breakpoints.up("sm")]: {
                width: "50%",
              },
              [theme.breakpoints.up("lg")]: {
                width: "auto",
              },
            }}
          >
            Email:{" "}
            <Typography
              variant="h4"
              color="text.secondary"
              component={Link}
              href="mailto:hi.marchenko@gmail.com"
              sx={{
                textDecorationColor: (theme) => theme.palette.text.secondary,
              }}
            >
              hi.marchenko@gmail.com
            </Typography>
          </Typography>
          <Typography
            variant="h4"
            sx={{
              [theme.breakpoints.up("xs")]: {
                width: "50%",
              },
              [theme.breakpoints.up("sm")]: {
                width: "50%",
              },
              [theme.breakpoints.up("lg")]: {
                width: "auto",
              },
            }}
          >
            Dribble:{" "}
            <Typography
              variant="h4"
              color="text.secondary"
              component={Link}
              href="https://dribbble.com/A_March"
              target="_blank"
              sx={{
                textDecorationColor: (theme) => theme.palette.text.secondary,
              }}
            >
              A_March
            </Typography>
          </Typography>
          <Typography
            variant="h4"
            sx={{
              [theme.breakpoints.up("xs")]: {
                width: "50%",
              },
              [theme.breakpoints.up("sm")]: {
                width: "50%",
              },
              [theme.breakpoints.up("md")]: {
                width: "auto",
              },
            }}
          >
            Figma:{" "}
            <Typography
              variant="h4"
              color="text.secondary"
              component={Link}
              href="https://www.figma.com/@anamarchenko"
              target="_blank"
              sx={{
                textDecorationColor: (theme) => theme.palette.text.secondary,
              }}
            >
              @anamarchenko
            </Typography>
          </Typography>
          <Typography
            variant="h4"
            sx={{
              [theme.breakpoints.up("xs")]: {
                width: "100%",
              },
              [theme.breakpoints.up("sm")]: {
                width: "50%",
              },
              [theme.breakpoints.up("lg")]: {
                width: "auto",
              },
            }}
          >
            Linkedin:{" "}
            <Typography
              variant="h4"
              color="text.secondary"
              component={Link}
              href="https://www.linkedin.com/in/anastasiia-marchenko/"
              target="_blank"
              sx={{
                textDecorationColor: (theme) => theme.palette.text.secondary,
              }}
            >
              anastasiia-marchenko
            </Typography>
          </Typography>
        </Box>
      }
    >
      <Stack>
        <ExperienceList />

        <Education />

        <Skills />

        <Contributions />
      </Stack>
    </PageLayout>
  );
}

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
  const isMDAndDown = useMediaQuery(theme.breakpoints.down("md"));

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
            flexWrap: isMDAndDown ? "wrap" : "nowrap",
            rowGap: 0.5,
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
                width: "50%",
              },
              [theme.breakpoints.up("md")]: {
                width: "auto",
              },
            }}
          >
            Email:{" "}
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
              [theme.breakpoints.up("sm")]: {
                width: "50%",
              },
              [theme.breakpoints.up("md")]: {
                width: "auto",
              },
            }}
          >
            Dribble:{" "}
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
          <Typography
            variant="h4"
            fontSize="16px"
            fontWeight="500"
            sx={{
              [theme.breakpoints.up("xs")]: {
                width: "100%",
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
              component={Link}
              href="https://www.figma.com/@anamarchenko"
              target="_blank"
              fontSize="16px"
              fontWeight="400"
            >
              @anamarchenko
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
              [theme.breakpoints.up("sm")]: {
                width: "50%",
              },
              [theme.breakpoints.up("md")]: {
                width: "auto",
              },
            }}
          >
            Linkedin:{" "}
            <Typography
              variant="h4"
              component={Link}
              href="https://www.linkedin.com/in/anastasiia-marchenko/"
              target="_blank"
              fontSize="16px"
              fontWeight="400"
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

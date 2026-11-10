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
import { ExperienceList } from "../components/experience/experience-list";
import { Education } from "../components/education";
import { Skills } from "../components/skills";
import { ProfessionalDevelopment } from "../components/professional-development";
import { DownloadButton } from "@/app/components/download-button";
import { WorkCircle } from "@/app/components/work-circle";
import { ReachOutSection } from "@/app/components/about-work-section";

export default function Home() {
  const theme = useTheme();
  const isMDAndDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <PageLayout
      title="Anastasiia Marchenko"
      upperTitle="Principal Product Designer"
      floatButton={<WorkCircle href="/" />}
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
            component="div"
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
              className="accessible-inline-link"
              fontWeight="400"
              fontSize="16px"
            >
              anastasiia-marchenko
            </Typography>
          </Typography>
          <Typography
            variant="h4"
            component="div"
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
              className="accessible-inline-link"
              fontSize="16px"
              fontWeight="400"
            >
              hi.marchenko@gmail.com
            </Typography>
          </Typography>
          <Typography
            variant="h4"
            component="div"
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
              className="accessible-inline-link"
              fontSize="16px"
              fontWeight="400"
            >
              A_March
            </Typography>
          </Typography>
          <Typography
            variant="h4"
            component="div"
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
              className="accessible-inline-link"
              fontSize="16px"
              fontWeight="400"
            >
              @anamarchenko
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
        <DownloadButton />

        <ExperienceList />

        <Skills />

        <Education />

        <ProfessionalDevelopment />

        <ReachOutSection />
      </Stack>
    </PageLayout>
  );
}

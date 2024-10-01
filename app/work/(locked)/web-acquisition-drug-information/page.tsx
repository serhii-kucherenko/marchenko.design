"use client";

import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { getProjectById, Project } from "@/app/types/project";
import Image from "next/image";

import { WorkSlider } from "@/app/work/(locked)/components/WorkSlider/WorkSlider";
import { PageLayoutContainerless } from "@/app/components/page-layout-containerless";
import { AboutButton } from "@/app/components/about-button";
import { CVCircle } from "@/app/components/cv-circle";

const project = getProjectById("web-acquisition-drug-information") as Project;

export default function Work() {
  return (
    <PageLayoutContainerless
      floatSideButton={<AboutButton position="left" breakpointAndDown="md" />}
      floatButton={<CVCircle />}
      title={project.title}
      upperTitle={
        <Typography
          variant="subtitle2"
          textTransform="uppercase"
          color="primary.main"
          fontWeight="400"
          component={Link}
          href="/work"
        >
          BACK TO WORKS
        </Typography>
      }
      subHeading={
        <Box
          sx={{
            mt: 1,
          }}
          className="flex space-x-8"
        >
          <Typography variant="h4" fontSize="16px" fontWeight="500">
            Duration: <span className="font-normal">{project.duration}</span>
          </Typography>
          <Typography variant="h4" fontSize="16px" fontWeight="500">
            Role: <span className="font-normal">{project.role}</span>
          </Typography>
          <Typography variant="h4" fontSize="16px" fontWeight="500">
            Client: <span className="font-normal">{project.client}</span>
          </Typography>
        </Box>
      }
    >
      <div className="grid gap-y-30 mb-[120px] items-center w-screen">
        <div className="w-full flex flex-col items-center mb-[48px]">
          <div className="relative w-full h-full aspect-[872/412] overflow-hidden max-w-[872px]">
            <Image
              placeholder="blur"
              blurDataURL={project.blurHeroImage}
              src={project.heroImage}
              alt={project.title}
              className="absolute inset-0 w-full h-full img"
              width={872}
              height={412}
            />
          </div>
        </div>

        <div className="w-full gap-y-[72px] mb-[120px] flex flex-col items-center">
          {/*  GOAL */}
          <div className="grid gap-y-6 max-w-[872px]">
            <Typography
              variant="h3"
              textTransform="uppercase"
              color="primary.contrastText"
            >
              Goal
            </Typography>
            <Typography variant="body1" fontWeight={300} className="pl-12">
              <span className="font-bold">
                Improve the efficiency of web content acquisition
              </span>{" "}
              within the Singularity platform by maximizing automation and
              minimizing manual effort. Address existing inefficiencies in the
              interface while ensuring the redesigned solution is user-friendly
              and fully meets all functional requirements.
            </Typography>
          </div>

          {/*  PROBLEM STATEMENT */}
          <div className="grid gap-y-6 max-w-[872px]">
            <Typography
              variant="h3"
              textTransform="uppercase"
              color="primary.contrastText"
            >
              Problem Statement
            </Typography>
            <Typography variant="body1" fontWeight={300} className="pl-12">
              Users faced{" "}
              <span className="font-bold">
                challenges in efficiently acquiring and managing drug-related
                content
              </span>{" "}
              for the repository. The existing tool struggled with handling
              large datasets, lacked advanced filtering capabilities, and
              provided insufficient support for data quality and governance.
            </Typography>
          </div>

          {/*  IMG1 */}
          <div className="grid gap-y-4 w-full max-w-[872px]">
            <div className="relative w-full h-full aspect-[872/480] overflow-hidden">
              <Image
                src="/images/projects/project5/img1.png"
                alt="img1"
                className="absolute inset-0 w-full h-full img"
                width={872}
                height={480}
              />
            </div>

            <Typography variant="caption" className="pl-12">
              <i>*Wireframes components</i>
            </Typography>
          </div>

          {/*  Design Process */}
          <div className="grid gap-y-6 max-w-[872px]">
            <Typography
              variant="h3"
              textTransform="uppercase"
              color="primary.contrastText"
            >
              Design Process
            </Typography>
            <ul className="pl-12 list-disc">
              <li>
                <Typography variant="body1" fontWeight={300}>
                  Information architecture: developed a clear and{" "}
                  <span className="font-bold">
                    organized structure for the tool,
                  </span>{" "}
                  ensuring easy navigation and efficient content organization.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  Wireframing: created{" "}
                  <span className="font-bold">high-fidelity wireframes</span> to
                  explore various layout options, focusing on user-friendliness
                  and workflow efficiency.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  User testing: conducted{" "}
                  <span className="font-bold">usability tests</span> to gather
                  feedback from users, identifying areas for improvement and
                  refining the design accordingly.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  High-fidelity design: incorporated user feedback and iterated
                  on the design,{" "}
                  <span className="font-bold">
                    delivering high-fidelity designs
                  </span>{" "}
                  with more intuitive navigation, ready for{" "}
                  <span className="font-bold">development handoff.</span>
                </Typography>
              </li>
            </ul>
          </div>

          <div className="grid gap-y-4 w-full max-w-[872px]">
            <div className="relative w-full h-full aspect-[872/345] overflow-hidden">
              <Image
                src="/images/projects/project5/img2.png"
                alt="img1"
                className="absolute inset-0 w-full h-full img"
                width={872}
                height={345}
              />
            </div>

            <Typography variant="caption" className="pl-12">
              <i>*Before & After</i>
            </Typography>
          </div>

          {/*  User Research Key Findings */}
          <div className="grid gap-y-6 max-w-[872px]">
            <Typography
              variant="h3"
              textTransform="uppercase"
              color="primary.contrastText"
            >
              User Research Key Findings
            </Typography>

            <ul className="pl-12 list-disc">
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">
                    Complexity in scraper management:
                  </span>{" "}
                  users found it challenging to create and manage scrapers due
                  to the tool&apos;s complexity.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">
                    Inefficient source tracking:
                  </span>{" "}
                  the process of updating sources was time-consuming and prone
                  to errors.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">
                    Need for better content updates:
                  </span>{" "}
                  users wanted a more intuitive and efficient way to check and
                  analyze content updates.
                </Typography>
              </li>
            </ul>
          </div>

          {/*  Solution Key Features */}
          <div className="grid gap-y-6 max-w-[872px]">
            <Typography
              variant="h3"
              textTransform="uppercase"
              color="primary.contrastText"
            >
              Solution Key Features
            </Typography>

            <ul className="pl-12 list-disc">
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">
                    Simplified scraper creation:
                  </span>{" "}
                  introduced a user-friendly interface for creating and managing
                  scrapers, with a clone option for faster setup.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">
                    Advanced filtering and sorting:
                  </span>{" "}
                  provided powerful filtering and sorting options, including
                  filter templates, to streamline source management.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">Enhanced content updates:</span>{" "}
                  improved update checking with update highlights and
                  document-to-document comparison for faster decision-making.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">Seamless integration:</span>{" "}
                  integrated the tool with other components for a cohesive and
                  unified user experience.
                </Typography>
              </li>
            </ul>
          </div>

          {/*  IMAGES */}

          <div className="flex flex-col gap-y-4 items-center w-full max-w-[872px]">
            <div className="relative w-full h-full aspect-[872/480] overflow-hidden">
              <Image
                src="/images/projects/project5/img3.png"
                alt="img1"
                className="absolute inset-0 w-full h-full img"
                width={872}
                height={480}
              />

              <div className="flex items-center justify-center w-full h-full z-50">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-auto h-[402px] z-50"
                  style={{
                    boxShadow: "0 4px 6px #00000026",
                  }}
                >
                  <source
                    src="https://github.com/serhii-kucherenko/marchenko.design/raw/refs/heads/main/public/sources.mov"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>

            <div className="w-[872px]">
              <Typography variant="caption" className="pl-12">
                <i>*Sources & Acquisition </i>
              </Typography>
            </div>
          </div>

          {/*  Business Results & Impact */}
          <div className="grid gap-y-6 max-w-[872px]">
            <Typography
              variant="h3"
              textTransform="uppercase"
              color="primary.contrastText"
            >
              Business Results & Impact
            </Typography>

            <div className="grid gap-y-6 pl-12">
              <Typography variant="body1" fontWeight={300}>
                The redesigned web content acquisition tool significantly{" "}
                <span className="font-bold">
                  improved operational efficiency and increased user
                  productivity, leading to reduced costs
                </span>{" "}
                within the Singularity platform. Additionally, it contributed to
                revenue growth by enabling faster decision-making and
                streamlining workflows.
              </Typography>
            </div>
          </div>

          {/* Lessons Learned */}
          <div className="grid gap-y-6 max-w-[872px]">
            <Typography
              variant="h3"
              textTransform="uppercase"
              color="primary.contrastText"
            >
              Lessons Learned
            </Typography>

            <div className="grid gap-y-6 pl-12">
              <Typography variant="body1" fontWeight={300}>
                Prioritizing user needs and{" "}
                <span className="font-bold">
                  investing in long-term technical capabilities are crucial for
                  developing effective tools.
                </span>{" "}
                These practices not only ensure that the final product exceeds
                user expectations but also enhance overall operational
                efficiency and reduce costs in the long term.
              </Typography>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full overflow-hidden">
          <div className="max-w-[872px]">
            <WorkSlider workId={project.id} />
          </div>
        </div>
      </div>
    </PageLayoutContainerless>
  );
}

"use client";

import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { getProjectById, Project } from "@/app/types/project";
import Image from "next/image";

import { WorkSlider } from "@/app/work/(locked)/components/WorkSlider/WorkSlider";
import { PageLayoutContainerless } from "@/app/components/page-layout-containerless";
import { AboutButton } from "@/app/components/about-button";
import { CVCircle } from "@/app/components/cv-circle";

const project = getProjectById("medical-coding-system") as Project;

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
      <div className="grid gap-y-30 mb-[120px] items-center">
        <div className="w-full flex flex-col items-center mb-[48px]">
          <div className="relative w-full h-full aspect-[872/412] overflow-hidden max-w-[872px]">
            <Image
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
              The objective was to{" "}
              <span className="font-bold">
                optimize the medical coding process
              </span>{" "}
              for charts and{" "}
              <span className="font-bold">improve workflow efficiency</span> for
              coders.
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
              The medical coding{" "}
              <span className="font-bold">
                process was inefficient and prone to errors,
              </span>{" "}
              making it difficult to track coder productivity and performance.
              The lack of an intuitive workflow resulted in{" "}
              <span className="font-bold">
                slow coding and an inability to plan or manage
              </span>{" "}
              tasks efficiently.
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
                  <span className="font-bold">Analysis & Feedback:</span> I
                  started by analyzing the existing system and identifying pain
                  points in the workflow. From there, I developed a more
                  efficient flow and validated it with key stakeholders.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">
                    Wireframing & Iterative Design:
                  </span>{" "}
                  I created wireframes to visualize the new user interface and
                  gathered feedback, making improvements with a focus on
                  usability and ease of navigation.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">Development Handoff:</span> once
                  the designs were finalized, I prepared detailed specifications
                  and assets for the development team, ensuring a smooth handoff
                  for implementation.
                </Typography>
              </li>
            </ul>
          </div>

          {/*  IMG1 */}
          <div className="grid gap-y-4 w-full max-w-[872px]">
            <div className="relative w-full h-full aspect-[872/370] overflow-hidden">
              <Image
                src="/images/projects/project7/img1.png"
                alt="img1"
                className="absolute inset-0 w-full h-full img"
                width={872}
                height={370}
              />
            </div>

            <Typography variant="caption" className="pl-12">
              <i>*Indexing process</i>
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

            <Typography variant="body1" fontWeight={300} className="pl-12">
              Coders needed a system that allowed them to plan and monitor their
              tasks efficiently, as well as a more intuitive way to code medical
              charts. A <span className="font-bold">unified dashboard</span>{" "}
              with personal stats and an integrated calendar would help coders
              organize and streamline their work. Additionally,{" "}
              <span className="font-bold">
                implementing document scanning technology
              </span>{" "}
              would enable coders to mark codes directly on the documents,
              significantly reducing the manual effort and error rates, which
              had previously been major pain points in the workflow.
            </Typography>
          </div>

          {/*  Solution Key Features */}
          <div className=" w-full grid gap-y-6 max-w-[872px]">
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
                    Personal Dashboard & Calendar:
                  </span>{" "}
                  coders could now track their work and plan tasks easily.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">Simplified Workflow:</span> added
                  document scanning tech, allowing direct code marking on
                  charts.
                </Typography>
              </li>
            </ul>
          </div>

          {/*  IMAGES */}
          <div className="grid gap-y-4 w-full max-w-[872px]">
            <div className="relative w-full h-full aspect-[872/412] overflow-hidden">
              <Image
                src="/images/projects/project7/img2.png"
                alt="img1"
                className="absolute inset-0 w-full h-full img"
                width={872}
                height={412}
              />
            </div>

            <Typography variant="caption" className="pl-12">
              <i>*Main functionality</i>
            </Typography>
          </div>

          <div className="flex flex-col gap-y-4 items-center">
            <div className="relative w-screen">
              <Image
                src="/images/projects/project7/img3.png"
                alt="panorama"
                className=" w-full h-full img"
                width={1440}
                height={765}
              />
            </div>
            <div className="w-[872px]">
              <Typography variant="caption" className="pl-12">
                <i>*Key screens</i>
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
                The platform was projected to{" "}
                <span className="font-bold">boost coder efficiency by 40%</span>{" "}
                , thanks to the streamlined design and new functionality.
              </Typography>
            </div>
          </div>

          {/* Lessons Learned */}
          <div className="grid gap-y-6 w-full max-w-[872px]">
            <Typography
              variant="h3"
              textTransform="uppercase"
              color="primary.contrastText"
            >
              Lessons Learned
            </Typography>

            <div className="grid gap-y-6 pl-12">
              <Typography variant="body1" fontWeight={300}>
                This project reinforced the value of combining empathy with
                technology to create impactful designs.
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

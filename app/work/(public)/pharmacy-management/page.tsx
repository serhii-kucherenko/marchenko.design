"use client";

import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { getProjectById, Project } from "@/app/types/project";
import Image from "next/image";

import { WorkSlider } from "@/app/work/(public)/components/WorkSlider/WorkSlider";
import { PageLayoutContainerless } from "@/app/components/page-layout-containerless";
import { AboutButton } from "@/app/components/about-button";
import { CVCircle } from "@/app/components/cv-circle";
import { Compare } from "@/components/ui/compare";

const project = getProjectById("pharmacy-management") as Project;

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
              To lead a{" "}
              <span className="font-bold">comprehensive redesign</span> of the
              340Basics platform that simplifies user experiences, enhances
              functionality, and ensures seamless navigation for all eight user
              roles.
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
              The 340Basics platform, while powerful, became difficult for users
              to navigate due to its{" "}
              <span className="font-bold">
                complex structure and outdated design.
              </span>{" "}
              With eight distinct roles, each with varying permissions, users
              struggled to complete tasks efficiently, often facing redundant
              fields, convoluted flows, and hard-to-find reports. These
              inefficiencies led to user frustration,{" "}
              <span className="font-bold">
                extended task completion times, and decreased overall
                productivity,
              </span>{" "}
              making it critical to address the system&apos;s usability
              challenges.
            </Typography>
          </div>

          {/*  IMG1 */}
          <div className="grid gap-y-4 w-full max-w-[872px]">
            <div className="relative w-full h-full aspect-[872/370] overflow-hidden">
              <Image
                src="/images/projects/project8/img1.png"
                alt="img1"
                className="absolute inset-0 w-full h-full img"
                width={872}
                height={412}
              />
            </div>

            <Typography variant="caption" className="pl-12">
              <i>
                *Example of Hotjar data: some fields weren&apos;t used at all,
                or only by one user over a couple of months.
              </i>
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
                  <span className="font-bold">Interviews:</span> conducted
                  interviews with key stakeholders to understand business goals,
                  platform functionality, and user needs.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">As-is mapping:</span> collaborated
                  with stakeholders, developers, and QA teams to map the current
                  state of all user flows.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">Real user insights:</span>{" "}
                  implemented Hotjar to gather real-time user interaction data,
                  identifying pain points and improvement opportunities.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">Card sorting:</span> conducted
                  card sorting exercise with stakeholders to create a
                  straightforward and intuitive navigation structure.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">Design system:</span> created new
                  style guides and design components to ensure consistency and
                  support future enhancements.
                </Typography>
              </li>
            </ul>
          </div>

          {/*  IMG1 */}
          <div className="grid gap-y-4 w-full max-w-[872px]">
            <div className="w-[872px] h-[640px] flex items-center justify-center">
              <Compare
                firstImage="/images/projects/project8/img2.png"
                secondImage="/images/projects/project8/img2-2.png"
                firstImageClassName="object-cover object-left-top w-full"
                secondImageClassname="object-cover object-left-top w-full"
                className="w-full h-full"
                slideMode="hover"
                autoplay={true}
              />
            </div>
            <Typography variant="caption" className="pl-12">
              <i>*Before & After</i>
            </Typography>
          </div>

          {/*  User Research Key Findings */}
          <div className="grid gap-y-6 w-full max-w-[872px]">
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
                  <span className="font-bold">Redundancy:</span> users
                  frequently encountered unnecessary fields that cluttered the
                  interface.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">Report accessibility:</span> users
                  struggled to find and access relevant reports, leading to
                  frustration.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">Navigation challenges:</span> the
                  existing navigation was unclear and inefficient, slowing down
                  task completion.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">Lack of personalization:</span>{" "}
                  the absence of role-specific dashboards limited users&apos;
                  ability to make informed decisions quickly.
                </Typography>
              </li>
            </ul>
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
                  <span className="font-bold">Streamlined processes:</span>{" "}
                  removed redundant fields to declutter the interface and
                  simplify workflows.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">Personalized dashboards:</span>{" "}
                  implemented role-specific dashboards to prioritize key data
                  for each user, enhancing efficiency and relevance.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">Intuitive navigation:</span>{" "}
                  developed a clearer navigation structure to improve user
                  orientation and reduce cognitive load.
                </Typography>
              </li>
            </ul>
          </div>

          {/*  IMAGES */}
          <div className="grid gap-y-4 w-full max-w-[872px]">
            <div className="relative w-full h-full aspect-[872/490] overflow-hidden">
              <Image
                src="/images/projects/project8/img3.png"
                alt="img1"
                className="absolute inset-0 w-full h-full img"
                width={872}
                height={490}
              />
            </div>

            <Typography variant="caption" className="pl-12">
              <i>
                *Some visual elements were added to make the information more
                straightforward.
              </i>
            </Typography>
          </div>

          <div className="flex flex-col gap-y-4 items-center">
            <div className="relative w-screen">
              <Image
                src="/images/projects/project8/img4.png"
                alt="panorama"
                className=" w-full h-full img"
                width={1440}
                height={720}
              />
            </div>
            <div className="w-[872px]">
              <Typography variant="caption" className="pl-12">
                <i>*Key screens</i>
              </Typography>
            </div>
          </div>

          {/*  Business Results & Impact */}
          <div className="grid gap-y-6 max-w-[872px] w-full">
            <Typography
              variant="h3"
              textTransform="uppercase"
              color="primary.contrastText"
            >
              Business Results & Impact
            </Typography>

            <ul className="pl-12 list-disc">
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">
                    50% reduction in task completion time.
                  </span>
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  Significant{" "}
                  <span className="font-bold">
                    increase in user satisfaction
                  </span>{" "}
                  and engagement.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">Boosted revenue</span> due to
                  improved efficiency and user experience.
                </Typography>
              </li>
            </ul>
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
                <span className="font-bold">Data is your ally.</span> Using
                tools like Hotjar to gather user insights is invaluable. Always
                leverage data wisely—it will guide decisions and deliver
                impactful results.
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

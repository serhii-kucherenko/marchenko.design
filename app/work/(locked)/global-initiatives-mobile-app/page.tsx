"use client";

import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { getProjectById, Project } from "@/app/types/project";
import Image from "next/image";

import { WorkSlider } from "@/app/work/(locked)/components/WorkSlider/WorkSlider";
import { PageLayoutContainerless } from "@/app/components/page-layout-containerless";
import { Compare } from "@/components/ui/compare";
import { AboutButton } from "@/app/components/about-button";
import { CVCircle } from "@/app/components/cv-circle";

const project = getProjectById("global-initiatives-mobile-app") as Project;

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
        <div className="w-full flex flex-col items-center">
          <div className="relative w-full h-full mb-[48px] aspect-[872/412] overflow-hidden max-w-[872px]">
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
              The goal of Forum Spaces Mobile was to{" "}
              <span className="font-bold">
                create a satellite white-labeling app
              </span>{" "}
              for multi-stakeholder communities to scale engagement effectively.
              It aimed to provide a seamless mobile interface that supports
              robust community interactions and ensures a high level of user
              engagement.
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
              Stakeholders involved in various initiatives experienced
              significant <span className="font-bold">challenges with</span>{" "}
              engagement through traditional{" "}
              <span className="font-bold">web platforms</span> , primarily due
              to the lack of a mobile solution. This gap in mobile accessibility
              hindered real-time communication and collaboration, resulting in{" "}
              <span className="font-bold">
                decreased engagement and missed opportunities.
              </span>{" "}
            </Typography>
          </div>

          {/*  PANORAMA */}
          <div className="flex flex-col gap-y-4 items-center">
            <div className="relative w-screen">
              <Image
                src={project.panoramaImage}
                alt="panorama"
                className=" w-full h-full img"
                width={1440}
                height={320}
              />
            </div>
            <div className="w-[872px]">
              <Typography variant="caption" className="pl-12">
                <i>*Design process</i>
              </Typography>
            </div>
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
                  <span className="font-bold">
                    Identifying core user groups:
                  </span>{" "}
                  the design process began by identifying the core user groups
                  within initiatives and defining essential workflows and
                  functionalities that the mobile app should support.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">
                    Ideation and feature brainstorming:
                  </span>{" "}
                  the team conducted ideation sessions to brainstorm potential
                  features and interfaces, ensuring the app would be both
                  user-friendly and powerful in functionality.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">MVP definition and scope:</span>{" "}
                  the project team aligned and prioritized MVP features and
                  defined the scope for future releases.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">
                    Prototype development and refinement:
                  </span>{" "}
                  with the MVP scope established, we created initial prototypes,
                  which were iteratively refined through feedback loops with
                  potential users and stakeholders to land on the final designs.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">Focused development:</span>{" "}
                  closely collaborating with developers to ensure alignment with
                  the project goals and considering all limitations.
                </Typography>
              </li>
            </ul>
          </div>

          <div className="grid gap-y-6 max-w-[872px] w-full">
            <div className="grid gap-y-4 w-full">
              <div className="relative w-full h-full aspect-[872/374] overflow-hidden">
                <Image
                  src="/images/projects/project1/img1.png"
                  alt="img1"
                  className="absolute inset-0 w-full h-full img"
                  width={872}
                  height={374}
                />
              </div>
            </div>

            <div className="grid gap-y-4 w-full ">
              <div className="relative w-full h-full aspect-[872/555] overflow-hidden">
                <Image
                  src="/images/projects/project1/img2.png"
                  alt="img2"
                  className="absolute inset-0 w-full h-full img"
                  width={872}
                  height={555}
                />
              </div>

              <Typography variant="caption" className="pl-12">
                <i>*Main personas & Mobile VPC</i>
              </Typography>
            </div>
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

            <div className="grid gap-y-2 pl-12">
              <Typography variant="body1" fontWeight={300}>
                Research revealed that users wanted an integrated mobile
                experience that would keep them connected with global
                communities and provide up-to-date discussions and resources.
                This integration would allow them to{" "}
                <span className="font-bold">
                  seamlessly continue their work and access needed information
                  while away from their desks.
                </span>
              </Typography>
            </div>
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

            <div className="grid gap-y-2 pl-12">
              <ul className="list-disc pl-6">
                <li>
                  <Typography variant="body1" fontWeight={300}>
                    <span className="font-bold">
                      Never miss important updates:
                    </span>{" "}
                    keep users informed of new knowledge, engagement
                    opportunities, and messages, eliminating the fear of missing
                    out on important information.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" fontWeight={300}>
                    <span className="font-bold">Deepen engagement:</span>{" "}
                    enhance user interaction through engagement features and
                    gamification elements designed to boost participation and
                    retention.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" fontWeight={300}>
                    <span className="font-bold">Access anywhere:</span> provide
                    a wealth of information at users&apos; fingertips with
                    advanced content discoverability and a synchronized
                    experience across web and mobile platforms.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" fontWeight={300}>
                    <span className="font-bold">White label solution:</span>{" "}
                    allow full branding of the app with the initiative’s logo,
                    color scheme, and visual identity, ensuring a consistent and
                    recognizable experience for all members.
                  </Typography>
                </li>
              </ul>
            </div>
          </div>

          {/*  GRID */}
          <div className="flex flex-col space-y-[72px] items-center justify-center w-full max-w-[872px]">
            <div className="grid gap-y-4 w-full ">
              <div className="relative w-full h-full aspect-[872/480] overflow-hidden">
                <Image
                  src="/images/projects/project1/img3.png"
                  alt="img2"
                  className="absolute inset-0 w-full h-full img"
                  width={872}
                  height={480}
                />
              </div>

              <Typography variant="caption" className="pl-12">
                <i>*Design vision</i>
              </Typography>
            </div>

            <div className="grid gap-y-4 w-full ">
              <div className="w-full h-[895px] flex items-center justify-center">
                <Compare
                  firstImage="/images/projects/project1/img4-light.png"
                  secondImage="/images/projects/project1/img4-dark.png"
                  firstImageClassName="object-cover object-left-top w-full"
                  secondImageClassname="object-cover object-left-top w-full"
                  className="w-full h-full"
                  slideMode="hover"
                  autoplay={true}
                />
              </div>
              <Typography variant="caption" className="pl-12">
                <i>*MVP solution</i>
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
                The introduction of the mobile app{" "}
                <span className="font-bold">
                  led to an increase in the number of initiatives joining Forum
                  Spaces.
                </span>{" "}
                Interviews revealed that the availability of the mobile app was
                an important factor in their decision to join, as it facilitated
                higher engagement.
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

            <div className="grid gap-y-2 pl-12">
              <Typography variant="body1" fontWeight={300}>
                This project underscored the{" "}
                <span className="font-bold">importance of flexibility</span>{" "}
                when working with technical limitations.{" "}
                <span className="font-bold">
                  Understanding what is feasible can save a significant amount
                  of design time
                </span>{" "}
                and assist with more accurate scope definition.
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

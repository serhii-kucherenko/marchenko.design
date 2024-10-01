"use client";

import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { getProjectById, Project } from "@/app/types/project";
import Image from "next/image";

import { WorkSlider } from "@/app/work/(public)/components/WorkSlider/WorkSlider";
import { PageLayoutContainerless } from "@/app/components/page-layout-containerless";
import { AboutButton } from "@/app/components/about-button";
import { CVCircle } from "@/app/components/cv-circle";

const project = getProjectById("holistic-well-being-platform") as Project;

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
              The project aimed to understand the market and develop a valuable
              solution that will{" "}
              <span className="font-bold">
                facilitate people&apos;s journey toward health
              </span>{" "}
              , happiness, and prosperity by integrating both traditional and
              modern practices.
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
              The product&apos;s vision was initially undefined,{" "}
              <span className="font-bold">
                requiring a clear definition of its unique value proposition
              </span>{" "}
              and differentiation in a crowded wellness market. This ambiguity,
              combined with the large market size and tight deadlines for an
              MVP, made the project a challenging but exciting journey.
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
                <i>*Problem exploration</i>
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
                  Competitive Analysis: conducted a{" "}
                  <span className="font-bold">thorough analysis</span> of key
                  wellness platforms to identify industry best practices,
                  emerging trends, and areas for differentiation.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  User Interviews: conducted{" "}
                  <span className="font-bold">in-depth interviews</span> to gain
                  insights into user pain points, needs, and desires, which
                  helped uncover unmet needs and informed design decisions.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  Wireframing: created wireframes based on research findings,
                  focusing on a user-centric,{" "}
                  <span className="font-bold">
                    comprehensive wellness platform.
                  </span>{" "}
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  Iterative Testing: refined wireframes into interactive
                  prototypes through{" "}
                  <span className="font-bold">iterative testing</span> sessions,
                  validating and fine-tuning design decisions based on user
                  feedback.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  High-fidelity designs: crafted detailed,{" "}
                  <span className="font-bold">
                    high-fidelity screens essential for MVP
                  </span>{" "}
                  development.
                </Typography>
              </li>
            </ul>
          </div>

          <div className="grid gap-y-4 w-full max-w-[872px]">
            <div className="relative w-full h-full aspect-[872/464] overflow-hidden">
              <Image
                src="/images/projects/project3/img1.png"
                alt="img1"
                className="absolute inset-0 w-full h-full img"
                width={872}
                height={464}
              />
            </div>

            <Typography variant="caption" className="pl-12">
              <i>*Part of the ideation process</i>
            </Typography>
          </div>

          <div className="grid gap-y-4 w-full max-w-[872px]">
            <div className="relative w-full h-full aspect-[872/412] overflow-hidden">
              <Image
                src="/images/projects/project3/img2.png"
                alt="img1"
                className="absolute inset-0 w-full h-full img"
                width={872}
                height={412}
              />
            </div>

            <Typography variant="caption" className="pl-12">
              <i>*Wireframes</i>
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
                  <span className="font-bold">Lack of Unified Solutions: </span>{" "}
                  existing wellness products failed to provide a comprehensive,
                  one-stop-shop experience, leading users to juggle multiple
                  platforms.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">
                    Need for Continuous Support:{" "}
                  </span>{" "}
                  users expressed the need for ongoing motivation and expert
                  guidance to maintain their wellness journey.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">Holistic Differentiation: </span>{" "}
                  a complete ecosystem that covers all aspects of well-being,
                  including{" "}
                  <span className="font-bold">
                    scientifically backed and medical approaches{" "}
                  </span>{" "}
                  , emerged as a critical differentiator to set the platform
                  apart from competitors.
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

            <div className="grid gap-y-2 pl-12">
              <Typography variant="body1" fontWeight={300}>
                The final platform is a{" "}
                <span className="font-bold">comprehensive ecosystem</span> that
                integrates features such as motivational nudges, personalized
                suggestions, virtual consultations, a curated selection of
                supplements, health testing kits, and digital tools into an
                easy-to-follow plan{" "}
                <span className="font-bold">
                  that covers all aspects of well-being.
                </span>{" "}
              </Typography>
              <Typography variant="body1" fontWeight={300}>
                As part of this MVP solution, I’ve also designed a landing page
                and a pitch deck to attract strategic partners.
              </Typography>
            </div>
          </div>

          {/*  IMAGES */}
          <div className="grid gap-y-4 w-full max-w-[872px]">
            <div className="relative w-full h-full aspect-[872/464] overflow-hidden">
              <Image
                src="/images/projects/project3/img3.png"
                alt="img1"
                className="absolute inset-0 w-full h-full img"
                width={872}
                height={464}
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-4 items-center w-full">
            <div className="relative w-screen">
              <Image
                src="/images/projects/project3/img4.png"
                alt="img4"
                className="w-full h-full img"
                width={1440}
                height={1049}
              />
            </div>

            <div className="w-[872px]">
              <Typography variant="caption" className="pl-12">
                <i>*Mobile platform</i>
              </Typography>
            </div>
          </div>

          <div className="grid gap-y-4 w-full max-w-[872px]">
            <div className="relative w-full h-full aspect-[872/760] overflow-hidden">
              <Image
                src="/images/projects/project3/img5.png"
                alt="img1"
                className="absolute inset-0 w-full h-full img"
                width={872}
                height={760}
              />
            </div>

            <Typography variant="caption" className="pl-12">
              <i>*Landing page</i>
            </Typography>
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
                The platform&apos;s one-stop-shop approach positioned Nilaya as
                a trusted companion in holistic well-being,{" "}
                <span className="font-bold">
                  attracting new partners and opening new horizons in the B2B
                  sector
                </span>
                , while also laying the groundwork for long-term success in the
                wellness industry.
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

            <ul className="pl-12 list-disc">
              <li>
                <Typography variant="body1" fontWeight={300}>
                  Listen to Users: sometimes you need to niche down, while other
                  times you need to expand.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  Share Vision & Foster Collaboration: despite tough timelines
                  and pressure, teams can achieve outstanding results with clear
                  planning, a unified vision, and strong leadership.{" "}
                  <span className="font-bold">
                    Passion framed in structure is key to success.
                  </span>{" "}
                </Typography>
              </li>
            </ul>
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

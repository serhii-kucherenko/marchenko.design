"use client";

import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { getProjectById, Project } from "@/app/types/project";
import Image from "next/image";

import { WorkSlider } from "@/app/work/(public)/components/WorkSlider/WorkSlider";
import { PageLayoutContainerless } from "@/app/components/page-layout-containerless";
import { AboutButton } from "@/app/components/about-button";
import { CVCircle } from "@/app/components/cv-circle";

const project = getProjectById("plastic-policy-creation-platform") as Project;

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
              To{" "}
              <span className="font-bold">create a digital platform that</span>{" "}
              helps GPAP scale its efforts in{" "}
              <span className="font-bold">
                supporting policymakers with crafting effective plastic
                reduction policies.
              </span>{" "}
              The aim is to simplify complex processes and provide easy-to-use
              tools, making it easier for governments to implement real,
              impactful changes in tackling plastic waste.
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
              Forming plastic action policies is complex process with numerous
              dependencies based on a country’s specific circumstances. GPAP{" "}
              <span className="font-bold">
                needed to scale its impact without a significant increase in
                staffing.
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
                <i>*As-is mapping for different roles</i>
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
                    Stakeholder Interviews & Workshops:
                  </span>{" "}
                  we kicked off the project with collaborative workshops to map
                  user journeys and gather valuable insights. Techniques like
                  Value Proposition Canvas, Crazy 8s, and As-Is Mapping helped
                  clarify users’ needs.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">
                    Flows & Low-Fidelity Designs:
                  </span>{" "}
                  with a solid understanding of the user journey, we created
                  detailed user flows and low-fi designs for validation with
                  stakeholders.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">Prototyping & Testing:</span>{" "}
                  after stakeholder approval, we developed high-fidelity
                  prototypes focusing on usability and clarity, ensuring the
                  platform was intuitive and informative for potential users.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">
                    Implementation & Refinement:
                  </span>{" "}
                  the MVP was built using existing WEF community
                  functionalities. Post-launch, we conducted frequent testing
                  and gathered user feedback to enhance the platform’s usability
                  continually.
                </Typography>
              </li>
            </ul>
          </div>

          <div className="grid gap-y-4 w-full max-w-[872px]">
            <div className="relative w-full h-full aspect-[872/520] overflow-hidden">
              <Image
                src="/images/projects/project6/img1.png"
                alt="img1"
                className="absolute inset-0 w-full h-full img"
                width={872}
                height={520}
              />
            </div>

            <Typography variant="caption" className="pl-12">
              <i>*Flow</i>
            </Typography>
          </div>

          <div className="grid gap-y-4 w-full max-w-[872px]">
            <div className="relative w-full h-full aspect-[872/464] overflow-hidden">
              <Image
                src="/images/projects/project6/img2.png"
                alt="img1"
                className="absolute inset-0 w-full h-full img"
                width={872}
                height={464}
              />
            </div>

            <Typography variant="caption" className="pl-12">
              <i>*Storyboard</i>
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

            <div className="grid gap-y-2 pl-12">
              <Typography variant="body1" fontWeight={300}></Typography>
              The research highlighted several crucial questions:
              <ul className="list-disc pl-6">
                <li>
                  <Typography variant="body1" fontWeight={300}>
                    Does the user have the team and capacity to implement
                    plastic action initiatives?
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" fontWeight={300}>
                    Who to involve?
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" fontWeight={300}>
                    What steps do they need to take to begin framing policies?
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" fontWeight={300}>
                    How can we make this process usable and accessible?
                  </Typography>
                </li>
              </ul>
              <Typography variant="body1" fontWeight={300}>
                <span className="font-bold">
                  Our audience requires a clear roadmap or template tailored to
                  their local context.
                </span>{" "}
                They need the right tools and information consolidated in one
                place to effectively form and implement solutions.
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

            <ul className="pl-12 list-disc">
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">Readiness Assessment:</span> a
                  tool that helps countries assess their current capabilities
                  and plan their actions.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">Step-by-Step Guide:</span> an
                  interactive guide to help users navigate the complex journey
                  over time.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">Knowledge Repository:</span>{" "}
                  centralized knowledge-sharing space where users access best
                  practices, case studies, and country-specific examples.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">Community Spaces:</span> dedicated
                  areas for collaboration, allowing stakeholders from different
                  countries to share experiences.
                </Typography>
              </li>
            </ul>
          </div>

          {/*  IMAGES */}
          <div className="flex flex-col gap-y-4 items-center">
            <div className="relative w-screen">
              <Image
                src="/images/projects/project6/img3.png"
                alt="img3"
                className=" w-full h-full img"
                width={1440}
                height={1024}
              />
            </div>
            <div className="w-[872px]">
              <Typography variant="caption" className="pl-12">
                <i>*Key screens</i>
              </Typography>
            </div>
          </div>

          <div className="grid gap-y-4 w-full max-w-[872px]">
            <div className="relative w-full h-full aspect-[872/674] overflow-hidden">
              <Image
                src="/images/projects/project6/img4.png"
                alt="img1"
                className="absolute inset-0 w-full h-full img"
                width={872}
                height={674}
              />
            </div>

            <Typography variant="caption" className="pl-12">
              <i>
                *Community elements (the ability to follow and engage with other
                countries to exchange knowledge and learn best practices)
              </i>
            </Typography>
          </div>

          <div className="grid gap-y-4 w-full max-w-[872px]">
            <div className="relative w-full h-full aspect-[872/464] overflow-hidden">
              <Image
                src="/images/projects/project6/img5.png"
                alt="img1"
                className="absolute inset-0 w-full h-full img"
                width={872}
                height={464}
              />
            </div>

            <Typography variant="caption" className="pl-12">
              <i>*A guide to easy platform adoption.</i>
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
                The platform transformed GPAP’s approach from a fragmented model
                to a collaborative system. It equipped civil servants and
                policymakers with essential tools to effectively address plastic
                pollution, enabling their efforts to scale globally. The
                platform has expanded its reach significantly,{" "}
                <span className="font-bold">
                  currently serving 17 countries, up from just 2 at the time of
                  the initial research.
                </span>
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
                In just two weeks, I laid down the initial vision, and we
                managed to launch the platform in under six months. This
                experience reinforced the idea that{" "}
                <span className="font-bold">
                  when everyone collaborates effectively and resources are used
                  wisely, we can achieve significant and meaningful results
                  quickly.
                </span>{" "}
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

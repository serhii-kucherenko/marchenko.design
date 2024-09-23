"use client";

import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { getProjectById, Project } from "@/app/types/project";
import Image from "next/image";

import { WorkSlider } from "@/app/work/(locked)/components/WorkSlider/WorkSlider";
import { PageLayoutContainerless } from "@/app/components/page-layout-containerless";

const project = getProjectById("global-initiatives-digital-spaces") as Project;

export default function Work() {
  return (
    <PageLayoutContainerless
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
              Create a solution that{" "}
              <span className="font-bold">helps various initiatives</span>{" "}
              connect with a global ecosystem of people, resources, and tools to
              increase engagement and{" "}
              <span className="font-bold">
                amplify their impact on global issues.
              </span>
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
              Many World Economic Forum (WEF) initiatives face challenges in
              maintaining a consistent{" "}
              <span className="font-bold">
                multichannel presence while managing member-only content.
              </span>{" "}
              They also{" "}
              <span className="font-bold">struggle to find tailored tools</span>{" "}
              for their unique needs without expanding their teams or relying on
              third-party vendors. Recognizing that similar tools could be
              shared across initiatives, we saw an opportunity to develop a
              unified platform that offers customizable solutions, streamlining
              operations and empowering initiatives to focus on their core
              goals.
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
                *Initial workflows
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
                  I began by{" "}
                  <span className="font-bold">reviewing past studies</span> with
                  initiative leads to define the right personas and{" "}
                  <span className="font-bold">identify key tasks</span> the
                  solution needed to address. Using these insights, I crafted{" "}
                  <span className="font-bold">
                    initial workflows and wireframes
                  </span>{" "}
                  to present to leadership for approval.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  After securing buy-in, the team gathered onsite to{" "}
                  <span className="font-bold">prioritize MVP features</span> and
                  select appropriate technologies, considering both requirements
                  and limitations. Concurrently, we conducted{" "}
                  <span className="font-bold">usability testing</span> on early
                  designs to gather feedback and refine the solution.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  With a clear scope, we collaborated closely with developers to
                  rapidly create designs for the MVP. Following its successful
                  launch, the team{" "}
                  <span className="font-bold">
                    continued iterating and developing backlog features
                  </span>{" "}
                  to realize the full product vision.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  Post-launch, I conducted{" "}
                  <span className="font-bold">
                    quarterly workshops to refine features
                  </span>{" "}
                  and prioritize new requirements based on user feedback and
                  evolving needs
                </Typography>
              </li>
            </ul>
          </div>

          <div className="grid gap-y-4 w-full max-w-[872px]">
            <div className="relative w-full h-full aspect-[872/464] overflow-hidden">
              <Image
                src="/images/projects/project2/img1.png"
                alt="img1"
                className="absolute inset-0 w-full h-full img"
                width={872}
                height={464}
              />
            </div>

            <Typography variant="caption" className="pl-12">
              *Initial wireframes
            </Typography>
          </div>

          <div className="grid gap-y-4 w-full max-w-[872px]">
            <div className="relative w-full h-full aspect-[872/412] overflow-hidden">
              <Image
                src="/images/projects/project2/img2.png"
                alt="img1"
                className="absolute inset-0 w-full h-full img"
                width={872}
                height={412}
              />
            </div>

            <Typography variant="caption" className="pl-12">
              *Main personas & Prioritization matrix
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
              <Typography variant="body1" fontWeight={300}>
                We identified two primary{" "}
                <span className="font-bold">
                  user groups: initiative leads/managers
                </span>{" "}
                (our clients) and <span className="font-bold">end users</span> .
                For owners, simplicity, high customization, and a sense of
                empowerment were essential, while end users valued collaboration
                tools, access to world-class knowledge, and networking
                opportunities.
              </Typography>
              <Typography variant="body1" fontWeight={300}>
                Strategically,{" "}
                <span className="font-bold">
                  we prioritized building tools for owners first
                </span>{" "}
                , which gave us time to conduct more research on the specific
                tools needed by users. This approach allowed us to gradually
                expand their feature set after launch.
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
              <Typography variant="body1" fontWeight={300}>
                The final platform, Forum Spaces, is a{" "}
                <span className="font-bold">
                  comprehensive builder for initiatives
                </span>{" "}
                focused on collaboration and knowledge-sharing, featuring
                several key elements:
              </Typography>

              <ul className="list-disc pl-6">
                <li>
                  <Typography variant="body1" fontWeight={300}>
                    <span className="font-bold">Customizable Workspaces:</span>{" "}
                    initiative managers have full control over visual design,
                    content visibility, and participant management.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" fontWeight={300}>
                    <span className="font-bold">Collaboration Tools:</span> a
                    robust selection of tools, chosen by managers as building
                    blocks, enables users to share knowledge, collaborate, and
                    grow their networks.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" fontWeight={300}>
                    <span className="font-bold">Knowledge Repository:</span> a
                    central space for accessing and sharing world-class
                    insights.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" fontWeight={300}>
                    <span className="font-bold">Privacy Controls:</span> owners
                    manage content visibility, ensuring secure access for both
                    public and private audiences.
                  </Typography>
                </li>
              </ul>
            </div>
          </div>

          {/*  GRID */}
          <div className="grid gap-y-6 w-full max-w-[872px]">
            <div className="relative w-full h-full aspect-[872/412] overflow-hidden">
              <Image
                src="/images/projects/project2/grid-img1.png"
                alt="img1"
                className="absolute inset-0 w-full h-full img"
                width={872}
                height={412}
              />
            </div>

            <div className="relative w-full h-full aspect-[872/412] overflow-hidden">
              <Image
                src="/images/projects/project2/grid-img2.png"
                alt="img1"
                className="absolute inset-0 w-full h-full img"
                width={872}
                height={412}
              />
            </div>

            <div className="grid gap-y-4">
              <div className="relative w-full h-full aspect-[872/480] overflow-hidden">
                <Image
                  src="/images/projects/project2/grid-img3.png"
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
                      src="https://github.com/serhii-kucherenko/marchenko.design/raw/refs/heads/main/public/widgets.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>

              <Typography variant="caption" className="pl-12">
                *Editor
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
                In the first <span className="font-bold">18 months</span> , over
                65 initiatives joined Forum Spaces, drawing ~ 500,000 unique
                users and over 1 million page views. The platform was recognized
                within the forum as the most innovative product of the last
                decade.
              </Typography>

              <div className="grid grid-cols-3 gap-0 py-3">
                <div className="grid gap-y-2">
                  <Typography
                    variant="h2"
                    fontWeight={800}
                    fontSize={32}
                    lineHeight={40 / 32}
                  >
                    65+
                  </Typography>

                  <Typography
                    variant="h5"
                    fontWeight={700}
                    className="text-[#02040599]"
                  >
                    Live spaces
                  </Typography>
                </div>
                <div className="grid gap-y-2">
                  <Typography
                    variant="h2"
                    fontWeight={800}
                    fontSize={32}
                    lineHeight={40 / 32}
                  >
                    ~500K
                  </Typography>

                  <Typography
                    variant="h5"
                    fontWeight={700}
                    className="text-[#02040599]"
                  >
                    Unique visitors
                  </Typography>
                </div>
                <div className="grid gap-y-2">
                  <Typography
                    variant="h2"
                    fontWeight={800}
                    fontSize={32}
                    lineHeight={40 / 32}
                  >
                    1M
                  </Typography>

                  <Typography
                    variant="h5"
                    fontWeight={700}
                    className="text-[#02040599]"
                  >
                    Pages visited
                  </Typography>
                </div>
              </div>

              <Typography variant="body1" fontWeight={300}>
                It enhanced collaboration among global leaders, leading to more
                informed, actionable outcomes on critical issues. As of now,
                over 100 initiatives have adopted the platform, which continues
                to evolve, adding new features and further solidifying its role
                as a key tool in global collaboration efforts.
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
                This project offered numerous valuable lessons. The most
                significant was{" "}
                <span className="font-bold">managing the team</span> while
                balancing business needs with user demands and project
                constraints. At times, sacrifices were necessary to meet
                deadlines, but{" "}
                <span className="font-bold">
                  maintaining focus on the big picture
                </span>{" "}
                ensured continuous progress and improvement.
              </Typography>
              <Typography variant="body1" fontWeight={300}>
                Another key takeaway was the implementation of processes to{" "}
                <span className="font-bold">
                  enhance cross-team collaboration
                </span>{" "}
                , which boosted efficiency considering tight timelines. This
                experience in streamlining workflows and fostering teamwork is
                something I will carry forward into future projects.
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

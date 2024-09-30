"use client";

import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { getProjectById, Project } from "@/app/types/project";
import Image from "next/image";

import { WorkSlider } from "@/app/work/(locked)/components/WorkSlider/WorkSlider";
import { PageLayoutContainerless } from "@/app/components/page-layout-containerless";
import { AboutButton } from "@/app/components/about-button";
import { CVCircle } from "@/app/components/cv-circle";

const project = getProjectById("creative-website") as Project;

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
              To design a{" "}
              <span className="font-bold">bold, visually striking website</span>{" "}
              that reflects the innovative vision of Brandlive&apos;s product
              suite.
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
              Brandlive needed{" "}
              <span className="font-bold">
                a website that matched the ambitions of its new Allhands product
              </span>
              , designed to provide a refreshed, engaging platform for
              company-wide meetings. As Brandlive&apos;s portfolio expanded, the{" "}
              <span className="font-bold">
                website also needed to evolve with the company’s vision
              </span>{" "}
              and support the growth of its suite of products.
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
                  <span className="font-bold">Stakeholder Interviews:</span> the{" "}
                  <span className="font-bold">project began with</span>{" "}
                  stakeholder interviews to gain insights into the vision and
                  goals for the{" "}
                  <span className="font-bold">Allhands website</span> . As
                  Brandlive evolved, I was{" "}
                  <span className="font-bold">also</span> tasked with creating a
                  new{" "}
                  <span className="font-bold">
                    website for the entire company
                  </span>{" "}
                  , aligning the design with its broader vision.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">
                    Initial Concepts & Iterations:
                  </span>{" "}
                  I developed several initial versions of the website, focusing
                  on how to visually differentiate Brandlive from competitors.
                  After discussions, we decided on a bold and vibrant direction
                  to break away from the traditional corporate look, giving the
                  brand a{" "}
                  <span className="font-bold">fresh, standout identity.</span>
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">
                    Collaborative & Iterative Process:
                  </span>{" "}
                  the design process was highly collaborative and iterative,
                  involving continuous feedback from the Brandlive team.
                  Frequent A/B testing helped us evaluate design hypotheses and
                  make adjustments based on market positioning.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" fontWeight={300}>
                  <span className="font-bold">
                    Team Expansion & Mentorship:
                  </span>{" "}
                  as the project expanded, I brought in a junior designer to
                  assist. Under my mentorship, the junior designer took on more
                  responsibilities, allowing me to transition to another
                  project.
                </Typography>
              </li>
            </ul>
          </div>

          <div className="grid gap-y-4 w-full max-w-[872px]">
            <div className="relative w-full h-full aspect-[872/345] overflow-hidden">
              <Image
                src="/images/projects/project4/img1.png"
                alt="img1"
                className="absolute inset-0 w-full h-full img"
                width={872}
                height={345}
              />
            </div>

            <Typography variant="caption" className="pl-12">
              <i>
                *Initial designs were more traditional, but the final direction
                chosen featured bold colors and storytelling. Later, the site
                was deprecated, and the product was integrated into the
                Brandlive suite as part of a shift in market positioning.
              </i>
            </Typography>
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

            <div className="grid gap-y-6 pl-12">
              <Typography variant="body1" fontWeight={300}>
                <span className="font-bold">Bold Design:</span> the final
                website embraced vibrant colors and dynamic visuals that
                embodied the spirit of Brandlive. This bold approach set the
                brand apart and reinforced its innovative identity. The main
                page had a concept where each project was represented as a room
                you could enter through a door. I also heavily incorporated the
                company mascot and used various animations, like 3D cube
                rotations to showcase testimonials, which were quite innovative
                at the time.
              </Typography>
              <Typography variant="body1" fontWeight={300}>
                <span className="font-bold">Scalability:</span> while the design
                was bold, scalability remained a key consideration. The flexible
                layout of the product pages allowed for seamless updates as
                Brandlive’s product suite grew or evolved. This ensured that new
                sections or features could be added without overhauling the
                entire website.
              </Typography>
              <Typography variant="body1" fontWeight={300}>
                <span className="font-bold">Data-Driven Decisions:</span>{" "}
                continuous A/B testing guided design choices, ensuring they were
                backed by real results. Testing variations of layouts and
                product offerings helped turn more leads into clients.
              </Typography>
            </div>
          </div>

          {/*  IMAGES */}
          <div className="grid gap-y-4 w-full max-w-[872px]">
            <div className="relative w-full h-full aspect-[872/884] overflow-hidden">
              <Image
                src="/images/projects/project4/img2.png"
                alt="img1"
                className="absolute inset-0 w-full h-full img"
                width={872}
                height={884}
              />
            </div>

            <Typography variant="caption" className="pl-12">
              <i>*Home page</i>
            </Typography>
          </div>

          {/* Business Results & Impact */}
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
                Brandlive’s bold website design contributed to{" "}
                <span className="font-bold">
                  its recognition by Fast Company as one of the World’s 50 Most
                  Innovative Companies in 2021.
                </span>{" "}
                The creative direction of the website not only reflected the
                company’s vision but also strengthened Brandlive’s overall brand
                identity, setting it apart from competitors.
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
                This project highlighted the importance of bold design
                decisions.{" "}
                <span className="font-bold">Pushing creative boundaries</span>{" "}
                made the website stand out, while remaining flexible and
                iterative ensured alignment with Brandlive’s evolving vision.
                The experience also reinforced the{" "}
                <span className="font-bold">value of mentorship</span> , as
                guiding a junior team member through the project fostered skill
                development and ensured a smooth transition as I moved on to new
                responsibilities.
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

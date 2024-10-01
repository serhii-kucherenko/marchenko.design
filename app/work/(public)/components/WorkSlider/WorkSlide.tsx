import { Project } from "@/app/types/project";
import { SwiperSlide, useSwiper } from "swiper/react";
import { Box, Typography } from "@mui/material";
import LeftButtonArrow from "@/public/images/arrow-left-button.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface WorkSlideProps {
  recommendedProjects: Project[];
}

export const WorkSlide = ({ recommendedProjects }: WorkSlideProps) => {
  const swiper = useSwiper();

  console.log(recommendedProjects);

  return (
    <>
      <div slot="container-start" className="flex w-full justify-between">
        <Typography variant="h2" fontSize={56} fontWeight={500}>
          Check more works
        </Typography>

        <Box
          sx={{
            "& .active": {
              fillOpacity: 0.6,
            },
          }}
          className="flex space-x-4"
        >
          <LeftButtonArrow
            className={cn({
              active: !swiper?.isBeginning,
            })}
            onClick={() => {
              swiper?.slidePrev();
            }}
          />

          <LeftButtonArrow
            className={cn("transform rotate-180", {
              active: !swiper?.isEnd,
            })}
            onClick={() => {
              swiper?.slideNext();
            }}
          />
        </Box>
      </div>

      {recommendedProjects.map((project, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full aspect-[422/288] overflow-hidden">
            <Image
              src={project.image}
              alt="img1"
              className="absolute inset-0 w-full h-full img"
              width={422}
              height={288}
            />
          </div>
        </SwiperSlide>
      ))}
    </>
  );
};

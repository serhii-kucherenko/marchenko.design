import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { getRecommendedProjects } from "@/app/types/project";

import "swiper/css";
import "swiper/css/pagination";
import { Box, Typography } from "@mui/material";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import type { Swiper as SwiperClass } from "swiper/types";
import Link from "next/link";

interface WorkSliderProps {
  workId: string;
}

export const WorkSlider = ({ workId }: WorkSliderProps) => {
  const recommendedProjects = getRecommendedProjects(workId);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [swiper, setSwiper] = React.useState<SwiperClass>();

  return (
    <Box
      className="flex flex-col space-y-6"
      sx={{
        "& .swiper": {
          display: "grid",
          overflow: "visible",
        },

        "& .swiper-wrapper": {
          minWidth: 0,
        },

        "& .swiper-slide": {
          width: 424,
        },
      }}
    >
      <div className="flex w-full items-center justify-between pl-[84px]">
        <Typography variant="h2" fontSize={56} fontWeight={500}>
          Check more works
        </Typography>

        <Box
          className="flex space-x-4"
        >
          <ArrowLeft
            size={32}
            strokeWidth={1}
            className={cn(
              "cursor-pointer transition-opacity",
              activeIndex > 0 ? "opacity-100" : "opacity-30",
            )}
            onClick={() => {
              swiper?.slidePrev();
            }}
          />

          <ArrowLeft
            size={32}
            strokeWidth={1}
            className={cn(
              "rotate-180 cursor-pointer transition-opacity",
              activeIndex < recommendedProjects.length - 2
                ? "opacity-100"
                : "opacity-30",
            )}
            onClick={() => {
              swiper?.slideNext();
            }}
          />
        </Box>
      </div>

      <Swiper
        spaceBetween={24}
        slidesPerView="auto"
        onActiveIndexChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
        onSwiper={setSwiper}
      >
        {recommendedProjects.map((project, index) => (
          <SwiperSlide key={index}>
            <Link
              href={
                project.status === "coming-soon"
                  ? "/"
                  : `/work/${project.id}`
              }
            >
              <Box
                className="relative w-full h-full aspect-[424/288] overflow-hidden select-none"
                sx={{
                  "& .img": {
                    transition: "transform 0.3s",
                  },

                  "&:hover": {
                    cursor: "pointer",
                    "& .img": {
                      transform: "scale(1.05)",
                    },
                  },
                }}
              >
                <Image
                  src={project.image}
                  alt="img1"
                  className="absolute inset-0 w-full h-full img select-none"
                  width={424}
                  height={288}
                />
              </Box>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

"use client";
import React from "react";

import { PageLayout } from "@/app/components/page-layout";

import { Link, Typography } from "@mui/material";
import { CVCircle } from "@/app/components/cv-circle";

export function TableMobileContent() {
  return (
    <PageLayout
      title={
        <div className="grid gap-y-6">
          <Typography variant="h1" fontWeight="500">
            Case studies are available on desktop only
          </Typography>
          <Typography variant="body1" fontWeight={300}>
            Please access them from a desktop computer for the best experience.
          </Typography>
        </div>
      }
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
      floatButton={<CVCircle />}
    >
      <div className="h-[calc(100vh-520px)]" />
    </PageLayout>
  );
}

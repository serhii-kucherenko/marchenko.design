"use client";

import { ClientLayout } from "@/app/work/(public)/components/ClientLayout";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

export default function WorkLayout({ children }: IProps) {
  return <ClientLayout>{children}</ClientLayout>;
}

"use client";
import { useIsClient } from "@uidotdev/usehooks";
import { ClientLayout } from "@/app/work/(locked)/components/ClientLayout";

interface IProps {
  children: React.ReactNode;
}

export default function WorkLayout({ children }: IProps) {
  const isClient = useIsClient();

  if (!isClient) {
    return null;
  }

  return <ClientLayout>{children}</ClientLayout>;
}

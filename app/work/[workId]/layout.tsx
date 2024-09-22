"use client";
import { useLocalStorage } from "@uidotdev/usehooks";
import { PasswordContent } from "@/app/work/[workId]/components/PasswordContent";
import { getProjectById } from "@/app/types/project";
import { redirect } from "next/navigation";
import { PageLayout } from "@/app/components/page-layout";

interface IProps {
  children: React.ReactNode;
  params: {
    workId: string;
  };
}

export default function WorkLayout({ children, params: { workId } }: IProps) {
  const [password] = useLocalStorage("password", null);
  const haveAccess = process.env.NEXT_PUBLIC_PASSWORD === password;
  const project = getProjectById(workId);
  const isLocked = project?.locked;

  if (!project) {
    redirect("/work");
  }

  if (isLocked && !haveAccess) {
    return <PasswordContent />;
  }

  return <PageLayout>{children}</PageLayout>;
}

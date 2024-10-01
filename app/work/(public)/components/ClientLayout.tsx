"use client";
import { useLocalStorage } from "@uidotdev/usehooks";
import { PasswordContent } from "@/app/work/(public)/components/PasswordContent";
import { useMediaQuery } from "@mui/material";
import { TableMobileContent } from "@/app/work/(public)/components/TableMobileContent";
import { usePathname } from "next/navigation";
import { getProjectById } from "@/app/types/project";

interface IProps {
  children: React.ReactNode;
}

export const ClientLayout = ({ children }: IProps) => {
  const isTabledOrMobile = useMediaQuery("(max-width: 872px)");
  const [password, setPassword] = useLocalStorage("password", "");
  const haveAccess = (process.env.NEXT_PUBLIC_MARCH || "")
    .split(",")
    .includes(password);
  const pathname = usePathname();
  const workPath = pathname.split("/").at(-1) || "";
  const project = getProjectById(workPath);

  console.log("project", project);
  console.log({
    isTabledOrMobile,
    isLocked: project?.locked,
    haveAccess,
    env: process.env.NEXT_PUBLIC_MARCH,
  });

  if (isTabledOrMobile) {
    return <TableMobileContent />;
  }

  if (project?.locked && !haveAccess) {
    return <PasswordContent password={password} setPassword={setPassword} />;
  }

  return children;
};

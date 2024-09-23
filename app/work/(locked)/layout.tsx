"use client";
import { useLocalStorage } from "@uidotdev/usehooks";
import { PasswordContent } from "@/app/work/(locked)/components/PasswordContent";
import { useMediaQuery } from "@mui/material";
import { TableMobileContent } from "@/app/work/(locked)/components/TableMobileContent";

interface IProps {
  children: React.ReactNode;
}

export default function WorkLayout({ children }: IProps) {
  const [password, setPassword] = useLocalStorage("password", "");
  const haveAccess = process.env.NEXT_PUBLIC_MARCH === password;
  // 872px and down
  const isTabledOrMobile = useMediaQuery("(max-width: 872px)");

  if (!haveAccess) {
    return <PasswordContent password={password} setPassword={setPassword} />;
  }

  if (isTabledOrMobile) {
    return <TableMobileContent />;
  }

  return children;
}

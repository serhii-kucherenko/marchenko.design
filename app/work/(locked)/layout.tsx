"use client";
import { useLocalStorage } from "@uidotdev/usehooks";
import { PasswordContent } from "@/app/work/(locked)/components/PasswordContent";

interface IProps {
  children: React.ReactNode;
}

export default function WorkLayout({ children }: IProps) {
  const [password, setPassword] = useLocalStorage("password", "");
  const haveAccess = process.env.NEXT_PUBLIC_MARCH === password;

  if (!haveAccess) {
    return <PasswordContent password={password} setPassword={setPassword} />;
  }

  return children;
}

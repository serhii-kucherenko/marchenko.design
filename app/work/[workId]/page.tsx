"use client";

import { useLocalStorage } from "@uidotdev/usehooks";

export default function Work() {
  const [password, setPassword] = useLocalStorage("password", null);

  return <div>Work {}</div>;
}

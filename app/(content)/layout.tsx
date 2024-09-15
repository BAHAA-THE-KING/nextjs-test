"use client";

import { redirect } from "next/navigation";
import { Sidebar } from "../components";
import { useAccountData } from "../hooks/useAccountData";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [account] = useAccountData();
  if (!account) redirect("/login");
  return (
    <>
      <Sidebar />
      <main>{children}</main>
    </>
  );
}

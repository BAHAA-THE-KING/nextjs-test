"use client";

import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

export function AppWrapper({ children }: { children: ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

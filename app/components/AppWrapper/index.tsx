"use client";

import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

import "sweetalert2/src/sweetalert2.scss";

export function AppWrapper({ children }: { children: ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

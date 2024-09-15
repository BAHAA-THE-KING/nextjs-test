import type { Metadata } from "next";
import { Body } from "./components";

export const metadata: Metadata = {
  title: "Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Body>{children}</Body>
    </html>
  );
}

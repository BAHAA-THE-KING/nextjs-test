import type { Metadata } from "next";
import { AppWrapper, Body } from "./components";

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
      <AppWrapper>
        <Body>{children}</Body>
      </AppWrapper>
    </html>
  );
}

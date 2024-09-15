import type { Metadata } from "next";
import { Sidebar } from "./components";

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
      <body>
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  );
}

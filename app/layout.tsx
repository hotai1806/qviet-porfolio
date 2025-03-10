import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jason Huang",
  description:
    "Portfolio website for Jason Huang, Data Analyst based in Taipei, Taiwan.",
  generator: "v0.dev",

  icons: [
    {
      rel: "icon",
      type: "image/svg",
      sizes: "32x32",
      // url: "/qvietportrait.jpeg",
      url: "/icon.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import DarkModeToggle from "@/components/DarkModeToggle";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rishaub Kumar | Portfolio",
  description: "Portfolio of Rishaub Kumar - Computer Science student and full-stack developer.",
  keywords: [
    "Rishaub Kumar",
    "Portfolio",
    "Full-Stack Developer",
    "VIT Bhopal",
    "JavaScript",
    "React",
    "Node.js",
    "Computer Science",
  ],
  authors: [{ name: "Rishaub Kumar", url: "https://github.com/rishaubkumar" }],
  openGraph: {
    title: "Rishaub Kumar | Portfolio",
    description: "Portfolio of Rishaub Kumar - Computer Science student and full-stack developer.",
    url: "https://rishaubkumar.vercel.app/",
    siteName: "Rishaub Kumar Portfolio",
    images: [
      {
        url: "/profile-placeholder.png",
        width: 800,
        height: 600,
        alt: "Rishaub Kumar Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className + " bg-white dark:bg-gray-900 transition-colors duration-300"}>
        <Navbar />
        <DarkModeToggle />
        {children}
      </body>
    </html>
  );
}

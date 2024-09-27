import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saas Landing Page",
  description: "Template for SaaS landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(nunito.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}

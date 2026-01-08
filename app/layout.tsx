import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const fontSans = IBM_Plex_Sans({
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = GeistMono;

export const metadata: Metadata = {
  title: "Sayandeep Das | Software Engineer",
  description: "Software Engineer specializing in building polished, high-performance web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

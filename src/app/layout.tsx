import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${font.className}`}>
      <body className="dark relative bg-background min-h-dvh">{children}</body>
    </html>
  );
}

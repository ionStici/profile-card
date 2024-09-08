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
      <body className="relative min-h-dvh dark bg-pattern-dark bg-slate-100 dark:bg-slate-700 transition duration-300">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ETHBoston 2024",
  description: "The official site of ETHBoston.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=" ${inter.className} font-open"
        style={{ backgroundColor: `rgba(252, 189, 75, .1)` }}
      >
        <div className="z-40 fixed">
          <Header />
        </div>
        <div className="z-0 pt-15">{children}</div>
      </body>
    </html>
  );
}

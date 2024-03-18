import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const imageUrl = `${process.env["HOST"]}/og-image.webp`;
  const fcMetadata: Record<string, string> = {
    "fc:frame": "vNext",
    "fc:frame:image": imageUrl,

    "fc:frame:button:1": `Details`,
    "fc:frame:button:1:action": "link",
    "fc:frame:button:1:target": `https://ethboston.xyz`,

    "fc:frame:button:2": `Get Tickets`,
    "fc:frame:button:2:action": "link",
    "fc:frame:button:2:target": `https://ethboston.xyz/get-tickets`,
  };

  return {
    title: "ETHBoston 2024",
    openGraph: {
      title: `ETHBoston 2024`,
      description: `ETHBoston and The Boston DAO are proud to present ETHBoston 2024`,
      images: [{ url: imageUrl }],
    },
    other: {
      ...fcMetadata,
    },
    metadataBase: new URL(process.env["HOST"] || ""),
  };
}


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

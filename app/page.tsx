import Footer from "./components/Footer";
import TitleInfo from "./components/TitleInfo";
import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const imageUrl = `${process.env["HOST"]}/og-image.png`;
  const fcMetadata: Record<string, string> = {
    "fc:frame": "vNext",
    "fc:frame:image": imageUrl,

    "fc:frame:button:1": `View Site`,
    "fc:frame:button:1:action": "link",
    "fc:frame:button:1:target": `https://ethboston.xyz`,

    "fc:frame:button:2": `Join Waitlist`,
    "fc:frame:button:2:action": "link",
    "fc:frame:button:2:target": `https://ethboston.typeform.com/waitlist2024`,
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

export default function Page() {
  const scrollToSection = (id: string) => {
    const e = document.getElementById(id);
    if (!e) return;
    e.scrollIntoView();
  };

  return (
    <main className="font-open" id="home">
      {/* Logo, header, image */}
      <div className="pt-0 sm:pt-4">
        <TitleInfo />
      </div>
      {/* Date and location */}
      <section className="flex justify-center mx-2 my-5">
        <div className="flex items-center text-sm sm:text-2xl rounded-full border justify-between text-blue-1 w-full sm:w-3/4 lg:w-2/3">
          <article className="flex items-center justify-center">
            <span className="rounded-full border p-2 m-1 bg-blue-2">
              <img src="./calendar.svg" alt="Dates" />
            </span>
            <span className="mx-2 pr-2 font-semibold">April 26-28 2024</span>
          </article>
          <article className="flex items-center justify-center">
            <a
              href="https://maps.app.goo.gl/eKjAFpVinXYtTCV89"
              target="_blank"
              className="mx-2 pl-2 font-semibold text-right"
            >
              595 Commonwealth Avenue, Boston, MA
            </a>
            <span className="rounded-full border p-2 m-1 bg-blue-2">
              <img src="./map-pin.svg" alt="Dates" />
            </span>
          </article>
        </div>
      </section>
      {/* CTAs */}
      <section className="flex flex-col sm:flex-row justify-center text-2xl py-5">
        <Link
          href="get-tickets"
          className="inline-block bg-blue-3 text-white font-semibold mx-6 text-center border-2 border-red-500 rounded-lg px-4 py-2 shadow-lg"
        >
          GET TICKETS
        </Link>
        {/* <a
            href="https://ethboston.typeform.com/speakerproposal"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-blue-3 text-white font-semibold mx-6 text-center border-2 border-red-500 rounded-lg px-4 py-2 my-4 sm:my-0">
            SPEAK
          </a>
          <a
            href="https://ethboston.typeform.com/volunteer"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-blue-3 text-white font-semibold mx-6 text-center border-2 border-red-500 rounded-lg px-4 py-2">
            VOLUNTEER
          </a> */}
      </section>
      {/* Socials */}
      <section className="flex justify-center z-20">
        <article className="flex flex-col sm:flex-row items-center justify-around w-full sm:w-2/3 z-20">
          <a
            href="https://twitter.com/ETHBoston"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center text-xl rounded-full border px-4 py-2 hover:bg-sky-100"
          >
            Follow us on
            <img src="./twitter.svg" alt="Twitter icon" className="ml-2-1" />
          </a>
        </article>
      </section>
      {/* Description */}
      <section className="flex justify-center text-blue-1 text-lg">
        <article className="p-5 w-full sm:w-3/4 lg:w-2/3">
          <p className="mb-4">
            ETHBoston and The Boston DAO are proud to present ETHBoston 2024 at
            Boston University April 26-28 2024. We are excited to return to
            Boston University for this conference. The in-person conference will
            feature two stages of speakers and panelists, technology specific
            workshops, networking events, and a hackathon.
          </p>
          <p className="mb-4">
            ETHBoston is an opportunity to support, grow, and foster the
            development of the web3 ecosystem. The conference will build
            awareness among, and directly impact, developers, industry experts,
            advisers, investors, students, and companies who are creating the
            next generation of infrastructure and applications that will power
            the decentralized web.
          </p>
        </article>
      </section>

      {/* Sponsors */}
      <section className="pb-5">
        <article className="text-center text-blue-1 italic">
          Interested in sponsoring the event? Email{" "}
          <a href="mailto:sponsor@ethboston.xyz" className="underline ">
            sponsor@ethboston.xyz
          </a>
        </article>
      </section>
      <section className="w-full pb-10">
        <article className="w-full">
          {/* make the Next Image above full screen */}
          <img
            src="sponsor_banner.png"
            alt="Sponsors list"
            className="w-full"
          />
        </article>
      </section>
      {/* schedule
        <section id="schedule">
          <img src="saturday.webp" alt="Saturday schedule" />
          <img src="sunday.webp" alt="Saturday schedule" />
        </section> */}
      <Footer />
    </main>
  );
}

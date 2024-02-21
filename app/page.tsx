import SpeakerCard from "./components/SpeakerCard";
import Footer from "./components/Footer";
import TitleInfo from "./components/TitleInfo";
import {Metadata} from "next"

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
  const speakerList = require(`./speakers.json`);
  return (
      <main
        style={{ backgroundColor: `rgba(252, 189, 75, .1)` }}
        className="font-open"
        id="home">
        {/* Top header: */}
        <header style={{ backgroundColor: `rgba(255, 247, 237)` }} className="fixed z-40 bottom-0 sm:bottom-auto sm:top-0 w-full flex justify-start md:justify-end p-4 border-t-2 sm:border-t-0 sm:border-b-2 border-blue-1 overflow-auto">
          {/* <button className="mx-4 uppercase text-blue-1 font-semibold" onClick={() => scrollToSection(`sponsors`)}>Sponsors</button>
          <button className="mr-4 uppercase text-blue-1 font-semibold" onClick={() => scrollToSection(`schedule`)}>Schedule</button>
          <button className="mr-4 uppercase text-blue-1 font-semibold" onClick={() => scrollToSection(`speakers`)}>Speakers</button>
          <a
            href="https://docs.google.com/document/d/1H4nFG_oArH1-5KFBI1ZOcdCCtWyhAn1NGauVzxFDtmQ/edit"
            target="_blank"
            rel="noreferrer"
            className="mr-4 uppercase text-blue-1 font-semibold"
          >
            Hackathon
          </a> */}
          <a
            href="https://ethboston.typeform.com/waitlist2024"
            target="_blank"
            rel="noreferrer"
            className="mr-4 uppercase text-blue-1 font-semibold"
          >
            Tickets
          </a>
        </header>
        {/* Logo, header, image */}
        <div className="pt-0 sm:pt-4">
          <TitleInfo />
        </div>
        {/* Rough schedule */}
        <section>
          <article>
            <div className="grid grid-cols-2 gap-2 text-center p-3">
              <p className="text-blue-3">
                <span className="font-semibold">Conference</span> - TBD
              </p>
              <p className="text-blue-3">
                <span className="font-semibold">Hackathon</span> - TBD
              </p>
            </div>
          </article>
        </section>
        {/* Date and location */}
        <section className="flex justify-center mx-2 my-5">
          <div className="flex items-center text-md sm:text-2xl rounded-full border justify-between text-blue-1">
            <article className="flex items-center justify-center">
              <span className="rounded-full border p-2 m-1 bg-blue-2">
                <img src="./calendar.svg" alt="Dates" />
              </span>
              <span className="mx-2 pr-2 font-semibold">April 26-28 2024</span>
            </article>
            <article className="flex items-center justify-center">
              <span className="mx-2 pl-2 font-semibold text-right">
                TBD
              </span>
              <span className="rounded-full border p-2 m-1 bg-blue-2">
                <img src="./map-pin.svg" alt="Dates" />
              </span>
            </article>
          </div>
        </section>
        {/* Socials */}
        <section className="flex justify-center z-20">
          <article className="flex flex-col sm:flex-row items-center justify-around pt-5 w-full sm:w-2/3 z-20">
            {/* Twitter */}
            <a
              href="https://twitter.com/ETHBoston"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center text-xl rounded-full border px-4 py-2 mb-4 hover:bg-sky-100">
              Follow us on
              <img src="./twitter.svg" alt="Twitter icon" className="ml-2" />
            </a>
            {/* Buy tickets */}
            <a
              href="https://ethboston.typeform.com/waitlist2024"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center text-xl rounded-full border px-4 py-2 mb-4 hover:bg-sky-100">
              Join the Waitlist!
            </a>
            {/* Email */}
            <a
              href="mailto:sponsor@ethboston.xyz"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center text-xl rounded-full border px-4 py-2 hover:bg-gray-100">
              Inquire
              <img src="./mail.svg" alt="Twitter icon" className="ml-2" />
            </a>
          </article>
        </section>
        {/* Description */}
        <section className="flex justify-center text-blue-1 text-lg">
          <article className="p-5 w-full sm:w-3/4 lg:w-2/3">
            <p className="mb-4">
              ETHBoston and The Boston DAO are proud to present ETHBoston 2024 at
              Boston University April 26-28 2024. We are excited to return
              to Boston University for this conference. The
              in-person conference will feature two stages of speakers and
              panelists, technology specific workshops, networking events, and a
              hackathon.
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
        {/* CTAs */}
        <section className="flex flex-col sm:flex-row justify-center text-2xl pb-5">
          <a
            href="https://ethboston.typeform.com/waitlist2024"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-blue-3 text-white font-semibold mx-6 text-center border-2 border-red-500 rounded-lg px-4 py-2">
            ATTEND
          </a>
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
        {/* schedule
        <section id="schedule">
          <img src="saturday.webp" alt="Saturday schedule" />
          <img src="sunday.webp" alt="Saturday schedule" />
        </section> */}
        {/* Speakers */}
        <section className="py-10" id="speakers">
          <div className="flex justify-center">
            <h1 className="text-5xl uppercase font-semibold text-blue-1">
              Previous Speakers
            </h1>
          </div>
          <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 p-10">
            {speakerList.speakers.map((s: { name: any; src: any; company: any; linkedin: any; }) => {
              return (
                <SpeakerCard
                  name={s.name}
                  imgSrc={s.src}
                  company={s.company}
                  key={s.name}
                  linkedin={s.linkedin}
                />
              );
            })}
          </article>
        </section>
        <Footer />
      </main>
    );
  }

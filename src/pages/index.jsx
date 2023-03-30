import React from "react";
import SpeakerCard from "../components/SpeakerCard";
import Footer from "../components/Footer";
import TitleInfo from "../components/TitleInfo";

export default function Index() {
	const speakerList = require(`../speakers.json`);
	return (
		<main style={{ backgroundColor: `rgba(252, 189, 75, .1)` }}>
			{/* Logo, header, image */}
			<TitleInfo />
			{/* Date and location */}
			<section className="flex justify-center my-5">
				<div className="flex items-center rounded-full border justify-between text-blue-1">
					<article className="flex items-center justify-center">
						<span className="rounded-full border p-2 m-1 bg-blue-2">
							<img src="./calendar.svg" alt="Dates" />
						</span>
						<span className="text-lg sm:text-2xl mx-2 pr-2 font-semibold">
							April 29-30 2023
						</span>
					</article>
					<article className="flex items-center justify-center">
						<span className="text-lg sm:text-2xl mx-2 pl-2 font-semibold text-right">
							595 Commonwealth Ave, Boston
						</span>
						<span className="rounded-full border p-2 m-1 bg-blue-2">
							<img src="./map-pin.svg" alt="Dates" />
						</span>
					</article>
				</div>
			</section>
			{/* Socials */}
			<section className="flex justify-center z-20">
				<article className="flex items-center justify-around pt-5 w-full sm:w-2/3 z-20">
					{/* Twitter */}
					<a
						href="https://twitter.com/ETHBoston"
						target="_blank"
						rel="noreferrer"
						className="flex items-center  text-xl rounded-full border px-4 py-2 hover:bg-sky-100">
						Follow us on
						<img src="./twitter.svg" alt="Twitter icon" className="ml-2" />
					</a>
					{/* Buy tickets */}
					<a
						href="https://ethboston.typeform.com/tickets"
						target="_blank"
						rel="noreferrer"
						className="flex items-center  text-xl rounded-full border px-4 py-2 hover:bg-sky-100">
						Buy Tickets
					</a>
					{/* Email */}
					<a
						href="mailto:sponsor@ethboston.xyz"
						target="_blank"
						rel="noreferrer"
						className="flex items-center  text-xl rounded-full border px-4 py-2 hover:bg-gray-100">
						Inquire
						<img src="./mail.svg" alt="Twitter icon" className="ml-2" />
					</a>
				</article>
			</section>
			{/* Cover image */}
			<div className="flex justify-center h-full items-center z-0">
				<img
					src="./city.webp"
					alt="ETH Boston coming April 2023"
					className="lg:-mt-32"
				/>
			</div>
			{/* Description */}
			<section className="flex justify-center text-blue-1 text-lg">
				<article className="p-5 w-full sm:w-3/4 lg:w-2/3">
					<p className="mb-4">
						ETHBoston and The Boston DAO are proud to present ETHBoston 2023 at
						Boston University April 29-30 2023. We are excited about the return
						of this conference since the last ETHBoston conference in 2019. The
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
					href="https://ethboston.typeform.com/tickets"
					target="_blank"
					rel="noreferrer"
					className="px-4 py-2 rounded-lg border-2 border-black bg-blue-2 text-white font-semibold mx-6 text-center">
					ATTEND
				</a>
				<a
					href="https://ethboston.typeform.com/speakerproposal"
					target="_blank"
					rel="noreferrer"
					className="mx-6 px-4 py-2 rounded-lg border-2 border-black bg-blue-2 text-white font-semibold my-4 sm:my-0 text-center">
					SPEAK
				</a>
				<a
					href="https://ethboston.typeform.com/volunteer"
					target="_blank"
					rel="noreferrer"
					className="px-4 py-2 rounded-lg border-2 border-black bg-blue-2 text-white font-semibold mx-6 text-center">
					VOLUNTEER
				</a>
			</section>
			{/* Speakers */}
			<section className="py-10">
				<div className="flex justify-center">
					<h1 className="text-5xl uppercase font-semibold text-blue-1">
						Speakers
					</h1>
				</div>
				<article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-10">
					{speakerList.speakers.map((s) => {
						return (
							<SpeakerCard
								name={s.name}
								imgSrc={s.src}
								company={s.company}
								key={s.name}
							/>
						);
					})}
				</article>
			</section>
			{/* Sponsors  */}
			<section className="w-full px-10 pb-10">
				<h4 className="text-5xl uppercase font-semibold text-blue-1 text-center pb-10">
					Sponsors
				</h4>
				<article className="flex justify-center">
					<img
						src="./sponsors.png"
						alt="Sponsors"
						className="w-full xl:w-2/3"
					/>
				</article>
			</section>
			<Footer />
		</main>
	);
}


function App() {
  return (
    <main>
      {/* Logo, header, image */ }
      <section className="max-w-full p-5">
        <article className="flex justify-center items-center">
          <img src="./logo.svg" alt="ETH boston logo" className="h-12 mr-4" />
          <img src="./text-ethboston.png" alt="title" className="h-12" />
        </article>
      </section>
      {/* Cover image */ }
      <section className="flex justify-center h-full items-center">
        <article className="p-5">
          <img src="./bg.png" alt="ETH Boston coming April 2023" className="rounded-lg border-2 border-black" />
        </article>
      </section>
      {/* Below image */ }
      <section className="flex justify-center">
        <article className="flex items-center justify-around p-5 w-full sm:w-2/3">
          {/* Twitter */ }
          <a href="https://twitter.com/ETHBoston" target="_blank" rel="noreferrer" className="flex items-center  text-xl rounded-lg border-2 border-black px-4 py-2 hover:bg-sky-100">Twitter<img src="./twitter.svg" alt="Twitter icon" className="ml-2" /></a>
          {/* Date and Location */ }
          <div className="flex items-center rounded-full border justify-between w-96 bg-gradient-to-r from-gray-100 to-sky-100">
            <article className="flex items-center justify-center">
              <span className="rounded-full border p-2 bg-sky-100"><img src="./calendar.svg" alt="Dates" /></span>
              <span className="text-xl mx-2 font-semibold">April 7-9 2023</span>
            </article>
            <article className="flex items-center justify-center">
              <span className="text-xl mx-2 font-semibold">Revere Hotel</span>
              <span className="rounded-full border p-2 bg-gray-100">
                <img src="./map-pin.svg" alt="Dates" />
              </span>
            </article>
          </div>
          {/* Email */ }
          <a href="mailto:sponsor@ethboston.xyz" target="_blank" rel="noreferrer" className="flex items-center  text-xl rounded-lg border-2 border-black px-4 py-2 hover:bg-gray-100">Inquire<img src="./mail.svg" alt="Twitter icon" className="ml-2" /></a>
        </article>
      </section>
      {/* Description */ }
      <section className="flex justify-center">
        <article className="p-5 w-full sm:w-2/3">
          <p className="mb-4">ETHBoston and The Boston DAO are proud to present ETHBoston 2023 at the Revere
            Hotel April 7-9 2023. We are excited about the return of this conference since the last
            ETHBoston conference in 2019. The in-person conference will feature two stages of
            speakers and panelists, technology specific workshops, networking events, and a
            hackathon.
          </p>
          <p className="mb-4">ETHBoston is your opportunity to support, grow, and foster the development of the web3
            ecosystem in Boston. Your sponsorship will build awareness among, and directly impact,
            1000 developers, industry experts, advisers, investors, students, and companies
            who are creating the next generation of infrastructure and applications that will power the
            decentralized web.
          </p>
          <p className="mb-4">
            You will meet developers face to face, have new and experienced developers build
            with your product, have a global marketing presence, and onboard new users. You
            will help support tenured developers with substantial protocol development experience
            and eager creatives looking to join the space and build their first DApps.
            Our event series has a proven track record of success, consistently attracts the top
            minds in web3, has resulted in real companies, high quality product integrations,
            code deployments, and exciting career matching for those searching.
          </p>
        </article>
      </section>
    </main>
  );
}

export default App;

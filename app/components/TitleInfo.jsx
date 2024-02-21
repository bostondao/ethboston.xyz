import React from 'react'

export default function TitleInfo() {
  return (
      <section className="max-w-full px-5 pb-5 pt-10">
        <article>
          <div className="flex justify-center">
            <img src="./logo.webp" alt="ETH boston logo" className="h-56 my-4" />
          </div>
          <div className="flex justify-center mt-5">
            <img src="./logo-text.webp" alt="title" className="h-12 sm:h-20 max-w-full object-contain" />
          </div>
        </article>
      </section>
  )
}

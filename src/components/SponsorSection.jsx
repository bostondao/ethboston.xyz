import React from 'react'

export default function SponsorSection() {
  return (
      <section className="pb-10">
        <div className="flex justify-center">
          <h4 className='text-5xl uppercase font-semibold text-blue-1'>Sponsors</h4>
        </div>
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10">
            <div className="">
                <h4 className='text-xl font-semibold text-center'>Castle Island Ventures</h4>
                <div className='flex justify-center items-center'>
                    <img src="./sponsors/castle-island.png" alt="Castle Island Ventures" />
                </div>
            </div>
            <div>
                <h4 className='text-xl font-semibold text-center'>Ceramic</h4>
                <div className='flex justify-center items-center'>
                    <img src="./sponsors/ceramic.png" alt="Ceramic" />
                </div>
            </div>
            <div>
                <h4 className='text-xl font-semibold text-center'>L1 Digital</h4>
                <div className='flex justify-center items-center'>
                    <img src="./sponsors/L1D.png" alt="L1 Digital" />
                </div>
            </div>
            <div>
                <h4 className='text-xl font-semibold text-center'>Moonbeam</h4>
                <div className='flex justify-center items-center'>
                    <img src="./sponsors/moonbeam.png" alt="Moonbeam" />
                </div>
            </div>
            <div>
                <h4 className='text-xl font-semibold text-center'>Quicknode</h4>
                <div className='flex justify-center items-center'>
                    <img src="./sponsors/quicknode.png" alt="Quicknode" />
                </div>
            </div>
            <div>
                <h4 className='text-xl font-semibold text-center'>Threshold</h4>
                <div className='flex justify-center items-center'>
                    <img src="./sponsors/threshold.png" alt="Threshold" />
                </div>
            </div>
        </article>
      </section>
  )
}

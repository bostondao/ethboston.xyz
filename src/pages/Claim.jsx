import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const Claim = () => {
  return (
    <>
      <section className="flex justify-center text-blue-1 text-md py-10">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-start-4 lg:col-span-4">
            <div className="rounded overflow-hidden shadow-lg bg-white">
              <div className="px-6 py-4">
                <div className="font-bold text-xl pb-8">Check airdrop elgibility</div>
                <p className="text-gray-700 text-base pb-8">
                  Connect your wallet to learn if you are eligible for the BostonDAO airdrop
                </p>
                <ConnectButton />
                <p className="text-gray-700 text-base pt-8">
                  Eligibility Criteria
                </p>
                <ul className="list-disc text-gray-700 text-base py-4 px-4">
                  <li>Boston DAO Concil Member</li>
                  <li>Lotter winner</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-2">
            <div className="rounded overflow-hidden shadow-lg bg-white">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Airdrop Avaliability</div>
              </div>
              <div className="px-6 pt-4 pb-2">
                <p className="text-gray-700 font-bold text-base pb-4">Follow us</p>
                <p className="text-gray-700 text-base inline">
                  Follow our offical Twitter page for information on the airdrop
                </p>
                <a href="https://twitter.com/ETHBoston" className="inline"> @ETHBoston</a>
                <p className="text-gray-700 text-base">
                  Join the community on Telegram
                </p>
                {/* telebram link */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};



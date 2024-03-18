import React from "react";
import TitleInfo from "../../app/components/TitleInfo";
import SpeakerCard from "../components/SpeakerCard";
import Header from "../components/Header";
import Speakers from "../components/Speakers";

export default function Page() {
  const speakerList = require(`../speakers-2023.json`);
  return (
    <main className="font-open">
      <TitleInfo />
      <div className="mt-10">
        <div className="flex flex-col">
          {/* Speakers */}
          <Speakers speakerList={speakerList} title="Previous Speakers" />
        </div>
      </div>
    </main>
  );
}

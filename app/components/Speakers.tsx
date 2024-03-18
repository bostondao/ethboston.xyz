import React from "react";
import SpeakerCard from "./SpeakerCard";

interface IProps {
  speakerList: any;
  title: string;
}

export default function Speakers(props: IProps) {
  const { speakerList, title } = props;
  return (
    <section className="py-10" id="speakers">
      <div className="flex justify-center">
        <h1 className="text-5xl uppercase font-semibold text-blue-1">
          {title}
        </h1>
      </div>
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 p-10">
        {speakerList.speakers.map(
          (s: { name: any; src: any; company: any; linkedin: any }) => {
            return (
              <SpeakerCard
                name={s.name}
                imgSrc={s.src}
                company={s.company}
                key={s.name}
                linkedin={s.linkedin}
              />
            );
          }
        )}
      </article>
    </section>
  );
}

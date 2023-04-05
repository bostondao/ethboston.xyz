import LinkedinIcon from "./icons/LinkedinIcon"

export default function SpeakerCard(props) {
  return (
    <div className="bg-blue-3 rounded-lg shadow-md flex flex-col relative">
      <div className="flex justify-center">
        <img src={`./speakers/${props.imgSrc}`} alt={props.name} className="object-cover w-full h-64 rounded-t-lg" />
      </div>
      <h2 className="text-3xl pt-4 px-4 font-semibold text-white font-serif">{props.name}</h2>
      <div className="px-4 pb-4 flex justify-between self-stretch">
        <h6 className={`text-red-2 text-lg font-serif font-semibold ${props.linkedin && `pr-12`}`}>{props.company}</h6>
        { props.linkedin ? 
          <a href={props.linkedin} target="_blank" referrerPolicy="norefer" className="text-red-2 absolute right-0 bottom-0 p-4" rel="noreferrer">
            <LinkedinIcon />
          </a>
        : null
      }
      </div>
    </div>
  )
}

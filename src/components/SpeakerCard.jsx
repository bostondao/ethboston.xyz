import LinkedinIcon from "./icons/LinkedinIcon"

export default function SpeakerCard(props) {
  return (
    <div className="bg-blue-3 rounded-lg shadow-md">
      <div className="flex justify-center">
        <img src={`./speakers/${props.imgSrc}`} alt={props.name} className="object-cover w-full h-64 rounded-t-lg" />
      </div>
      <div className="p-4 flex justify-between">
        <div className="">
          <h2 className="text-3xl font-semibold text-white font-serif">{props.name}</h2>
          <h6 className="text-red-2 text-lg font-serif font-semibold">{props.company}</h6>
        </div>
        { props.linkedin ? 
          <a href={props.linkedin} target="_blank" referrerPolicy="norefer" className="text-red-2 flex self-end h-full pl-4" rel="noreferrer">
          <LinkedinIcon />
          </a>
        : null
      }
      </div>
    </div>
  )
}

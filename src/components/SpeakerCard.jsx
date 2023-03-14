export default function SpeakerCard(props) {
  return (
    <div className="border-2 rounded-lg bg-sky-100 shadow-md py-2">
      <h2 className="text-center text-2xl text-blue-1">{props.name}</h2>
      <div className="flex justify-center my-2">
        <img src={`./speakers/${props.imgSrc}`} alt={props.name} className="object-cover w-64 h-64 rounded-lg" />
      </div>
      <h6 className="text-blue-1 italic text-center">{props.company}</h6>
    </div>
  )
}

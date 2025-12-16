
export default function TransparentButton(props) {
    return(
        <button className="text-base cursor-pointer px-10 outline outline-gray-400 text-black bg-transparent hover:text-[#7D8184] p-4 rounded-sm">{props.text}</button>
    )
}
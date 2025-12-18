
export default function Button(props) {
    return(
        <button onClick={props.onClick} className="text-base cursor-pointer px-10 text-white bg-[#DB4444] hover:bg-[#E07575] p-4 rounded-sm">{props.text}</button>
    )
}
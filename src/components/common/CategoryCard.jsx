

export default function CategoryCard(props) {
    return (
        <div className="group min-w-44 h-36 hover:bg-[#DB4444] border rounded-sm flex flex-col justify-center items-center border-black/30 hover:border-[#DB4444]">
            <div className="w-14 h-14 group-hover:text-white">{props.icon}</div>
            <p className="text-base group-hover:text-white">{props.name}</p>
        </div>
    )
}
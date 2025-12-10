
export default function SectionHeading(props) {
    return (
        <div className="flex items-center gap-3 max-md:mb-4">
            <div className="w-5 h-10 rounded-sm bg-[#DB4444]"></div>
            <p className="font-semibold text-[#DB4444]">{props.text}</p>
        </div>
    )
}
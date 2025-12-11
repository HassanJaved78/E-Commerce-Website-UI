
export default function ImageContainer(props) {
    return (
        <div className={`w-full relative min-h-[220px] md:min-h-44 lg:min-h-52 xl:min-h-[300px] inline-block text-white ${props.className}`}>
            
            <div className="w-full h-full flex justify-center items-center">
                <img className={props.imageStyles} src={props.src} alt={props.heading} />
            </div>

            <div className="z-10 absolute left-2 bottom-2 lg:left-8 lg:bottom-8 max-w-64 space-y-1">
                <h1 className="text-white slg:text-2xl font-semibold">{props.heading}</h1>
                <p className="text-xs slg:text-sm">{props.description}</p>
                <button className="underline underline-offset-2 text-base cursor-pointer hover:tracking-wide">Shop now</button>
            </div>
        </div>
    )
}
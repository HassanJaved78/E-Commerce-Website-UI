
export default function ImagesContainer(props) {
    return (
        <div className="realtive text-white">
            <img src={props.src} alt={props.heading} />
            <div className="absolute left-4 bottom-4 md:left-8 md:bottom-8 max-w-64">
                {props.heading}
                {props.description}
                
                <button className="underline underline-offset-2">Shop now</button>
            </div>
        </div>
    )
}
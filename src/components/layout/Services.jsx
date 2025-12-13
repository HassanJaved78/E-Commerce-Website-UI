
const services = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:w-10 lg:h-10" viewBox="0 0 24 24"><path fill="currentColor" d="M7 20q-1.25 0-2.125-.875T4 17H1.5l.45-2h2.825q.425-.475 1-.737T7 14t1.225.263t1 .737H13.4l2.1-9H4.55l.1-.425q.15-.7.687-1.137T6.6 4H18l-.925 4H20l3 4l-1 5h-2q0 1.25-.875 2.125T17 20t-2.125-.875T14 17h-4q0 1.25-.875 2.125T7 20m8.925-7h4.825l.1-.525L19 10h-2.375zm-.475-6.825L15.5 6l-2.1 9l.05-.175l.85-3.65zM.5 13.325l.5-2h5.5l-.5 2zm2-3.65l.5-2h6.5l-.5 2zM7 18q.425 0 .713-.288T8 17t-.288-.712T7 16t-.712.288T6 17t.288.713T7 18m10 0q.425 0 .713-.288T18 17t-.288-.712T17 16t-.712.288T16 17t.288.713T17 18"/></svg>,
        heading: "FREE AND FAST DELIVERY",
        text: "Free delivery for all orders over $140"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:w-10 lg:h-10" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21H5q-.825 0-1.412-.587T3 19v-7q0-1.875.713-3.512t1.924-2.85t2.85-1.925T12 3t3.513.713t2.85 1.924t1.925 2.85T21 12v7q0 .825-.587 1.413T19 21h-2q-.825 0-1.412-.587T15 19v-4q0-.825.588-1.412T17 13h2v-1q0-2.925-2.037-4.962T12 5T7.038 7.038T5 12v1h2q.825 0 1.413.588T9 15v4q0 .825-.587 1.413T7 21"/></svg>,
        heading: "24/7 CUSTOMER SERVICE",
        text: "Friendly 24/7 customer support"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:w-10 lg:h-10" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.262 6.913T12 22m-3-6h6v-5h-1v-1q0-.825-.587-1.412T12 8t-1.412.588T10 10v1H9zm2-5v-1q0-.425.288-.712T12 9t.713.288T13 10v1z"/></svg>,
        heading: "MONEY BACK GUARANTEE",
        text: "We reurn money within 30 days"
    }
]

export default function Services() {
    return (
        <div className="w-4/5 mx-auto flex justify-between my-8 ">
            {
                services.map((service, index) => (
                    <div className="flex flex-col justify-between items-center gap-2 text-center" key={index}>
                        <div className="bg-black text-white inline-block p-2 rounded-full border-6 lg:border-8 border-gray-400">
                            {service.icon}
                        </div>
                        <h2 className="text-base lg:text-xl font-semibold">{service.heading}</h2>
                        <p className="text-xs lg:text-sm">{service.text}</p>
                    </div>
                ))
            }
        </div>
    )
}
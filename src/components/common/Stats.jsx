
const stats = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white group-hover:text-black" viewBox="0 0 24 24"><path fill="currentColor" d="M12 18H6v-4h6m9 0v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6m0-10H4v2h16z"/></svg>,
        numbers: "10.5K",
        text: "Sellers active on our site"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white group-hover:text-black" viewBox="0 0 24 24"><path fill="currentColor" d="M7 15h2c0 1.08 1.37 2 3 2s3-.92 3-2c0-1.1-1.04-1.5-3.24-2.03C9.64 12.44 7 11.78 7 9c0-1.79 1.47-3.31 3.5-3.82V3h3v2.18C15.53 5.69 17 7.21 17 9h-2c0-1.08-1.37-2-3-2s-3 .92-3 2c0 1.1 1.04 1.5 3.24 2.03C14.36 11.56 17 12.22 17 15c0 1.79-1.47 3.31-3.5 3.82V21h-3v-2.18C8.47 18.31 7 16.79 7 15"/></svg>,
        numbers: "33K",
        text: "Monthly Produduct Sale"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white group-hover:text-black" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6h-2c0-2.8-2.2-5-5-5S7 3.2 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-7-3c1.7 0 3 1.3 3 3H9c0-1.7 1.3-3 3-3m7 17H5V8h14zm-7-8c-1.7 0-3-1.3-3-3H7c0 2.8 2.2 5 5 5s5-2.2 5-5h-2c0 1.7-1.3 3-3 3"/></svg>,
        numbers: "45.5K",
        text: "Customer active in our site"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white group-hover:text-black" viewBox="0 0 24 24"><path fill="currentColor" d="M19 18.28v-.23c-.05-.17-.1-.42-.17-.73c-.14-.63-.37-1.47-.7-2.37c-.63-1.72-1.55-3.21-2.66-3.95H8.53c-1.11.74-2.03 2.23-2.66 3.95c-.33.9-.56 1.74-.7 2.37c-.07.31-.12.56-.17.73v.24l-.03.1l-.02.06c-.01.05-.01.1-.01.18c0 .16.03.33.1.48c.05.1.46.89 2.96.89h8c2.5 0 2.91-.79 2.96-.89c.07-.15.1-.32.1-.48c0-.08 0-.13-.01-.18l-.02-.06l-.03-.1zM3 18s1-7 5-9h8c4 2 5 9 5 9s1 4-5 4H8c-6 0-5-4-5-4m7-14l2-2l2 2l4-2l-2 5H8L6 2z"/></svg>,
        numbers: "25K",
        text: "Anual gross sale in our site"
    }
]

export default function Stats() {
    return (
        <section className="my-12">
            <div className="w-full sm:w-4/5 flex flex-wrap sm:flex-nowrap sm:flex-row justify-around sm:justify-between xl:justify-center xl:gap-8 gap-4 2xl:gap-16 mx-auto my-6">
                {
                    stats.map((stat, index) => (
                        <div key={index} className="w-2/5 md:w-60 flex flex-col gap-2 justify-center items-center border border-black/50 min-w-32 p-4 rounded-sm group hover:bg-[#DB4444] hover:text-white">
                            <div className="bg-black rounded-full p-1 border-6 border-gray-400 group-hover:bg-white">
                                {stat.icon}
                            </div>
                            
                            <h2 className="text-3xl font-bold">{stat.numbers}</h2>
                            <p className="text-base text-center tracking-tight">{stat.text}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
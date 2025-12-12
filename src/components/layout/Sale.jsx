import JBLImg from "../../assets/images/JBL.svg";

export default function Sale() {
    return (
        <section className="py-8 md:py-16">
            <div className="w-full bg-black sm:w-4/5 mx-auto flex flex-col-reverse sm:flex-row p-8 gap-4">

                <div className="sm:w-3/4 xl:w-3/7 flex flex-col gap-8 justify-between sm:gap-4">
                    <p className="font-semibold text-[#00FF66]">Categories</p>
                    <h1 className="text-5xl font-semibold text-white">Enhance Your Music Experience</h1>

                    <div className="flex gap-6">
                        <div className="bg-white w-16 h-16 text-center flex flex-col place-content-center rounded-full p-1">
                            <p className="font-semibold">5</p>
                            <p className="text-xs leading-3">Days</p>
                        </div>
                        <div className="bg-white w-16 h-16 text-center flex flex-col place-content-center rounded-full p-1">
                            <p className="font-semibold">23</p>
                            <p className="text-xs leading-3">Hours</p>
                        </div>
                        <div className="bg-white w-16 h-16 text-center flex flex-col place-content-center rounded-full p-1">
                            <p className="font-semibold">59</p>
                            <p className="text-xs leading-3">Minutes</p>
                        </div>
                        <div className="bg-white w-16 h-16 text-center flex flex-col place-content-center rounded-full p-1">
                            <p className="font-semibold">35</p>
                            <p className="text-xs leading-3">Seconds</p>
                        </div>
                    </div>

                    <button className="w-2/4 cursor-pointer bg-[#00FF66] hover:opacity-80 p-2 text-white">Shop Now</button>

                </div>
                <div className="lg:w-1/2 flex place-content-center-safe">
                    <img src={JBLImg} alt="jbl speakers" />
                </div>
            </div>
        </section>
    )
}
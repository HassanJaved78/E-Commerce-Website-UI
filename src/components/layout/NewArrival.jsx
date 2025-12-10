import SectionHeading from "../common/SectionHeading";

import PS5Img from "../../assets/images/New Arrival/ps5.png";

export default function NewArrival() {
    return (
        <section className="py-8 md:py-16">
            <div className="w-full sm:w-4/5 mx-auto flex flex-col gap-10">
                {/* main div */}
                <SectionHeading text="Featured" />
                
                <h1 className="text-4xl font-medium font-serif tracking-wide">
                    New Arrival
                </h1>

                <div>
                    {/* pictures */}
                </div>

                <div>
                    {/* services */}
                </div>

            </div>
        </section>
    )
}
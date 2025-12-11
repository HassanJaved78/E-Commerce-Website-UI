import SectionHeading from "../common/SectionHeading";
import ImageContainer from "../common/ImageContainer";
import Services from "./Services";

import PS5Img from "../../assets/images/New Arrival/ps5.png";
import WomanImg from "../../assets/images/New Arrival/woman.png";
import PerfumeImg from "../../assets/images/New Arrival/perfumes.png";
import SpeakersImg from "../../assets/images/New Arrival/speakers.png";

export default function NewArrival() {
    return (
        <section className="py-8 md:py-16">
            <div className="w-full sm:w-4/5 mx-auto flex flex-col gap-10">
            {/* main div */}
            <SectionHeading text="Featured" />

            <h1 className="text-4xl font-medium font-serif tracking-wide">
                New Arrival
            </h1>

            <div className="grid sm:grid-cols-4 grid-rows-2 overflow-hidden gap-4">
                <ImageContainer
                    src={PS5Img}
                    heading="PlayStation 5"
                    className="col-span-2 row-span-2 bg-black"
                    description="Black and White version of the PS5 coming out on sale."
                />

                <ImageContainer
                    src={WomanImg}
                    heading="PlayStation 5"
                    className="col-span-2 row-span-1 bg-[#0d0d0d]"
                    description="Black and White version of the PS5 coming out on sale."
                />

                <ImageContainer
                    src={PerfumeImg}
                    heading="PlayStation 5"
                    className="bg-black"
                    description="Black and White version of the PS5 coming out on sale."
                    imageStyles="w-4/6"
                />

                <ImageContainer
                    src={SpeakersImg}
                    heading="PlayStation 5"
                    className="bg-black"
                    description="Black and White version of the PS5 coming out on sale."
                    imageStyles="w-4/6"
                />
            </div>

            <div>

            </div>
                <Services />
            </div>
        </section>
    );
}
import SectionHeading from "../common/SectionHeading"
import TransparentButton from "../common/TransparentButton";
import ProductCard from "../common/ProductCard";

export default function JustForYou() {
    return (
      <section className="py-8 md:py-16">
        <div className="relative w-full sm:w-4/5 mx-auto flex flex-col gap-10">
            {/* main div */}

            <div className="flex flex-nowrap justify-between items-center gap-2">
                {/* Heading and buttons */}
                <SectionHeading text="Just For You" />
                
                <div className="flex justify-between">
                    <TransparentButton className="" text="See All" />
                </div>

            </div>

            <div className="flex items-center flex-wrap justify-around lg:justify-between gap-y-8 overflow-hidden">
                {Array.from({length: 5}).map((_, index) => (
                    <ProductCard showView={true} key={index} />
                ))}
            </div>

        </div>
      </section>
    );
}
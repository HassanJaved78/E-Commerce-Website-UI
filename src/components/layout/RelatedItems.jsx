import SectionHeading from "../common/SectionHeading"
import Button from "../common/Button";
import ProductCard from "../common/ProductCard";

export default function RelatedItems() {
    return (
      <section className="py-8 md:py-16">
        <div className="relative w-full mx-auto sm:w-4/5 flex flex-col gap-10">
            {/* main div */}
            <SectionHeading text="Related Items" />

            <div className="flex flex-row flex-wrap justify-between md:justify-around gap-x-2 lg:justify-between gap-y-8 overflow-hidden last:flex-1">
                {Array.from({length: 4}).map((_, index) => (
                    <ProductCard key={index} showWishlist={true} showView={true} />
                ))}
            </div>

        </div>
      </section>
    );
}
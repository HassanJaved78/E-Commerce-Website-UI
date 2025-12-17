import SectionHeading from "../common/SectionHeading"
import Button from "../common/Button";
import ProductCard from "../common/ProductCard";

export default function RelatedItems() {
    return (
      <section className="py-8 md:py-16">
        <div className="relative w-full sm:w-4/5 mx-auto flex flex-col gap-10">
            {/* main div */}
            <SectionHeading text="Related Items" />

            <div className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-around lg:justify-between space-y-8 overflow-hidden">
                {Array.from({length: 4}).map((_, index) => (
                    <ProductCard key={index} showWishlist={true} showView={true} />
                ))}
            </div>

        </div>
      </section>
    );
}
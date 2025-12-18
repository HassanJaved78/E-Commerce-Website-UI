import SectionHeading from "../common/SectionHeading"
import Button from "../common/Button";
import ProductCard from "../common/ProductCard";

export default function BestSellingProducts() {
    return (
      <section className="py-8 md:py-16">
        <div className="relative w-full sm:w-4/5 mx-auto flex flex-col gap-10">
            {/* main div */}
            <SectionHeading text="This Month" />

            <div className="flex flex-nowrap justify-between items-center gap-2">
                {/* Heading and buttons */}
                <h1 className="text-4xl font-medium font-serif tracking-wide">
                    Best Selling Products
                </h1>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-y-8 overflow-hidden">
                {Array.from({length: 4}).map((_, index) => (
                    <ProductCard key={index} showWishlist={true} showView={true} />
                ))}
            </div>

            <div className="flex justify-center">
                <Button className="" text="View All" />
            </div>

        </div>
      </section>
    );
}
import SectionHeading from "../common/SectionHeading"
import ProductCard from "../common/ProductCard"
import Button from "../common/Button"

export default function ExploreProducts() {
    return (
        <section className="py-8 md:py-16">
            <div className="w-full sm:w-4/5 mx-auto flex flex-col gap-10">
                <SectionHeading text="Our Products" />

                <div>
                    {/* heading and buttons */}
                    <h1 className="text-4xl font-medium font-serif tracking-wide">
                        Explore our products
                    </h1>
                </div>

                <div className="grid place-items-center sm:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] xl:grid-cols-[1fr_1fr_1fr_1fr] space-y-8">
                    {
                        Array.from({length: 8}).map((_, index) => {
                            return (
                                <ProductCard key={index} showWishlist={true} showView={true} />
                            )
                        })
                    }
                </div>

                <div className="flex justify-center">
                    <Button text="View All Products" />
                </div>

            </div>
        </section>
    )
}
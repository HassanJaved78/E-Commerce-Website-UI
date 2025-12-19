import SectionHeading from "../common/SectionHeading";
import ProductCard from "../common/ProductCard";
import Button from "../common/Button";

import { useGetProductsQuery } from "../../app/services/products/productsApi";

export default function ExploreProducts() {

    const { data: products , isLoading, isError } = useGetProductsQuery();

    if(isLoading) {
        return(
            <div>Loading ...</div>
        )
    }

    if (isError) {
        return <div>Failed to load products</div>;
    }

    return (
        <section className="w-full py-8 md:py-16">
            <div className="w-full sm:w-4/5 mx-auto flex flex-col gap-10">
                <SectionHeading text="Our Products" />

                <div>
                    {/* heading and buttons */}
                    <h1 className="text-4xl font-medium font-serif tracking-wide">
                        Explore our products
                    </h1>
                </div>

                <div className="grid place-items-center grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] xl:grid-cols-[1fr_1fr_1fr_1fr] gap-y-8">
                    {
                        products.map((product) => 
                            <ProductCard key={product.id} showWishlist={true} showView={true} product={product} />
                        )

                    }
                </div>

                <div className="flex justify-center">
                    <Button text="View All Products" />
                </div>

            </div>
        </section>
    )
}
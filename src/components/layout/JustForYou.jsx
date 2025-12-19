import SectionHeading from "../common/SectionHeading"
import TransparentButton from "../common/TransparentButton";
import ProductCard from "../common/ProductCard";

import { useGetProductsQuery } from "../../app/services/products/productsApi";

export default function JustForYou() {

    const { data, isError, isLoading, isSuccess } = useGetProductsQuery();
    let products = [];

    if(isLoading) {
        return(
            <div>Loading ...</div>
        )
    }

    if (isError) {
        return <div>Failed to load products</div>;
    }

    if(isSuccess) {
        products = data.slice(5, 10);
    }

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
                {products.map((product, index) => (
                    <ProductCard showView={true} product={product} key={index} />
                ))}
            </div>

        </div>
      </section>
    );
}
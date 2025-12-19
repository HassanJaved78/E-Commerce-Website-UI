import SectionHeading from "../common/SectionHeading"
import ProductCard from "../common/ProductCard";

import { useGetProductsQuery } from "../../app/services/products/productsApi";

export default function RelatedItems() {

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
        products = data.slice(1, 5);
    }


    return (
      <section className="py-8 md:py-16">
        <div className="relative w-full mx-auto sm:w-4/5 flex flex-col gap-10">
            {/* main div */}
            <SectionHeading text="Related Items" />

            <div className="flex flex-row flex-wrap justify-between md:justify-around gap-x-2 lg:justify-between gap-y-8 overflow-hidden last:flex-1">
                {products.map((product, index) => (
                    <ProductCard key={index} showWishlist={true} showView={true} product={product} />
                ))}
            </div>

        </div>
      </section>
    );
}
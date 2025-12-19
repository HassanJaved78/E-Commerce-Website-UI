import TopHeader from "../components/common/TopHeader";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ProductCard from "../components/common/ProductCard";
import JustForYou from "../components/layout/JustForYou.jsx";
import TransparentButton from "../components/common/TransparentButton.jsx";

import { useSelector } from "react-redux";

export default function Wishlist() {

    const wislistItems = useSelector((state) => state.wishlist.products);

    return (
        <>
            <TopHeader />
            <Header />

            <section className="p-6">
                <div className="sm:w-4/5 h-full mx-auto flex flex-col my-12 gap-14">
                    <div className="flex justify-between items-center">
                        <p className="text-xl">Wishlist (4)</p>
                        <TransparentButton text="Move All To Bag" />
                    </div>

                    <div className="flex items-center flex-wrap justify-around lg:justify-between gap-y-8 overflow-hidden">
                        {
                            wislistItems.length < 1 ? <p>Wishlist is empty</p> : 
                            wislistItems.map((product, index) => (
                                <ProductCard key={index} showDelete={true} product={product} />
                            ))
                        }
                    </div>

                    
                </div>
            </section>
            <JustForYou />
            <Footer />
        </>
    )
}
import TopHeader from "../components/common/TopHeader";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ProductCard from "../components/common/ProductCard";
import JustForYou from "../components/layout/JustForYou.jsx";
import TransparentButton from "../components/common/TransparentButton.jsx";

export default function Wishlist() {
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

                    <div className="flex flex-wrap gap-2 justify-between space-y-8">
                        {
                            Array.from({length: 5}).map((_, index) => (
                                <ProductCard key={index} showDelete={true} />
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
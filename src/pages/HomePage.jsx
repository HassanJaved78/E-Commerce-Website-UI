import TopHeader from "../components/common/TopHeader";
import Header from "../components/common/Header";
import FirstLayout from "../components/layout/FirstLayout";
import FlashSales from "../components/layout/FlashSales";
import Categories from "../components/layout/Categories";
import BestSellingProducts from "../components/layout/BestSellingProducts";
import Sale from "../components/layout/Sale";
import ExploreProducts from "../components/layout/ExploreProducts";
import NewArrival from "../components/layout/NewArrival";
import Footer from "../components/common/Footer";

export default function HomePage() {
    return (
        <>
            <TopHeader />
            <Header />
            <FirstLayout />
            <FlashSales />
            <Categories />
            <BestSellingProducts />
            <Sale />
            <ExploreProducts />
            <NewArrival />
            <Footer />
        </>
    )
}
import CategoriesSidebar from "../components/CategoriesSidebar";
import PromotionBanner from "../components/PromotionBanner";

export default function FirstLayout() {
    return (
        <section className="flex flex-row gap-4 sm:w-4/5 mx-auto my-4 p-2">
            <CategoriesSidebar />
            <PromotionBanner />
        </section>
    )
}
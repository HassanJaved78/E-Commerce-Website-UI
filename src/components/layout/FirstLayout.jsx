import CategoriesSidebar from "./CategoriesSidebar";
import PromotionBanner from "./PromotionBanner";

export default function FirstLayout() {
    return (
        <section className="flex flex-row gap-6 sm:w-4/5 max-slg:max-h-56 max-lg:max-h-[250px] mx-auto my-8 p-2">
            <CategoriesSidebar />
            <PromotionBanner />
        </section>
    )
}
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function LeftRightArrows(props) {
    const sliderRef = props.ref;

    const scrollLeft = () => {
        sliderRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
        });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
        });
    };

    return (
        <div className="absolute right-2 sm:static flex gap-3">
        <div className="rounded-full bg-[#F5F5F5] p-2">
            <ArrowLeftIcon
            onClick={scrollLeft}
            className="w-6 h-6 cursor-pointer"
            />
        </div>

        <div className="rounded-full bg-[#F5F5F5] p-2">
            <ArrowRightIcon
            onClick={scrollRight}
            className="w-6 h-6 cursor-pointer"
            />
        </div>
        </div>
    );
}

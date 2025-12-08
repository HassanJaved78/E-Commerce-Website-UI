import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import img from "../assets/images/Promotion Img.svg";

const images = [
    img,
    "https://images.unsplash.com/photo-1549213821-4708d624e1d1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fDE2JTNBOXxlbnwwfHwwfHx8MA%3D%3D",
    img,
];

export default function PromotionBanner() {
    const [index, setIndex] = useState(0);

    const prev = () => {
        setIndex((currIndex) => {
        return (currIndex - 1 + images.length) % images.length;
        });
    };

    const next = () => {
        setIndex((currIndex) => {
        return (currIndex + 1) % images.length;
        });
    };

    const goTo = (index) => {
        setIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((currIndex) => (currIndex + 1) % images.length);
        }, 3000);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full sm:w-4/5 bg-amber-400">
            <div 
                className="relative overflow-clip w-full aspect-3/1 h-full"
            >

                {images.map((img, i) =>
                    (
                        <img
                            key={i}
                            src={img}
                            alt="promotion banner"
                            className={`absolute w-full h-full object-cover transition-opacity duration-700 ease-in-out ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                        />
                    )
                )}

                {/* left button */}
                <button
                    className="absolute left-2 top-1/2 bg-white/70 -translate-y-1/2 rounded-full hover:bg-white z-50 cursor-pointer p-0.5"
                    onClick={prev}
                >
                    <ChevronLeftIcon className="w-4 h-6" />
                </button>

                {/* right button */}
                <button
                    className="absolute right-2 top-1/2 bg-white/70 -translate-y-1/2 rounded-full hover:bg-white z-50 cursor-pointer p-0.5"
                    onClick={next}
                >
                    <ChevronRightIcon className="w-4 h-6" />
                </button>

                <div className="absolute left-1/2 bottom-2 z-50 flex gap-2">
                    {/* pagination buttons */}
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className={`w-2 h-2 rounded-full cursor-pointer ${
                                i === index
                                ? "bg-[#FFAD33] scale-110 outline outline-gray-200"
                                : "bg-white/70"
                            }`}
                        >
                        </button>
                    ))}
                </div>

            </div>
        </section>
    );
}

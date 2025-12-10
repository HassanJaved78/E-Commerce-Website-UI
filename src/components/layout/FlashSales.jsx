import ProductCard from "../common/ProductCard";
import SectionHeading from "../common/SectionHeading";
import { useRef } from "react";
import LeftRightArrows from "../common/LeftRightArrows";

import Button from "../common/Button";

export default function FlashSales() {

    const sliderRef = useRef(null);

    return (
        <section className="flex flex-col items-center gap-10 max-md:px-2 py-16 max-md:py-8 border-b border-black/20">
            <div className="w-full md:w-4/5 mx-auto">
            {/* main div */}
                <SectionHeading text="Today's" />
 
                <div className="justify-between flex flex-col sm:flex-row sm:items-baseline-last gap-4 sm:gap-20">
                    {/* sales and time div */}
                    <h1 className="text-4xl font-medium font-serif tracking-wide">Flash Sales</h1>
                    
                    <div className="flex grow items-center gap-3">
                        {/* Time div */}
                        <div className="flex flex-col">
                            <span className="text-xs tracking-tight">Days</span>
                            <span className=" text-4xl font-bold">03</span>
                        </div>

                        <div className="text-[#DB4444] flex flex-col justify-center gap-2 h-14 text-2xl">
                            <div className="mt-2 border-2 rounded-full"></div>
                            <div className="border-2 rounded-full"></div>
                        </div>

                        <div className="flex flex-col before:content">
                            <span className="text-xs tracking-tight">Hours</span>
                            <span className=" text-4xl font-bold">23</span>
                        </div>

                        <div className="text-[#DB4444] flex flex-col justify-center gap-2 h-14 text-2xl">
                            <div className="mt-2 border-2 rounded-full"></div>
                            <div className="border-2 rounded-full"></div>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-xs tracking-tight">Minutes</span>
                            <span className=" text-4xl font-bold">19</span>
                        </div>

                        <div className="text-[#DB4444] flex flex-col justify-center gap-2 h-14 text-2xl">
                            <div className="mt-2 border-2 rounded-full"></div>
                            <div className="border-2 rounded-full"></div>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-xs tracking-tight">Seconds</span>
                            <span className=" text-4xl font-bold">56</span>
                        </div>
                    </div>

                    {/* scroll buttons */}
                    <LeftRightArrows ref={sliderRef} />
                </div>
            </div>

            <div ref={sliderRef} className="w-full max-sm:overflow-x-scroll md:w-4/5 mx-auto flex gap-8 overflow-x-hidden scroll-smooth">
                {/* Products div */}
                
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

            <div>
                <Button text="View All Products" />
            </div>
        </section>
    )
}
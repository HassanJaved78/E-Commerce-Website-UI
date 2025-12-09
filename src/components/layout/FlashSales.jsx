import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline"
import ProductCard from "../common/ProductCard";

export default function FlashSales() {
    return (
        <section className="flex flex-col gap-10">
            <div className="w-4/5 mx-auto mt-20">
                <div className="flex items-center gap-3">
                    <div className="w-5 h-10 rounded-sm bg-[#DB4444]"></div>
                    <p className="font-semibold text-[#DB4444]">Today's</p>
                </div>
 
                <div className="justify-between flex items-baseline-last gap-20">
                    <h1 className="text-4xl font-medium font-serif tracking-wide">Flash Sales</h1>
                    
                    <div className="flex grow items-center gap-3">
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

                    <div className="flex gap-3">
                        {/* scroll buttons */}
                        <div className="rounded-full cursor-pointer bg-[#F5F5F5] p-2">
                            <ArrowLeftIcon className="w-6 h-6" />
                        </div>

                        <div className="rounded-full cursor-pointer bg-[#F5F5F5] p-2">
                            <ArrowRightIcon className="w-6 h-6" />
                        </div>
    
                    </div>
                </div>
            </div>

            <div className="w-4/5 mx-auto flex gap-8 overflow-hidden">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </section>
    )
}
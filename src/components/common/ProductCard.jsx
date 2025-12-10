import ControllerImg from "../../assets/images/GameController.png";
import { StarIcon } from "@heroicons/react/16/solid";
import { HeartIcon, EyeIcon } from "@heroicons/react/24/outline";

const rating = 4;

export default function ProductCard() {
    return (
        <div className="w-[270px] inline-block group">
            
            {/* Image block */}
            <div className="relative">
                <p className="absolute top-3 left-3 text-xs inline-block p-2 rounded-sm bg-[#DB4444] w-14 text-white text-center">-40%</p>

                <div className="flex justify-center items-center w-[270px] h-[250px] bg-[#F5F5F5]">
                    <img src={ControllerImg} alt="controller" />
                </div>

                <div className="hidden group-hover:block absolute bottom-0 w-full bg-black text-white p-2 text-center font-semibold cursor-pointer">
                    <p>Add To Cart</p>
                </div>

                <div className="space-y-2 absolute top-2 right-2">
                    <div className="cursor-pointer rounded-full bg-white p-2">
                        <HeartIcon className="w-6 h-6"/> 
                    </div>
                    <div className="cursor-pointer rounded-full bg-white p-2">
                        <EyeIcon className="w-6 h-6"/> 
                    </div>
                </div>
            </div>

            {/* Image details */}
            <div>
                <p className="font-medium">HAVIT HV-G92 Gamepad</p>
                <p className="font-medium flex gap-2">
                    <span className="text-[#DB4444]">$120</span>
                    <span className="text-black/50 line-through">$190</span>
                </p>
                <div className="flex flex-row items-center">
                    {
                        Array.from({length: 5}).map((_, index) => (
                            <StarIcon  
                                key={index}
                                className={`w-5 h-5 
                                            ${index < rating ? "text-yellow-300" : "text-gray-300" }`}
                            />
                        )
                    )}

                    <p className="ml-2 text-black/50">(88)</p>
                </div>
            </div>
        </div>
    )
}
import ControllerImg from "../../assets/images/GameController.png";
import { StarIcon } from "@heroicons/react/16/solid";
import { HeartIcon, EyeIcon, TrashIcon } from "@heroicons/react/24/outline";

import { addToWishlist, removeFromWishlist } from "../../app/features/wishlist/wishlistSlice";
import { addToCart } from "../../app/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const rating = 4;

export default function ProductCard({ showWishlist, showView, showDelete, product }) {
    
    if(!product) {
        return(
            <p>waiting</p>
        )
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="w-[162px] md:w-[270px] group">
            
            {/* Image block */}
            <div className="relative">
                <p className="absolute z-10 md:top-3 md:left-3 text-xs inline-block p-1 md:p-2 rounded-sm bg-[#DB4444] w-14 text-white text-center">-40%</p>

                <div className="flex justify-center overflow-hidden items-center w-[162px] h-[150px] md:w-[270px] md:h-[250px] bg-[#F5F5F5]">
                    <img className="object-cover" src={product.images[0]} alt={product.title} />
                    {/* <img src={ControllerImg} alt="" /> */}
                </div>

                <div onClick={() => dispatch(addToCart(product))} className="hidden group-hover:block absolute bottom-0 w-full bg-black text-white p-2 text-center font-semibold cursor-pointer">
                    <p>Add To Cart</p>
                </div>

                <div className="space-y-2 absolute top-1 right-0 md:top-2 md:right-2">
                    {showWishlist && 
                        <div onClick={() => dispatch(addToWishlist(product)) } className="cursor-pointer rounded-full w-fit bg-white p-2">
                            <HeartIcon className="w-4 h-4 md:w-6 md:h-6"/> 
                        </div>
                    }
                    {showView && 
                        <div onClick={() => navigate(`/product/${product.id}`)} className="cursor-pointer rounded-full w-fit bg-white p-2">
                            <EyeIcon className="w-4 h-4 md:w-6 md:h-6"/>
                        </div> 
                    }
                    {showDelete && 
                        <div onClick={() => dispatch(removeFromWishlist(product))} className="cursor-pointer rounded-full w-fit bg-white p-2">
                            <TrashIcon className="w-4 h-4 md:w-6 md:h-6"/>
                        </div>
                    }
                </div>
            </div>

            {/* Image details */}
            <div>
                <p className="font-medium line-clamp-2">{product.title}</p>
                <p className="font-medium flex gap-2">
                    <span className="text-[#DB4444]">${Math.ceil(product.price * 0.4)}</span>
                    <span className="text-black/50 line-through">${product.price}</span>
                </p>
                {!showDelete &&
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
                }
            </div>
        </div>
    )
}


// export default function ProductCard({ showWishlist, showView, showDelete }) {
    
//     return (
//         <div className="w-[162px] md:w-[270px] group">
            
//             {/* Image block */}
//             <div className="relative">
//                 <p className="absolute md:top-3 md:left-3 text-xs inline-block p-1 md:p-2 rounded-sm bg-[#DB4444] w-14 text-white text-center">-40%</p>

//                 <div className="flex justify-center items-center w-[162px] h-[150px] md:w-[270px] md:h-[250px] bg-[#F5F5F5]">
//                     <img src={ControllerImg} alt="controller" />
//                 </div>

//                 <div className="hidden group-hover:block absolute bottom-0 w-full bg-black text-white p-2 text-center font-semibold cursor-pointer">
//                     <p>Add To Cart</p>
//                 </div>

//                 <div className="space-y-2 absolute top-1 right-0 md:top-2 md:right-2">
//                     {showWishlist && 
//                         <div className="cursor-pointer rounded-full w-fit bg-white p-2">
//                             <HeartIcon className="w-4 h-4 md:w-6 md:h-6"/> 
//                         </div>
//                     }
//                     {showView && 
//                         <div className="cursor-pointer rounded-full w-fit bg-white p-2">
//                             <EyeIcon className="w-4 h-4 md:w-6 md:h-6"/>
//                         </div> 
//                     }
//                     {showDelete && 
//                         <div className="cursor-pointer rounded-full w-fit bg-white p-2">
//                             <TrashIcon className="w-4 h-4 md:w-6 md:h-6"/>
//                         </div>
//                     }
//                 </div>
//             </div>

//             {/* Image details */}
//             <div>
//                 <p className="font-medium">HAVIT HV-G92 Gamepad</p>
//                 <p className="font-medium flex gap-2">
//                     <span className="text-[#DB4444]">$120</span>
//                     <span className="text-black/50 line-through">$190</span>
//                 </p>
//                 {!showDelete &&
//                 <div className="flex flex-row items-center">
//                     {
//                         Array.from({length: 5}).map((_, index) => (
//                             <StarIcon  
//                                 key={index}
//                                 className={`w-5 h-5 
//                                             ${index < rating ? "text-yellow-300" : "text-gray-300" }`}
//                             />
//                         )
//                     )}

//                     <p className="ml-2 text-black/50">(88)</p>
//                 </div>
//                 }
//             </div>
//         </div>
//     )
// }
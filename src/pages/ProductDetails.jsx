import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import TopHeader from "../components/common/TopHeader";

// import ProductImg1 from "../assets/images/ProductImages/image1.png";
// import ProductImg2 from "../assets/images/ProductImages/image2.png";
// import ProductImg3 from "../assets/images/ProductImages/image3.png";
// import ProductImg4 from "../assets/images/ProductImages/image4.png";
// import ProductImg5 from "../assets/images/ProductImages/image5.png";
import { useState } from "react";

import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../app/services/products/productsApi";

import { StarIcon } from "@heroicons/react/16/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import RelatedItems from "../components/layout/RelatedItems";

import { addToWishlist } from "../app/features/wishlist/wishlistSlice";
import { useDispatch } from "react-redux";
// const productImages = [
//     {
//         name: "image1",
//         img: ProductImg1
//     },
//     {
//         name: "image2",
//         img: ProductImg2
//     },
//     {
//         name: "image3",
//         img: ProductImg3
//     },
//     {
//         name: "image4",
//         img: ProductImg4
//     },
//     {
//         name: "image5",
//         img: ProductImg5
//     }
// ]

const sizes = ["XS", "S", "M", "L", "XL"];

export default function ProductDetails() {
    const [activeImg, setActiveimg] = useState(0);
    const [selectedSize, setSelectedSize] = useState(0);

    const { id } = useParams();
    const { data: product, isError, isLoading } = useGetProductByIdQuery(id);
    const dispatch = useDispatch();
    if(isLoading) {
        return (
            <p>Loading</p>
        )
    }

    let rating = 4;    

    return (
        <>
            <TopHeader />
            <Header />

            <section className="p-2 sm:p-6 min-h-dvh flex flex-col items-center justify-center">
                <div className="md:w-4/5 mx-auto flex flex-col md:flex-row gap-3 md:gap-8">
                    <div className="md:w-3/5 flex flex-col-reverse md:flex-row gap-3">
                        <div className="flex md:w-1/6 md:flex-col gap-3">
                            {/* all pictures on side */}
                            {
                                product.images.map((image, index) => ( 
                                    // image.name !== productImages[activeImg].name &&
                                        <div onClick={() => {setActiveimg(index)}} className= {`bg-[#F5F5F5] max-w-fit box-border p-2 cursor-pointer border rounded-xs ${activeImg === index ? "border-red-500" : "" }`} key={index}>
                                            <img className="w-30 h-28 object-contain" src={image} alt={product.title} />
                                        </div>
                                ))
                            }
                        </div>

                        <div className="max-md:h-80 md:w-5/6 bg-[#F5F5F5] flex place-content-center">
                            <img className="object-contain w-9/10 max-w-80" src={product.images[activeImg]} alt={product.title} />
                        </div>
                    </div>

                    <div className="md:w-2/5 mt-8 md:mt-0 flex flex-col justify-between gap-4">
                        {/* details */}
                        <h2 className="text-2xl font-semibold">{product.title}</h2>

                        <div className="flex">
                            <div>
                                <div className="flex flex-row items-center border-r">
                                    {
                                        Array.from({length: 5}).map((_, index) => (
                                            <StarIcon  
                                                key={index}
                                                className={`w-5 h-5 
                                                            ${index < rating ? "text-yellow-300" : "text-gray-300" }`}
                                            />
                                        )
                                    )}

                                    <p className="mx-2  text-black/50">(150 Reviews)</p>
                                </div>

                                <p className="text-[#00FF66] mx-2">
                                    In Stock
                                </p>
                            </div>
                        </div>

                        <p className="text-2xl">${product.price}</p>

                        <p className="text-sm text-justify">
                            {product.description}
                        </p>

                        <hr />

                        <div className="flex items-center gap-6">
                            <p className="text-xl">Colours:</p>

                            <div className="flex items-center gap-3">
                                <button className="w-5 h-5 outline outline-offset-2 bg-[#A0BCE0] rounded-full cursor-pointer"></button>
                                <button className="w-6 h-6 bg-[#DB4444] rounded-full cursor-pointer"></button>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <p className="text-xl">Size:</p>
                            {
                                sizes.map((size, index) => (
                                    <button onClick={() => {setSelectedSize(index)}} key={index} className={`border p-1 cursor-pointer rounded-sm text-sm w-7 mx-1 ${index === selectedSize ? "bg-[#DB4444] text-white" : "" } `}>{size}</button>
                                ))
                            }
                        </div>

                        <div className="flex flex-wrap justify-between">
                            <div className="flex items-center">
                                <button className="border p-1.5 px-3 rounded-l-sm hover:bg-[#DB4444] hover:text-white">
                                    -
                                </button>

                                <p className="border-y p-1.5 px-3">2</p>

                                <button className="border p-1.5 px-3 rounded-r-sm hover:bg-[#DB4444] hover:text-white">
                                    +
                                </button>
                            </div>

                            <div className="flex-1 mx-2">
                                <button className="text-base cursor-pointer text-white bg-[#DB4444] hover:bg-[#E07575] p-2 rounded-sm w-full">Buy Now</button>
                            </div>

                            <div onClick={() => dispatch(addToWishlist(product))} className="cursor-pointer flex items-center border border-black/50 rounded-sm p-1">
                                <HeartIcon className="w-6 h-6" />
                            </div>

                        </div>

                        <div className="border border-black/40 rounded-sm">
                            <div className="flex gap-4 items-center p-6">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 20q-1.25 0-2.125-.875T4 17H2.725q-.425 0-.713-.288T1.725 16t.288-.712t.712-.288h2.05q.425-.475 1-.737T7 14t1.225.263t1 .737H13.4l2.1-9H5.75q-.425 0-.712-.288T4.75 5t.288-.712T5.75 4h11q.5 0 .8.375t.175.85L17.075 8H19q.475 0 .9.213t.7.587l1.875 2.475q.275.35.35.763t0 .837L22.15 16.2q-.075.35-.35.575t-.625.225H20q0 1.25-.875 2.125T17 20t-2.125-.875T14 17h-4q0 1.25-.875 2.125T7 20m8.925-7h4.825l.1-.525L19 10h-2.375zm-2.475 1.825l.163-.725q.162-.725.412-1.775q.075-.325.15-.6t.125-.55l.163-.725q.162-.725.412-1.775t.413-1.775l.162-.725L15.5 6l-2.1 9zm-11.7-1.5q-.425 0-.712-.287t-.288-.713t.288-.712t.712-.288h3.5q.425 0 .713.288t.287.712t-.288.713t-.712.287zm2-3.65q-.425 0-.712-.288t-.288-.712t.288-.712t.712-.288h4.5q.425 0 .713.288t.287.712t-.288.713t-.712.287zM7 18q.425 0 .713-.288T8 17t-.288-.712T7 16t-.712.288T6 17t.288.713T7 18m10 0q.425 0 .713-.288T18 17t-.288-.712T17 16t-.712.288T16 17t.288.713T17 18"/></svg>
                                </div>
                                <div>
                                    <h3 className="text-base font-medium">Free Delivery</h3>
                                    <p className="text-xs font-medium">Enter your postal code for Delivery Availability</p>
                                </div>
                            </div>
                            <hr className="border-black/40" />
                            <div className="flex gap-4 items-center p-6">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.075 15.475q-.725.025-1.387-.237t-1.163-.763t-.763-1.125t-.262-1.325q0-.25.025-.487t.1-.463q.1-.3-.012-.6t-.388-.425q-.3-.125-.587 0t-.388.425q-.125.375-.187.75T7 12q0 1 .388 1.913t1.087 1.612q.675.7 1.588 1.075t1.887.4l-.425.425q-.225.225-.225.525t.225.525t.525.225t.525-.225l1.6-1.6q.3-.3.3-.7t-.3-.7l-1.6-1.6q-.225-.225-.525-.225t-.525.225t-.225.525t.225.525zM11.9 8.5q.725 0 1.4.263t1.175.762t.763 1.125t.262 1.325q0 .25-.025.487t-.1.463q-.1.3.013.612t.387.438q.3.125.588 0t.387-.425q.125-.375.188-.763T17 12q0-1-.363-1.912T15.55 8.45q-.7-.7-1.612-1.062t-1.888-.363l.45-.45q.2-.225.2-.525t-.225-.525t-.525-.225t-.525.225l-1.6 1.6q-.3.3-.3.7t.3.7l1.6 1.6q.225.225.525.225t.525-.225t.225-.525t-.225-.525zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg>
                                </div>
                                <div>
                                    <h3 className="text-base font-medium">Free Delivery</h3>
                                    <p className="text-xs font-medium">Enter your postal code for Delivery Availability</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div className="ml-2">
                <RelatedItems />
            </div>
            
            <Footer />
        </>
    )
}

import TopHeader from "../components/common/TopHeader";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Button from "../components/common/Button";
import TransparentButton from "../components/common/TransparentButton";

import GameController from "../assets/images/GameController.png";
import LCDMonitor from "../assets/images/LCDMonitor.png"

const cartItems = [
    {
        img: LCDMonitor,
        name: "LCD Monitor",
        price: 650,
        quantity: 1,
        total: 650
    },
    {
        img: GameController,
        name: "H1 Gamepad",
        price: 550,
        quantity: 2,
        total: 1100
    }
]

{/* <div className="grid grid-cols-[2fr_1fr_1fr_100px] lg:grid-cols-[1fr_1fr_1fr_100px] font-serif gap-x-4 gap-y-12 items-center">
                        
                        <p>Product</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                        
                        {
                            cartItems.map((item, index) => (
                                <>
                                    <div className="flex items-center gap-4">
                                        <img className="w-12 h-12" src={item.img} alt={item.name} />
                                        <p>{item.name}</p>
                                    </div>
                                    <p>${item.price}</p>
                                    <input className="w-14 px-2 border border-black/40 rounded-sm p-1" type="number" value={item.quantity} />
                                    <p>${item.total}</p>
                                </>
                            ))
                        }

                    </div> */}

export default function CartPage() {
    return (
        <>
            <TopHeader />
            <Header />

            <section className="p-6 min-h-dvh flex items-center justify-center">
                <div className="sm:w-4/5 mx-auto flex flex-col my-12 gap-20">
                <div className="flex flex-col gap-8">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-black/10">
                                <td className="py-6">Product</td>
                                <td className="py-6">Price</td>
                                <td className="py-6 text-center">Quantity</td>
                                <td className="py-6 text-right pr-2">Subtotal</td>
                            </tr>
                        </thead>

                        <tbody>
                            {cartItems.map((item, index) => (
                                <tr key={index} className="border-b border-black/10">
                                    <td className="py-6">
                                        <div className="flex items-center gap-4">
                                            <img
                                                className="w-12 h-12"
                                                src={item.img}
                                                alt={item.name}
                                            />
                                            <p>{item.name}</p>
                                        </div>
                                    </td>

                                    <td className="py-6">${item.price}</td>

                                    <td className="py-6 text-center">
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            className="w-14 px-2 border border-black/40 rounded-sm p-1"
                                        />
                                    </td>

                                    <td className="text-right py-6 pr-2">${item.total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="flex justify-between">
                        <TransparentButton text="Return To Shop" />
                        <TransparentButton text="Update Cart" />
                    </div>
                </div>
                
                <div className="flex justify-between flex-col gap-y-3 md:flex-row">
                    <div className="md:w-1/2 gap-4 space-y-2">
                        <input 
                            type="number"
                            placeholder="Coupon Code" 
                            className="px-10 p-4 border border-black rounded-sm mr-4"
                        />
                        <Button text="Apply Coupon" />
                    </div>
                    <div className="border rounded-sm p-8 w-96">
                        <h2>Cart Total</h2>

                        <div className="flex justify-between border-b border-black/40 py-2">
                            <p>Subtotal:</p>
                            <p>$1750</p>
                        </div>

                        <div className="flex justify-between border-b border-black/40 py-2">
                            <p>Shipping:</p>
                            <p>Free</p>
                        </div>

                        <div className="flex justify-between border-b border-black/40 py-2">
                            <p>Total:</p>
                            <p>$1750</p>
                        </div>
                        <div className="text-center mt-6">
                        <Button text="Proceed To Checkout" />
                        </div>
                    </div>
                </div>

                </div>
            </section>
            <Footer />
        </>
    )
}
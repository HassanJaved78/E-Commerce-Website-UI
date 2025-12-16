import TopHeader from "../components/common/TopHeader";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Button from "../components/common/Button";

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

export default function CheckoutPage() {
    return (
        <>
            <TopHeader />
            <Header />

            <section className="p-6 min-h-dvh flex items-center justify-center">
                <div className="sm:w-4/5 mx-auto flex flex-col my-12 gap-20">
                
                <h1 className="text-4xl font-medium">Billing Details</h1>

                <div className="w-1/2 flex flex-col gap-4">
                    {/* details */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="firstName" className="cursor-pointer after:content-['*'] after:text-red-500">First Name</label>

                        <input type="text" name="firstName" id="firstName" className="p-2 bg-gray-100"/>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="companyName" className="cursor-pointer after:content-['*'] after:text-red-500">Company Name</label>

                        <input type="text" name="companyName" id="companyName" className="p-2 bg-gray-100"/>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="streetAdress" className="cursor-pointer after:content-['*'] after:text-red-500">Street Address</label>

                        <input type="text" name="streetAdress" id="streetAdress" className="p-2 bg-gray-100"/>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="apartment" className="cursor-pointer">Apartment, floor, etc. (Optional)</label>

                        <input type="text" name="apartment" id="apartment" className="p-2 bg-gray-100"/>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="city" className="cursor-pointer after:content-['*'] after:text-red-500">Town/City</label>

                        <input type="text" name="city" id="city" className="p-2 bg-gray-100"/>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="phone" className="cursor-pointer after:content-['*'] after:text-red-500">Phone Number</label>

                        <input type="number" name="phone" id="phone" className="p-2 bg-gray-100"/>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="cursor-pointer after:content-['*'] after:text-red-500">Email Address</label>

                        <input type="email" name="email" id="email" className="p-2 bg-gray-100"/>
                    </div>

                    <div className="flex gap-2">
                        <input type="checkbox" name="saveInfo" id="saveInfo" />
                        <label htmlFor="saveInfo">Save this info for faster check-out next time</label>
                    </div>
                </div>

                </div>
            </section>
            <Footer />
        </>
    )
}
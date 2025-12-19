import TopHeader from "../components/common/TopHeader";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Button from "../components/common/Button";
import TransparentButton from "../components/common/TransparentButton";

import { clearCart, adjustQuantity } from "../app/features/cart/cartSlice";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CartPage() {

    const cartItems = useSelector((state) => state.cart.products);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const id = parseInt(e.target.id);
        let quantity = parseInt(e.target.value);

        if (quantity < 1) {
            const confirmDelete = window.confirm(
                "Quantity is 1. Do you want to remove this item from the cart?"
            );
            if (confirmDelete) {
                quantity = 0; // this will remove the item
            } else {
                quantity = 1; // keep it at 1
            }
        }

        dispatch(adjustQuantity({ id, quantity }));
    };



    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);


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
                                <td className="py-6 px-1 text-center">Price</td>
                                <td className="py-6 px-1 text-center">Quantity</td>
                                <td className="py-6 px-1 text-right pr-2">Subtotal</td>
                            </tr>
                        </thead>

                        <tbody>
                            {cartItems.map((item, index) => (
                                <tr key={index} className="border-b border-black/10">
                                    <td className="py-6">
                                        <div className="flex items-center gap-4">
                                            <img
                                                className="w-12 h-12"
                                                src={item.images[0]}
                                                alt={item.title}
                                            />
                                            <p>{item.title}</p>
                                        </div>
                                    </td>

                                    <td className="py-6 text-center">${item.price}</td>

                                    <td className="py-6 text-center">
                                        <input
                                            type="number"
                                            id={item.id}
                                            value={item.quantity}
                                            min={0}
                                            onChange={handleChange}
                                            className="w-14 px-2 border border-black/40 rounded-sm p-1"
                                        />
                                    </td>

                                    <td className="text-right py-6 pr-2">${item.price * item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="flex justify-between">
                        <TransparentButton onClick={() => navigate("/")} text="Return To Shop" />
                        <TransparentButton onClick={() => dispatch(clearCart()) } text="Clear Cart" />
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
                            <p>${subtotal}</p>
                        </div>

                        <div className="flex justify-between border-b border-black/40 py-2">
                            <p>Shipping:</p>
                            <p>Free</p>
                        </div>

                        <div className="flex justify-between border-b border-black/40 py-2">
                            <p>Total:</p>
                            <p>${subtotal}</p>
                        </div>
                        <div className="text-center mt-6">
                        <Button onClick={() => navigate("/checkout")} text="Proceed To Checkout" />
                        </div>
                    </div>
                </div>

                </div>
            </section>
            <Footer />
        </>
    )
}
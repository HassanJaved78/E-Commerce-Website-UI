import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

import CartImg from "../assets/images/CartImage.png"
import Login from "../components/common/Login";
import SignUp from "../components/common/Signup";

export default function Authentication(props) {
    
    return (
        <>
            <Header />

            <section className="h-full sm:h-[800px] mb-16 flex items-center">
                <div className="w-full md:w-4/5 flex flex-col sm:flex-row justify-between gap-8 lg:gap-16 items-center">
                    <div className="py-16 h-full">
                        <img src={CartImg} className="min-w-[200px] lg:min-w-[400px] max-w-full h-auto object-contain" alt="cartimage" />
                    </div>
                    <div>
                        {
                            props.type === "Login" ? <Login /> : <SignUp />
                        }
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
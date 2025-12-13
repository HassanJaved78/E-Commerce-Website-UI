import TopHeader from "../components/common/TopHeader";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Services from "../components/layout/Services";
import Stats from "../components/common/Stats";
import Profiles from "../components/layout/Profiles";

import Image from "../assets/images/AboutpageImage.png";

export default function AboutPage() {
    return (
        <>
            <TopHeader />
            <Header />

            <section className="py-8">
                <div className="w-full lg:w-4/5 mx-auto flex flex-col-reverse sm:flex-row gap-4 lg:gap-16 justify-between">
                    <div className="w-full sm:w-1/2 flex flex-col px-6 gap-8">
                        {/* Our Story */}
                        <h1 className="text-[56px] font-semibold">Our Story</h1>
                        <p className="leading-6 text-justify">
                            Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
                        </p>
                        <p className="leading-6 text-justify">
                            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                        </p>
                    </div>
                    <div className="w-full sm:w-1/2">
                        <img src={Image} alt="image" />
                    </div>
                </div>
            </section>

            <Stats />
            <Profiles />
            <div className="py-8 mx-auto sm:w-4/5">
                <Services />
            </div>            
            <Footer />
        </>
    )
}
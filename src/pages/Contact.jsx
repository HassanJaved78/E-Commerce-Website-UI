import TopHeader from "../components/common/TopHeader";
import Header from "../components/common/Header";
import Footers from "../components/common/Footer";
import Button from "../components/common/Button";

import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Contact() {
    return (
        <>
            <TopHeader />
            <Header />

            <section>
                <div className="sm:w-4/5 mx-auto flex">
                    <div className="text-sm w-2/5 p-6 space-y-4">
                        {/* contact details */}
                        <div className="flex items-center gap-4">

                            <div className="bg-[#DB4444] inline-block p-2.5 rounded-full">
                                <PhoneIcon className="w-5 h-5 text-white" />
                            </div>

                            <p className="font-medium">Call To Us</p>
                        </div>

                        <p>We are available 24/7, 7 days a week.</p>
                        <p>Phone: +8801611112222</p>

                        <hr className="my-8" />

                        <div className="flex items-center gap-4">
                            <div className="bg-[#DB4444] inline-block p-2.5 rounded-full">
                                <EnvelopeIcon className="w-5 h-5 text-white" />
                            </div>

                            <p className="font-medium">Write To Us</p>
                        </div>

                        <p>Fill out our form and we will contact you within 24 hours.</p>
                        <p>Emails: customer@exclusive.com</p>
                        <p>Emails: support@exclusive.com</p>

                    </div>

                    <div className="w-3/5 p-10 flex flex-col gap-8">
                        {/* contact form */}
                        <div className="flex gap-4">
                            <input
                                type="text" 
                                placeholder=""
                                className="p-3 text-base bg-[#F5F5F5] outline-none flex-1"
                            />

                            <input
                                type="text" 
                                placeholder=""
                                className="p-3 text-base bg-[#F5F5F5] outline-none flex-1"
                            />

                            <input
                                type="text" 
                                placeholder=""
                                className="p-3 text-base bg-[#F5F5F5] outline-none flex-1"
                            />
                        </div>

                        <div className="w-full">
                            <input
                                type="textarea" 
                                placeholder=""
                                className="p-3 text-base bg-[#F5F5F5] outline-none w-full"
                            />
                        </div>

                        <div className="">
                            <Button text="Send Message" />
                        </div>
                        
                    </div>
                </div>
            </section>

            <Footers />
        </>
    )
}
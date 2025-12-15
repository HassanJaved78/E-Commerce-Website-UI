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

            <section className="h-dvh flex justify-center items-center">
                <div className="sm:w-4/5 mx-auto flex flex-col sm:flex-row max-sm:gap-8 sm:gap-2">
                    <div className="text-sm sm:w-2/6 lg:w-1/4 p-2 sm:p-6 space-y-4 flex flex-col">
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

                    <form className="sm:w-4/6 lg:w-3/4 p-2 sm:p-6 flex flex-col gap-8">
                        {/* contact form */}
                        <div className="flex flex-wrap gap-4">

                            <div className="w-full flex-1">
                                <input
                                    type="text" 
                                    placeholder="Your Name *"
                                    required
                                    className="peer w-full p-3 text-base focus:outline-black bg-[#F5F5F5] invalid:outline outline-red-600"
                                />
                                <p className="mt-1 hidden text-sm text-red-600 peer-invalid:block">
                                    Name is required
                                </p>
                            </div>

                            <div className="w-full flex-1">
                                <input
                                    type="email" 
                                    placeholder="Your Email *"
                                    required
                                    className="peer w-full p-3 text-base focus:outline-black bg-[#F5F5F5] flex-1 invalid:outline outline-red-600"
                                />
                                <p className="mt-1 hidden text-sm text-red-600 peer-invalid:block">
                                    Email is required
                                </p>
                            </div>

                            <div className="w-full flex-1">
                                <input
                                    type="number" 
                                    placeholder="Your Phone *"
                                    required
                                    className="peer w-full p-3 text-base focus:outline-black bg-[#F5F5F5] flex-1 invalid:outline outline-red-600"
                                />
                                <p className="mt-1 hidden text-sm text-red-600 peer-invalid:block">
                                    Phone number is required
                                </p>
                            </div>
                        </div>

                        <div className="w-full">
                            <textarea
                                rows={7}
                                placeholder="Your Message"
                                className="p-3 text-base focus:outline-black bg-[#F5F5F5] w-full resize-none"
                            ></textarea>
                        </div>

                        <div className="flex justify-end-safe">
                            <Button text="Send Message" />
                        </div>
                        
                    </form>
                </div>
            </section>

            <Footers />
        </>
    )
}
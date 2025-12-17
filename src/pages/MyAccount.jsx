import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import TopHeader from "../components/common/TopHeader";

import Button from "../components/common/Button";

export default function MyAccount() {
    return (
        <>
            <TopHeader />
            <Header />

            <section className="p-6 min-h-dvh flex items-center justify-center">
                <div className="sm:w-4/5 mx-auto flex justify-start gap-8 lg:gap-16 xl:gap-20">
                    
                    <aside className="flex flex-col gap-2 min-w-fit">
                        {/* side bar */}
                        <h2 className="font-medium">Manage My Account</h2>
                        <div className="ml-8 flex flex-col gap-2">
                            <p className="text-[#DB4444]">My Profile</p>
                            <p>Address Book</p>
                            <p>My Payment Options</p>
                        </div>

                        <h2 className="font-medium">My Orders</h2>
                        <div className="ml-8 flex flex-col gap-2">
                            <p>My Returns</p>
                            <p>My Cancellations</p>
                        </div>

                        <h2 className="font-medium">My WishList</h2>
                    </aside>

                    <main className="w-full flex flex-col gap-4 max-w-[1000px]">
                        {/* main content */}
                        <h1 className="text-xl text-[#DB4444] mb-1">Edit Your Profile</h1>
                        
                        <div className="flex flex-wrap justify-between gap-2">
                            <div className="flex flex-1 flex-col gap-1.5">
                                <label htmlFor="firstName">First Name</label>
                                <input 
                                    type="text" 
                                    className="bg-[#F5F5F5] p-2"
                                    id="firstName"
                                />
                            </div>

                            <div className="flex flex-1 flex-col gap-1.5">
                                <label htmlFor="lastName">Last Name</label>
                                <input 
                                    type="text" 
                                    className="bg-[#F5F5F5] p-2"
                                    id="lastName"
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-between gap-2">
                            <div className="flex flex-1 flex-col gap-1.5">
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="email" 
                                    className="bg-[#F5F5F5] p-2"
                                    id="email"
                                />
                            </div>

                            <div className="flex flex-1 flex-col gap-1.5">
                                <label htmlFor="address">Address</label>
                                <input 
                                    type="text" 
                                    className="bg-[#F5F5F5] p-2"
                                    id="address"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <label>Password Changes</label>
                            <input 
                                type="text" 
                                className="bg-[#F5F5F5] p-2 w-full"
                                placeholder="Current Password"
                            />

                            <input 
                                type="text" 
                                className="bg-[#F5F5F5] p-2 w-full"
                                placeholder="New Password"
                            />

                            <input 
                                type="text" 
                                className="bg-[#F5F5F5] p-2 w-full"
                                placeholder="Confirm New Password"
                            />

                        </div>

                        <div className="flex justify-end-safe gap-8 items-center-safe">
                            <p className="cursor-pointer">Cancel</p>
                            <Button text="Save Changes" />
                        </div>

                    </main>

                </div>
            </section>

            <Footer />
        </>
    )
}
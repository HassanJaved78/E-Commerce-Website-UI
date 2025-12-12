import AppStoreImg from "../../assets/images/Footer/appstore.png";
import GooglePlayImg from "../../assets/images/Footer/googleplay.svg";
import QRCodeImg from "../../assets/images/Footer/qrcode.png";

const logos = [
    {
        name: "facebook",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 30 256 256"><path fill="#currentColor" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/><path fill="#fff6f6" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"/></svg>
    },
    {
        name: "X",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -25 256 256"><path fill="currentColor" d="M256 25.45a105 105 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.2 105.2 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52c0 4.117.465 8.125 1.36 11.97c-43.65-2.191-82.35-23.1-108.255-54.876c-4.52 7.757-7.11 16.78-7.11 26.404c0 18.222 9.273 34.297 23.365 43.716a52.3 52.3 0 0 1-23.79-6.57q-.004.33-.003.661c0 25.447 18.104 46.675 42.13 51.5a52.6 52.6 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475c-17.975 14.086-40.622 22.483-65.228 22.483c-4.24 0-8.42-.249-12.529-.734c23.243 14.902 50.85 23.597 80.51 23.597c96.607 0 149.434-80.031 149.434-149.435q0-3.417-.152-6.795A106.8 106.8 0 0 0 256 25.45"/></svg>
    },
    {
        name: "instagram",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M128 23.064c34.177 0 38.225.13 51.722.745c12.48.57 19.258 2.655 23.769 4.408c5.974 2.322 10.238 5.096 14.717 9.575s7.253 8.743 9.575 14.717c1.753 4.511 3.838 11.289 4.408 23.768c.615 13.498.745 17.546.745 51.723s-.13 38.226-.745 51.723c-.57 12.48-2.655 19.257-4.408 23.768c-2.322 5.974-5.096 10.239-9.575 14.718s-8.743 7.253-14.717 9.574c-4.511 1.753-11.289 3.839-23.769 4.408c-13.495.616-17.543.746-51.722.746s-38.228-.13-51.723-.746c-12.48-.57-19.257-2.655-23.768-4.408c-5.974-2.321-10.239-5.095-14.718-9.574c-4.479-4.48-7.253-8.744-9.574-14.718c-1.753-4.51-3.839-11.288-4.408-23.768c-.616-13.497-.746-17.545-.746-51.723s.13-38.225.746-51.722c.57-12.48 2.655-19.258 4.408-23.769c2.321-5.974 5.095-10.238 9.574-14.717c4.48-4.48 8.744-7.253 14.718-9.575c4.51-1.753 11.288-3.838 23.768-4.408c13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95c-8.418 3.271-15.556 7.648-22.672 14.764S9.991 35.738 6.72 44.155C3.555 52.297 1.392 61.602.77 75.226C.147 88.878 0 93.237 0 128s.147 39.122.77 52.774c.622 13.625 2.785 22.93 5.95 31.071c3.27 8.417 7.647 15.556 14.763 22.672s14.254 11.492 22.672 14.763c8.142 3.165 17.446 5.328 31.07 5.95c13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95c8.418-3.27 15.556-7.647 22.672-14.763s11.493-14.254 14.764-22.672c3.164-8.142 5.328-17.446 5.95-31.07c.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07c-3.271-8.418-7.648-15.556-14.764-22.672S220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0m0 62.27c-36.302 0-65.73 29.43-65.73 65.73s29.428 65.73 65.73 65.73c36.301 0 65.73-29.428 65.73-65.73c0-36.301-29.429-65.73-65.73-65.73m0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667m83.686-110.994c0 8.484-6.876 15.36-15.36 15.36s-15.36-6.876-15.36-15.36s6.877-15.36 15.36-15.36s15.36 6.877 15.36 15.36"/></svg>
    },
    {
        name: "linkedIn",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"/></svg>
    }
]

export default function Footer() {
    return (
        <section className="w-full bg-black text-white py-2">
            <div className="w-full sm:w-4/5 mx-auto space-y-6 my-20 gap-6 flex flex-col max-sm:items-center flex-wrap sm:flex-row sm:justify-between">
                <div className="flex max-md:w-1/2 flex-col gap-2">
                    <h1 className="text-2xl font-bold">Exclusive</h1>
                    <h2 className="text-xl font-medium">Subscribe</h2>
                    <p className="text-base font-normal">Get 10% off your first order</p>

                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-transparent border border-white text-white 
                                    placeholder-white/40 rounded-md px-3 py-2 outline-none 
                                    focus:border-white focus:ring-1 focus:ring-white"
                        />

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full text-white/50 hover:text-white  transition-all cursor-pointer"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="m17.646 12.752l-12.515 5.27q-.404.16-.768-.069Q4 17.723 4 17.289V6.712q0-.435.364-.665q.363-.23.767-.068l12.515 5.269q.49.218.49.752t-.49.752M5 17l11.85-5L5 7v3.885L9.846 12L5 13.116zm0 0V7z" />
                        </svg>
                    
                    </div>
                    
                </div>

                <div className="flex flex-col gap-2 w-36 max-sm:min-w-1/2">
                    <h2 className="text-xl font-medium">Support</h2>
                    <p className="text-base font-normal">Taxila, Pakistan</p>
                    <p className="text-base font-normal wrap-break-word">hassanjaved0554@gmail.com</p>
                    <p className="text-base font-normal">+92 318 xxxxxxx</p>
                </div>

                <div className="flex flex-col gap-2 flex-wrap w-36 max-sm:min-w-1/2">
                    <h2 className="text-xl font-medium">Account</h2>
                    <p className="text-base font-normal cursor-pointer hover:underline underline-offset-2">My Account</p>
                    <p className="text-base font-normal hover:underline underline-offset-2">Login / Register</p>
                    <p className="text-base font-normal cursor-pointer hover:underline underline-offset-2">Cart</p>
                    <p className="text-base font-normal cursor-pointer hover:underline underline-offset-2">Wishlist</p>
                    <p className="text-base font-normal cursor-pointer hover:underline underline-offset-2">Shop</p>
                </div>

                <div className="flex flex-col gap-2 flex-wrap w-36 max-sm:min-w-1/2">
                    <h2 className="text-xl font-medium">Quick Link</h2>
                    <p className="text-base font-normal cursor-pointer hover:underline underline-offset-2">Privacy Policy</p>
                    <p className="text-base font-normal cursor-pointer hover:underline underline-offset-2">FAQ</p>
                    <p className="text-base font-normal cursor-pointer hover:underline underline-offset-2">Contact</p>
                </div>

                <div className="flex flex-col gap-2 flex-wrap w-36 max-sm:min-w-1/2 md:flex-1 lg:flex-none">
                    <h2 className="text-xl font-medium">Download App</h2>
                    <p className="text-xs">Save $3 with App New User Only</p>

                    <div className="grid grid-cols-2 my-4 gap-1 max-w-40">
                        <img src={QRCodeImg} className="row-span-2 w-12" alt="QRCodeImg" />
                        <img src={AppStoreImg} alt="AppStoreImg" />
                        <img src={GooglePlayImg} className="self-stretch" alt="GooglePlayImg" /> 
                    </div>

                    <div className="flex flex-row flex-wrap items-center  max-w-40 justify-between">
                        {
                            logos.map((logo, index) => (
                                <div className="w-6 h-6 cursor-pointer" key={index}>
                                    {logo.icon}
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>

            <p className="border-t border-white/20 text-center text-base p-1 text-white/20">Copyright 2025. All right reserved</p>

        </section>
    )
}
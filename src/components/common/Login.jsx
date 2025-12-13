import Button from "./Button"

export default function Login() {
    return (
        <form className="w-full tablet:w-80 lg:w-96 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-medium">Log in to Experience</h1>
                <p className="text-bases">Enter your details below</p>
            </div>

            <input 
                className="p-1 pb-2 border-b border-gray-300 outline-none focus:border-black transition"
                placeholder="Email or Phone Number"
                type="text"
            />

            <input 
                className="p-1 pb-2 border-b border-gray-300 outline-none focus:border-black transition"
                placeholder="Password"
                type="text" 
            />

            <div className="flex justify-between items-center">
                <Button text="Login" />

                <p className="cursor-pointer text-[#DB4444]">Forget Password?</p>
            </div>

        </form>
    )
}
import { MagnifyingGlassIcon, HeartIcon, ShoppingCartIcon, Bars3Icon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <nav className="box-border flex sm:w-4/5 mt-2 justify-between items-center  mx-auto p-2 font-serif gap-4 md:gap-12">
      <div className="flex flex-1 lg:flex-2 w-3/4 flex-rows justify-between items-center gap-1 sm:flex-row sm:gap-4">
        <p className="flex-1 w-2/5 font-bold text-2xl">Exclusive</p>
        <ul className="flex-2 w-3/5 hidden sm:flex flex-col gap-2 items-center text-base justify-around xl:justify-center xl:gap-8 sm:flex-row">
          <li className="cursor-pointer underline-offset-2 hover:underline">Home</li>
          <li className="cursor-pointer underline-offset-2 hover:underline">Contact</li>
          <li className="cursor-pointer underline-offset-2 hover:underline">About</li>
          <li className="cursor-pointer underline-offset-2 hover:underline">SignUp</li>
        </ul>
      </div>

      <div className="flex lg:flex-1 max-w-sm justify-between items-center gap-2 xl:gap-4">
        <div className='flex flex-1 max-w-3xs flex-row gap-2 justify-between py-2  lg:px-1 rounded-sm lg:bg-[#F5F5F5]'>
          <input type="text" className='flex-1 hidden lg:inline-block text-xs outline-none border-none' placeholder='What are you looking for?' />
          <MagnifyingGlassIcon className="w-5 h-5 cursor-pointer text-black" />
        </div>

        <HeartIcon className="w-5 h-5 cursor-pointer text-black hover:fill-current" />
        <ShoppingCartIcon className="w-5 h-5 cursor-pointer stroke-current text-black hover:fill-current" />
      
        <Bars3Icon className="w-6 h-6 cursor-pointer" />
      </div>
    </nav>
  );
}

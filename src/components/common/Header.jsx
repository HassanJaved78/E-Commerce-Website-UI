import { useState } from "react";

import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
  UserIcon,
  ArrowLeftEndOnRectangleIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const dropDownItems = [
  {
    name: "Manage My Account",
    icon: <UserIcon />,
    onclick: "ggg",
  },
  {
    name: "My Order",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11t-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11t-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4t-1.412.588T10 6M6 20V8z"
        />
      </svg>
    ),
    function: "",
  },
  {
    name: "My Cancellations",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m12 12.708l3.246 3.246q.14.14.344.15t.364-.15t.16-.354t-.16-.354L12.708 12l3.246-3.246q.14-.14.15-.344t-.15-.364t-.354-.16t-.354.16L12 11.292L8.754 8.046q-.14-.14-.344-.15t-.364.15t-.16.354t.16.354L11.292 12l-3.246 3.246q-.14.14-.15.345q-.01.203.15.363t.354.16t.354-.16zM12.003 21q-1.867 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
        />
      </svg>
    ),
    function: "",
  },
  {
    name: "My Reviews",
    icon: <StarIcon />,
    function: "",
  },
  {
    name: "Logout",
    icon: <ArrowLeftEndOnRectangleIcon />,
    function: "",
  },
];

export default function Header() {
  const [dropDown, setDropDown] = useState("close");
  const [mobileMenu, setMobileMenu] = useState(false);

  function toggleDropDown() {
    if (dropDown === "close") {
      setDropDown("open");
    } else {
      setDropDown("close");
    }
  }

  function toggleMobileMenu() {
    setMobileMenu(!mobileMenu);
  }

  return (
    <nav className="relative box-border border-b border-black/20 flex sm:w-4/5 mt-2 justify-between items-center mx-auto p-2 font-serif gap-4 md:gap-12">
      <div className="relative flex flex-1 lg:flex-2 w-3/4 flex-rows justify-between items-center gap-1 sm:flex-row sm:gap-4">
        <p className="flex-1 w-2/5 font-bold text-2xl">Exclusive</p>
        <ul 
          className={`flex-2 sm:w-3/5 
          ${mobileMenu ? "flex justify-center gap-6" : "hidden"} 
          absolute w-dvw top-13
          sm:static
          sm:flex flex-row gap-2 items-center text-base sm:justify-around xl:justify-center xl:gap-8 sm:flex-row`}
        >
          <li className="cursor-pointer underline-offset-2 hover:underline">
            Home
          </li>
          <li className="cursor-pointer underline-offset-2 hover:underline">
            Contact
          </li>
          <li className="cursor-pointer underline-offset-2 hover:underline">
            About
          </li>
          <li className="cursor-pointer underline-offset-2 hover:underline">
            SignUp
          </li>
        </ul>
      </div>

      <div className="flex lg:flex-1 max-w-sm justify-between items-center gap-2 xl:gap-4 xl:justify-around">
        <div className="flex flex-1 max-w-3xs flex-row gap-2 justify-between py-2  lg:px-1 rounded-sm lg:bg-[#F5F5F5]">
          <input
            type="text"
            className="flex-1 hidden lg:inline-block text-xs outline-none border-none"
            placeholder="What are you looking for?"
          />
          <MagnifyingGlassIcon className="w-6 h-6 cursor-pointer text-black" />
        </div>

        <HeartIcon className="w-6 h-6 cursor-pointer text-black hover:fill-current" />
        <ShoppingCartIcon className="w-6 h-6 cursor-pointer stroke-current text-black hover:fill-current" />
        <UserIcon
          onClick={toggleDropDown}
          className={`${
            dropDown === "close" ? "" : "bg-[#DB4444] stroke-white"
          } w-6 h-6 hover:border rounded-full p-0.5 cursor-pointer stroke-current hover:border-[#DB4444] hover:bg-[#DB4444] hover:stroke-white`}
        />

        <div
          className={`${
            dropDown === "close" ? "hidden" : ""
          } absolute top-12 right-2 p-4 rounded-sm text-white bg-black/50 z-55 backdrop-blur space-y-4 w-60`}
        >
          {/* Dropdown menu */}
          {dropDownItems.map((item, index) => (
            <div
              className="flex items-center gap-2 cursor-pointer hover:indent-1"
              key={index}
            >
              <div className="w-6 h-6">{item.icon}</div>
              <p className="text-sm">{item.name}</p>
            </div>
          ))}
        </div>

        <Bars3Icon
          className={`w-6 h-6 cursor-pointer sm:hidden`}
          onClick={toggleMobileMenu}
        />
      </div>
    </nav>
  );
}

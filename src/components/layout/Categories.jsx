import SectionHeading from "../common/SectionHeading"
import CategoryCard from "../common/CategoryCard"
import LeftRightArrows from "../common/LeftRightArrows"

import { DevicePhoneMobileIcon,ComputerDesktopIcon, CameraIcon } from "@heroicons/react/24/outline"
import { useRef } from "react"


const categories = [
    {
        name: "Phones",
        icon: <DevicePhoneMobileIcon />
    },
    {
        name: "Computers",
        icon: <ComputerDesktopIcon />
    },
    {
        name: "SmartWatch",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="56px" height="56px" viewBox="0 0 24 24"><path fill="currentColor" d="M9 14v-4h1.5v4zm2.25 0v-3h1.5v3zm2.25 0v-2H15v2zM9 22l-1.35-4.55q-1.2-.95-1.925-2.375T5 12t.725-3.075T7.65 6.55L9 2h6l1.35 4.55q1.2.95 1.925 2.375T19 12t-.725 3.075t-1.925 2.375L15 22zm3-5q2.075 0 3.538-1.463T17 12t-1.463-3.537T12 7T8.463 8.463T7 12t1.463 3.538T12 17"/></svg>,
    },
    {
        name: "Camera",
        icon: <CameraIcon />
    },
    {
        name: "Headphones",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="56px" height="56px" viewBox="0 0 24 24"><path fill="currentColor" d="M9 21H5q-.825 0-1.412-.587T3 19v-7q0-1.875.713-3.512t1.924-2.85t2.85-1.925T12 3t3.513.713t2.85 1.924t1.925 2.85T21 12v7q0 .825-.587 1.413T19 21h-4v-8h4v-1q0-2.925-2.037-4.962T12 5T7.038 7.038T5 12v1h4z"/></svg>
    },
    {
        name: "Gaming",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="56px" height="56px" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18q-.825 0-1.412-.587T2 16V8q0-.825.588-1.412T4 6h16q.825 0 1.413.588T22 8v8q0 .825-.587 1.413T20 18zm0-2h16V8H4zm3-1h2v-2h2v-2H9V9H7v2H5v2h2zm7.5 0q.625 0 1.063-.437T16 13.5t-.437-1.062T14.5 12t-1.062.438T13 13.5t.438 1.063T14.5 15m3-3q.625 0 1.063-.437T19 10.5t-.437-1.062T17.5 9t-1.062.438T16 10.5t.438 1.063T17.5 12M4 16V8z"/></svg>
    },
    {
        name: "Medicine",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="56px" height="56px" viewBox="0 0 24 24"><path fill="currentColor" d="M9.616 20.846q-.672 0-1.144-.472T8 19.231V16H4.77q-.672 0-1.144-.472t-.472-1.144V9.617q0-.672.472-1.144T4.769 8H8V4.77q0-.672.472-1.144t1.144-.472h4.768q.672 0 1.144.472T16 4.769V8h3.23q.672 0 1.144.472t.472 1.144v4.768q0 .672-.472 1.144T19.231 16H16v3.23q0 .672-.472 1.144t-1.144.472zM4.154 11.5H9q.135 0 .235.058t.167.161l1.452 2.166l1.677-5.031q.061-.165.18-.26T13 8.5q.135 0 .244.058q.11.058.177.161l1.835 2.781h4.59V9.616q0-.27-.173-.443T19.231 9h-3.423q-.349 0-.578-.23T15 8.192V4.77q0-.269-.173-.442t-.442-.173h-4.77q-.269 0-.442.173T9 4.769v3.423q0 .349-.23.578T8.192 9H4.77q-.269 0-.442.173t-.173.443zm0 1v1.885q0 .269.173.442t.442.173h3.423q.349 0 .578.23t.23.578v3.423q0 .269.173.442t.443.173h4.769q.269 0 .442-.173t.173-.442v-3.423q0-.349.23-.578t.578-.23h3.423q.269 0 .442-.173t.173-.442V12.5H15q-.134 0-.244-.067t-.183-.171l-1.427-2.147l-1.677 5.031q-.061.165-.192.26t-.302.094q-.134 0-.234-.058t-.168-.161L8.719 12.5zM12 12"/></svg>
    }
]

export default function Categories() {

    const sliderRef = useRef(null);

    return (
        <section className="py-8 md:py-16 border-b border-black/20">
            <div className="w-full sm:w-4/5 mx-auto flex flex-col gap-10">
                <SectionHeading text="Categories" />

                <div className="flex justify-between">
                    {/* Heading and buttons */}
                    <h1 className="text-4xl font-medium font-serif tracking-wide pr-24">Browse By Category</h1>
                    
                    <LeftRightArrows ref={sliderRef} />
                </div>

                <div ref={sliderRef} className="flex flex-row gap-7 overflow-x-hidden">
                    {/* Categories */}
                    {
                        categories.map(({name, icon}, index) => {
                            return (
                                <CategoryCard key={index} icon={icon} name={name} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
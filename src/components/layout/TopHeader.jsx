
export default function TopHeader() {
  return (
    <div className="flex justify-center bg-black text-white p-3 font-extralight text-xs">
      <div className="w-4/5 flex flex-col items-center gap-1 flex-wrap justify-between sm:flex-row sm:gap-0">
        <p className="w-[89%] text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="font-bold underline hover:cursor-pointer">ShopNow</span>
        </p>
        <p className="flex gap-0.5 content-baseline">
          English
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </p>
      </div>
    </div>
  );
}

const Filter = ({room}) => {
  return (
    <div class="mx-auto  flex w-full items-center justify-center bg-inherit py-2">
    <div class="group ring-2 ring-blue-500/50 rounded-xl relative cursor-pointer py-2">

        <div class="flex items-center justify-between space-x-5 bg-white px-2">
            <a class="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4" onClick="">
                Choose Day
            </a>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </span>
        </div>

        <div
            class="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">

            <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Sunday
            </a>

            <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Monday
            </a>

            <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Tuesday
            </a>

            <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Wednesday
            </a>

            <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Thursday
            </a>

            <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Friday
            </a>

            <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Saturday
            </a>

        </div>
    </div>
</div>
  );
};

export default Filter;

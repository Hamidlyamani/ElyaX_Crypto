

export const Search = () => {
    return (
        <div>

            <div className="relative w-full">
                <button type="submit" className="p-3 ms-1 text-sm font-medium absolute inset-0 m-auto right-0 w-[42px] h-[42px] text-black dark:text-white  rounded-full  focus:ring-0 focus:outline-none focus:ring-gray-900 bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:bg-gray ">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </button>
                <input type="text" id="simple-search" list='coins_datalist' className="bg-gray    text-gray-900 h-[50px] text-sm rounded-full focus:outline-0 block w-full ps-14 p-2.5 bg-gray-10 dark:bg-sidebar  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 placeholder:italic placeholder:font-L_light placeholder:text-tag placeholder:text-gray" placeholder="Search your coins..." required />
                <datalist id="coins_datalist">
                    <option value="Bitcoin"></option>
                    <option value="Litecoin"></option>
                    <option value="Ethereum"></option>
                    <option value="Solana"></option>
                    <option value="Tether"></option>
                    <option value="Ripple"></option>
                </datalist>

            </div>
        </div>
    )
}

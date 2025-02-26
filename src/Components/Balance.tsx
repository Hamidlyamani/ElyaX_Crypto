
import arrow1 from "@/assets/imgs/icons/arrow.png";
import arrow from "@/assets/imgs/icons/arrow1.png";


export const Balance = () => {
    return (<div className='my-12'>
        <div className='flex  justify-between flex-col lg:items-end lg:flex-row'>
            <div className="font-L_regular">
                <h3 className=' text-b-large uppercase '>Total Balance</h3>
                <div className="font-L_regular text-h1-bm md:text-h1-b ">$154,610<span className="text-gray-600 dark:text-gray-800 text-h2-m">.00*</span></div>
            </div>
            <div className="flex items-end gap-2 md:gap-6">
                <div className="day p-1 md:p-2 flex flex-col items-center gap-3 ">
                    <h4 className="text-gray-600 dark:text-gray-800 font-L_regular text-b-large">Today</h4>
                    <div className="flex gap-4 items-center "> <span className="text-b-large font-L_medium">-2.5%</span> <img src={arrow} alt="" /></div>
                </div>
                <div className="separ h-20 w-0.5 bg-gray-800 dark:bg-gray-700 rounded-full"></div>
                <div className="day p-1 md:p-2 flex flex-col items-center gap-3 ">
                    <h4 className="text-gray-600 dark:text-gray-800 font-L_regular text-b-large">7 Days</h4>
                    <div className="flex gap-4 items-center "> <span className="text-b-large font-L_medium">+4.25%</span> <img src={arrow1} alt="" /></div>
                </div>
                <div className="separ h-20 w-0.5 bg-gray-800 dark:bg-gray-700 rounded-full"></div>
                <div className="day p-1 md:p-2 flex flex-col items-center gap-3 ">
                    <h4 className="text-gray-600 dark:text-gray-800 font-L_regular text-b-large">30 Days</h4>
                    <div className="flex gap-4 items-center "> <span className="text-b-large font-L_medium">+11.5%</span> <img src={arrow1} alt="" /></div>
                </div>
            </div>

        </div>
        <p className="text-gray-600 dark:text-gray-800 font-L_regular text-tag mt-2 md:mt-0">*: Mock amounts, just for fun!  ;&#41;</p>
    </div>
    )
}

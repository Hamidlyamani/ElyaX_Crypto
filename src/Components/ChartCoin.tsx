import filter from '@/assets/imgs/icons/button.png'
import dollar from '@/assets/imgs/icons/dollar-circle.png'
import  ChartUi  from './ui/chartui'
import TimeSelector from './ui/TimeSelector'
import {  useState } from 'react'
import { Chartinfo } from '@/Api/types'
import ChartUiSmall from './ui/chartUiSmall'


export const ChartCoin = () => {
    const [chartinfo, setChartinfo] = useState<Chartinfo>({
        coinId: "bitcoin",
        vs_currency: "usd",
        time: 0.4, // Default time
        color: "hsl(var(--chart-2))",
        strok: "green",
    });


    const handleTimeChange = (time: number) => {
        setChartinfo({ ...chartinfo, time }); // Ensure immediate update
    };
    const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setChartinfo((prev) => ({ ...prev, vs_currency: event.target.value }));
    };
    return (
        <div className='w-full lg:w-3/4 bg-gray-10 dark:bg-black_coin rounded-3xl'>
            <div className="charthader flex justify-between items-center p-4 px-4 lg:px-8 border-b-2 border-gray-200 dark:border-gray-900 " >
                <h4 className='font-L_semiBold text-h4'>Analytics</h4>
                <div className="flex gap-6 items-center">
                    <button><img src={filter} alt="" /></button>
                    <div className="flex items-center gap-1 user_item border-[1px] border-gray-700 rounded-md p-1">
                        <img src={dollar} alt="" />
                        <div>
                            <select id="countries" value={chartinfo.vs_currency}  onChange={handleCurrencyChange} className="block text-black bg-transparent dark:text-white outline-0 dark:placeholder-gray ">
                                <option defaultValue='true' value="usd" className='p-4 m-4 border-0 dark:bg-sidebar outline-0 focus:bg-gray'>USD</option>
                                <option value="eur" className='p-4 m-4 border-0 dark:bg-sidebar outline-0'>EURO</option>
                                <option value="rub" className='p-4 m-4 border-0 dark:bg-sidebar outline-0'>RUB</option>
                            </select>
                        </div>
                    </div>
                </div>

            </div>
            <div className="content p-2 px-4 lg:px-8">
                <div className="flex justify-between items-start">
                    <div className="left">
                        <select id="countries" value={chartinfo.vs_currency} onChange={handleCurrencyChange}  className="block text-gray-700 b-b-small bg-transparent font-L_light dark:text-gray-500 w-32 outline-0 dark:placeholder-gray-900 ">
                            <option defaultValue='true' value="usd" className='p-4 m-4 border-0 dark:bg-sidebar outline-0 focus:bg-gray'>Bitcoin/BTC</option>
                            <option value="eur" className='p-4 m-4 border-0 dark:bg-sidebar outline-0'>Bitcoin/EURO</option>
                            <option value="rub" className='p-4 m-4 border-0 dark:bg-sidebar outline-0'>Bitcoin/RUB</option>
                        </select>
                        <h6 className="text-h2-m font-L_medium">$38,252.02</h6>
                    </div>
                    <TimeSelector activeTime={chartinfo.time} onTimeChange={handleTimeChange}  />
                </div>
                <div className="chart lg:py-6 pt-4 h-[300px]">
                    <ChartUi chartinfo={chartinfo} />
                </div>
            </div>
        </div>
    )
}

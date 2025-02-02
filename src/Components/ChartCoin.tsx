import filter from '@/assets/imgs/icons/button.png'
import dollar from '@/assets/imgs/icons/dollar-circle.png'
import { ChartUi } from './ui/chartui'


export const ChartCoin = () => {
    return (
        <div className='w-full lg:w-3/4 bg-gray-10 dark:bg-black_coin rounded-3xl'>
            <div className="charthader flex justify-between items-center p-4 px-4 lg:px-8 border-b-2 border-gray-200 dark:border-gray-900 " >
                <h4 className='font-L_semiBold text-h4'>Analytics</h4>
                <div className="flex gap-6 items-center">
                    <button><img src={filter} alt="" /></button>
                    <div className="flex items-center gap-1 user_item border-[1px] border-gray-700 rounded-md p-1">
                        <img src={dollar} alt="" />
                        <div>
                            <select id="countries" className="block text-black bg-transparent dark:text-white outline-0 dark:placeholder-gray ">
                                <option selected className='p-4 m-4 border-0 dark:bg-sidebar outline-0 focus:bg-gray'>USD</option>
                                <option value="US" className='p-4 m-4 border-0 dark:bg-sidebar outline-0'>DH</option>
                                <option value="CA" className='p-4 m-4 border-0 dark:bg-sidebar outline-0'>EURO</option>
                            </select>
                        </div>
                    </div>
                </div>

            </div>
            <div className="content p-2 px-4 lg:px-8">
                <div className="flex justify-between items-start">
                    <div className="left">
                        <select id="countries" className="block text-gray-700 b-b-small bg-transparent font-L_light dark:text-gray-500 w-32 outline-0 dark:placeholder-gray-900 ">
                            <option selected className='p-4 m-4 border-0 dark:bg-sidebar outline-0 focus:bg-gray'>Bitcoin/BTC</option>
                            <option value="US" className='p-4 m-4 border-0 dark:bg-sidebar outline-0'>Bitcoin/DH</option>
                            <option value="CA" className='p-4 m-4 border-0 dark:bg-sidebar outline-0'>Bitcoin/EURO</option>
                        </select>
                        <h6 className="text-h2-m font-L_medium">$38,252.02</h6>
                    </div>
                    <div className="right flex gap-1 lg:gap-2 p-1 lg:p-2">
                        <div className="bg-gray-50 text-gray-700 dark:bg-gray-900  dark:text-gray-800 p-1 px-2 lg:px-4 cursor-pointer text-tag-small flex items-center  rounded-full data-[active=true]:bg-yallow2 data-[active=true]:text-gray-900 data-[active=true]:dark:bg-yallow2 data-[active=true]:dark:text-gray-900" data-active="true">1h</div>
                        <div className="bg-gray-50 text-gray-700 dark:bg-gray-900  dark:text-gray-800 p-1 px-2 lg:px-4 cursor-pointer  text-tag-small flex items-center  rounded-full data-[active=true]:bg-yallow2 data-[active=true]:text-gray-900">3h</div>
                        <div className="bg-gray-50 text-gray-700 dark:bg-gray-900  dark:text-gray-800 p-1 px-2 lg:px-4 cursor-pointer  text-tag-small flex items-center  rounded-full data-[active=true]:bg-yallow2 data-[active=true]:text-gray-900">1d</div>
                        <div className="bg-gray-50 text-gray-700 dark:bg-gray-900  dark:text-gray-800 p-1 px-2 lg:px-4 cursor-pointer  text-tag-small flex items-center  rounded-full data-[active=true]:bg-yallow2 data-[active=true]:text-gray-900">1w</div>
                        <div className="bg-gray-50 text-gray-700 dark:bg-gray-900  dark:text-gray-800 p-1 px-2 lg:px-4 cursor-pointer  text-tag-small flex items-center  rounded-full data-[active=true]:bg-yallow2 data-[active=true]:text-gray-900">1m</div>
                    </div>
                </div>
                <div className="chart">
                    <ChartUi/>
                </div>
            </div>
        </div>
    )
}

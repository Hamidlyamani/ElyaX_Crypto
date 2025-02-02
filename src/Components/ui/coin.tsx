import b1 from "@/assets/imgs/icon.png";
import change1 from "@/assets/imgs/Vector.png";
import graph from "@/assets/imgs/graph.png";
import { coinType } from '@/Api/types'


export const Coin = (data: coinType) => {
    return (
        <div className=' bg-gray-10 dark:bg-black_coin p-2 md:p-4  rounded-3xl m-1  w-[calc(50%_-_8px)] lg:w-1/4 lg:m-0  '>
            <div className="flex gap-2 md:gap-4 justify-between items-center">
                <div className="flex gap-2 md:gap-4">
                    <div className="icon_coin min-w-8">
                        <img src={b1} alt="" />
                    </div>
                    <div className="name">
                        <h5 className="font-L_semiBold">
                            {data.name}
                        </h5>
                        <span className="font-L_regular text-tag text-gray-600 dark:text-gray-800 uppercase">{data.abrev}</span>
                    </div>
                </div>
                <div className="change min-w-6">
                    <img src={change1} alt="" />
                </div>
            </div>
            <div className="prix flex mt-8 gap-1 justify-between items-end">
                <div>
                    <div className="text-h5 md:text-h4 font-L_medium ">{data.price}</div>
                    <span className=" text-green_light_1 font-L_semiBold text-b-small">+{data.change}%</span>
                </div>
                <div className="chart">
                    <img src={graph} alt="" />
                </div>
            </div>
        </div>
    )
}

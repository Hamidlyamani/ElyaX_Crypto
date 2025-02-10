import change1 from "@/assets/imgs/Vector.png";
import change2 from "@/assets/imgs/Vector2.png";
import { Chartinfo, coinType } from '@/Api/types'
import ChartUiSmall from "./chartUiSmall";


export const Coin = (data: coinType) => {

    const chartdata: Chartinfo = {
        coinId: data.id.toString(),
        chart: data.chart,
        color: data.color,

    };
    console.log(data.chart)
    return (
        <div className=' bg-gray-10 dark:bg-black_coin p-2 md:p-4  rounded-3xl m-1 flex flex-col justify-between  w-[calc(50%_-_8px)] lg:w-1/4 lg:m-0  '>
            <div className="flex gap-2 md:gap-4 justify-between items-center">
                <div className="flex gap-2 md:gap-4">
                    <div className="icon_coin min-w-8 max-w-12">
                        <img src={data.image} alt="" />
                    </div>
                    <div className="name">
                        <h5 className="font-L_semiBold">
                            {data.name}
                        </h5>
                        <span className="font-L_regular text-tag text-gray-600 dark:text-gray-800 uppercase">{data.symbol}</span>
                    </div>
                </div>
                <div className="change min-w-6 max-w-12">
                    {data.price_change_percentage_24h >= 0 ?
                        <img src={change1} alt="" /> :
                        <img src={change2} alt="" />}
                </div>
            </div>
            <div className="prix flex mt-8 gap-1 justify-between items-end">
                <div>
                    <div className="text-h5 md:text-h4 font-L_medium ">{data.current_price.toFixed(2)}</div>
                    <span className={data.price_change_percentage_24h >= 0 ? " text-green_light_1 font-L_semiBold text-b-small" : "text-orange font-L_semiBold text-b-small"}>{data.price_change_percentage_24h.toFixed(2)}%</span>
                </div>
                <div className="chart h-[60px] w-1/2 min-w-[50px] ">
                    <ChartUiSmall chartinfo={chartdata} />
                </div>
            </div>
        </div>
    )
}

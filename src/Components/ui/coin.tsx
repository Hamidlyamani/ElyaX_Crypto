import b1 from "@/assets/imgs/icon.png";
import change1 from "@/assets/imgs/Vector.png";
import graph from "@/assets/imgs/graph.png";

export const Coin = () => {
    return (
        <div className=' bg-gray-10 dark:bg-black_coin p-4 rounded-3xl w-1/4 '>
            <div className="flex gap-4 justify-between ">
                <div className="flex gap-4">
                    <div className="icon_coin">
                        <img src={b1} alt="" />
                    </div>
                    <div className="name">
                        <h5 className="font-L_semiBold">betcoin</h5>
                        <span className="font-L_regular text-tag text-gray-600 dark:text-gray-800 uppercase">BTC</span>
                    </div>
                </div>
                <div className="change">
                    <img src={change1} alt="" />
                </div>
            </div>
            <div className="prix flex mt-8 p-2 justify-between items-end">
                <div>
                    <div className="text-h4 font-L_medium ">$52,291</div>
                    <span className=" text-green_light_1 font-L_semiBold text-b-small">+0.25%</span>
                </div>
                <div className="chart">
                    <img src={graph} alt="" />
                </div>
            </div>
        </div>
    )
}

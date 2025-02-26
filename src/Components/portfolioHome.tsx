import { useCoinData } from "@/contextes/coinDataContext";
import { CoinPortfolio } from "./ui/coinPortfolio"
import { useMenu } from "@/contextes/menuContext";



export const PortfolioHome = () => {
    const { coins } = useCoinData();
    const { setSelectedMenuItem } = useMenu();

    return (
        <div className='w-full lg:w-1/4 bg-green_light_1  rounded-3xl text-black'>
            <div className="title flex justify-between items-center  p-4 border-b-2 border-gray-700">
                <h4 className="font-L_semiBold text-h4 ">My Portfolio</h4>
                <button className=" rounded-full p-2 aspect-square bg-green_light" onClick={() => { setSelectedMenuItem('Watchlist'); }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" /></svg>
                </button>
            </div>
            <div className="content p-2">
                {coins.slice(0, 6).map((coin) => (
                    <CoinPortfolio key={coin.id} {...coin} />
                ))}
            </div>

        </div>
    )
}

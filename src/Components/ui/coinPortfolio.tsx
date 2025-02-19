import { coinType } from '@/Api/types'
import logo1 from '@/assets/imgs/icon.png'




export const CoinPortfolio = (coin: coinType) => {
    return (
        <div className='flex justify-between items-center  p-2  border-b-[1px] border-gray-700'>
            <div className='flex gap-4 items-center'>
                <div className="logo">
                    <img src={coin.image} className='max-w-10' alt="" />
                </div>
                <div className="name">
                    <h6 className='font-L_medium text-b-large'>{coin.name}</h6>
                    <span className='uppercase font-L_light text-b-medium text-gray-1000 '>{coin.symbol}</span>
                </div>
            </div>
            <div className='flex flex-col items-center justify-end'>
                <div className="price text-b-large font-L_medium text-center">{coin.ath_change_percentage.toFixed(0)}%</div>
                <div className={`change w-fit bg-black text-tag rounded-full p-1 px-1.5 ${coin.price_change_percentage_24h > 0 ? 'text-green_light' : 'text-orange'}`}>
                    {coin.price_change_percentage_24h.toFixed(1)}%
                </div>
            </div>
        </div>
    )
}

import { Coin } from './coin'
import { coinType } from '@/Api/types'


export const Coins = () => {
    const data: coinType[] = [
        {
            id: 1,
            name: 'Bitcoin',
            abrev: 'btc',
            price: 25.455,
            change: 0.54
        },
        {
            id: 2,
            name: 'Litecoin',
            abrev: 'ITC',
            price: 8.291,
            change: 0.25
        },
        {
            id: 3,
            name: 'Ethereum',
            abrev: 'ETH',
            price: 28.291,
            change: 0.54
        },
        {
            id: 4,
            name: 'Solana',
            abrev: 'SOL',
            price: 14.291,
            change: 0.54
        },
    ]
    return (
        <div className='flex items-end justify-between flex-wrap my-4 lg:gap-2 lg:flex-nowrap '>
            {data.map((item) => (
                <Coin key={item.id} {...item} />
            ))}
        </div>
    )
}

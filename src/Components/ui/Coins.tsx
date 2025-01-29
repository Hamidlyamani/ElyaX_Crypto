import { Coin } from './coin'




export const Coins = () => {
    const data = [
        {
        name: 'Bitcoin',
        abrev: 'btc',
        price: 25.455,
        change: 0.54
        },
        {
            name: 'Litecoin',
            abrev: 'ITC',
            price: 8.291,
            change: 0.25
        },
        {
            name: 'Ethereum',
            abrev: 'ETH',
            price: 28.291,
        change: 0.54
        },
        {
            name: 'Solana',
            abrev: 'SOL',
            price: 14.291,
        change: 0.54
        },
    ]
    return (
        <div className='flex items-end justify-between mx-8 my-8 gap-4'>
            <Coin />
            <Coin />
            <Coin />
            <Coin />
        </div>
    )
}

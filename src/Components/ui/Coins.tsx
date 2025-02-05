import { useContext, useEffect, useState } from 'react'
import { Coin } from './coin'
import { coinType } from '@/Api/types'
import { coinContext } from '@/contextes/coinContext.ts'


export const Coins = () => {
    const callApi = useContext(coinContext)
    const [coins, setCoins] = useState<coinType[]>([]);
    const colors = ["orange", '#03E1FF', "pink", "yallow"]

    useEffect(() => {
        (async () => {
            const data = await callApi.getSpecificCoins(['bitcoin', 'solana', 'uniswap', 'official-trump']);
            const updatedCoins = data.map((coin, index) => ({
                ...coin,
                color: colors[index % colors.length], // Assign color in a loop
            }));
            setCoins(updatedCoins);
            console.log(coins)
        })()
    }, []);


    return (
        <div className='flex  justify-between flex-wrap my-4 lg:gap-2 lg:flex-nowrap '>
            {coins.map((item) => (
                <Coin key={item.id} {...item} />
            ))}
        </div>
    )
}

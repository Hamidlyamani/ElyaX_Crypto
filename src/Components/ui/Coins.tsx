import { useContext, useEffect, useState } from 'react'
import { Coin } from './coin'
import { coinType } from '@/Api/types'
import { coinContext } from '@/contextes/coinContext.ts'


export const Coins = () => {
    const callApi = useContext(coinContext )
    const [coins, setCoins] = useState<coinType[]>([]);
  

    useEffect(() => {
        (async () => {
            const data = await callApi.getSpecificCoins(['bitcoin', 'solana', 'shiba-inu', 'official-trump']);
            setCoins(data);
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

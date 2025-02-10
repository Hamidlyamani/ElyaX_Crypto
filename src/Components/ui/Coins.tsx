
import { Coin } from './coin'
import { useCoinData } from '@/contextes/coinDataContext'

const colors = ["orange", 'gray', "#0074e0", "#00e0e0"]
const coinsselected = ['bitcoin', 'ethereum', 'fasttoken', 'solana']

export const Coins = () => {

    const { coins, chartData } = useCoinData();

    const selectedCoinsWithColor = coins
        .filter((coin) => coinsselected.includes(coin.id)) // Filter based on coinsselected
        .map((coin, index) => ({
            ...coin, // Copy the coin data
            color: colors[index % colors.length], // Assign color
            chart: chartData[coin.id] || [] // Add the chart data for each coin
        }));

    console.log(selectedCoinsWithColor);
    return (
        <div className='flex  justify-between flex-wrap my-4 lg:gap-2 lg:flex-nowrap '>
            {selectedCoinsWithColor.map((item) => (
                <Coin key={item.id} {...item} />
            ))}
        </div>
    )
}

import filter from '@/assets/imgs/icons/button.png'
import dollar from '@/assets/imgs/icons/dollar-circle.png'
import ChartUi from './ui/chartui'
import TimeSelector from './ui/TimeSelector'
import { useEffect, useState } from 'react'
import { chartdata, Chartinfo } from '@/Api/types'
import { useCoinData } from '@/contextes/coinDataContext'
import { CoinApi } from '@/Api/CoinApi'
import { toast } from 'react-toastify'

interface chartProps {
    idcoin?: string; // Optional promise
}
export const ChartCoin: React.FC<chartProps> = ({ idcoin }) => {
    const { coins, chartData } = useCoinData();
    let chartResults: chartdata[] = [];

    const [chartinfo, setChartinfo] = useState<Chartinfo>({
        coinId: idcoin ? idcoin : "bitcoin",
        chart: chartData.bitcoin,
        vs_currency: "usd",
        time: 0.0416667, // Default time
        color: "#f7931a",
        strok: "#77ED91",
    });


    let thiscoins = coins.find(item => item.id === (idcoin ? idcoin : "bitcoin"));
    if (idcoin !== undefined) {
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const data = await CoinApi.getMarketChart(idcoin, "usd", chartinfo.time);
                    chartResults = formatChartData(data.prices);
                    setChartinfo({ ...chartinfo, chart: { ...chartinfo.chart, prices: chartResults } });
                } catch (err) {
                    console.error("Error fetching coins:", err);
                    setChartinfo({ ...chartinfo, chart: { ...chartinfo.chart, prices: [] } });
                    toast.error("Too many requests! Try again in a bit. ⏳", {
                        autoClose: 6000,
                        position: 'top-right',
                    });
                }
            }
            fetchData();
        }, [idcoin]);
    }











    const handleTimeChange = async (time: number) => {
        setChartinfo((prev) => ({ ...prev, time }));
        try {
            const data = await CoinApi.getMarketChart('bitcoin', "usd", time);
            chartResults = formatChartData(data.prices)
            setChartinfo((prev) => ({
                ...prev,
                chart: { ...prev.chart, prices: chartResults },
            }));
        } catch (err) {
            console.error("Error fetching coins:", err);
            setChartinfo((prev) => ({
                ...prev,
                chart: { ...prev.chart, prices: [] },
            }));
            toast.error("Too many requests! Try again in a bit. ⏳", {
                autoClose: 6000,
                position: 'top-right',
            });
        }
    };
    const handleCurrencyChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        setChartinfo((prev) => ({ ...prev, vs_currency: event.target.value }));
        setChartinfo({ ...chartinfo, vs_currency: event.target.value }); // Ensure immediate update
        try {
            const data = await CoinApi.getMarketChart('bitcoin', event.target.value, chartinfo.time);
            chartResults = formatChartData(data.prices)
            setChartinfo({ ...chartinfo, chart: { ...chartinfo.chart, prices: chartResults } });
        } catch (err) {
            console.error("Error fetching coins:", err);
            setChartinfo({ ...chartinfo, chart: { ...chartinfo.chart, prices: [] } });
            toast.error("Too many requests! Try again in a bit. ⏳", {
                autoClose: 6000,
                position: 'top-right',
            });
        }
    };

    const formatChartData = (data: [number, number][]): chartdata[] => {
        return data.map(([timestamp, value]) => ({
            time:
                chartinfo.time <= 1
                    ? new Date(timestamp).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
                    : new Date(timestamp).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
            price: Number(value),
        }));
    };

    return (
        <div className={`w-full ${idcoin === undefined ? 'lg:w-3/4' : "lg:w-full"}  bg-gray-10 dark:bg-black_coin rounded-3xl`}>
            {idcoin === undefined ? <div className="charthader flex justify-between items-center p-4 px-4 lg:px-8 border-b-2 border-gray-200 dark:border-gray-900 " >
                <h4 className='font-L_semiBold text-h4'>Analytics</h4>
                <div className="flex gap-6 items-center">
                    <button><img src={filter} alt="" /></button>
                    <div className="flex items-center gap-1 user_item border-[1px] border-gray-700 rounded-md p-1">
                        <img src={dollar} alt="" />
                        <div>
                            <select id="countries" value={chartinfo.vs_currency} onChange={handleCurrencyChange} className="block text-black bg-transparent dark:text-white outline-0 dark:placeholder-gray ">
                                <option defaultValue='true' value="usd" className='p-4 m-4 border-0 dark:bg-sidebar outline-0 focus:bg-gray'>USD</option>
                                <option value="eur" className='p-4 m-4 border-0 dark:bg-sidebar outline-0'>EURO</option>
                                <option value="rub" className='p-4 m-4 border-0 dark:bg-sidebar outline-0'>RUB</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
                : ''}
            <div className="content p-2 px-4 lg:px-8">
                <div className="flex justify-between items-start">
                    <div className="left">
                        <select id="countries" value={chartinfo.vs_currency} onChange={handleCurrencyChange} className="block text-gray-700 b-b-small bg-transparent font-L_light dark:text-gray-500 w-32 outline-0 dark:placeholder-gray-900 ">
                            <option defaultValue='true' value="usd" className='p-4 m-4 border-0 dark:bg-sidebar outline-0 focus:bg-gray'>{thiscoins.name}/USD</option>
                            <option value="eur" className='p-4 m-4 border-0 dark:bg-sidebar outline-0'>{thiscoins.name}/EURO</option>
                            <option value="rub" className='p-4 m-4 border-0 dark:bg-sidebar outline-0'>{thiscoins.name}/RUB</option>
                        </select>
                        <h6 className="text-h2-m font-L_medium">$ {thiscoins.current_price}</h6>
                    </div>
                    <TimeSelector activeTime={chartinfo.time} onTimeChange={handleTimeChange} />
                </div>
                <div className="chart lg:py-6 pt-4 h-[200px] md:h-[300px]">
                    <ChartUi chartinfo={chartinfo} />
                </div>
            </div>
        </div>
    )
}

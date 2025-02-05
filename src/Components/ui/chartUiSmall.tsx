
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {  CardContent } from "@/Components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/Components/ui/chart"
import { useContext, useEffect, useState } from "react"
import { coinContext } from "@/contextes/coinContext"
import { Chartinfo } from "@/Api/types"
// const chartData = [
//     { month: "January",  mobile: 80 },
//     { month: "February", mobile: 200 },
//     { month: "March", mobile: 120 },
//     { month: "April",  mobile: 190 },
//     { month: "May",  mobile: 130 },
//     { month: "June", mobile: 140 },
// ]

// const chartConfig = {
//     mobile: {
//         label: "Mobile",
//         color: "hsl(var(--chart-2))",
//     },
// } satisfies ChartConfig

const ChartUiSmall: React.FC<{ chartinfo: Chartinfo }> = ({ chartinfo }) => {
    

    const callApi = useContext(coinContext)
    const [chartcoinsSmall, setChartCoinsSmall] = useState([]);

    const chartConfigsmall = {
        price: {
            label: "USD",
        },
    } satisfies ChartConfig
    useEffect(() => {
        (async () => {
              const data = await callApi.getMarketChart(chartinfo.coinId, chartinfo.vs_currency, chartinfo.time);

            const chartData = data.prices.map(([timestamp, price]) => ({
                time: chartinfo.time <= 1
                    ? new Date(timestamp).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
                    : new Date(timestamp).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
                price: Number(price)
            }));

            setChartCoinsSmall(chartData);
        })();
    }, [chartinfo]);
    const minPrice = chartcoinsSmall.length > 0 ? Math.min(...chartcoinsSmall.map(d => d.price.toFixed(2))) : 0;
    const maxPrice = chartcoinsSmall.length > 0 ? Math.max(...chartcoinsSmall.map(d => d.price.toFixed(2))) : 100; 
   
    return (
       <>
            <CardContent>
                <ChartContainer config={chartConfigsmall}>
                    <AreaChart
                        accessibilityLayer
                        data={chartcoinsSmall}
                        margin={{
                            left: 40,
                            right: 0,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                       
                        <YAxis
                            type="number"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            allowDataOverflow={true}
                            domain={[
                                parseFloat((minPrice - minPrice * 0.01).toFixed(2)),
                                parseFloat((maxPrice + maxPrice * 0.01).toFixed(2))
                            ]}
                            tick={false}  // Hides the ticks
                            hide={true}  // Hides the Y-axis completely
                        />

                        <ChartTooltip cursor={true} content={<ChartTooltipContent />} />
                        <defs>
                            <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">

                                <stop

                                    offset="5%"

                                    stopColor={chartinfo.color}

                                    stopOpacity={0.8}

                                />

                                <stop

                                    offset="95%"

                                    stopColor={chartinfo.color}

                                    stopOpacity={0.1}

                                />

                            </linearGradient>

                        </defs>
                        <Area
                            dataKey="price"
                            type="natural"
                            fill="url(#fillMobile)"
                            fillOpacity={0.4}
                            stroke={chartinfo.strok}
                            stackId="a"
                        />
                     
                    </AreaChart>
                </ChartContainer>
            </CardContent>
       </>
    )
}
export default ChartUiSmall 
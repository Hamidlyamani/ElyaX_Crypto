
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {  CardContent } from "@/Components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/Components/ui/chart"
import { useContext, useEffect, useState } from "react"
import { coinContext } from "@/contextes/coinContext"


export function ChartUi() {
    const callApi = useContext(coinContext)
    const [chartcoins, setChartCoins] = useState([]);
    const chartinfo = {
        coinId: "ripple",
        vs_currency: "usd",
        time: 1,
        time_trensfer:"hour",
        color: "hsl(var(--chart-2))",
}

    const chartConfig = {
        price: {
            label: "USD",
            color: chartinfo.color,
        },
    } satisfies ChartConfig

    useEffect(() => {
        (async () => {
            const data = await callApi.getMarketChart(chartinfo.coinId,chartinfo.vs_currency,chartinfo.time);


            const chartData = data.prices.map(([timestamp, price]) => ({

                time: new Date(timestamp).toISOString(), // Convert timestamp to ISO string

                price: Number(price.toFixed(2))
            }));
            setChartCoins(chartData);    
        })()
    }, []); 
    const minPrice = chartcoins.length > 0 ? Math.min(...chartcoins.map(d => d.price)) : 0;
    const maxPrice = chartcoins.length > 0 ? Math.max(...chartcoins.map(d => d.price)) : 100; // Set a default max if no data

    return (
       <>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartcoins}
                        margin={{
                            left: 10,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="price"  // ✅ Correspond maintenant à votre structure de données
                            tickLine={false}
                            axisLine={false}
                            tickMargin={2}
                            tickFormatter={(value) => new Date(value).toLocaleTimeString()}
                        />
                        <YAxis
                            type="number"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            allowDataOverflow={true}
                            domain={[minPrice - minPrice * 0.01, maxPrice + maxPrice * 0.01]}
                        />
                        <ChartTooltip cursor={true} content={<ChartTooltipContent />} />
                        <defs>
                            <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">

                                <stop

                                    offset="0.1%"

                                    stopColor="var(--color-mobile)"

                                    stopOpacity={1}

                                />

                                <stop

                                    offset="100%"

                                    stopColor="var(--color-mobile)"

                                    stopOpacity={0.1}

                                />

                            </linearGradient>

                        </defs>
                        <Area
                            dataKey="price"
                            type="natural"
                            fill="url(#fillMobile)"
                            fillOpacity={0.3}
                            stroke="green"
                            stackId="a"
                        />
                     
                    </AreaChart>
                </ChartContainer>
            </CardContent>
       </>
    )
}
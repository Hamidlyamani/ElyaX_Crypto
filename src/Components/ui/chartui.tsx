
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { CardContent } from "@/Components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/Components/ui/chart"
import { Chartinfo } from "@/Api/types"


const ChartUi: React.FC<{ chartinfo: Chartinfo }> = ({ chartinfo }) => {


    const minPrice = chartinfo.chart.prices.length > 0 ? Math.min(...chartinfo.chart.prices.map(d => Number(d.price.toFixed(2)))) : 0;
    const maxPrice = chartinfo.chart.prices.length > 0 ? Math.max(...chartinfo.chart.prices.map(d => Number(d.price.toFixed(2)))) : 100; // Set a default max if no data
    const chartConfig = {
        price: {
            label: "price",
            color: chartinfo.color,
        },
    } satisfies ChartConfig


    return (
        <>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartinfo.chart.prices}
                        margin={{
                            left: 5,
                            right: 0,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="time"
                            tickLine={true}
                            axisLine={false}
                            tickMargin={8}
                        />
                        <YAxis
                            type="number"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            allowDataOverflow={true}
                            domain={[
                                parseFloat((minPrice > 1 ? minPrice - minPrice * 0.01 : minPrice).toFixed(2)),
                                parseFloat((maxPrice > 1 ? maxPrice + maxPrice * 0.01 : maxPrice).toFixed(2))
                            ]}
                        />
                        <ChartTooltip cursor={true} content={<ChartTooltipContent />} />
                        <defs>
                            <linearGradient id={`fill-${chartinfo.coinId}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0.1%" stopColor={chartinfo.color} stopOpacity={0.8} />
                                <stop offset="100%" stopColor={chartinfo.color} stopOpacity={0.1} />
                            </linearGradient>

                        </defs>
                        <Area
                            dataKey="price"
                            type="natural"
                            fill={`url(#fill-${chartinfo.coinId})`}
                            fillOpacity={0.3}
                            stroke={chartinfo.strok}
                            stackId="a"
                        />

                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </>
    )
}

export default ChartUi
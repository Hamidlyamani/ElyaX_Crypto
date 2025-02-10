import { Area, AreaChart, CartesianGrid, YAxis } from "recharts"

import { CardContent } from "@/Components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/Components/ui/chart"

import { Chartinfo } from "@/Api/types"


const ChartUiSmall: React.FC<{ chartinfo: Chartinfo }> = ({ chartinfo }) => {


    const chartConfigsmall = {
        price: {
            label: "USD",
            color: chartinfo.color,
        },
    } satisfies ChartConfig

    const minPrice = chartinfo.chart.length > 0 ? Math.min(...chartinfo.chart.map(d => d.price)) : 0;
    const maxPrice = chartinfo.chart.length > 0 ? Math.max(...chartinfo.chart.map(d => d.price)) : 100;

    return (
        <>
            <CardContent>
                <ChartContainer config={chartConfigsmall}>
                    <AreaChart
                        accessibilityLayer
                        data={chartinfo.chart}
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
                            tick={false}
                            hide={true}
                        />

                        <ChartTooltip cursor={true} content={<ChartTooltipContent />} />
                        <defs>
                            <linearGradient id={`fill-${chartinfo.coinId}-1`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0.1%" stopColor={chartinfo.color} stopOpacity={0.8} />
                                <stop offset="100%" stopColor={chartinfo.color} stopOpacity={0.1} />
                            </linearGradient>

                        </defs>
                        <Area
                            dataKey="price"
                            type="natural"
                            fill={`url(#fill-${chartinfo.coinId}-1)`}
                            fillOpacity={0.4}
                            stroke="rgb(119 237 145)"
                            stackId="a"
                        />

                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </>
    )
}
export default ChartUiSmall 
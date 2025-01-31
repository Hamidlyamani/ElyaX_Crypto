import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {  CardContent, CardFooter, } from "@/Components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/Components/ui/chart"
const chartData = [
    { month: "January",  mobile: 80 },
    { month: "February", mobile: 200 },
    { month: "March", mobile: 120 },
    { month: "April",  mobile: 190 },
    { month: "May",  mobile: 130 },
    { month: "June", mobile: 140 },
]

const chartConfig = {
    mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export function ChartUi() {
    return (
       <>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: -10,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <YAxis

                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickCount={5}

                        />
                        <ChartTooltip cursor={true} content={<ChartTooltipContent />} />
                        <defs>
                            <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">

                                <stop

                                    offset="5%"

                                    stopColor="var(--color-mobile)"

                                    stopOpacity={0.8}

                                />

                                <stop

                                    offset="95%"

                                    stopColor="var(--color-mobile)"

                                    stopOpacity={0.1}

                                />

                            </linearGradient>

                        </defs>
                        <Area
                            dataKey="mobile"
                            type="natural"
                            fill="url(#fillMobile)"
                            fillOpacity={0.4}
                            stroke="var(--color-mobile)"
                            stackId="a"
                        />
                     
                    </AreaChart>
                </ChartContainer>
            </CardContent>
       </>
    )
}
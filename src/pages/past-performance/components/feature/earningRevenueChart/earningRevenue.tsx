import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "./chart"


interface EarningRevenueProps {
    activeButtons: string[];
}

function EarningRevenue({ activeButtons }: EarningRevenueProps) {

    const chartData = [
        { year: "2014", earnings: 10000000000000, cashfromops: 5000000000000, revenue: 2000000000000, freecashflow: -1000000000000 },
        { year: "2015", earnings: 9500000000000, cashfromops: 4600000000000, revenue: 1800000000000, freecashflow: -1200000000000 },
        { year: "2016", earnings: 14000000000000, cashfromops: 4900000000000, revenue: 8900000000000, freecashflow: -800000000000 },
        { year: "2017", earnings: 1000000000000, cashfromops: -5100000000000, revenue: 2100000000000, freecashflow: -1500000000000 },
        { year: "2018", earnings: 10200000000000, cashfromops: 4700000000000, revenue: -2050000000000, freecashflow: -1000000000000 },
        { year: "2019", earnings: 9800000000000, cashfromops: 5300000000000, revenue: 2000000000000, freecashflow: -500000000000 },
        { year: "2020", earnings: 10800000000000, cashfromops: 5100000000000, revenue: 1950000000000, freecashflow: 7000000000000 },
        { year: "2021", earnings: -9900000000000, cashfromops: 5400000000000, revenue: 2200000000000, freecashflow: -300000000000 },
        { year: "2022", earnings: 10700000000000, cashfromops: 5300000000000, revenue: -2250000000000, freecashflow: -600000000000 },
        { year: "2023", earnings: -10100000000000, cashfromops: 5500000000000, revenue: 2400000000000, freecashflow: -400000000000 },
        { year: "2024", earnings: 11000000000000, cashfromops: -5600000000000, revenue: 2350000000000, freecashflow: 200000000000 },
    ];


    const chartConfig = {
        revenue: {
            label: "Revenue",
            color: "#4592FF",
        },
        earnings: {
            label: "Earnings",
            color: "#3BBDC4",
        },
        freecashflow: {
            label: "Freecashflow",
            color: "#CD2834",
        },
        cashfromops: {
            label: "Cashfromops",
            color: "#F9CD3D",
        },
    } satisfies ChartConfig

    const CustomCursor = ({ points }: any) => {
        return (
            <g>
                {points.map(({ x, y }: any) => (
                    <line key={x} x1={x} y1={0} x2={x} y2={y} stroke='black' strokeWidth={2} />
                ))}
            </g>
        );
    };

    return (
        <ChartContainer config={chartConfig} className="w-full h-[300px]">
            <AreaChart
                accessibilityLayer
                data={chartData}

            >
                <CartesianGrid vertical={false} />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(value) => `Rp${Math.floor(value / 1000000000000)}t`}
                />
                <ChartTooltip
                    cursorStyle={{ stroke: 'black', strokeWidth: 2 }}
                    content={<ChartTooltipContent className='' hideIndicator />}
                />

                {activeButtons.includes('earnings') && (
                    <Area
                        dataKey="earnings"
                        type="monotone"
                        fill="var(--color-earnings)"
                        fillOpacity={0.5}
                        stroke="var(--color-earnings)"
                        strokeWidth={2}
                        activeDot={{
                            r: 4,
                            fill: 'white',
                            stroke: 'var(--color-earnings)',
                            strokeWidth: 2,
                        }}
                    />
                )}

                {activeButtons.includes('cashfromops') && (
                    <Area
                        dataKey="cashfromops"
                        type="monotone"
                        fill="var(--color-cashfromops)"
                        fillOpacity={0.5}
                        stroke="var(--color-cashfromops)"
                        strokeWidth={2}
                        activeDot={{
                            r: 4,
                            fill: 'white',
                            stroke: 'var(--color-cashfromops)',
                            strokeWidth: 2,
                        }}
                    />
                )}

                {activeButtons.includes('revenue') && (
                    <Area
                        dataKey="revenue"
                        type="monotone"
                        fill="var(--color-revenue)"
                        fillOpacity={0.5}
                        stroke="var(--color-revenue)"
                        strokeWidth={2}
                        activeDot={{
                            r: 4,
                            fill: 'white',
                            stroke: 'var(--color-revenue)',
                            strokeWidth: 2,
                        }}
                    />
                )}

                {activeButtons.includes('freecashflow') && (
                    <Area
                        dataKey="freecashflow"
                        type="monotone"
                        fill="var(--color-freecashflow)"
                        fillOpacity={0.5}
                        stroke="var(--color-freecashflow)"
                        strokeWidth={2}
                        activeDot={{
                            r: 4,
                            fill: 'white',
                            stroke: 'var(--color-freecashflow)',
                            strokeWidth: 2,
                        }}
                    />
                )}

            </AreaChart>
        </ChartContainer>
    )
}

export default EarningRevenue
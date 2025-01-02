import React from 'react'
import { XAxis, YAxis, CartesianGrid, Area, AreaChart, Rectangle } from 'recharts';
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/past-performance/earning-and-revenue-history-chart"
import { EarningAndRevenueHistoryProps } from './type';
import { CustomXAxisProps as CustomXAxisProps } from './type';

function EarningAndRevenueHistory({ activeButtons }: EarningAndRevenueHistoryProps) {

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

    const earningsValues = chartData.map(item => item.earnings);
    const dataMin = Math.min(...earningsValues);
    const dataMax = Math.max(...earningsValues);

    const CustomXAxis = (props: any) => {
        const { index, x, y, payload } = props;

        return (
            <g>
                <g>
                    <text x={x} y={y} dx={-15} dy={25} className='poppins-regular'>
                        {payload.value}
                    </text>
                </g>
            </g>
        );
    };

    const CustomYAxis = ({ x, y, stroke, payload, value }: CustomXAxisProps) => {
        const convertTwoDigit = Math.floor(Number(payload?.value) / 1000000000000);

        if (payload?.value === 0 || payload?.value === dataMax || Number(payload?.value) * -1 === dataMax) {
            return (
                <g transform={`translate(${x},${y})`}>
                    <text
                        x={0}
                        y={0}
                        dy={16}
                        textAnchor="end"
                        fill="#666"
                        className='poppins-regular '
                    >
                        {convertTwoDigit < 0
                            ? `-Rp${Math.abs(convertTwoDigit)}${convertTwoDigit !== 0 ? 't' : ''}`
                            : `Rp${convertTwoDigit !== 0 ? `${convertTwoDigit}t` : convertTwoDigit}`}
                    </text>
                </g>
            );
        }

        return null;
    };

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div style={{ backgroundColor: 'white', border: '1px solid #ccc', padding: '10px' }}>
                    <h4>{label}</h4>
                    <p>{`Value: ${payload[0].value}`}</p>
                </div>
            );
        }
        return null;
    };

    const CustomCursor = ({ stroke, pointerEvents, height, points, className, }: any) => {
        const { x, y } = points[0];
        console.log('pointerEvents', pointerEvents)
        return (
            <a className='cursor-pointer'>
                <Rectangle
                    x={x}
                    y={y}
                    fillOpacity={0}
                    strokeWidth={2}
                    stroke={'black'}
                    // pointerEvents={'pointer'}
                    width={1}
                    height={height}
                    points={points}
                    // className={className}
                    type="linear"

                />
            </a>
        );
    };

    return (
        <ChartContainer config={chartConfig} className="w-full h-[300px]">
            <AreaChart
                data={chartData}
            >
                <CartesianGrid
                    vertical={false}
                    stroke='#F2F4F7'
                />

                <ChartTooltip
                    content={<ChartTooltipContent hideIndicator />}
                    trigger='hover'
                    cursor={<CustomCursor className='cursor-pointer' />}
                />

                <XAxis
                    dataKey="year"
                    tick={CustomXAxis}
                    axisLine={false}
                    tickLine={false}

                />
                <YAxis
                    tick={<CustomYAxis />}
                    axisLine={false}
                    tickLine={false}

                />

                {activeButtons?.includes('earnings') && (
                    <Area
                        dataKey="earnings"
                        type="monotone"
                        fill="var(--color-earnings)"
                        fillOpacity={0.2}
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
                {activeButtons?.includes('cashfromops') && (
                    <Area
                        dataKey="cashfromops"
                        type="monotone"
                        fill="var(--color-cashfromops)"
                        fillOpacity={0.2}
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
                {activeButtons?.includes('revenue') && (
                    <Area
                        dataKey="revenue"
                        type="monotone"
                        fill="var(--color-revenue)"
                        fillOpacity={0.2}
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
                {activeButtons?.includes('freecashflow') && (
                    <Area
                        dataKey="freecashflow"
                        type="monotone"
                        fill="var(--color-freecashflow)"
                        fillOpacity={0.2}
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

export default EarningAndRevenueHistory
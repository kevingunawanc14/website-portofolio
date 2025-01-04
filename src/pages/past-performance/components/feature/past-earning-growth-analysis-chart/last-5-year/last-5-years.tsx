import React from 'react'
import { Bar, BarChart, CartesianGrid, Cell, LabelList, XAxis, Label } from "recharts"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/past-performance/past-earning-vs-growth-analysis-chart"
import PastEarningGrowthAnalysisChartProps from '../past-5-year/type';
// import { earningsData } from '../past-5-year/data';

const colorMapping: any = {
    "Company": "#1DC286",
    "Market": "#E2361C",
    "Industry": "#F9CD3D",
};

const chartConfig = {
    value: {
        label: "Value",
    },
} satisfies ChartConfig;

const formatValue = (value: number) => {
    const absValue = Math.abs(value);
    const formatted = (absValue).toFixed(1) + "%";
    return value < 0 ? `-${formatted}` : formatted;
};

const CustomTick = ({ x, y, payload }: any) => {
    console.log('payload', payload)
    return (
        <text
            x={x}
            y={y}
            dy={10}
            textAnchor="middle"
            fill="black"
            className="poppins-regular"
        >
            {payload.value}
        </text>
    );
};

const CustomLabel = ({ x, y, value }: any) => {
    const add = value < 0 ? 12 : -2;
    const fillColor = value < 0 ? 'BLACK' : 'BLACK';
    return (
        <>
            <text
                x={x}
                y={y}
                dy={add}
                fill={fillColor}
                className='poppins-regular'
            >
                {formatValue(value)}
            </text>
        </>
    );
};

function PastEarningGrowthAnalysisChart({ company, industry, market }: PastEarningGrowthAnalysisChartProps) {

    const chartData = [
        { type: "Company", value: -42.1, key: "company" },
        { type: "Industry", value: -4.4, key: "industry" },
        { type: "Market", value: 1, key: "market" },
    ];

    return (
        <div>
            <ChartContainer config={chartConfig} className="w-full h-[500px]">
                <BarChart
                    accessibilityLayer
                    data={chartData}
                    barCategoryGap="0"
                    barGap={50}
                >
                    <CartesianGrid vertical={false} horizontal={false} />
                    <XAxis
                        dataKey="type"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tick={CustomTick}
                    />
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent />}
                    />
                    <Bar dataKey="value" radius={[5, 5, 0, 0]}>
                        {/* 
                        export type LabelPosition = 'top' | 'left' | 'right' | 'bottom' | 'inside' | 'outside' | 'insideLeft' | 'insideRight' | 'insideTop' | 'insideBottom' | 'insideTopLeft' | 'insideBottomLeft' | 'insideTopRight' | 'insideBottomRight' | 'insideStart' | 'insideEnd' | 'end' | 'center' | 'centerTop' | 'centerBottom' | 'middle' | {
                        */}
                        {/* <LabelList
                            dataKey="value"
                            position={'top'}
                            fill="#000"
                            formatter={formatValue}
                        /> */}
                        <LabelList
                            dataKey="value"
                            content={<CustomLabel />}
                        />
                        {chartData.map((item) => (
                            <Cell
                                key={item.type}
                                fill={colorMapping[item.type]}
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ChartContainer>
        </div>
    );
}

export default PastEarningGrowthAnalysisChart;
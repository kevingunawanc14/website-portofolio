import React from 'react'
import { Bar, BarChart, CartesianGrid, Cell, LabelList, XAxis, Label } from "recharts"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/charts/past-earning-vs-grwoth-analysis-chart"



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


interface PastFive {
    company: number;
    industry: number;
    market: number;
}

function PastFive({ company, industry, market }: PastFive) {

    const chartData = [
        { type: "Company", value: company, key: "company" },
        { type: "Industry", value: industry, key: "industry" },
        { type: "Market", value: market, key: "market" },
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

export default PastFive;
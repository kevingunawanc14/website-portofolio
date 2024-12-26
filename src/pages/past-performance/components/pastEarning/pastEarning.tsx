import React from 'react'
import { Bar, BarChart, CartesianGrid, Cell, LabelList, XAxis } from "recharts"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "./chart"



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
            textAnchor="middle"
            fill="black"
            className="poppins-regular"
        >
            {payload.value}
        </text>
    );
};

const CustomLabel = ({ x, y, value }: any) => {

    console.log('value', value)
    const dy = value < 0 ? -10 : 20;
    const fillColor = value < 0 ? 'red' : '#fff';

    return (

        <text x={x + 20} y={y + dy} textAnchor="center" fill={fillColor} className='poppins-regular'>
            {formatValue(value)}
        </text>
        // <text
        //     x={x}
        //     y={y}
        //     // dy={dy}
        //     textAnchor="middle"
        //     fill="#000"
        //     className='poppins-regular'
        // >
        //     {formatValue(value)}
        // </text>
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
                    // tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent />}
                    />
                    <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                        <LabelList
                            content={CustomLabel}
                        // dataKey="value"
                        // position={'insideTopLeft'}
                        // fill="#000"
                        // formatter={formatValue}
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
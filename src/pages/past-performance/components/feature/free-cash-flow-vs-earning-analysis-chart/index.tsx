import React from 'react'
import { Bar, BarChart, CartesianGrid, Cell, Label, LabelList, XAxis } from "recharts"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/charts/free-cash-flow-vs-earning-analysis-chart"

const chartData = [
    { type: "Revenue", value: 3, key: "revenue" },
    { type: "Earnings", value: -3, key: "earnings" },
    { type: "Depreciation", value: 1, key: "depreciationandamortization" },
    { type: "Net working Capital", value: 2, key: "networkingcapital" },
    { type: "Free Cash Flow", value: 1, key: "freecashflow" },
];

const colorMapping: any = {
    "Revenue": "#1DC286",
    "Earnings": "#4592FF",
    "Depreciation": "#E2361C",
    "Net working Capital": "#9832C7",
    "Free Cash Flow": "#F9CD3D",
};

const chartConfig = {
    value: {
        label: "Value",
    },
} satisfies ChartConfig;

const formatValue = (value: number) => {
    const absValue = Math.abs(value);
    const formatted = (absValue).toFixed(1) + "Jt";
    return value < 0 ? `-${formatted}` : formatted;
};

const CustomLabel = ({ x, y, value }: any) => {
    // console.log('value', value)
    const add = value < 0 ? -5 : 15;

    return (
        /*

        fill="white"
        black
        */
        <text x={x} y={y} dy={add} dx={5} textAnchor="center" fill="white" className='poppins-regular'
        >
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

interface CashEarning {
    activeButtons: string[];
}

function CashFlowEarning({ activeButtons }: CashEarning) {

    console.log('activeButtons', activeButtons);

    const filteredChartData = chartData.filter(data =>
        activeButtons?.includes(data.key)
    );

    console.log('Filtered Chart Data', filteredChartData);

    return (
        <div>
            <ChartContainer config={chartConfig} className="w-full h-[500px]">
                <BarChart
                    accessibilityLayer
                    data={filteredChartData}
                    barCategoryGap={0}
                >
                    <CartesianGrid vertical={false} />
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent />}
                    />

                    <Bar dataKey="value" radius={[5, 5, 0, 0]}     >
                        <LabelList
                            content={CustomLabel}
                        />
                        {filteredChartData.map((item) => (
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

export default CashFlowEarning;



// dataKey="value"
// position={'insideTopLeft'}
// fill="#000"
// formatter={formatValue}
// y={10}

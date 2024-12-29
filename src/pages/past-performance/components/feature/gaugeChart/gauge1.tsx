/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';

interface DataItem {
    name: string;
    value: number;
    color?: string;
}

const data: DataItem[] = [
    { name: 'Group A', value: 1 },
    { name: 'Group B', value: 1 },
    { name: 'Group C', value: 1 },
    { name: 'Group D', value: 1 },
    { name: 'Group E', value: 1 },
    { name: 'Group F', value: 1 },
];


const RADIAN = Math.PI / 180;

interface NeedleProps {
    value: number;      // The value representing the needle position (could be angle or percentage)
    data: any;          // The data object that the needle may interact with (e.g., chart or graph data)
    cx: number;         // The x-coordinate of the center of the needle (center of the circular dial or gauge)
    cy: number;         // The y-coordinate of the center of the needle (center of the circular dial or gauge)
    iR: number;         // Inner radius (for a circular gauge, for example)
    oR: number;         // Outer radius (for a circular gauge, for example)
    color: string;      // Color of the needle (could be hex, rgb, or predefined color)
}

const needle = ({ value, data, cx, cy, iR, oR, color }: NeedleProps) => {
    let total = 0;
    data.forEach((v: DataItem) => {
        total += v.value;
    });
    const ang = 180.0 * (1 - value / total);
    const length = (iR + 2 * oR) / 3;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 5;
    const x0 = cx + 5;
    const y0 = cy + 5;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    return [
        <circle key="needle-circle" cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
        <path key="needle-path" d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="none" fill={color} />
    ];
};

interface RenderCustomizedLabelProps {
    cx: number;          // Center x coordinate
    cy: number;          // Center y coordinate
    midAngle: number;    // Angle at the middle of the label
    innerRadius: number; // Inner radius of the doughnut/pie
    outerRadius: number; // Outer radius of the doughnut/pie
    percent: number;     // Percentage value
    index: number;       // Index of the current label/item
}

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: RenderCustomizedLabelProps) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    console.log('cx', cx, 'cy', cy)

    let x = cx + radius * Math.cos(-midAngle * RADIAN);
    let y = cy + radius * Math.sin(-midAngle * RADIAN);
    console.log('x', Math.ceil(x), 'y', Math.ceil(y))

    let value = [0, 10.0, 20.0, 30.0, 40.0]
    let valueProcentage = 0

    if (Math.ceil(x) == 242 && Math.ceil(y) == 246) {
        x += 24;
        y -= 30;
        valueProcentage = 40
    } else if (Math.ceil(x) == 243 && Math.ceil(y) == 168) {
        x += -10;
        y -= 38;
        valueProcentage = 30
    } else if (Math.ceil(x) == 189 && Math.ceil(y) == 113) {
        x += -60;
        y -= 20;
        valueProcentage = 20
    } else if (Math.ceil(x) == 112 && Math.ceil(y) == 113) {
        x += -80;
        y += 15;
        valueProcentage = 10
    } else if (Math.ceil(x) == 58 && Math.ceil(y) == 168) {
        x += -45;
        y += 45;
        valueProcentage = 0
    } else if (Math.ceil(x) == 59 && Math.ceil(y) == 246) {
        return
    }

    console.log('x after', x, 'y after', y)


    return (
        // 246 245
        // 270 210
        <text x={x} y={y} fill="gray" textAnchor={''} dominantBaseline="" className='poppins-regular'>
            {valueProcentage !== 0 ? `${(valueProcentage).toFixed(1)}%` : `${valueProcentage}%`}
        </text>
    );
};


export default function Example() {
    console.log('datu', data)
    const [chartData, setChartData] = useState<DataItem[]>([]);

    useEffect(() => {
        // Any logic to fetch or compute data can go here
        setChartData(data);  // or your actual data fetching logic
    }, []);


    const cx = 150;
    const cy = 200;
    const iR = 90;
    const oR = 110;
    const valueNeedl1 = 170;
    const valueNeedl2 = 100;

    const gradients = (
        <defs>
            <linearGradient id="gradientA" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1DC286" stopOpacity={1} />
                <stop offset="100%" stopColor="#0E5C40" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="gradientB" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#7AC056" />
                <stop offset="100%" stopColor="#1DC286" />
            </linearGradient>
            <linearGradient id="gradientC" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#EBAA1B" />
                <stop offset="100%" stopColor="#8EBC49" />
            </linearGradient>
            <linearGradient id="gradientD" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#EBAA1B" />
                <stop offset="100%" stopColor="#F37B35" />
            </linearGradient>
            <linearGradient id="gradientE" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F39035" />
                <stop offset="100%" stopColor="#F34035" />
            </linearGradient>
            <linearGradient id="gradientF" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F34035" stopOpacity={1} />
                <stop offset="100%" stopColor="#8D251F  " stopOpacity={1} />
            </linearGradient>
        </defs>
    );

    return (
        <PieChart width={400} height={500}>
            {gradients}
            <Pie
                dataKey="value"
                startAngle={-45}
                endAngle={225}
                data={chartData}
                cx={cx - 5}
                cy={cy}
                innerRadius={iR}
                outerRadius={oR}
                paddingAngle={3}
                fill="url(#colorUv)"
                stroke="none"
                labelLine={false}
                label={renderCustomizedLabel}
            >
                {chartData.map((entry, index) => (
                    <>
                        <Cell
                            key={`cell-${index}`}
                            fill={`url(#gradient${String.fromCharCode(65 + index)})`} // Dynamically reference the gradient ID
                        // stroke="white"  
                        // strokeWidth={0}   
                        // strokeDasharray="5,5"
                        />
                    </>
                ))}
            </Pie>

            <Pie
                dataKey="value"
                startAngle={180}
                endAngle={120}
                // 180-70 + 10 = 120
                data={chartData}
                cx={cx - 5}
                cy={cy}
                innerRadius={70}
                outerRadius={85}
                fill="rgba(0, 109, 227, 0.3)"
                stroke="none"
                labelLine={false}
            >
            </Pie>

            <Pie
                dataKey="value"
                startAngle={180}
                endAngle={60}
                data={chartData}
                cx={cx - 5}
                cy={cy}
                innerRadius={50}
                outerRadius={65}
                fill="rgba(113, 231, 214, 0.3)"
                stroke="none"
                labelLine={false}
            >

            </Pie>


            {needle({ value: valueNeedl1, data, cx: cx - 5, cy, iR, oR, color: '#006DE3' })}
            {needle({ value: valueNeedl2, data, cx: cx - 5, cy, iR, oR: oR * 0.6, color: '#71E7D6' })}


            <circle cx={cx} cy={cy} r={10} fill="#E6EBEF" stroke="#A4A8AA" strokeWidth="2" />
            <text
                x={cx}
                y={cy + 30}
                textAnchor="middle"
                className='poppins-medium text-[14px]'
                fill="#91979E">
                RoE
            </text>

            <text
                x={cx}
                y={cy + 45}
                textAnchor="middle"
                className='poppins-medium text-[10px]'
                fill="#0166D2">
                Company : 4.8%
            </text>

            <text
                x={cx}
                y={cy + 60}
                textAnchor="middle"
                className='poppins-medium text-[10px]'
                fill="#6CDCCC">
                Industry : 15.0%
            </text>

        </PieChart>
    );
}

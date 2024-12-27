/* eslint-disable no-shadow */
import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';

interface DataItem {
    name: string;
    value: number;
    color?: string;
}

const RADIAN = Math.PI / 180;
const data: DataItem[] = [
    { name: 'Group A', value: 1 },
    { name: 'Group B', value: 1 },
    { name: 'Group C', value: 1 },
    { name: 'Group D', value: 1 },
    { name: 'Group E', value: 1 },
    { name: 'Group F', value: 1 },
];

const cx = 150;
const cy = 200;
const iR = 90;
const oR = 110;
const valueNeedl1 = 170;
const valueNeedl2 = 100;


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

    const x = cx + radius * Math.cos(-midAngle * RADIAN) + 24;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) - 35;
    console.log('x', x, 'y', y)

    return (
        // 246 245
        // 270 210
        <text x={x} y={y} fill="gray" textAnchor={''} dominantBaseline="">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};


export default class Example extends PureComponent {
    render() {
        return (
            <PieChart width={400} height={500}>
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
                <Pie
                    dataKey="value"
                    startAngle={-45}
                    endAngle={225}
                    data={data}
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
                    {data.map((entry, index) => (
                        <>
                            {/* <Label
                                key={`label-${index}`}
                                value={`${entry.name}: ${entry.value}`}
                                position="outside" // or "outside" based on your preference
                            /> */}
                            <Cell
                                key={`cell-${index}`}
                                fill={`url(#gradient${String.fromCharCode(65 + index)})`} // Dynamically reference the gradient ID
                            // stroke="white"  
                            // strokeWidth={0}   
                            // strokeDasharray="5,5"
                            />
                        </>
                    ))}

                    {/* {data.map((entry, index) => (
                      
                    ))} */}
                </Pie>
                <Pie
                    dataKey="value"
                    startAngle={180}
                    endAngle={120}
                    data={data}
                    cx={cx - 5}
                    cy={cy}
                    innerRadius={70}
                    outerRadius={80}
                    fill="rgba(0, 109, 227, 0.3)"
                    stroke="none"
                    labelLine={false}
                // label={renderCustomizedLabel}
                >

                </Pie>
                <Pie
                    dataKey="value"
                    startAngle={180}
                    endAngle={60}
                    data={data}
                    cx={cx - 5}
                    cy={cy}
                    innerRadius={50}
                    outerRadius={60}
                    fill="rgba(113, 231, 214, 0.3)"
                    stroke="none"
                    labelLine={false}
                // label={renderCustomizedLabel}
                >

                </Pie>
                {/* <circle cx={cx} cy={cy} r={80} fill="none" stroke="#A4A8AA" strokeWidth="2" /> */}

                {needle({ value: valueNeedl1, data, cx: cx - 5, cy, iR, oR, color: '#006DE3' })}
                {needle({ value: valueNeedl2, data, cx: cx - 5, cy, iR, oR: oR * 0.6, color: '#71E7D6' })}

                {/* Red dot in the center of the pie chart */}

                <circle cx={cx} cy={cy} r={10} fill="#E6EBEF" stroke="#A4A8AA" strokeWidth="2" />
                <text
                    x={cx}
                    y={cy + 30}
                    textAnchor="middle"
                    className='poppins-medium text-[14px]'
                    fill="#91979E">
                    Text 1
                </text>

                <text
                    x={cx}
                    y={cy + 45}
                    textAnchor="middle"
                    className='poppins-medium text-[10px]'
                    fill="#0166D2">
                    Text 2
                </text>

                <text
                    x={cx}
                    y={cy + 60}
                    textAnchor="middle"
                    className='poppins-medium text-[10px]'
                    fill="#6CDCCC">
                    Text 3
                </text>



            </PieChart>
        );
    }
}

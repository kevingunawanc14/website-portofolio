import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Label, Tooltip } from 'recharts';


interface DataItem {
    name: string;
    value: number;
    color?: string;
}

const data: DataItem[] = [
    { name: 'Group A', value: 10 },
    { name: 'Group B', value: 10 },
    { name: 'Group C', value: 10 },
    { name: 'Group D', value: 10 },
    { name: 'Group E', value: 10 },
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
    // console.log('cx', cx, 'cy', cy)

    let x = cx + radius * Math.cos(-midAngle * RADIAN);
    let y = cy + radius * Math.sin(-midAngle * RADIAN);
    console.log('xe', Math.ceil(x), 'ye', Math.ceil(y))

    let value = [0, 10.0, 20.0, 30.0, 40.0]
    let valueProcentage = 0

    if (Math.ceil(x) == 275 && Math.ceil(y) == 163) {
        x += 20;
        y -= 45;
        valueProcentage = 30
    } else if (Math.ceil(x) == 262 && Math.ceil(y) == 72) {
        x += -30;
        y -= 40;
        valueProcentage = 20
    } else if (Math.ceil(x) == 180 && Math.ceil(y) == 30) {
        x += -80;
        y -= 0;
        valueProcentage = 10
    } else if (Math.ceil(x) == 99 && Math.ceil(y) == 72) {
        x += -50;
        y += 40;
        valueProcentage = 0
    } else if (Math.ceil(x) == 86 && Math.ceil(y) == 163) {
        return
    }

    // console.log('x after', x, 'y after', y)


    return (
        // 246 245
        // 270 210
        <text x={x} y={y} fill="gray" textAnchor={''} dominantBaseline="" className='poppins-regular text-[12px]'>
            {valueProcentage !== 0 ? `${(valueProcentage).toFixed(1)}%` : `${valueProcentage}%`}
        </text>
    );
};

interface GaugeChart1Props {
    companyValue: number;
    industryValue: number;
}

export default function Example({ companyValue, industryValue }: GaugeChart1Props) {
    console.log('datu', data)
    const [chartData, setChartData] = useState<DataItem[]>([]);

    useEffect(() => {
        // Any logic to fetch or compute data can go here
        setChartData(data);  // or your actual data fetching logic
    }, []);


    const cx = 110;
    const cy = 110;
    const iR = 90;
    const oR = 110;
    const valueNeedl1 = 170;
    const valueNeedl2 = 200;

    const gradients = (
        <defs>

            <linearGradient id="gradientO" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1DC286" stopOpacity={1} />
                <stop offset="100%" stopColor="#0E5C40" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="gradientP" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#EBAA1B" />
                <stop offset="100%" stopColor="#8EBC49" />
            </linearGradient>
            <linearGradient id="gradientQ" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#EBAA1B" />
                <stop offset="100%" stopColor="#F37B35" />
            </linearGradient>
            <linearGradient id="gradientR" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F39035" />
                <stop offset="100%" stopColor="#F34035" />
            </linearGradient>
            <linearGradient id="gradientS" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F34035" stopOpacity={1} />
                <stop offset="100%" stopColor="#8D251F  " stopOpacity={1} />
            </linearGradient>

        </defs>
    );

    const width = 350
    const height = 250

    const [active, setActive] = useState(false);
    const [tooltipContent, setTooltipContent] = useState(null);

    const handleMouseEnter = (content: any) => {
        setActive(true);
        setTooltipContent(content);
    };

    const handleMouseLeave = () => {
        setActive(false);
        setTooltipContent(null);
    };

    return (
        <>
            <PieChart width={width} height={height} className=''>
                {gradients}
                <Pie
                    dataKey="value"
                    startAngle={-45}
                    endAngle={225}
                    data={chartData}
                    cx={width / 2}
                    cy={height / 2}
                    innerRadius={iR}
                    outerRadius={oR}
                    paddingAngle={2}
                    fill="url(#colorUv)"
                    stroke="none"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    cornerRadius={5}
                    
                >
                    {chartData.map((entry, index) => (
                        <>
                            <Cell
                                key={`cell-${index}`}
                                fill={`url(#gradient${String.fromCharCode(79 + index)})`}
                            // stroke="red"
                            // strokeWidth={1}
                            // strokeDasharray="5,5"
                            />
                        </>
                    ))}
                </Pie>

                <Pie
                    dataKey="value"
                    startAngle={180}
                    endAngle={180 - (companyValue * 5.67)}
                    data={chartData}
                    cx={width / 2}
                    cy={height / 2}
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
                    endAngle={180 - (industryValue * 5.67)}
                    data={chartData}
                    cx={width / 2}
                    cy={height / 2}
                    innerRadius={50}
                    outerRadius={65}
                    fill="rgba(113, 231, 214, 0.3)"
                    stroke="none"
                    labelLine={false}
                >

                </Pie>

                {/* 

                    // needle formula
                    x = 10% 
                    x = 1%

                    47  = 30%
                    1.56 = 1%

                    // pie formula
                    180-x = 30%
                    180-170 = 30%

                    170 = 30%
                    5.66 = 1%

                
                */}

                {needle({ value: industryValue * 1.57, data, cx: width / 2, cy: height / 2, iR, oR: oR * 0.8, color: '#71E7D6' })}

                {needle({ value: companyValue * 1.57, data, cx: width / 2, cy: height / 2, iR, oR, color: '#006DE3' })}

                <Tooltip
                    content={<CustomTooltip content={tooltipContent} />}
                    active={active}
                    position={{ x: width / 2 - 90, y: height / 2 - 74 }} // Position tooltip
                    cursor={false} // Prevent default cursor behavior
                />
                <svg width={width} height={height}>
                    <circle
                        cx={width / 2 + 5}
                        cy={height / 2 + 2}
                        r={7}
                        fill="#E6EBEF"
                        stroke="#A4A8AA"
                        strokeWidth="2"
                        onMouseEnter={() => handleMouseEnter("Your Tooltip Content")} // Set your content here
                        onMouseLeave={handleMouseLeave}
                    >
                    </circle>
                </svg>
                <text
                    x={width / 2}
                    y={height / 2 + 50}
                    textAnchor="middle"
                    className='poppins-medium text-[14px]'
                    fill="#91979E">
                    ROCE
                </text>

                <text
                    x={width / 2}
                    y={height / 2 + 65}
                    textAnchor="middle"
                    className='poppins-medium text-[10px]'
                    fill="#0166D2">
                    Last Year : 7.0%
                </text>

                <text
                    x={width / 2}
                    y={height / 2 + 80}
                    textAnchor="middle"
                    className='poppins-medium text-[10px]'
                    fill="#6CDCCC">
                    3 Years Ago : 12.4%
                </text>

            </PieChart>

        </>
    );
}

const CustomTooltip = ({ content }: any) => {
    return (
        <div className="bg-black text-white font-poppins regular p-2 rounded-lg shadow-lg w-[192px] ">
            <div className='p-[4px]'>
                <p className='poppins-regular text-[12px]'>ROCE</p>
                <div>
                    <div className='flex justify-between'>
                        <p className='poppins-medium text-[10px] text-[#0166D2]'>[user_company] Last Year</p>
                        <p className='poppins-medium text-[10px] text-[#0166D2]'>7.0%</p>
                    </div>
                    <div className='flex justify-between'>
                        <p className='poppins-medium text-[10px] text-[#6CDCCC]'>[industry] 3 Years Ago</p>
                        <p className='poppins-medium text-[10px] text-[#6CDCCC]'> 12.4%</p>
                    </div>
                </div>
                {/* Triangle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0 border-x-[8px] border-x-transparent border-t-[8px] border-t-black bottom-[-8px]"></div>
                {/* <p className='poppins-medium text-[10px] text-[#0166D2]'> : </p>
                <p className='poppins-medium text-[10px] text-[#6CDCCC]'>: </p> */}
            </div>

        </div>
    );
};

/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Label, Tooltip } from 'recharts';
import { Button } from "@/components/ui/button"
// import {
//     Tooltip,
//     TooltipContent,
//     TooltipProvider,
//     TooltipTrigger,
// } from "@/components/ui/tooltip"

interface DataItem {
    name: string;
    value: number;
    color?: string;
}

const data: DataItem[] = [
    { name: 'A', value: 10 },
    { name: 'B', value: 10 },
    { name: 'C', value: 10 },
    { name: 'D', value: 10 },
    { name: 'E', value: 10 },
    { name: 'F', value: 10 },
];

const dataTest: DataItem[] = [
    { name: 'A', value: 10 },
];

const gradients = (
    <defs>
        <linearGradient id="gradientA" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1DC286" />
            <stop offset="100%" stopColor="#0E5C40" />
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
            <stop offset="0%" stopColor="#F34035" />
            <stop offset="100%" stopColor="#8D251F  " />
        </linearGradient>
    </defs>
);

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
    // console.log('x', Math.ceil(x), 'y', Math.ceil(y))

    let value = [0, 10.0, 20.0, 30.0, 40.0]
    let valueProcentage = 0

    if (Math.ceil(x) == 272 && Math.ceil(y) == 170) {
        x += 24;
        y -= 30;
        valueProcentage = 40
    } else if (Math.ceil(x) == 273 && Math.ceil(y) == 93) {
        x += -10;
        y -= 38;
        valueProcentage = 30
    } else if (Math.ceil(x) == 219 && Math.ceil(y) == 38) {
        x += -53;
        y -= 20;
        valueProcentage = 20
    } else if (Math.ceil(x) == 142 && Math.ceil(y) == 38) {
        x += -75;
        y += 15;
        valueProcentage = 10
    } else if (Math.ceil(x) == 88 && Math.ceil(y) == 93) {
        x += -40;
        y += 45;
        valueProcentage = 0
    } else if (Math.ceil(x) == 89 && Math.ceil(y) == 170) {
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

export default function GaugeChart1({ companyValue, industryValue }: GaugeChart1Props) {
    console.log('dataXXX', data)
    const [chartData, setChartData] = useState<DataItem[]>([]);
    const [chartDataTest, setChartDataTest] = useState<DataItem[]>([]);
    const [gradientsData, setGradients] = useState<JSX.Element | null>(null);

    useEffect(() => {
        setChartData(data);  
        setChartDataTest(dataTest); 

        setGradients(gradients)
    }, []);


    const cx = 110;
    const cy = 110;
    const iR = 90;
    const oR = 110;
    const valueNeedl1 = 170;
    const valueNeedl2 = 100;



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
    const roe = 5
    
    return (
        <>
            <div className='col-span-4 mt-[20px] translate-x-[-60px] sm:translate-x-[-0px]'>
                <PieChart width={width} height={height} className=''>
                    {gradientsData}
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
                        stroke="none"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        cornerRadius={5}
                    >
                        {chartData.map((entry, index) => (
                            <>
                                <Cell
                                    key={`cell-${index}`}
                                    fill={`url(#gradient${chartData[index].name})`}
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
                        endAngle={180 - (companyValue * 4.5)}
                        data={chartDataTest}
                        cx={width / 2}
                        cy={height / 2}
                        innerRadius={70}
                        outerRadius={85}
                        fill="rgba(0, 109, 227, 0.3)"
                        stroke="none"
                        cornerRadius={5}
                    >
                    </Pie>


                    {/* 
                    // paddingAngle={0}
                
                */}

                    <Pie
                        dataKey="value"
                        startAngle={180}
                        endAngle={180 - (industryValue * 4.5)}
                        data={chartDataTest}
                        cx={width / 2}
                        cy={height / 2}
                        innerRadius={50}
                        outerRadius={65}
                        fill="rgba(113, 231, 214, 0.3)"
                        stroke="none"
                        cornerRadius={5}
                    >

                    </Pie>

                    {/*
                // needle formula
                x = 40% 
                x = 1%

                60  = 40%
                1.5 = 1%

                // pie formula
                180-x = 30%
                180-135 = 30%

                135 = 30%
                4.5 = 1%
               
                */}

                    {needle({ value: (industryValue * 1.5), data, cx: width / 2, cy: height / 2, iR, oR: oR * 0.8, color: '#71E7D6' })}

                    {needle({ value: (companyValue * 1.5), data, cx: width / 2, cy: height / 2, iR, oR, color: '#006DE3' })}


                    <Tooltip
                        content={<CustomTooltip content={tooltipContent} />}
                        active={active}
                        position={{ x: width / 2 - 74, y: height / 2 - 74 }}
                        cursor={false}
                    />
                    <svg width={width} height={height}>
                        <circle
                            cx={width / 2 + 5}
                            cy={height / 2 + 2}
                            r={7}
                            fill="#E6EBEF"
                            stroke="#A4A8AA"
                            strokeWidth="2"
                            onMouseEnter={() => handleMouseEnter("Your Tooltip Content")}
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
                        RoE
                    </text>

                    <text
                        x={width / 2}
                        y={height / 2 + 65}
                        textAnchor="middle"
                        className='poppins-medium text-[10px]'
                        fill="#0166D2">
                        Company : 4.8%
                    </text>

                    <text
                        x={width / 2}
                        y={height / 2 + 80}
                        textAnchor="middle"
                        className='poppins-medium text-[10px]'
                        fill="#6CDCCC">
                        Industry : 15.0%
                    </text>

                </PieChart>

            </div>
            <div className='col-span-8 content-center translate-x-[40px]'>
                <div className='flex justify-start '>
                    {roe < 5 ? (
                        <>
                            <svg className='' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="12" fill="#FFE8E7" />
                                <g clipPath="url(#clip0_117_21969)">
                                    <path d="M14.0002 10.0002L10.0002 14.0002M10.0002 10.0002L14.0002 14.0002M18.6668 12.0002C18.6668 15.6821 15.6821 18.6668 12.0002 18.6668C8.31826 18.6668 5.3335 15.6821 5.3335 12.0002C5.3335 8.31826 8.31826 5.3335 12.0002 5.3335C15.6821 5.3335 18.6668 8.31826 18.6668 12.0002Z" stroke="#CB3A31" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_117_21969">
                                        <rect width="16" height="16" fill="white" transform="translate(4 4)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className='text-[#CB3A31] text-[16px] poppins-medium ms-[10px]'>
                                Low RoE
                            </p>
                        </>
                    ) : (
                        <>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="11" fill="#E2FCF2" />
                                <g clip-path="url(#clip0_117_22394)">
                                    <path d="M18.6666 11.3867V12.0001C18.6658 13.4377 18.2003 14.8365 17.3395 15.988C16.4787 17.1394 15.2688 17.9817 13.8902 18.3893C12.5115 18.797 11.0381 18.748 9.68957 18.2498C8.34104 17.7516 7.18969 16.8308 6.40723 15.6248C5.62476 14.4188 5.25311 12.9921 5.3477 11.5576C5.44229 10.1231 5.99806 8.75762 6.93211 7.66479C7.86615 6.57195 9.12844 5.81033 10.5307 5.4935C11.933 5.17668 13.4001 5.32163 14.7133 5.90674M18.6666 6.66674L11.9999 13.3401L9.99992 11.3401" stroke="#1DC286" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_117_22394">
                                        <rect width="16" height="16" fill="white" transform="translate(4 4)" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <p className='text-[#1DC286] text-[16px] poppins-medium ms-[10px]'>
                                High RoE
                            </p>
                        </>
                    )}
                </div>
                <p className='text-[#60646C] text-[14px] poppins-regular'>
                    [user company] Return on Equity ({roe}%) is considered {roe < 5 ? 'low' : 'high'}.
                </p>
            </div>
        </>
    );
}

const CustomTooltip = ({ content }: any) => {
    return (
        <div className="bg-black text-white font-poppins regular p-2 rounded-lg shadow-lg w-[158px] ">
            <div className='p-[4px]'>
                <p className='poppins-regular text-[12px]'>RoE</p>
                <div>
                    <div className='flex justify-between'>
                        <p className='poppins-medium text-[10px] text-[#0166D2]'>[user_company]</p>
                        <p className='poppins-medium text-[10px] text-[#0166D2]'>4.8%</p>
                    </div>
                    <div className='flex justify-between'>
                        <p className='poppins-medium text-[10px] text-[#6CDCCC]'>[industry]</p>
                        <p className='poppins-medium text-[10px] text-[#6CDCCC]'> 15.0%</p>
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

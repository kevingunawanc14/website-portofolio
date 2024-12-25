import React from 'react'
import { TrendingUp } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MailOpen } from "lucide-react"

// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceArea } from 'recharts';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';

import NavbarChart from './navbarchart';

function main() {

    const cardinal = curveCardinal.tension(0.2);

    const chartData = [
        { year: "2014", revenue: 7, earnings: 12, freecashflow: -3, cashfromops: 9 },
        { year: "2015", revenue: 9, earnings: 13, freecashflow: 0, cashfromops: 11 },
        { year: "2016", revenue: 8, earnings: 5, freecashflow: 2, cashfromops: 6 },
        { year: "2017", revenue: 10, earnings: 6, freecashflow: 3, cashfromops: 18 },
        { year: "2018", revenue: 12, earnings: 20, freecashflow: 4, cashfromops: 8 },
        { year: "2019", revenue: 11, earnings: 6, freecashflow: 3, cashfromops: 7 },
        { year: "2020", revenue: 9, earnings: 4, freecashflow: 1, cashfromops: 5 },
        { year: "2021", revenue: 10, earnings: 5, freecashflow: 2, cashfromops: 6 },
        { year: "2022", revenue: 14, earnings: 8, freecashflow: 5, cashfromops: 10 },
        { year: "2023", revenue: 16, earnings: -10, freecashflow: 6, cashfromops: 12 },
        { year: "2024", revenue: 15, earnings: 9, freecashflow: 5, cashfromops: 11 },
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

    return (
        <div className='my-[20px]'>
            <div className='bg-white border rounded-lg border-slate-300'>
                <div className='grid grid-cols-12  '>
                    <div className='col-span-2 pt-[16px] '>
                        <NavbarChart />
                    </div>
                    <div className='col-span-10'>
                        <div id='earnings' className='border-l border-b border-slate-300 p-[16px]'>
                            <p className='poppins-semibold text-[16px]'>Earnings and revenue history</p>
                            <p className='poppins-regular text-[14px] text-gray-500'>This chart show historical financial metrics, including Free Cash Flow (FCF), earnings, revenue, and cash from operations. It can reflect company’s <br />profitabillity and operation efficiency over time.</p>
                            <div className='pt-[20px]'>
                                <div>
                                    <ChartContainer config={chartConfig} className="w-full h-[240px]">
                                        <AreaChart
                                            accessibilityLayer
                                            data={chartData}
                                            margin={{
                                                left: 0,
                                                right: 0,
                                            }}
                                        >
                                            <CartesianGrid vertical={false} />
                                            <XAxis dataKey="year" />
                                            <YAxis />
                                            <ChartTooltip
                                                cursor={false}
                                                content={<ChartTooltipContent className='' hideIndicator />}

                                            />

                                            <Area
                                                dataKey="freecashflow"
                                                type="natural"
                                                fill="var(--color-freecashflow)"
                                                fillOpacity={0.4}
                                                stroke="var(--color-freecashflow)"
                                            />

                                            <Area
                                                dataKey="revenue"
                                                type="natural"
                                                fill="var(--color-revenue)"
                                                fillOpacity={0.4}
                                                stroke="var(--color-revenue)"
                                            />
                                            <Area
                                                dataKey="cashfromops"
                                                type="natural"
                                                fill="var(--color-cashfromops)"
                                                fillOpacity={0.4}
                                                stroke="var(--color-cashfromops)"
                                            />
                                            <Area
                                                dataKey="earnings"
                                                type="natural"
                                                fill="var(--color-earnings)"
                                                fillOpacity={0.4}
                                                stroke="var(--color-earnings)"
                                            />

                                        </AreaChart>
                                    </ChartContainer>


                                </div>
                            </div>




                            <div>
                                <div className='flex justify-center'>
                                    <Button className='rounded-[10px] rounded-r-none bg-white border-2 text-black poppins-medium text-[12px] hover:bg-gray-200 border-slate-300'>
                                        <svg width="13" height="12" viewBox="0 0 13 12" className='me-[7px]' fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" width="12" height="12" rx="6" fill="#3BBDC4" />
                                        </svg>
                                        Revenue
                                    </Button>
                                    <Button className='border-2 border-l-0 rounded-none bg-white  text-slate-400 poppins-regular text-[12px] hover:bg-gray-200 border-slate-300 '>
                                        <svg width="13" height="12" viewBox="0 0 13 12" className='me-[7px]' fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" width="12" height="12" rx="6" fill="#4592FF" />
                                        </svg>
                                        Earnings</Button>
                                    <Button className='border-2 border-x-0  rounded-none bg-white  text-slate-400 poppins-regular text-[12px] hover:bg-gray-200 border-slate-300'>
                                        <svg width="13" height="12" viewBox="0 0 13 12" className='me-[7px]' fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" width="12" height="12" rx="6" fill="#BE0815" />
                                        </svg>
                                        Free Cash Flow</Button>
                                    <Button className='rounded-[10px] rounded-l-none bg-white border-2 text-slate-400 poppins-regular text-[12px] hover:bg-gray-200 border-slate-300'>
                                        <svg width="13" height="12" viewBox="0 0 13 12" className='me-[7px]' fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" width="12" height="12" rx="6" fill="#F9CD3D" />
                                        </svg>
                                        Cash From Op</Button>
                                </div>
                            </div>
                        </div>

                        <div id='free' className='border-l border-b border-slate-300 p-[16px]'>
                            <p className='poppins-semibold text-[16px]'>Earnings and revenue history</p>
                            <p className='poppins-regular text-[14px] text-gray-500'>This chart show historical financial metrics, including Free Cash Flow (FCF), earnings, revenue, and cash from operations. It can reflect company’s profitabillity and operation efficiency over time.</p>
                            <div>


                            </div>


                            <div>
                                <div className='flex justify-center'>
                                    <Button className='rounded-[10px] rounded-r-none bg-white border-2 text-black poppins-medium text-[12px] hover:bg-gray-200 border-slate-300'>
                                        <svg width="13" height="12" viewBox="0 0 13 12" className='me-[7px]' fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" width="12" height="12" rx="6" fill="#3BBDC4" />
                                        </svg>
                                        Revenue
                                    </Button>
                                    <Button className='border-2 border-l-0 rounded-none bg-white  text-slate-400 poppins-regular text-[12px] hover:bg-gray-200 border-slate-300 '>
                                        <svg width="13" height="12" viewBox="0 0 13 12" className='me-[7px]' fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" width="12" height="12" rx="6" fill="#4592FF" />
                                        </svg>
                                        Earnings</Button>
                                    <Button className='border-2 border-x-0  rounded-none bg-white  text-slate-400 poppins-regular text-[12px] hover:bg-gray-200 border-slate-300'>
                                        <svg width="13" height="12" viewBox="0 0 13 12" className='me-[7px]' fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" width="12" height="12" rx="6" fill="#BE0815" />
                                        </svg>
                                        Free Cash Flow</Button>
                                    <Button className='rounded-[10px] rounded-l-none bg-white border-2 text-slate-400 poppins-regular text-[12px] hover:bg-gray-200 border-slate-300'>
                                        <svg width="13" height="12" viewBox="0 0 13 12" className='me-[7px]' fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" width="12" height="12" rx="6" fill="#F9CD3D" />
                                        </svg>
                                        Cash From Op</Button>
                                </div>
                            </div>
                        </div>

                        <div id='past' className='border-l border-b border-slate-300 p-[16px]'>
                            <p className='poppins-semibold text-[16px]'>Earnings and revenue history</p>
                            <p className='poppins-regular text-[14px] text-gray-500'>This chart show historical financial metrics, including Free Cash Flow (FCF), earnings, revenue, and cash from operations. It can reflect company’s profitabillity and operation efficiency over time.</p>
                            <div>


                            </div>


                            <div>
                                <div className='flex justify-center'>
                                    <Button className='rounded-[10px] rounded-r-none bg-white border-2 text-black poppins-medium text-[12px] hover:bg-gray-200 border-slate-300'>
                                        <svg width="13" height="12" viewBox="0 0 13 12" className='me-[7px]' fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" width="12" height="12" rx="6" fill="#3BBDC4" />
                                        </svg>
                                        Revenue
                                    </Button>
                                    <Button className='border-2 border-l-0 rounded-none bg-white  text-slate-400 poppins-regular text-[12px] hover:bg-gray-200 border-slate-300 '>
                                        <svg width="13" height="12" viewBox="0 0 13 12" className='me-[7px]' fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" width="12" height="12" rx="6" fill="#4592FF" />
                                        </svg>
                                        Earnings</Button>
                                    <Button className='border-2 border-x-0  rounded-none bg-white  text-slate-400 poppins-regular text-[12px] hover:bg-gray-200 border-slate-300'>
                                        <svg width="13" height="12" viewBox="0 0 13 12" className='me-[7px]' fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" width="12" height="12" rx="6" fill="#BE0815" />
                                        </svg>
                                        Free Cash Flow</Button>
                                    <Button className='rounded-[10px] rounded-l-none bg-white border-2 text-slate-400 poppins-regular text-[12px] hover:bg-gray-200 border-slate-300'>
                                        <svg width="13" height="12" viewBox="0 0 13 12" className='me-[7px]' fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" width="12" height="12" rx="6" fill="#F9CD3D" />
                                        </svg>
                                        Cash From Op</Button>
                                </div>
                            </div>
                        </div>

                        <div id='equity' className='border-l border-b border-slate-300 p-[16px]'>
                            <p className='poppins-semibold text-[16px]'>Earnings and revenue history</p>
                            <p className='poppins-regular text-[14px] text-gray-500'>This chart show historical financial metrics, including Free Cash Flow (FCF), earnings, revenue, and cash from operations. It can reflect company’s profitabillity and operation efficiency over time.</p>
                            <div>


                            </div>


                            <div>
                                <div className='flex justify-center'>
                                    <Button className='rounded-[10px] rounded-r-none bg-white border-2 text-black poppins-medium text-[12px] hover:bg-gray-200 border-slate-300'>
                                        <svg width="13" height="12" viewBox="0 0 13 12" className='me-[7px]' fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" width="12" height="12" rx="6" fill="#3BBDC4" />
                                        </svg>
                                        Revenue
                                    </Button>
                                    <Button className='border-2 border-l-0 rounded-none bg-white  text-slate-400 poppins-regular text-[12px] hover:bg-gray-200 border-slate-300 '>
                                        <svg width="13" height="12" viewBox="0 0 13 12" className='me-[7px]' fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" width="12" height="12" rx="6" fill="#4592FF" />
                                        </svg>
                                        Earnings</Button>
                                    <Button className='border-2 border-x-0  rounded-none bg-white  text-slate-400 poppins-regular text-[12px] hover:bg-gray-200 border-slate-300'>
                                        <svg width="13" height="12" viewBox="0 0 13 12" className='me-[7px]' fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" width="12" height="12" rx="6" fill="#BE0815" />
                                        </svg>
                                        Free Cash Flow</Button>
                                    <Button className='rounded-[10px] rounded-l-none bg-white border-2 text-slate-400 poppins-regular text-[12px] hover:bg-gray-200 border-slate-300'>
                                        <svg width="13" height="12" viewBox="0 0 13 12" className='me-[7px]' fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" width="12" height="12" rx="6" fill="#F9CD3D" />
                                        </svg>
                                        Cash From Op</Button>
                                </div>
                            </div>
                        </div>

                        <div id='assets' className='border-l  border-slate-300 p-[16px]'>
                            <p className='poppins-semibold text-[16px]'>Earnings and revenue history</p>
                            <p className='poppins-regular text-[14px] text-gray-500'>This chart show historical financial metrics, including Free Cash Flow (FCF), earnings, revenue, and cash from operations. It can reflect company’s profitabillity and operation efficiency over time.</p>
                            <div>


                            </div>


                            <div>
                                <div className='flex justify-center'>
                                    <Button className='rounded-[10px] rounded-r-none bg-white border-2 text-black poppins-medium text-[12px] hover:bg-gray-200 border-slate-300'>
                                        <svg width="13" height="12" viewBox="0 0 13 12" className='me-[7px]' fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" width="12" height="12" rx="6" fill="#3BBDC4" />
                                        </svg>
                                        Revenue
                                    </Button>
                                    <Button className='border-2 border-l-0 rounded-none bg-white  text-slate-400 poppins-regular text-[12px] hover:bg-gray-200 border-slate-300 '>
                                        <svg width="13" height="12" viewBox="0 0 13 12" className='me-[7px]' fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" width="12" height="12" rx="6" fill="#4592FF" />
                                        </svg>
                                        Earnings</Button>
                                    <Button className='border-2 border-x-0  rounded-none bg-white  text-slate-400 poppins-regular text-[12px] hover:bg-gray-200 border-slate-300'>
                                        <svg width="13" height="12" viewBox="0 0 13 12" className='me-[7px]' fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" width="12" height="12" rx="6" fill="#BE0815" />
                                        </svg>
                                        Free Cash Flow</Button>
                                    <Button className='rounded-[10px] rounded-l-none bg-white border-2 text-slate-400 poppins-regular text-[12px] hover:bg-gray-200 border-slate-300'>
                                        <svg width="13" height="12" viewBox="0 0 13 12" className='me-[7px]' fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" width="12" height="12" rx="6" fill="#F9CD3D" />
                                        </svg>
                                        Cash From Op</Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default main
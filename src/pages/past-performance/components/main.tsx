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
import EarningRevenue from './earningRevenue';


function main() {

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
                            <p className='poppins-regular text-[14px] text-gray-500'>This chart show historical financial metrics, including Free Cash Flow (FCF), earnings, revenue, and cash from operations. It can reflect company’s profitabillity and operation efficiency over time.</p>
                            <div className='pt-[20px]'>
                                <EarningRevenue />
                            </div>
                            {/* <div>
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
                            </div> */}
                        </div>

                        <div id='free' className='border-l border-b border-slate-300 p-[16px]'>
                            <p className='poppins-semibold text-[16px]'>Free Cash Flow vs Earnings Analysis</p>
                            <p className='poppins-regular text-[14px] text-gray-500'>This chart breaks down and compares financial elements including Free Cash Flow (FCF), Depreciation & Amortization, Stock-Based Compensation, Net Working Capital, and other factors.
                            </p>
                            <p className='poppins-regular text-[14px] text-gray-500 mt-[10px]'>By analyzing these components, you get a clearer view of the company’s true cash efficiency, operational health, and ability to generate sustainable profits, beyond what earnings alone can show.</p>
                            <div>


                            </div>


                            <div>
                                <div className='flex justify-center'>

                                </div>
                            </div>
                        </div>

                        <div id='past' className='border-l border-b border-slate-300 p-[16px]'>
                            <p className='poppins-semibold text-[16px]'>Past Earnings Growth Analysis</p>
                            <p className='poppins-regular text-[14px] text-gray-500'>This section compares the company’s earnings growth with industry and market trends in past 5 years and last year. It highlights how the company’s performance stacks up against its peers and the broader market</p>
                            <div>


                            </div>


                            <div>
                                <div className='flex justify-center'>

                                </div>
                            </div>
                        </div>

                        <div id='equity' className='border-l border-b border-slate-300 p-[16px]'>
                            <p className='poppins-semibold text-[16px]'>Return on Equity</p>
                            <p className='poppins-regular text-[14px] text-gray-500'>This chart highlights the company’s Return on Equity (ROE), a profitability measure which shows how efficiently the company uses shareholders’ equity to generate profits.</p>
                            <div>


                            </div>


                            <div>
                                <div className='flex justify-center'>

                                </div>
                            </div>
                        </div>

                        <div id='assets' className='border-l  border-slate-300 p-[16px]'>
                            <div className='grid grid-cols-2'>
                                <div>
                                    <p className='poppins-semibold text-[16px]'>Return on Assets</p>
                                    <p className='poppins-regular text-[14px] text-gray-500'>Return on Assets (ROA) measures how well the company uses its total assets to generate profits</p>
                                    <div>


                                    </div>
                                </div>

                                <div>
                                    <p className='poppins-semibold text-[16px]'>Return on Capital Employed </p>
                                    <p className='poppins-regular text-[14px] text-gray-500'>Return on Capital Employed (ROCE) measures how well the company uses its capital to drive returns.</p>
                                    <div>


                                    </div>
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
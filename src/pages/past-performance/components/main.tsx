import React, { useState } from 'react';
import NavbarChart from './feature/navbarchart';
import EarningRevenueChart from './feature/earningRevenueChart/earningRevenue';
import ButtonGroupEarningRevenue from './feature/earningRevenueChart/buttonGroup';
import CashFlowEarningChart from './feature/cashEarningChart/cashEarning';
import ButtonGroupCashEarning from './feature/cashEarningChart/buttonGroup';
import PastChart from './feature/pastEarningChart/pastEarning';
// import GaugeChart from './feature/gaugeChart/gauge';
import GaugeChart1 from './feature/gaugeChart/gauge1';
import GaugeChart2 from './feature/gaugeChart/gauge2';
import GaugeChart3 from './feature/gaugeChart/gauge3';
import GaugeTest from './feature/gaugeChart/gaugeTest';

import TestArea from './feature/earningRevenueChart/testArea';







function Main() {
    // ui,feature,page component
    const [activeButtonsEarningsRevenue, setActiveButtonsEarningsRevenue] = useState<string[]>(['revenue', 'earnings', 'freecashflow']);

    const handleButtonEarningsRevenue = (label: string) => {
        setActiveButtonsEarningsRevenue(prev => {
            const index = prev.indexOf(label)
            if (index !== -1) {
                return prev.filter((_, i) => i !== index);
            } else {
                return [...prev, label];
            }
        }
        );
    };

    const [activeButtonsCashEarning, setActiveButtonsCashEarning] = useState<string[]>(['networkingcapital', 'freecashflow']);

    const handleButtonClickCashEarning = (label: string) => {
        setActiveButtonsCashEarning(prev => {
            const index = prev.indexOf(label)
            if (index !== -1) {
                return prev.filter((_, i) => i !== index);
            } else {
                return [...prev, label];
            }
        }
        );
    };

    const roe = 4.8;

    return (
        <div className='my-[20px]'>
            <div className='bg-white border rounded-lg border-slate-300'>
                <div className='grid grid-cols-12  '>
                    <div className='col-span-2 pt-[16px] '>
                        <NavbarChart />
                    </div>
                    <div className='col-span-10'>
                        <div id='earnings' className='border-l border-b border-slate-300 p-[16px]'>
                            <p className='poppins-semibold text-[16px] '>Earnings and revenue history</p>
                            <p className='poppins-regular text-[14px] text-gray-500'>This chart show historical financial metrics, including Free Cash Flow (FCF), earnings, revenue, and cash from operations. It can reflect company’s profitabillity and operation efficiency over time.</p>
                            <div className='pt-[20px]'>
                                <EarningRevenueChart activeButtons={activeButtonsEarningsRevenue} />
                            </div>
                            <div className='m-[20px]'>
                                <ButtonGroupEarningRevenue
                                    activeButtons={activeButtonsEarningsRevenue}
                                    onButtonClick={handleButtonEarningsRevenue}
                                />
                            </div>
                        </div>
                        <div id='free' className='border-l border-b border-slate-300 p-[16px]'>
                            <p className='poppins-semibold text-[16px]'>Free Cash Flow vs Earnings Analysis</p>
                            <p className='poppins-regular text-[14px] text-gray-500'>This chart breaks down and compares financial elements including Free Cash Flow (FCF), Depreciation & Amortization, Stock-Based Compensation, Net Working Capital, and other factors.
                            </p>
                            <p className='poppins-regular text-[14px] text-gray-500 mt-[10px]'>By analyzing these components, you get a clearer view of the company’s true cash efficiency, operational health, and ability to generate sustainable profits, beyond what earnings alone can show.</p>
                            <div className='pt-[20px]'>
                                <CashFlowEarningChart activeButtons={activeButtonsCashEarning} />
                            </div>
                            <div>
                                <div className='m-[20px]'>
                                    <ButtonGroupCashEarning
                                        activeButtons={activeButtonsCashEarning}
                                        onButtonClick={handleButtonClickCashEarning}
                                    />
                                </div>
                            </div>
                        </div>
                        <div id='past' className='border-l border-b border-slate-300 p-[16px]'>
                            <p className='poppins-semibold text-[16px]'>Past Earnings Growth Analysis</p>
                            <p className='poppins-regular text-[14px] text-gray-500'>This section compares the company’s earnings growth with industry and market trends in past 5 years and last year. It highlights how the company’s performance stacks up against its peers and the broader market</p>
                            <div className='grid grid-cols-2'>
                                <div>
                                    <p className='poppins-medium text-[14px] text-center mt-[30px]'>Past 5 Years Annual Earnings Growth</p>
                                    <div className='px-[100px]'>
                                        <PastChart company={-23} industry={8.9} market={16.6} />
                                    </div>
                                </div>

                                <div>
                                    <p className='poppins-medium text-[14px] text-center mt-[30px]'>Last 5 Years Earnings Growth Growth</p>
                                    <div className='px-[100px]'>
                                        <PastChart company={-42.1} industry={-4.4} market={1.1} />
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div id='equity' className='border-l border-b border-slate-300 p-[16px]'>
                            <p className='poppins-semibold text-[16px]'>Return on Equity</p>
                            <p className='poppins-regular text-[14px] text-gray-500'>This chart highlights the company’s Return on Equity (ROE), a profitability measure which shows how efficiently the company uses shareholders’ equity to generate profits.</p>
                            <div className='grid grid-cols-12'>
                                <div className='col-span-4 mt-[20px]'>
                                    {/* <GaugeTest /> */}
                                    <GaugeChart1 companyValue={4.8} industryValue={15.0} />
                                </div>
                                <div className='col-span-8 content-center'>
                                    <div className='flex justify-start'>
                                        {roe < 5 ? (
                                            <>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            </div>
                        </div>
                        <div id='assets' className='border-l  border-slate-300 p-[16px]'>
                            <div className='grid grid-cols-2'>
                                <div>
                                    <p className='poppins-semibold text-[16px]'>Return on Assets</p>
                                    <p className='poppins-regular text-[14px] text-gray-500'>Return on Assets (ROA) measures how well the company uses its total assets to generate profits</p>
                                    <div>
                                        <GaugeChart2 companyValue={4.1} industryValue={8.0} />
                                    </div>
                                </div>

                                <div>
                                    <p className='poppins-semibold text-[16px]'>Return on Capital Employed </p>
                                    <p className='poppins-regular text-[14px] text-gray-500'>Return on Capital Employed (ROCE) measures how well the company uses its capital to drive returns.</p>
                                    <div>
                                        <GaugeChart3 companyValue={7.0} industryValue={12.4} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Main
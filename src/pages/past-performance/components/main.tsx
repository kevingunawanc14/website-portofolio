import React, { useState } from 'react';
import NavbarChart from './navbarchart';
import EarningRevenue from './earningRevenue/earningRevenue';
import CashFlowEarning from './cashEarning/cashEarning';
import ButtonGroupEarningRevenue from './earningRevenue/buttonGroup';
import ButtonGroupCashEarning from './cashEarning/buttonGroup';


function Main() {
    // ui,feature,page component
    const [activeButtonsEarningsRevenue, setActiveButtonsEarningsRevenue] = useState<string[]>(['revenue', 'earnings', 'freecashflow']);

    const handleButtonEarningsRevenue = (label: string) => {
        setActiveButtonsEarningsRevenue(prev =>
            prev.includes(label)
                ? prev.filter(button => button !== label)
                : [...prev, label]
        );
    };

    const [activeButtonsCashEarning, setActiveButtonsCashEarning] = useState<string[]>(['networkingcapital', 'freecashflow']);

    const handleButtonClickCashEarning = (label: string) => {
        setActiveButtonsCashEarning(prev =>
            prev.includes(label)
                ? prev.filter(button => button !== label)
                : [...prev, label]
        );
    };

    return (
        <div className='my-[20px]'>
            <div className='bg-white border rounded-lg border-slate-300'>
                <div className='grid grid-cols-12  '>
                    <div className='col-span-2 pt-[16px] '>
                        <NavbarChart />
                    </div>
                    <div className='col-span-10'>
                        {/* chart 1 */}
                        <div id='earnings' className='border-l border-b border-slate-300 p-[16px]'>
                            <p className='poppins-semibold text-[16px]'>Earnings and revenue history</p>
                            <p className='poppins-regular text-[14px] text-gray-500'>This chart show historical financial metrics, including Free Cash Flow (FCF), earnings, revenue, and cash from operations. It can reflect company’s profitabillity and operation efficiency over time.</p>
                            <div className='pt-[20px]'>
                                <EarningRevenue activeButtons={activeButtonsEarningsRevenue} />
                            </div>
                            <div>
                                <ButtonGroupEarningRevenue
                                    activeButtons={activeButtonsEarningsRevenue}
                                    onButtonClick={handleButtonEarningsRevenue}
                                />
                            </div>
                        </div>
                        {/* chart 2 */}
                        <div id='free' className='border-l border-b border-slate-300 p-[16px]'>
                            <p className='poppins-semibold text-[16px]'>Free Cash Flow vs Earnings Analysis</p>
                            <p className='poppins-regular text-[14px] text-gray-500'>This chart breaks down and compares financial elements including Free Cash Flow (FCF), Depreciation & Amortization, Stock-Based Compensation, Net Working Capital, and other factors.
                            </p>
                            <p className='poppins-regular text-[14px] text-gray-500 mt-[10px]'>By analyzing these components, you get a clearer view of the company’s true cash efficiency, operational health, and ability to generate sustainable profits, beyond what earnings alone can show.</p>
                            <div className='pt-[20px]'>
                                <CashFlowEarning activeButtons={activeButtonsCashEarning} />
                            </div>
                            <div>
                                <div className='flex justify-center'>
                                    <ButtonGroupCashEarning
                                        activeButtons={activeButtonsCashEarning}
                                        onButtonClick={handleButtonClickCashEarning}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* chart 3 */}
                        <div id='past' className='border-l border-b border-slate-300 p-[16px]'>
                            <p className='poppins-semibold text-[16px]'>Past Earnings Growth Analysis</p>
                            <p className='poppins-regular text-[14px] text-gray-500'>This section compares the company’s earnings growth with industry and market trends in past 5 years and last year. It highlights how the company’s performance stacks up against its peers and the broader market</p>

                            <div className='grid grid-cols-2'>

                                <div>
                                    <p className='poppins-medium text-[14px] text-center mt-[30px]'>Past 5 Years Annual Earnings Growth</p>
                                    <div>
                                        char
                                    </div>
                                </div>

                                <div>

                                </div>


                            </div>


                            <div>
                                <div className='flex justify-center'>

                                </div>
                            </div>
                        </div>
                        {/* chart 4 */}
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
                        {/* chart 5 */}
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

export default Main
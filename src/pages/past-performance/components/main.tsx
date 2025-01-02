import React, { useState } from 'react';
import SmallSideBar from './feature/small-side-bar';
import EarningAndRevenueHistoryChart from './feature/earning-and-revenue-history-chart';
import ButtonGroupEarningAndRevenueHistory from './feature/earning-and-revenue-history-chart/button-group';
import FreeCashFlowVsEarningAnalysisChart from './feature/free-cash-flow-vs-earning-analysis-chart';
import ButtonGroupFreeCashFlowVsEarningAnalysis from './feature/free-cash-flow-vs-earning-analysis-chart/button-group';
import PastEarningGrowthAnalysisChart from './feature/past-earning-growth-analysis-chart';
import ReturnOnEquityChart from './feature/return-on-equity-chart';
import ReturnOnAssetsChart from './feature/return-on-assets-chart';
import ReturnOnCapitalEmployeedChart from './feature/return-on-capital-employeed-chart';

function Main() {

    const [activeButtonsEarningAndRevenueHistory, setActiveButtonsEarningAndRevenueHistory] = useState<string[]>(['revenue', 'earnings', 'freecashflow']);

    const handleButtonEarningsRevenue = (label: string) => {
        setActiveButtonsEarningAndRevenueHistory(prev => {
            const index = prev.indexOf(label)
            if (index !== -1) {
                return prev.filter((_, i) => i !== index);
            } else {
                return [...prev, label];
            }
        }
        );
    };

    const [activeButtonsFreeCashFlowVsEarningAnalysisChart, setActiveButtonsFreeCashFlowVsEarningAnalysisChart] = useState<string[]>(['networkingcapital', 'freecashflow']);

    const handleButtonClickCashEarning = (label: string) => {
        setActiveButtonsFreeCashFlowVsEarningAnalysisChart(prev => {
            const index = prev.indexOf(label)
            if (index !== -1) {
                return prev.filter((_, i) => i !== index);
            } else {
                return [...prev, label];
            }
        }
        );
    };

    return (
        <div className='my-[20px]'>
            <div className='bg-white border rounded-lg border-slate-300'>
                <div className='grid grid-cols-12  '>
                    <div className='col-span-2 pt-[16px] '>
                        <SmallSideBar />
                    </div>
                    <div className='col-span-10'>
                        <div id='earnings' className='border-l border-b border-slate-300 p-[16px]'>
                            <p className='poppins-semibold text-[16px] '>Earnings and revenue history</p>
                            <p className='poppins-regular text-[14px] text-gray-500'>This chart show historical financial metrics, including Free Cash Flow (FCF), earnings, revenue, and cash from operations. It can reflect company’s profitabillity and operation efficiency over time.</p>
                            <div className='pt-[20px]'>
                                <EarningAndRevenueHistoryChart activeButtons={activeButtonsEarningAndRevenueHistory} />
                            </div>
                            <div className='m-[20px]'>
                                <ButtonGroupEarningAndRevenueHistory
                                    activeButtons={activeButtonsEarningAndRevenueHistory}
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
                                <FreeCashFlowVsEarningAnalysisChart activeButtons={activeButtonsFreeCashFlowVsEarningAnalysisChart} />
                            </div>
                            <div>
                                <div className='m-[20px]'>
                                    <ButtonGroupFreeCashFlowVsEarningAnalysis
                                        activeButtons={activeButtonsFreeCashFlowVsEarningAnalysisChart}
                                        onButtonClick={handleButtonClickCashEarning}
                                    />
                                </div>
                            </div>
                        </div>
                        <div id='past' className='border-l border-b border-slate-300 p-[16px]'>
                            <p className='poppins-semibold text-[16px]'>Past Earnings Growth Analysis</p>
                            <p className='poppins-regular text-[14px] text-gray-500'>This section compares the company’s earnings growth with industry and market trends in past 5 years and last year. It highlights how the company’s performance stacks up against its peers and the broader market</p>
                            <div className='grid grid-cols-1 lg:grid-cols-2'>
                                <div>
                                    <p className='poppins-medium text-[14px] text-center mt-[30px]'>Past 5 Years Annual Earnings Growth</p>
                                    <div className='sm:px-[100px]'>
                                        <PastEarningGrowthAnalysisChart />
                                    </div>
                                </div>

                                <div>
                                    <p className='poppins-medium text-[14px] text-center mt-[30px]'>Last 5 Years Earnings Growth Growth</p>
                                    <div className='sm:px-[100px]'>
                                        <PastEarningGrowthAnalysisChart />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='equity' className='border-l border-b border-slate-300 p-[16px]'>
                            <p className='poppins-semibold text-[16px]'>Return on Equity</p>
                            <p className='poppins-regular text-[14px] text-gray-500'>This chart highlights the company’s Return on Equity (ROE), a profitability measure which shows how efficiently the company uses shareholders’ equity to generate profits.</p>
                            <div className='grid grid-cols-1 lg:grid-cols-12'>
                                <ReturnOnEquityChart companyValue={4.8} industryValue={15.0} />
                            </div>
                        </div>
                        <div id='assets' className='border-l  border-slate-300 p-[16px]'>
                            <div className='grid grid-cols-1 lg:grid-cols-2'>
                                <div>
                                    <p className='poppins-semibold text-[16px]'>Return on Assets</p>
                                    <p className='poppins-regular text-[14px] text-gray-500'>Return on Assets (ROA) measures how well the company uses its total assets to generate profits</p>
                                    <div className='translate-x-[-60px] sm:translate-x-[-0px]'>
                                        <ReturnOnAssetsChart companyValue={4.1} industryValue={8.0} />
                                    </div>
                                </div>

                                <div>
                                    <p className='poppins-semibold text-[16px]'>Return on Capital Employed </p>
                                    <p className='poppins-regular text-[14px] text-gray-500'>Return on Capital Employed (ROCE) measures how well the company uses its capital to drive returns.</p>
                                    <div className='translate-x-[-60px] sm:translate-x-[-0px]'>
                                        <ReturnOnCapitalEmployeedChart companyValue={7.0} industryValue={12.4} />
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
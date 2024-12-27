import React from 'react'
import Header from './components/ui/header';
import Title from './components/ui/title';
import Main from './components/main';
import Copyright from './components/ui/copyright';


function PastPeformance() {
    return (
        <div className='bg-slate-50'>
            <div className='px-[20px] py-4'>
                <Header
                    title={'Past Performance'}
                />
                <Title
                    title={'Past Performance'}
                    description={
                        <>
                            This report provides a clear summary of a company’s financial activities over a specific period and highlights how the company has performed
                            {/* Here&apos;s a projection of how user_company&apos;s earnings and revenue
                            <br />
                            could grow based on our analysis */}
                        </>
                    }
                    svg={
                        <svg width="141" height="123" viewBox="0 0 141 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_117_20055" maskUnits="userSpaceOnUse" x="33" y="58" width="19" height="73">
                                <path d="M33.6401 58.8047H51.3804V130.984H33.6401V58.8047Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_117_20055)">
                                <path d="M34.3584 76.0869V130.982H50.7054V59.718L34.3584 76.0869Z" fill="url(#paint0_linear_117_20055)" />
                            </g>
                            <mask id="mask1_117_20055" maskUnits="userSpaceOnUse" x="58" y="58" width="18" height="73">
                                <path d="M58.8506 58.8047H75.6572V130.984H58.8506V58.8047Z" fill="white" />
                            </mask>
                            <g mask="url(#mask1_117_20055)">
                                <path d="M58.8799 59.718V130.982H75.2269V76.0869L58.8799 59.718Z" fill="url(#paint1_linear_117_20055)" />
                            </g>
                            <mask id="mask2_117_20055" maskUnits="userSpaceOnUse" x="83" y="58" width="17" height="73">
                                <path d="M83.1265 58.8047H99.933V130.984H83.1265V58.8047Z" fill="white" />
                            </mask>
                            <g mask="url(#mask2_117_20055)">
                                <path d="M83.3999 76.0869V130.982H99.7469V59.718L83.3999 76.0869Z" fill="url(#paint2_linear_117_20055)" />
                            </g>
                            <mask id="mask3_117_20055" maskUnits="userSpaceOnUse" x="107" y="32" width="27" height="99">
                                <path d="M107.403 32.657H133.547V130.98H107.403V32.657Z" fill="white" />
                            </mask>
                            <g mask="url(#mask3_117_20055)">
                                <path d="M125.737 33.9642L107.92 51.5294V130.978H128.626C130.884 130.978 132.714 129.147 132.714 126.885V36.8565C132.714 33.2348 128.316 31.3783 125.737 33.9642Z" fill="url(#paint3_linear_117_20055)" />
                            </g>
                            <mask id="mask4_117_20055" maskUnits="userSpaceOnUse" x="0" y="84" width="28" height="47">
                                <path d="M0.960938 84.002H27.1045V130.971H0.960938V84.002Z" fill="white" />
                            </mask>
                            <g mask="url(#mask4_117_20055)">
                                <path d="M2.58693 107.624C1.821 108.39 1.39062 109.43 1.39062 110.517V126.886C1.39062 129.147 3.2179 130.978 5.4792 130.978H26.1847V84.2675L2.58693 107.624Z" fill="url(#paint4_linear_117_20055)" />
                            </g>
                            <mask id="mask5_117_20055" maskUnits="userSpaceOnUse" x="0" y="0" width="141" height="92">
                                <path d="M0.960938 0.0349121H140.961V91.4863H0.960938V0.0349121Z" fill="white" />
                            </mask>
                            <g mask="url(#mask5_117_20055)">
                                <path d="M136.799 0.0349121H120.452C118.195 0.0349121 116.367 1.86584 116.367 4.12714C116.367 6.38844 118.195 8.21936 120.452 8.21936H128.334L79.3112 57.0343L57.683 35.3732C56.0855 33.7757 53.4996 33.7757 51.9021 35.3732L2.58748 84.4799C0.993627 86.081 0.993627 88.6706 2.58748 90.2681C4.18498 91.8656 6.77088 91.8656 8.36838 90.2681L54.7907 44.0537L76.4226 65.7147C78.0201 67.3122 80.606 67.3122 82.2035 65.7147L132.714 15.4081V20.496C132.714 22.7573 134.542 24.5883 136.799 24.5883C139.057 24.5883 140.888 22.7573 140.888 20.496V4.12714C140.888 1.86584 139.057 0.0349121 136.799 0.0349121Z" fill="url(#paint5_linear_117_20055)" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_117_20055" x1="39.0319" y1="64.3043" x2="62.224" y2="71.7981" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#F9D075" />
                                    <stop offset="0.1826" stop-color="#F9C870" />
                                    <stop offset="0.459" stop-color="#FAB463" />
                                    <stop offset="0.7931" stop-color="#FA924E" />
                                    <stop offset="1" stop-color="#FB793F" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_117_20055" x1="63.5534" y1="64.3043" x2="86.7455" y2="71.7981" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#F9D075" />
                                    <stop offset="0.1826" stop-color="#F9C870" />
                                    <stop offset="0.459" stop-color="#FAB463" />
                                    <stop offset="0.7931" stop-color="#FA924E" />
                                    <stop offset="1" stop-color="#FB793F" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_117_20055" x1="88.0734" y1="64.3043" x2="111.265" y2="71.7981" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#F9D075" />
                                    <stop offset="0.1826" stop-color="#F9C870" />
                                    <stop offset="0.459" stop-color="#FAB463" />
                                    <stop offset="0.7931" stop-color="#FA924E" />
                                    <stop offset="1" stop-color="#FB793F" />
                                </linearGradient>
                                <linearGradient id="paint3_linear_117_20055" x1="115.009" y1="39.0797" x2="149.497" y2="51.3431" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#F9D075" />
                                    <stop offset="0.1826" stop-color="#F9C870" />
                                    <stop offset="0.459" stop-color="#FAB463" />
                                    <stop offset="0.7931" stop-color="#FA924E" />
                                    <stop offset="1" stop-color="#FB793F" />
                                </linearGradient>
                                <linearGradient id="paint4_linear_117_20055" x1="8.47909" y1="87.2736" x2="33.3974" y2="105.905" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#F9D075" />
                                    <stop offset="0.1826" stop-color="#F9C870" />
                                    <stop offset="0.459" stop-color="#FAB463" />
                                    <stop offset="0.7931" stop-color="#FA924E" />
                                    <stop offset="1" stop-color="#FB793F" />
                                </linearGradient>
                                <linearGradient id="paint5_linear_117_20055" x1="41.273" y1="5.91916" x2="80.1741" y2="89.5213" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#F9D075" />
                                    <stop offset="0.1826" stop-color="#F9C870" />
                                    <stop offset="0.459" stop-color="#FAB463" />
                                    <stop offset="0.7931" stop-color="#FA924E" />
                                    <stop offset="1" stop-color="#FB793F" />
                                </linearGradient>
                            </defs>
                        </svg>
                    }
                />
                <Main />
                <Copyright year={2024} />
            </div>
        </div>
    )
}

export default PastPeformance
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Footer from './components/footer';

function LoggedIn() {

    const [expanded, setExpanded] = useState([true, false, false, false, false]);

    const handleClick = (index: number) => {
        setExpanded((prevExpanded) => {
            const newExpanded = [...prevExpanded];
            newExpanded[index] = !newExpanded[index];
            return newExpanded;
        });
    };

    return (
        <div className='bg-slicing'>
            <div>
                <nav className="bg-white border-gray-200 dark:bg-gray-900">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="/images/slicing/iconMountain.png" className="w-[60px] h-[23px]" alt="Flowbite Logo" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap text-slicing-foreground poppins-bold">Loremipsum</span>
                        </a>

                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                            {/* <button type="button" className="hidden md:flex text-slicing-foreground bg-white border border-slicing-foreground focus:ring-4 focus:outline-none focus:ring-slicing font-medium rounded text-sm px-4 py-2 text-center me-3 poppins-bold ">Masuk</button>

                            <button type="button" className="hidden md:flex text-white bg-slicing-foreground border border-slicing-foreground  focus:ring-4 focus:outline-none focus:ring-slicing font-medium rounded text-sm px-4 py-2 text-center me-3 poppins-bold">Daftar</button> */}
                            <div className="hidden md:flex  ">
                                <div className="me-2 lg:me-6">
                                    <svg width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="45" height="45" rx="22.5" fill="white" />
                                        <rect x="0.5" y="0.5" width="45" height="45" rx="22.5" stroke="#156E3E" />
                                        <path d="M28 29C26.89 29 26 29.89 26 31C26 31.5304 26.2107 32.0391 26.5858 32.4142C26.9609 32.7893 27.4696 33 28 33C28.5304 33 29.0391 32.7893 29.4142 32.4142C29.7893 32.0391 30 31.5304 30 31C30 30.4696 29.7893 29.9609 29.4142 29.5858C29.0391 29.2107 28.5304 29 28 29ZM12 13V15H14L17.6 22.59L16.24 25.04C16.09 25.32 16 25.65 16 26C16 26.5304 16.2107 27.0391 16.5858 27.4142C16.9609 27.7893 17.4696 28 18 28H30V26H18.42C18.3537 26 18.2901 25.9737 18.2432 25.9268C18.1963 25.8799 18.17 25.8163 18.17 25.75C18.17 25.7 18.18 25.66 18.2 25.63L19.1 24H26.55C27.3 24 27.96 23.58 28.3 22.97L31.88 16.5C31.95 16.34 32 16.17 32 16C32 15.7348 31.8946 15.4804 31.7071 15.2929C31.5196 15.1054 31.2652 15 31 15H16.21L15.27 13M18 29C16.89 29 16 29.89 16 31C16 31.5304 16.2107 32.0391 16.5858 32.4142C16.9609 32.7893 17.4696 33 18 33C18.5304 33 19.0391 32.7893 19.4142 32.4142C19.7893 32.0391 20 31.5304 20 31C20 30.4696 19.7893 29.9609 19.4142 29.5858C19.0391 29.2107 18.5304 29 18 29Z" fill="#156E3E" />
                                    </svg>
                                </div>
                                <div className="grid content-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z" fill="#156E3E" />
                                    </svg>
                                </div>
                                <div className="grid content-center">
                                    <p className="text-[15px] text-slicing-foreground poppins-bold">Hi, Anton Raharjo</p>
                                </div>
                                <div className="grid content-center ms-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1_4204)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0599 16.06C12.7787 16.3409 12.3974 16.4987 11.9999 16.4987C11.6024 16.4987 11.2212 16.3409 10.9399 16.06L5.2819 10.404C5.00064 10.1226 4.84268 9.74102 4.84277 9.34316C4.84287 8.9453 5.00101 8.56377 5.2824 8.28251C5.56379 8.00125 5.9454 7.84329 6.34325 7.84338C6.74111 7.84348 7.12264 8.00162 7.4039 8.28301L11.9999 12.879L16.5959 8.28301C16.8787 8.00964 17.2575 7.85827 17.6508 7.8615C18.0441 7.86473 18.4204 8.0223 18.6986 8.30028C18.9769 8.57827 19.1348 8.95441 19.1384 9.34771C19.142 9.741 18.991 10.12 18.7179 10.403L13.0609 16.061L13.0599 16.06Z" fill="#156E3E" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_4204">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                            </div>



                            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
                        </div>

                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">

                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slicing-foreground  poppins-bold" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slicing-foreground  poppins-bold">Bantuan</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slicing-foreground  poppins-bold">Sewa Alat</a>
                                </li>
                                <li>
                                    <div className='flex justify-start md:hidden'>
                                        <div className="me-6">
                                            <svg width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.5" y="0.5" width="45" height="45" rx="22.5" fill="white" />
                                                <rect x="0.5" y="0.5" width="45" height="45" rx="22.5" stroke="#156E3E" />
                                                <path d="M28 29C26.89 29 26 29.89 26 31C26 31.5304 26.2107 32.0391 26.5858 32.4142C26.9609 32.7893 27.4696 33 28 33C28.5304 33 29.0391 32.7893 29.4142 32.4142C29.7893 32.0391 30 31.5304 30 31C30 30.4696 29.7893 29.9609 29.4142 29.5858C29.0391 29.2107 28.5304 29 28 29ZM12 13V15H14L17.6 22.59L16.24 25.04C16.09 25.32 16 25.65 16 26C16 26.5304 16.2107 27.0391 16.5858 27.4142C16.9609 27.7893 17.4696 28 18 28H30V26H18.42C18.3537 26 18.2901 25.9737 18.2432 25.9268C18.1963 25.8799 18.17 25.8163 18.17 25.75C18.17 25.7 18.18 25.66 18.2 25.63L19.1 24H26.55C27.3 24 27.96 23.58 28.3 22.97L31.88 16.5C31.95 16.34 32 16.17 32 16C32 15.7348 31.8946 15.4804 31.7071 15.2929C31.5196 15.1054 31.2652 15 31 15H16.21L15.27 13M18 29C16.89 29 16 29.89 16 31C16 31.5304 16.2107 32.0391 16.5858 32.4142C16.9609 32.7893 17.4696 33 18 33C18.5304 33 19.0391 32.7893 19.4142 32.4142C19.7893 32.0391 20 31.5304 20 31C20 30.4696 19.7893 29.9609 19.4142 29.5858C19.0391 29.2107 18.5304 29 18 29Z" fill="#156E3E" />
                                            </svg>
                                        </div>
                                        <div className="grid content-center">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z" fill="#156E3E" />
                                            </svg>
                                        </div>
                                        <div className="grid content-center">
                                            <p className="text-[15px] text-slicing-foreground poppins-bold">Hi, Anton Raharjo</p>
                                        </div>
                                        <div className="grid content-center ms-3">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_1_4204)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0599 16.06C12.7787 16.3409 12.3974 16.4987 11.9999 16.4987C11.6024 16.4987 11.2212 16.3409 10.9399 16.06L5.2819 10.404C5.00064 10.1226 4.84268 9.74102 4.84277 9.34316C4.84287 8.9453 5.00101 8.56377 5.2824 8.28251C5.56379 8.00125 5.9454 7.84329 6.34325 7.84338C6.74111 7.84348 7.12264 8.00162 7.4039 8.28301L11.9999 12.879L16.5959 8.28301C16.8787 8.00964 17.2575 7.85827 17.6508 7.8615C18.0441 7.86473 18.4204 8.0223 18.6986 8.30028C18.9769 8.57827 19.1348 8.95441 19.1384 9.34771C19.142 9.741 18.991 10.12 18.7179 10.403L13.0609 16.061L13.0599 16.06Z" fill="#156E3E" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1_4204">
                                                        <rect width="24" height="24" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                        </div>
                                    </div>

                                </li>
                                {/* <li>
                  <a href="#" className="block sm:hidden py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">x</a>
                </li> */}

                            </ul>


                        </div>

                    </div>
                </nav>

            </div>

            <div className='h-auto pt-[140px] pb-[140px]'>
                <div className='container grid grid-cols-1 xl:grid-cols-3 '>
                    <div className='xl:hidden flex justify-center'>
                        <img src="/images/slicing/temukan.png" className='sm:w-[440px] sm:h-[440px]' alt="Example Image" />
                    </div>
                    <div className='mt-3 xl:mt-0 lg:col-span-2'>

                        <p className='text-slicing-foreground text-[30px] md:text-[48px] lg:text-[68px] poppins-bold text-center xl:text-start  mt-[32px] md:mt-0'>Temukan Peralatan Outdoor Terbaik di <br /> Lorem ipsum</p>

                        <p className='mt-7 text-slicing-foreground text-[16px] md:text-[24px] lg:text-[24px] poppins-regular text-center xl:text-start'>Nikmati petualangan dengan perlengkapan terbaik. Kami <br /> menyediakan semua yang kamu butuhkan.</p>

                        <div className='flex justify-center xl:justify-start'>
                            <button type="button" className="mt-9  px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-slicing-foreground focus:ring-4 focus:outline-none focus:ring-slicing rounded text-center ">
                                <svg className="w-5 h-3.5 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                    <path d="M15.5005 4H9.50046C9.30075 3.99943 9.10547 4.05891 8.93999 4.17071C8.7745 4.28252 8.64645 4.4415 8.57246 4.627L2.58046 18.607C2.51545 18.7591 2.48919 18.925 2.50404 19.0898C2.51889 19.2545 2.57439 19.4131 2.66556 19.5511C2.75673 19.6892 2.88073 19.8024 3.02644 19.8808C3.17215 19.9591 3.33502 20.0001 3.50046 20H8.50046V15C8.50046 14.7348 8.60582 14.4804 8.79336 14.2929C8.98089 14.1054 9.23525 14 9.50046 14C9.76568 14 10.02 14.1054 10.2076 14.2929C10.3951 14.4804 10.5005 14.7348 10.5005 15V20H21.5005C21.666 20.0002 21.829 19.9592 21.9749 19.8808C22.1207 19.8024 22.2448 19.689 22.336 19.5508C22.4272 19.4126 22.4826 19.254 22.4974 19.0891C22.5121 18.9242 22.4857 18.7582 22.4205 18.606L16.4205 4.606C16.3433 4.426 16.215 4.27262 16.0514 4.16489C15.8879 4.05716 15.6963 3.99983 15.5005 4Z" fill="white" />
                                </svg>

                                <span className='mt-0.5 poppins-bold'>Sewa Peralatan Sekarang</span>
                            </button>
                        </div>

                    </div>
                    <div className='hidden xl:block'>
                        <img src="/images/slicing/temukan.png" className='w-[600px] 2xl:h-[450px] xl:h-[425px] mt-[-60px]' alt="Example Image" />
                    </div>
                </div>
            </div>

            <div className='h-auto pt-[140px] pb-[140px] bg-white'>
                <div className='container grid grid-cols-1 mt-10 md:mt-0 md:grid-cols-3 md:gap-[70px]'>
                    <div className='flex justify-center'>
                        <img src="/images/slicing/tree.png" className='sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[400px]  ' alt="" />
                    </div>
                    <div className='col-span-2'>
                        <p className='text-slicing-foreground poppins-bold text-sm  sm:text-xl md:text-2xl text-center md:text-start mt-[32px] md:mt-0 '>Tentang Kami</p>
                        <p className='poppins-bold text-[26px] sm:text-[28px] md:text-[40px] text-center md:text-start mt-3 md:mt-[20px]  '>Percayakan peralatan <br /> petualanganmu kepada kami</p>
                        <p className='text-slicing-grey text-[16px] sm:text-[18px] md:text-[24px] mt-3 md:mt-[48px] text-justify md:text-start '>Lorem ipsum adalah tempat penyewaan alat outdoor yang terdapat di Loremipsum, Kabupaten Loremipsum. Tempat penyewaan alat outdoor ini berdiri tahun 2021. Tujuan didirikannya tempat penyewaan alat outdoor ini adalah untuk mempermudah pendaki atau orang yang ingin berkemah mendapatkan alat-alat yang dibutuhkan dengan harga terjangkau.</p>
                    </div>
                </div>
            </div>

            <div className='h-auto  pt-[140px] pb-[140px]'>
                <div className='container'>
                    <div>
                        <p className='text-slicing-foreground poppins-bold text-sm  sm:text-xl md:text-2xl text-center mt-[32px] md:mt-0 '>LAYANAN</p>
                        <p className='poppins-bold text-[26px] sm:text-[28px] md:text-[40px] text-center mt-3 md:mt-[20px] '>Kami menyediakan pelayanan terbaik untukmu</p>
                    </div>
                    <div>
                        <div className='grid grid-col-1 md:grid-cols-3 mt-9 gap-4 md:gap-10 lg:gap-28 '>
                            <div className='flex justify-center'>
                                <div className=" bg-slicing-foreground border rounded shadow-md p-10">
                                    <div className='flex justify-center'>
                                        <img src="/images/slicing/serviceChart.png" alt="" />
                                    </div>
                                    <p className='text-[24px] sm:text-[16px]  xl:text-[24px] poppins-bold text-center text-white my-6   '>Harga Terjangkau</p>
                                    <p className='text-[14px] sm:text-[12px]  xl:text-[18px]  poppins-regular text-center text-white'>Peralatan berkualitas tak harus mahal. Dengan harga yang terjangkau, kamu bisa menikmati  peralatan outdoor berkualitas dari kami.</p>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <div className=" bg-slicing-foreground border rounded shadow-md p-10">
                                    <div className='flex justify-center'>
                                        <img src="/images/slicing/serviceTruck.png" alt="" />
                                    </div>
                                    <p className='text-[24px] sm:text-[16px]  xl:text-[24px] poppins-bold text-center text-white my-6   '>Gratis Antar Jemput</p>
                                    <p className='text-[14px] sm:text-[12px]  xl:text-[18px]  poppins-regular text-center text-white'>Tidak perlu repot mengangkut peralatan mendaki. Manfaatkan layanan antar jemput gratis kami dan fokuslah pada petualanganmu.</p>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <div className=" bg-slicing-foreground border rounded shadow-md p-10">
                                    <div className='flex justify-center'>
                                        <img src="/images/slicing/serviceCamp.png" alt="" />
                                    </div>
                                    <p className='text-[24px] sm:text-[16px]  xl:text-[24px] poppins-bold text-center text-white my-6   '>Peralatan Berkualitas</p>
                                    <p className='text-[14px] sm:text-[12px]  xl:text-[18px]  poppins-regular text-center text-white'>Kami menyediakan berbagai peralatan berkualitas untuk memastikan keamanan dan kenyamananmu selama berpetualang.</p>
                                </div>
                            </div>
                            {/* <div className='flex justify-center'>
                <a href="#" className="block  sm:w-[200px] sm:h-[250px]  md:w-[350px]  md:h-[400px] p-6 bg-slicing-foreground border rounded shadow pt-10">
                  <div className='flex justify-center'>
                    <img src="/images/slicing/serviceTruck.png" alt="" />

                  </div>
                  <p className='text-[24px] poppins-bold text-center text-white my-6  '>Gratis Antar Jemput</p>
                  <p className='text-[18px] poppins-regular text-center text-white'>Tidak perlu repot mengangkut peralatan mendaki. Manfaatkan layanan antar jemput gratis kami dan fokuslah pada petualanganmu.</p>
                </a>
              </div>
              <div className='flex justify-center'>
                <a href="#" className="block  sm:w-[200px] sm:h-[250px]  md:w-[350px]  md:h-[400px] p-6 bg-slicing-foreground border rounded shadow pt-10">
                  <div className='flex justify-center'>
                    <img src="/images/slicing/serviceCamp.png" alt="" />

                  </div>
                  <p className='text-[24px] poppins-bold text-center text-white my-6  '>Peralatan Berkualitas</p>
                  <p className='text-[18px] poppins-regular text-center text-white'>Kami menyediakan berbagai peralatan berkualitas untuk memastikan keamanan dan kenyamananmu selama berpetualang.</p>
                </a>
              </div> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-auto  pt-[140px] pb-[140px] bg-white'>
                <div className='container'>
                    <div>
                        <p className='text-slicing-foreground poppins-bold text-sm  sm:text-xl md:text-2xl text-center mt-[32px] md:mt-0  '>PRODUK TERLARIS</p>
                        <p className='poppins-bold text-[26px] sm:text-[28px] md:text-[40px] text-center mt-3 md:mt-[20px]'>Peralatan ini mungkin akan membantumu dalam berpetualang</p>
                    </div>
                    <div>
                        <div className='grid grid-cols-2 md:grid-cols-4 mt-9 gap-[29px] '>
                            <div>
                                <div className="shadow-md rounded    ">
                                    <img className=" bg-slicing-deep rounded-t" src="/images/slicing/sleepingBag.png" alt="" />
                                    <div className="p-5">
                                        <p className='text-[12px] lg:text-[14px]  xl:text-[20px] poppins-bold truncate'>Sleeping Bag</p>
                                        <p className="text-[12px] lg:text-[12px]  xl:text-[18px] text-slicing-grey poppins-regular mt-2">Rp. 10.000 <span className='text-end'> / hari</span></p>
                                        <div className='flex justify-center mt-2'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#156E3E" />
                                            </svg>
                                            <p className="ms-3 text-[10px] lg:text-[12px]  xl:text-[18px]  text-slicing-foreground poppins-bold">

                                                Masukan Keranjang</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="shadow-md rounded  ">
                                    <img className=" bg-slicing-deep rounded-t" src="/images/slicing/redBag.png" alt="" />
                                    <div className="p-5">
                                        <p className='text-[12px] lg:text-[14px]  xl:text-[20px] poppins-bold truncate'>Carrier 60L + Rain Cover</p>
                                        <p className="text-[12px] lg:text-[12px]  xl:text-[18px] text-slicing-grey poppins-regular mt-2">Rp 25.000 <span className='text-end'> / hari</span></p>
                                        <div className='flex justify-center mt-2'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#156E3E" />
                                            </svg>
                                            <p className="ms-3 text-[10px] lg:text-[12px]  xl:text-[18px]  text-slicing-foreground poppins-bold">

                                                Masukan Keranjang</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="shadow-md rounded  ">
                                    <img className=" bg-slicing-deep rounded-t" src="/images/slicing/cookingTools.png" alt="" />
                                    <div className="p-5">
                                        <p className='text-[12px] lg:text-[14px]  xl:text-[20px] poppins-bold truncate'>Nesting</p>
                                        <p className="text-[12px] lg:text-[12px]  xl:text-[18px] text-slicing-grey poppins-regular mt-2">Rp 7.000 <span className='text-end'> / hari</span></p>
                                        <div className='flex justify-center mt-2'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#156E3E" />
                                            </svg>
                                            <p className="ms-3 text-[10px] lg:text-[12px]  xl:text-[18px]  text-slicing-foreground poppins-bold">

                                                Masukan Keranjang</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="shadow-md rounded  ">
                                    <img className=" bg-slicing-deep rounded-t" src="/images/slicing/camp.png" alt="" />
                                    <div className="p-5">
                                        <p className='text-[12px] lg:text-[14px]  xl:text-[20px] poppins-bold truncate'>Tenda 4-5 Orang</p>
                                        <p className="text-[12px] lg:text-[12px]  xl:text-[18px] text-slicing-grey poppins-regular mt-2">Rp 35.000 <span className='text-end'> / hari</span></p>
                                        <div className='flex justify-center mt-2'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#156E3E" />
                                            </svg>
                                            <p className="ms-3 text-[10px] lg:text-[12px]  xl:text-[18px]  text-slicing-foreground poppins-bold">

                                                Masukan Keranjang</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-auto  pt-[140px] pb-[140px] bg-white'>
                <div className='container'>
                    <div>
                        <p className='text-slicing-foreground poppins-bold text-sm  sm:text-xl md:text-2xl text-center mt-[32px] md:mt-0  '>FAQ</p>
                        <p className='poppins-bold text-[26px] sm:text-[28px] md:text-[40px] text-center mt-3 md:mt-[20px]'>Pertanyaan yang sering ditanyakan</p>
                    </div>
                    <div className='mt-[48px]'>
                        <div id="accordion-arrow-icon" data-accordion="open">
                            {/*  */}
                            <h2 id="duration-heading">
                                <button
                                    type="button"
                                    className={`flex items-center justify-between w-full p-5 border border-slicing-grey1 ${expanded[0] ? 'bg-slicing-grey1' : 'bg-white'}`}
                                    data-accordion-target="#duration-body"
                                    onClick={() => handleClick(0)}
                                    aria-expanded={expanded[0]}
                                    aria-controls="duration-body"
                                >
                                    <p className="poppins-bold text-start text-black text-[14px] md:text-[16px] lg:text-[20px]">Berapa lama durasi maksimal penyewaan?</p>
                                    <span>
                                        {expanded[0] ? (
                                            <svg width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.5007 3.4139H1.50065C1.12493 3.4139 0.764593 3.26464 0.498917 2.99897C0.23324 2.73329 0.0839844 2.37296 0.0839844 1.99723C0.0839844 1.62151 0.23324 1.26118 0.498917 0.995499C0.764593 0.729822 1.12493 0.580566 1.50065 0.580566H18.5007C18.8764 0.580566 19.2367 0.729822 19.5024 0.995499C19.7681 1.26118 19.9173 1.62151 19.9173 1.99723C19.9173 2.37296 19.7681 2.73329 19.5024 2.99897C19.2367 3.26464 18.8764 3.4139 18.5007 3.4139Z" fill="black" />
                                            </svg>
                                        ) : (
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.5007 11.4139H11.4173V18.4972C11.4173 18.873 11.2681 19.2333 11.0024 19.499C10.7367 19.7646 10.3764 19.9139 10.0007 19.9139C9.62493 19.9139 9.26459 19.7646 8.99892 19.499C8.73324 19.2333 8.58398 18.873 8.58398 18.4972V11.4139H1.50065C1.12493 11.4139 0.764593 11.2646 0.498917 10.999C0.23324 10.7333 0.0839844 10.373 0.0839844 9.99723C0.0839844 9.62151 0.23324 9.26118 0.498917 8.9955C0.764593 8.72982 1.12493 8.58057 1.50065 8.58057H8.58398V1.49723C8.58398 1.12151 8.73324 0.761175 8.99892 0.495498C9.26459 0.229822 9.62493 0.0805664 10.0007 0.0805664C10.3764 0.0805664 10.7367 0.229822 11.0024 0.495498C11.2681 0.761175 11.4173 1.12151 11.4173 1.49723V8.58057H18.5007C18.8764 8.58057 19.2367 8.72982 19.5024 8.9955C19.7681 9.26118 19.9173 9.62151 19.9173 9.99723C19.9173 10.373 19.7681 10.7333 19.5024 10.999C19.2367 11.2646 18.8764 11.4139 18.5007 11.4139Z" fill="black" />
                                            </svg>
                                        )}
                                    </span>
                                </button>
                            </h2>
                            <div id="duration-body" className="hidden" aria-labelledby="duration-heading">
                                <div className="p-5  bg-slicing-grey1">
                                    <p className="poppins-regular  text-start text-[12px] md:text-[14px] lg:text-[18px]">Tidak ada durasi maksimal penyewaan pada Lorem ipsum. Kamu bebas menyewa alat selama yang kamu mau.</p>
                                </div>
                            </div>
                            {/*  */}
                            <h2 id="process-heading" className="mt-[20px]">
                                <button
                                    type="button"
                                    className={`flex items-center justify-between w-full p-5 border border-slicing-grey1 ${expanded[1] ? 'bg-slicing-grey1' : 'bg-white'}`}
                                    data-accordion-target="#process-body"
                                    onClick={() => handleClick(1)}
                                    aria-expanded={expanded[1]}
                                    aria-controls="process-body"
                                >
                                    <p className="poppins-bold text-start text-black text-[14px] md:text-[16px] lg:text-[20px]">Bagaimana proses pengembalian alat?</p>
                                    <span>
                                        {expanded[1] ? (
                                            <svg width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.5007 3.4139H1.50065C1.12493 3.4139 0.764593 3.26464 0.498917 2.99897C0.23324 2.73329 0.0839844 2.37296 0.0839844 1.99723C0.0839844 1.62151 0.23324 1.26118 0.498917 0.995499C0.764593 0.729822 1.12493 0.580566 1.50065 0.580566H18.5007C18.8764 0.580566 19.2367 0.729822 19.5024 0.995499C19.7681 1.26118 19.9173 1.62151 19.9173 1.99723C19.9173 2.37296 19.7681 2.73329 19.5024 2.99897C19.2367 3.26464 18.8764 3.4139 18.5007 3.4139Z" fill="black" />
                                            </svg>
                                        ) : (
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.5007 11.4139H11.4173V18.4972C11.4173 18.873 11.2681 19.2333 11.0024 19.499C10.7367 19.7646 10.3764 19.9139 10.0007 19.9139C9.62493 19.9139 9.26459 19.7646 8.99892 19.499C8.73324 19.2333 8.58398 18.873 8.58398 18.4972V11.4139H1.50065C1.12493 11.4139 0.764593 11.2646 0.498917 10.999C0.23324 10.7333 0.0839844 10.373 0.0839844 9.99723C0.0839844 9.62151 0.23324 9.26118 0.498917 8.9955C0.764593 8.72982 1.12493 8.58057 1.50065 8.58057H8.58398V1.49723C8.58398 1.12151 8.73324 0.761175 8.99892 0.495498C9.26459 0.229822 9.62493 0.0805664 10.0007 0.0805664C10.3764 0.0805664 10.7367 0.229822 11.0024 0.495498C11.2681 0.761175 11.4173 1.12151 11.4173 1.49723V8.58057H18.5007C18.8764 8.58057 19.2367 8.72982 19.5024 8.9955C19.7681 9.26118 19.9173 9.62151 19.9173 9.99723C19.9173 10.373 19.7681 10.7333 19.5024 10.999C19.2367 11.2646 18.8764 11.4139 18.5007 11.4139Z" fill="black" />
                                            </svg>
                                        )}
                                    </span>
                                </button>
                            </h2>
                            <div id="process-body" className="hidden" aria-labelledby="process-heading">
                                <div className="p-5  bg-slicing-grey1">
                                    <p className="poppins-regular  text-start text-[12px] md:text-[14px] lg:text-[18px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quia culpa vitae vero, reiciendis quae tempora obcaecati expedita possimus, sunt rerum amet? Nemo, fugit hic? In quaerat aperiam rerum dolore?</p>
                                </div>
                            </div>
                            {/*  */}
                            <h2 id="fine-heading" className="mt-[20px]">
                                <button
                                    type="button"
                                    className={`flex items-center justify-between w-full p-5 border border-slicing-grey1 ${expanded[2] ? 'bg-slicing-grey1' : 'bg-white'}`}
                                    data-accordion-target="#fine-body"
                                    onClick={() => handleClick(2)}
                                    aria-expanded={expanded[2]}
                                    aria-controls="fine-body"
                                >
                                    <p className="poppins-bold text-start text-black text-[14px] md:text-[16px] lg:text-[20px]">Apakah ada denda jika terlambat mengembalikan atau merusak alat?</p>
                                    <span>
                                        {expanded[2] ? (
                                            <svg width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.5007 3.4139H1.50065C1.12493 3.4139 0.764593 3.26464 0.498917 2.99897C0.23324 2.73329 0.0839844 2.37296 0.0839844 1.99723C0.0839844 1.62151 0.23324 1.26118 0.498917 0.995499C0.764593 0.729822 1.12493 0.580566 1.50065 0.580566H18.5007C18.8764 0.580566 19.2367 0.729822 19.5024 0.995499C19.7681 1.26118 19.9173 1.62151 19.9173 1.99723C19.9173 2.37296 19.7681 2.73329 19.5024 2.99897C19.2367 3.26464 18.8764 3.4139 18.5007 3.4139Z" fill="black" />
                                            </svg>
                                        ) : (
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.5007 11.4139H11.4173V18.4972C11.4173 18.873 11.2681 19.2333 11.0024 19.499C10.7367 19.7646 10.3764 19.9139 10.0007 19.9139C9.62493 19.9139 9.26459 19.7646 8.99892 19.499C8.73324 19.2333 8.58398 18.873 8.58398 18.4972V11.4139H1.50065C1.12493 11.4139 0.764593 11.2646 0.498917 10.999C0.23324 10.7333 0.0839844 10.373 0.0839844 9.99723C0.0839844 9.62151 0.23324 9.26118 0.498917 8.9955C0.764593 8.72982 1.12493 8.58057 1.50065 8.58057H8.58398V1.49723C8.58398 1.12151 8.73324 0.761175 8.99892 0.495498C9.26459 0.229822 9.62493 0.0805664 10.0007 0.0805664C10.3764 0.0805664 10.7367 0.229822 11.0024 0.495498C11.2681 0.761175 11.4173 1.12151 11.4173 1.49723V8.58057H18.5007C18.8764 8.58057 19.2367 8.72982 19.5024 8.9955C19.7681 9.26118 19.9173 9.62151 19.9173 9.99723C19.9173 10.373 19.7681 10.7333 19.5024 10.999C19.2367 11.2646 18.8764 11.4139 18.5007 11.4139Z" fill="black" />
                                            </svg>
                                        )}
                                    </span>
                                </button>
                            </h2>
                            <div id="fine-body" className="hidden" aria-labelledby="fine-heading">
                                <div className="p-5  bg-slicing-grey1">
                                    <p className="poppins-regular  text-start text-[12px] md:text-[14px] lg:text-[18px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quia culpa vitae vero, reiciendis quae tempora obcaecati expedita possimus, sunt rerum amet? Nemo, fugit hic? In quaerat aperiam rerum dolore?</p>
                                </div>
                            </div>
                            {/*  */}
                            <h2 id="tools-heading" className="mt-[20px]">
                                <button
                                    type="button"
                                    className={`flex items-center justify-between w-full p-5 border border-slicing-grey1 ${expanded[3] ? 'bg-slicing-grey1' : 'bg-white'}`}
                                    data-accordion-target="#tools-body"
                                    onClick={() => handleClick(3)}
                                    aria-expanded={expanded[3]}
                                    aria-controls="tools-body"
                                >
                                    <p className="poppins-bold text-start text-black text-[14px] md:text-[16px] lg:text-[20px]">Apakah alat yang disewakan dalam kondisi baik?</p>
                                    <span>
                                        {expanded[3] ? (
                                            <svg width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.5007 3.4139H1.50065C1.12493 3.4139 0.764593 3.26464 0.498917 2.99897C0.23324 2.73329 0.0839844 2.37296 0.0839844 1.99723C0.0839844 1.62151 0.23324 1.26118 0.498917 0.995499C0.764593 0.729822 1.12493 0.580566 1.50065 0.580566H18.5007C18.8764 0.580566 19.2367 0.729822 19.5024 0.995499C19.7681 1.26118 19.9173 1.62151 19.9173 1.99723C19.9173 2.37296 19.7681 2.73329 19.5024 2.99897C19.2367 3.26464 18.8764 3.4139 18.5007 3.4139Z" fill="black" />
                                            </svg>
                                        ) : (
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.5007 11.4139H11.4173V18.4972C11.4173 18.873 11.2681 19.2333 11.0024 19.499C10.7367 19.7646 10.3764 19.9139 10.0007 19.9139C9.62493 19.9139 9.26459 19.7646 8.99892 19.499C8.73324 19.2333 8.58398 18.873 8.58398 18.4972V11.4139H1.50065C1.12493 11.4139 0.764593 11.2646 0.498917 10.999C0.23324 10.7333 0.0839844 10.373 0.0839844 9.99723C0.0839844 9.62151 0.23324 9.26118 0.498917 8.9955C0.764593 8.72982 1.12493 8.58057 1.50065 8.58057H8.58398V1.49723C8.58398 1.12151 8.73324 0.761175 8.99892 0.495498C9.26459 0.229822 9.62493 0.0805664 10.0007 0.0805664C10.3764 0.0805664 10.7367 0.229822 11.0024 0.495498C11.2681 0.761175 11.4173 1.12151 11.4173 1.49723V8.58057H18.5007C18.8764 8.58057 19.2367 8.72982 19.5024 8.9955C19.7681 9.26118 19.9173 9.62151 19.9173 9.99723C19.9173 10.373 19.7681 10.7333 19.5024 10.999C19.2367 11.2646 18.8764 11.4139 18.5007 11.4139Z" fill="black" />
                                            </svg>
                                        )}
                                    </span>
                                </button>
                            </h2>
                            <div id="tools-body" className="hidden" aria-labelledby="tools-heading">
                                <div className="p-5  bg-slicing-grey1">
                                    <p className="poppins-regular  text-start text-[12px] md:text-[14px] lg:text-[18px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quia culpa vitae vero, reiciendis quae tempora obcaecati expedita possimus, sunt rerum amet? Nemo, fugit hic? In quaerat aperiam rerum dolore?</p>
                                </div>
                            </div>
                            {/*  */}
                            <h2 id="guarantee-heading" className="mt-[20px]">
                                <button
                                    type="button"
                                    className={`flex items-center justify-between w-full p-5 border border-slicing-grey1 ${expanded[4] ? 'bg-slicing-grey1' : 'bg-white'}`}
                                    data-accordion-target="#guarantee-body"
                                    onClick={() => handleClick(4)}
                                    aria-expanded={expanded[4]}
                                    aria-controls="guarantee-body"
                                >
                                    <p className="poppins-bold text-start text-black text-[14px] md:text-[16px] lg:text-[20px]">Apakah alat yang disewakan dalam kondisi baik?</p>
                                    <span>
                                        {expanded[4] ? (
                                            <svg width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.5007 3.4139H1.50065C1.12493 3.4139 0.764593 3.26464 0.498917 2.99897C0.23324 2.73329 0.0839844 2.37296 0.0839844 1.99723C0.0839844 1.62151 0.23324 1.26118 0.498917 0.995499C0.764593 0.729822 1.12493 0.580566 1.50065 0.580566H18.5007C18.8764 0.580566 19.2367 0.729822 19.5024 0.995499C19.7681 1.26118 19.9173 1.62151 19.9173 1.99723C19.9173 2.37296 19.7681 2.73329 19.5024 2.99897C19.2367 3.26464 18.8764 3.4139 18.5007 3.4139Z" fill="black" />
                                            </svg>
                                        ) : (
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.5007 11.4139H11.4173V18.4972C11.4173 18.873 11.2681 19.2333 11.0024 19.499C10.7367 19.7646 10.3764 19.9139 10.0007 19.9139C9.62493 19.9139 9.26459 19.7646 8.99892 19.499C8.73324 19.2333 8.58398 18.873 8.58398 18.4972V11.4139H1.50065C1.12493 11.4139 0.764593 11.2646 0.498917 10.999C0.23324 10.7333 0.0839844 10.373 0.0839844 9.99723C0.0839844 9.62151 0.23324 9.26118 0.498917 8.9955C0.764593 8.72982 1.12493 8.58057 1.50065 8.58057H8.58398V1.49723C8.58398 1.12151 8.73324 0.761175 8.99892 0.495498C9.26459 0.229822 9.62493 0.0805664 10.0007 0.0805664C10.3764 0.0805664 10.7367 0.229822 11.0024 0.495498C11.2681 0.761175 11.4173 1.12151 11.4173 1.49723V8.58057H18.5007C18.8764 8.58057 19.2367 8.72982 19.5024 8.9955C19.7681 9.26118 19.9173 9.62151 19.9173 9.99723C19.9173 10.373 19.7681 10.7333 19.5024 10.999C19.2367 11.2646 18.8764 11.4139 18.5007 11.4139Z" fill="black" />
                                            </svg>
                                        )}
                                    </span>
                                </button>
                            </h2>
                            <div id="guarantee-body" className="hidden" aria-labelledby="guarantee-heading">
                                <div className="p-5  bg-slicing-grey1">
                                    <p className="poppins-regular text-start text-[12px] md:text-[14px] lg:text-[18px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quia culpa vitae vero, reiciendis quae tempora obcaecati expedita possimus, sunt rerum amet? Nemo, fugit hic? In quaerat aperiam rerum dolore?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </div >
    )
}

export default LoggedIn


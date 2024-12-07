/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

function Login() {

    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);

    const handleEmailFocus = () => setIsEmailFocused(true);
    const handleEmailBlur = () => setIsEmailFocused(false);

    const handlePasswordFocus = () => setIsPasswordFocused(true);
    const handlePasswordBlur = () => setIsPasswordFocused(false);

    return (
        <div className=' bg-white'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div
                    className='h-screen'
                    style={{
                        backgroundImage: 'url(/images/slicing/bgTree.png)',
                        // backgroundSize: '1440px 850px',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'local',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        // backgroundAttachment: 'fixed',
                        // backgroundSize: '100 % 100 %',

                    }}
                >
                    <div
                        className='lg:hidden h-screen grid  sm:px-[100px] sm:py-[50px]'
                    >
                        <div className='bg-white p-[50px]'>
                            <div className='pb-[20px]'>
                                <div className='flex justify-center content-start'>
                                    <img src="/images/slicing/iconMountain.png" className="w-[60px] h-[23px]" alt="Flowbite Logo" />
                                    <span className="self-center text-xl font-semibold whitespace-nowrap text-slicing-foreground poppins-bold">Loremipsum</span>
                                </div>

                            </div>
                            <div
                                className=''
                            >
                                <div>
                                    <p className='text-[26px] md:text-[40px] lg:text-[40px] poppins-bold'>Masuk</p>

                                </div>
                                <div>
                                    <p className='text-[14px] md:text-[18px] lg:text-[18px] poppins-regular text-slicing-grey'>Masuk ke akun untuk mengakses layanan kami</p>
                                </div>
                                <div>
                                    <form className="mt-[20px]">
                                        <div className="mb-5">
                                            <label
                                                className={`block mb-2 poppins-medium text-[14px] md:text-[18px] lg:text-[18px] ${isEmailFocused ? 'text-slicing-foreground' : ''
                                                    }`}>
                                                Email
                                            </label>
                                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-slicing-foreground focus:border-slicing-foreground block w-full p-2.5" placeholder="Masukan email"
                                                onFocus={handleEmailFocus}
                                                onBlur={handleEmailBlur}
                                                required />
                                        </div>

                                        <div className="mb-5">
                                            <label
                                                className={`block mb-2 poppins-medium text-[14px] md:text-[18px] lg:text-[18px] ${isPasswordFocused ? 'text-slicing-foreground' : ''
                                                    }`}>
                                                Kata Sandi
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
                                                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11 5C10.2044 5 9.44129 5.31607 8.87868 5.87868C8.31607 6.44129 8 7.20435 8 8C8 8.79565 8.31607 9.55871 8.87868 10.1213C9.44129 10.6839 10.2044 11 11 11C11.7956 11 12.5587 10.6839 13.1213 10.1213C13.6839 9.55871 14 8.79565 14 8C14 7.20435 13.6839 6.44129 13.1213 5.87868C12.5587 5.31607 11.7956 5 11 5ZM11 13C9.67392 13 8.40215 12.4732 7.46447 11.5355C6.52678 10.5979 6 9.32608 6 8C6 6.67392 6.52678 5.40215 7.46447 4.46447C8.40215 3.52678 9.67392 3 11 3C12.3261 3 13.5979 3.52678 14.5355 4.46447C15.4732 5.40215 16 6.67392 16 8C16 9.32608 15.4732 10.5979 14.5355 11.5355C13.5979 12.4732 12.3261 13 11 13ZM11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5Z" fill="#6F6F6F" />
                                                    </svg>
                                                </div>
                                                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-slicing-foreground focus:border-slicing-foreground block w-full p-2.5 " placeholder="Masukan kata sandi"
                                                    onFocus={handlePasswordFocus}
                                                    onBlur={handlePasswordBlur}
                                                    required />
                                            </div>

                                        </div>

                                        <div className="flex justify-between mb-5">
                                            <div className='flex justify-start'>
                                                <div className="flex items-center h-5">
                                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-slicing-foreground " required />
                                                </div>
                                                <label className="ms-2 text-sm poppins-medium text-[14px] md:text-[16px] lg:text-[16px]">Tetap Masuk</label>
                                            </div>
                                            <div>
                                                <p className='text-slicing-foreground poppins-bold text-[14px] md:text-[16px] lg:text-[16px]'>Lupa kata sandi?</p>
                                            </div>

                                        </div>
                                        <button type="button" className="text-white bg-slicing-foreground focus:ring-4 focus:outline-none focus:ring-slicing  rounded  px-5 py-2.5 text-center w-full text-[14px] md:text-[18px] lg:text-[18px] poppins-bold ">Masuk</button>

                                        <div className='mt-[20px]'>
                                            <p className='text-[14px] md:text-[18px] lg:text-[18px]'>Belum punya akun? <span className='text-slicing-foreground poppins-bold'>Daftar Sekarang</span></p>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div
                    className='h-screen grid  px-[100px] py-[50px]'
                >
                    <div className=''>
                        <div className='flex justify-center content-start'>
                            <img src="/images/slicing/iconMountain.png" className="w-[60px] h-[23px]" alt="Flowbite Logo" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap text-slicing-foreground poppins-bold">Loremipsum</span>
                        </div>

                    </div>
                    <div
                        className=''
                    >
                        <div>
                            <p className='text-[26px] md:text-[40px] lg:text-[40px] poppins-bold'>Masuk</p>

                        </div>
                        <div>
                            <p className='text-[14px] md:text-[18px] lg:text-[18px] poppins-regular text-slicing-grey'>Masuk ke akun untuk mengakses layanan kami</p>
                        </div>
                        <div>
                            <form className="mt-[20px]">
                                <div className="mb-5">
                                    <label
                                        className={`block mb-2 poppins-medium text-[14px] md:text-[18px] lg:text-[18px] ${isEmailFocused ? 'text-slicing-foreground' : ''
                                            }`}>
                                        Email
                                    </label>
                                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-slicing-foreground focus:border-slicing-foreground block w-full p-2.5" placeholder="Masukan email"
                                        onFocus={handleEmailFocus}
                                        onBlur={handleEmailBlur}
                                        required />
                                </div>

                                <div className="mb-5">
                                    <label
                                        className={`block mb-2 poppins-medium text-[14px] md:text-[18px] lg:text-[18px] ${isPasswordFocused ? 'text-slicing-foreground' : ''
                                            }`}>
                                        Kata Sandi
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
                                            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 5C10.2044 5 9.44129 5.31607 8.87868 5.87868C8.31607 6.44129 8 7.20435 8 8C8 8.79565 8.31607 9.55871 8.87868 10.1213C9.44129 10.6839 10.2044 11 11 11C11.7956 11 12.5587 10.6839 13.1213 10.1213C13.6839 9.55871 14 8.79565 14 8C14 7.20435 13.6839 6.44129 13.1213 5.87868C12.5587 5.31607 11.7956 5 11 5ZM11 13C9.67392 13 8.40215 12.4732 7.46447 11.5355C6.52678 10.5979 6 9.32608 6 8C6 6.67392 6.52678 5.40215 7.46447 4.46447C8.40215 3.52678 9.67392 3 11 3C12.3261 3 13.5979 3.52678 14.5355 4.46447C15.4732 5.40215 16 6.67392 16 8C16 9.32608 15.4732 10.5979 14.5355 11.5355C13.5979 12.4732 12.3261 13 11 13ZM11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5Z" fill="#6F6F6F" />
                                            </svg>
                                        </div>
                                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-slicing-foreground focus:border-slicing-foreground block w-full p-2.5 " placeholder="Masukan kata sandi"
                                            onFocus={handlePasswordFocus}
                                            onBlur={handlePasswordBlur}
                                            required />
                                    </div>

                                </div>

                                <div className="flex justify-between mb-5">
                                    <div className='flex justify-start'>
                                        <div className="flex items-center h-5">
                                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-slicing-foreground " required />
                                        </div>
                                        <label className="ms-2 text-sm poppins-medium text-[14px] md:text-[16px] lg:text-[16px]">Tetap Masuk</label>
                                    </div>
                                    <div>
                                        <p className='text-slicing-foreground poppins-bold text-[14px] md:text-[16px] lg:text-[16px]'>Lupa kata sandi?</p>
                                    </div>

                                </div>
                                <button type="button" className="text-white bg-slicing-foreground focus:ring-4 focus:outline-none focus:ring-slicing  rounded  px-5 py-2.5 text-center w-full text-[14px] md:text-[18px] lg:text-[18px] poppins-bold ">Masuk</button>

                                <div className='mt-[20px]'>
                                    <p className='text-[14px] md:text-[18px] lg:text-[18px]'>Belum punya akun? <span className='text-slicing-foreground poppins-bold'>Daftar Sekarang</span></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login
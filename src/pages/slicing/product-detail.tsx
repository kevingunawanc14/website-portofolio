/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'

function ProductDetail() {
    return (
        <div>
            <Navbar />

            <div className='bg-white  pt-[50px]'>
                <div className='container'>
                    <div className=' '>
                        <p className='text-[10px] md:text-[16px] lg:text-[18px] poppins-bold'>Home / <span className='poppins-bold'>Sewa Alat /</span>
                            <span className='text-slicing-foreground poppins-bold'> Carrier 60L + Rain Cover</span>
                        </p>

                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-1 xl:grid-cols-12 gap-5 mt-[20px]'>
                        <div className='hidden xl:grid grid-rows-3 gap-5 col-span-2 '>
                            <div className='bg-slicing-deep content-center rounded-sm border-4 border-slicing-foreground '>
                                <div className='flex justify-center'>
                                    <div className="">
                                        <img className="   w-[120px] h-[120px] my-[40px] " src="/images/slicing/redBag.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='bg-slicing-grey1 content-center rounded '>
                                <div className='flex justify-center'>
                                    <div className="">
                                        <img className="   w-[150px] h-[120px] my-[40px] " src="/images/slicing/blueBag.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='bg-slicing-grey1 content-center rounded '>
                                <div className='flex justify-center'>
                                    <div className="">
                                        <img className="   w-[150px] h-[120px] my-[40px] " src="/images/slicing/blueBag1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='xl:col-span-6 bg-slicing-deep  content-center rounded'>
                            <div className='flex justify-center '>
                                <div className=''>
                                    <div className="  ">
                                        <img className=" " src="/images/slicing/redBag.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='xl:hidden'>
                            <div>
                                <div className='grid grid-cols-3 gap-3 md:gap-10  md:container '>

                                    <div className='bg-slicing-deep content-center rounded-sm border-4 border-slicing-foreground h-[120px] md:h-[180px] '>
                                        <div className='flex justify-center'>
                                            <div className="">
                                                <img className="w-[76px] h-[76px]  md:w-[80px] md:h-[80px]    lg:w-[120px] lg:h-[120px] md:my-[40px] " src="/images/slicing/redBag.png" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='bg-slicing-grey1 content-center rounded-sm h-[120px] md:h-[180px] '>
                                        <div className='flex justify-center'>
                                            <div className="">
                                                <img className="  w-[76px] h-[76px]  md:w-[80px] md:h-[80px]    lg:w-[120px] lg:h-[120px] md:my-[40px] " src="/images/slicing/blueBag.png" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='bg-slicing-grey1 content-center rounded-sm h-[120px] md:h-[180px] '>
                                        <div className='flex justify-center'>
                                            <div className="">
                                                <img className="  w-[76px] h-[76px]  md:w-[80px] md:h-[80px]    lg:w-[120px] lg:h-[120px] md:my-[40px] " src="/images/slicing/blueBag1.png" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='xl:col-span-4'>
                            <div className='hidden xl:block'>
                                <p className='lg:text-[24px] md:text-[20px] text-[14px] poppins-bold'>Carrier 60L + Rain Cover</p>
                                <p className='lg:text-[18px] md:text-[16px] text-[12px] poppins-regular text-slicing-grey mt-[3px]'>Carrier 60 liter ini dirancang khusus untuk menemani perjalanan outdoor Anda, baik itu mendaki gunung, berkemah, atau perjalanan jauh lainnya. Dengan kapasitas yang besar, Anda dapat membawa semua perlengkapan penting tanpa perlu khawatir kehabisan ruang. Dilengkapi dengan rain cover, carrier ini juga melindungi barang bawaan Anda dari hujan dan cuaca ekstrem.</p>
                            </div>

                            <div>
                                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 mt-[25px] '>
                                    <div className='content-center'>
                                        <p className='lg:text-[24px] md:text-[20px] text-[14px] poppins-bold'>Rp 25.000 / hari</p>
                                    </div>
                                    <div className='content-center'>
                                        <div className='flex mt-[20px] sm:mt-[0px] xl:mt-[40px]'>
                                            <div className='flex '>
                                                <div className='content-center'>
                                                    <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="1" y="1.5" width="34" height="34" rx="5" stroke="#156E3E" stroke-width="2" />
                                                        <path d="M26.0002 19.8307H10.0002C9.64658 19.8307 9.30744 19.6903 9.05739 19.4402C8.80735 19.1902 8.66687 18.851 8.66687 18.4974C8.66687 18.1438 8.80735 17.8046 9.05739 17.5546C9.30744 17.3045 9.64658 17.1641 10.0002 17.1641H26.0002C26.3538 17.1641 26.693 17.3045 26.943 17.5546C27.1931 17.8046 27.3335 18.1438 27.3335 18.4974C27.3335 18.851 27.1931 19.1902 26.943 19.4402C26.693 19.6903 26.3538 19.8307 26.0002 19.8307Z" fill="#156E3E" />
                                                    </svg>

                                                </div>
                                                <div className='content-center'>
                                                    <p className='lg:text-[28px] md:text-[20px] text-[20px] text-slicing-foreground poppins-medium px-[20px]'>1</p>
                                                </div>
                                                <div className='content-center'>
                                                    <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="1" y="1.5" width="34" height="34" rx="5" stroke="#156E3E" stroke-width="2" />
                                                        <path d="M26.0002 19.8307H19.3335V26.4974C19.3335 26.851 19.1931 27.1902 18.943 27.4402C18.693 27.6903 18.3538 27.8307 18.0002 27.8307C17.6466 27.8307 17.3074 27.6903 17.0574 27.4402C16.8073 27.1902 16.6669 26.851 16.6669 26.4974V19.8307H10.0002C9.64658 19.8307 9.30744 19.6903 9.05739 19.4402C8.80735 19.1902 8.66687 18.851 8.66687 18.4974C8.66687 18.1438 8.80735 17.8046 9.05739 17.5546C9.30744 17.3045 9.64658 17.1641 10.0002 17.1641H16.6669V10.4974C16.6669 10.1438 16.8073 9.80463 17.0574 9.55459C17.3074 9.30454 17.6466 9.16406 18.0002 9.16406C18.3538 9.16406 18.693 9.30454 18.943 9.55459C19.1931 9.80463 19.3335 10.1438 19.3335 10.4974V17.1641H26.0002C26.3538 17.1641 26.693 17.3045 26.943 17.5546C27.1931 17.8046 27.3335 18.1438 27.3335 18.4974C27.3335 18.851 27.1931 19.1902 26.943 19.4402C26.693 19.6903 26.3538 19.8307 26.0002 19.8307Z" fill="#156E3E" />
                                                    </svg>

                                                </div>

                                            </div>

                                            <div className=''>
                                                <button type="button" className=" px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-slicing-foreground rounded poppins-bold ms-[15px]
                                                text-[12px] md:text-[14px] lg:text-[18px]">
                                                    <svg width="21" height="21" className='me-[2px] xl:me-[15px]' viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.5 16.5C15.39 16.5 14.5 17.39 14.5 18.5C14.5 19.0304 14.7107 19.5391 15.0858 19.9142C15.4609 20.2893 15.9696 20.5 16.5 20.5C17.0304 20.5 17.5391 20.2893 17.9142 19.9142C18.2893 19.5391 18.5 19.0304 18.5 18.5C18.5 17.9696 18.2893 17.4609 17.9142 17.0858C17.5391 16.7107 17.0304 16.5 16.5 16.5ZM0.5 0.5V2.5H2.5L6.1 10.09L4.74 12.54C4.59 12.82 4.5 13.15 4.5 13.5C4.5 14.0304 4.71071 14.5391 5.08579 14.9142C5.46086 15.2893 5.96957 15.5 6.5 15.5H18.5V13.5H6.92C6.8537 13.5 6.79011 13.4737 6.74322 13.4268C6.69634 13.3799 6.67 13.3163 6.67 13.25C6.67 13.2 6.68 13.16 6.7 13.13L7.6 11.5H15.05C15.8 11.5 16.46 11.08 16.8 10.47L20.38 4C20.45 3.84 20.5 3.67 20.5 3.5C20.5 3.23478 20.3946 2.98043 20.2071 2.79289C20.0196 2.60536 19.7652 2.5 19.5 2.5H4.71L3.77 0.5M6.5 16.5C5.39 16.5 4.5 17.39 4.5 18.5C4.5 19.0304 4.71071 19.5391 5.08579 19.9142C5.46086 20.2893 5.96957 20.5 6.5 20.5C7.03043 20.5 7.53914 20.2893 7.91421 19.9142C8.28929 19.5391 8.5 19.0304 8.5 18.5C8.5 17.9696 8.28929 17.4609 7.91421 17.0858C7.53914 16.7107 7.03043 16.5 6.5 16.5Z" fill="white" />
                                                    </svg>

                                                    Masukkan Keranjang
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='xl:hidden mt-[25px]'>
                                <p className='lg:text-[24px] md:text-[20px] text-[14px] poppins-bold'>Carrier 60L + Rain Cover</p>
                                <p className='lg:text-[18px] md:text-[16px] text-[12px] poppins-regular text-slicing-grey mt-[3px]'>Carrier 60 liter ini dirancang khusus untuk menemani perjalanan outdoor Anda, baik itu mendaki gunung, berkemah, atau perjalanan jauh lainnya. Dengan kapasitas yang besar, Anda dapat membawa semua perlengkapan penting tanpa perlu khawatir kehabisan ruang. Dilengkapi dengan rain cover, carrier ini juga melindungi barang bawaan Anda dari hujan dan cuaca ekstrem.</p>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ProductDetail
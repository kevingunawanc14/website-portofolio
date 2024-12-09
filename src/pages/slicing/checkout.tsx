/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Footer from './components/footer';
import Navbar from './components/navbar'

function Checkout() {
  return (
    <div>
      <Navbar />
      <div className='bg-white  pt-[50px]'>

        <div className='container'>
          <div className=' '>
            <p className='text-[10px] md:text-[16px] lg:text-[18px] poppins-bold text-slicing-grey'>Home / <span className='poppins-bold'>Riwayat Pesanan /</span> <span className='text-slicing-foreground poppins-bold'> ID 8932424</span></p>
          </div>

          <div className='mt-[20px]'>
            <div>
              <div className='bg-slicing-grey1 rounded border border-slicing-grey1 '>
                <div className='grid grid-cols-2 sm:grid-cols-3 px-[40px] py-[20px]'>
                  <div className='s,content-center'>
                    <div>
                      <div>
                        <p className='text-[12px] md:text-[16px] lg:text-[20px] poppins-bold sm:text-center'>ID Pesanan</p>
                      </div>
                      <div>
                        <p className='text-[10px] md:text-[14px] lg:text-[18px] poppins-bold text-slicing-grey sm:text-center'>#8932424</p>
                      </div>
                    </div>
                  </div>
                  <div className='content-center'>
                    <div>
                      <div>
                        <p className='text-[12px] md:text-[16px] lg:text-[20px] poppins-bold text-end sm:text-center'>Metode Pembayaran </p>
                      </div>
                      <div className='flex justify-end sm:justify-center'>
                        <div>
                          <svg width="64" height="24" viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.9741 3.91783L37.4786 3.91783L37.4787 13.7141L30.5547 13.7141L37.4787 19.9834L31.5967 19.9834L24.8063 13.7141L24.8063 19.9834L20.9741 19.9834L20.9741 10.0246L33.0752 10.0246L33.0752 7.64077L20.9741 7.64077L20.9741 3.91783Z" fill="black" />
                            <path d="M39.1934 19.9839L43.227 19.9839L43.227 3.88576L39.1933 3.88576L39.1934 19.9839Z" fill="black" />
                            <path d="M6.89116 16.0982L6.89114 3.91832L3.73145 3.91832C3.16005 3.91832 2.72301 4.34313 2.72301 4.86492C2.72302 7.73938 2.68945 16.1962 2.68945 19.0043C2.68945 19.5267 3.12649 19.9839 3.6643 19.9839C5.84914 19.9839 12.1347 19.9839 13.0419 19.9839L13.0419 16.0982L6.89116 16.0982Z" fill="black" />
                            <path d="M15.1265 24C15.4967 24 18.32 24 19.2615 24C19.2615 24 19.2615 16.0652 19.2615 15.9347C17.9166 15.9347 16.5056 15.9347 15.1264 15.9347C15.1265 18.6122 15.1265 21.2897 15.1265 24Z" fill="black" />
                            <path d="M8.90916 3.91805C8.90916 3.98385 8.90917 7.93421 8.90917 7.93421C10.758 7.93421 13.1105 7.93421 15.1272 7.93421C15.1272 10.7105 15.1272 13.9429 15.1272 13.9429C16.0687 13.9429 18.892 13.9429 19.2622 13.9429L19.2622 4.89814C19.2622 4.3752 18.8246 3.95038 18.2876 3.91805C16.2709 3.91805 11.4972 3.91805 8.90916 3.91805Z" fill="black" />
                            <path d="M8.90917 9.89313C8.90917 11.2322 8.90918 12.5713 8.90918 13.9751C9.24533 13.9751 9.61507 13.9751 9.95121 13.9751C10.8928 13.9751 12.0685 13.9751 13.01 13.9751C13.01 13.9751 13.01 9.95894 13.01 9.89314C11.6652 9.89314 10.2874 9.89314 8.90917 9.89313ZM11.8 12.7341C11.3967 12.7341 10.9259 12.7341 10.5557 12.7341C10.4218 12.7341 10.2874 12.7341 10.1193 12.7341C10.1193 12.1789 10.1193 11.6571 10.1193 11.1018C10.6906 11.1018 11.2287 11.1018 11.8 11.1018C11.8 11.1341 11.8 12.7341 11.8 12.7341Z" fill="black" />
                            <path d="M63.0255 15.9345L63.0255 21.9427C63.0255 22.465 62.5548 22.8896 62.0178 22.8896L55.833 22.8896L55.833 23.8691L63.0255 23.8691L63.0598 23.8691C63.5637 23.8691 64.0001 23.4447 64.0001 22.9222L64.0001 22.8896L64.0001 15.9345L63.0255 15.9345Z" fill="black" />
                            <path d="M1.00844 7.90176L1.00843 1.8931C1.00843 1.37131 1.41176 0.978815 1.94957 0.978815L8.13446 0.978818C8.16805 0.978818 8.16805 0.946495 8.16805 0.946495L8.16805 0.0322066C8.16805 0.0322066 8.16805 -0.000116281 8.13446 -0.000116293L1.00843 -0.000118848C0.437022 -0.000119053 -1.50989e-05 0.424702 -1.39847e-05 0.978815L-6.4991e-08 7.90176C0 7.93408 0.033591 7.93408 0.033591 7.93408L0.97485 7.93408C0.97485 7.93408 1.00844 7.93408 1.00844 7.90176Z" fill="black" />
                            <path d="M61.2764 7.90207L61.2764 3.91823L44.9741 3.91823L44.9741 9.89341L44.9741 13.9107L55.8321 13.9107L55.8321 15.9022L44.9741 15.9022L44.9741 19.9185L61.2764 19.9185L61.2764 9.92689L50.4196 9.92689L50.4196 7.90207L61.2764 7.90207Z" fill="black" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='content-center'>
                    <div>
                      <div>
                        <p className='text-[12px] md:text-[16px] lg:text-[20px] poppins-bold sm:text-center'>Jadwal Sewa</p>
                      </div>
                      <div>
                        <p className='text-[10px] md:text-[14px] lg:text-[18px] poppins-bold text-slicing-grey sm:text-center'>17 Agustus 2024 - 18 Agustus 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='hidden md:grid grid-cols-1 sm:grid-cols-5 mt-[20px] gap-3' >
              <div>
                <div className=''>
                  <div>
                    <div className='flex justify-center'>
                      <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_3948)">
                          <rect x="0.5" width="44" height="44" rx="22" fill="#156E3E" />
                          <path d="M25.5085 13.5455V31H21.8182V17.0483H21.7159L17.7188 19.554V16.2812L22.0398 13.5455H25.5085Z" fill="white" />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_3948">
                            <rect x="0.5" width="44" height="44" rx="22" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                    </div>
                    <div>
                      <p className='text-center text-[12px] md:text-[16px] lg:text-[20px] poppins-bold text-slicing-foreground mt-[15px]'>Pesanan Dibuat</p>
                    </div>
                    <div>
                      <p className='text-center  text-[10px] md:text-[14px] lg:text-[18px] poppins-bold text-slicing-grey'>07:00, 16 Agustus 2024</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className='grid content-center h-full'>
                  <div className='' >
                    <hr className='border-t-4 border-slicing-grey1' />
                  </div>
                </div>
              </div>
              <div>
                <div className=''>
                  <div>
                    <div className='flex justify-center'>
                      <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_3954)">
                          <rect x="0.5" width="44" height="44" rx="22" fill="#EAEAEA" />
                          <path d="M15.9148 31V28.3409L22.1278 22.5881C22.6563 22.0767 23.0994 21.6165 23.4574 21.2074C23.821 20.7983 24.0966 20.3977 24.2841 20.0057C24.4716 19.608 24.5653 19.179 24.5653 18.7188C24.5653 18.2074 24.4489 17.767 24.2159 17.3977C23.983 17.0227 23.6648 16.7358 23.2614 16.5369C22.858 16.3324 22.4006 16.2301 21.8892 16.2301C21.3551 16.2301 20.8892 16.3381 20.4915 16.554C20.0938 16.7699 19.7869 17.0795 19.571 17.483C19.3551 17.8864 19.2472 18.3665 19.2472 18.9233H15.7443C15.7443 17.7812 16.0028 16.7898 16.5199 15.9489C17.0369 15.108 17.7614 14.4574 18.6932 13.9972C19.625 13.5369 20.6989 13.3068 21.9148 13.3068C23.1648 13.3068 24.2528 13.5284 25.179 13.9716C26.1108 14.4091 26.8352 15.017 27.3523 15.7955C27.8693 16.5739 28.1278 17.4659 28.1278 18.4716C28.1278 19.1307 27.9972 19.7812 27.7358 20.4233C27.4801 21.0653 27.0227 21.7784 26.3636 22.5625C25.7045 23.3409 24.7756 24.2756 23.5767 25.3665L21.0284 27.8636V27.983H28.358V31H15.9148Z" fill="#1F1F1F" />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_3954">
                            <rect x="0.5" width="44" height="44" rx="22" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>


                    </div>
                    <div>
                      <p className='text-center text-[12px] md:text-[16px] lg:text-[20px] poppins-bold mt-[15px]'>Pengantaran</p>
                    </div>
                    <div>
                      <p className='text-center  text-[10px] md:text-[14px] lg:text-[18px] poppins-bold text-slicing-grey'>17:00, 16 Agustus 2024</p>
                    </div>
                  </div>
                </div>

              </div>
              <div>
                <div className='grid content-center h-full'>
                  <div className='' >
                    <hr className='border-t-4 border-slicing-grey1' />
                  </div>
                </div>
              </div>
              <div>
                <div className=''>
                  <div>
                    <div className='flex justify-center'>
                      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_3960)">
                          <rect width="44" height="44" rx="22" fill="#EAEAEA" />
                          <path d="M21.8665 31.2386C20.5938 31.2386 19.4602 31.0199 18.4659 30.5824C17.4773 30.1392 16.696 29.5312 16.1222 28.7585C15.554 27.9801 15.2614 27.0824 15.2443 26.0653H18.9602C18.983 26.4915 19.1222 26.8665 19.3778 27.1903C19.6392 27.5085 19.9858 27.7557 20.4176 27.9318C20.8494 28.108 21.3352 28.196 21.875 28.196C22.4375 28.196 22.9347 28.0966 23.3665 27.8977C23.7983 27.6989 24.1364 27.4233 24.3807 27.071C24.625 26.7187 24.7472 26.3125 24.7472 25.8523C24.7472 25.3864 24.6165 24.9744 24.3551 24.6165C24.0994 24.2528 23.7301 23.9687 23.2472 23.7642C22.7699 23.5597 22.2017 23.4574 21.5426 23.4574H19.9148V20.7472H21.5426C22.0994 20.7472 22.5909 20.6506 23.017 20.4574C23.4489 20.2642 23.7841 19.9972 24.0227 19.6562C24.2614 19.3097 24.3807 18.9062 24.3807 18.446C24.3807 18.0085 24.2756 17.625 24.0653 17.2955C23.8608 16.9602 23.571 16.6989 23.196 16.5114C22.8267 16.3239 22.3949 16.2301 21.9006 16.2301C21.4006 16.2301 20.9432 16.321 20.5284 16.5028C20.1136 16.679 19.7812 16.9318 19.5312 17.2614C19.2812 17.5909 19.1477 17.9773 19.1307 18.4205H15.5938C15.6108 17.4148 15.8977 16.5284 16.4545 15.7614C17.0114 14.9943 17.7614 14.3949 18.7045 13.9631C19.6534 13.5256 20.7244 13.3068 21.9176 13.3068C23.1222 13.3068 24.1761 13.5256 25.0795 13.9631C25.983 14.4006 26.6847 14.9915 27.1847 15.7358C27.6903 16.4744 27.9403 17.304 27.9347 18.2244C27.9403 19.2017 27.6364 20.017 27.0227 20.6705C26.4148 21.3239 25.6222 21.7386 24.6449 21.9148V22.0511C25.929 22.2159 26.9063 22.6619 27.5767 23.3892C28.2528 24.1108 28.5881 25.0142 28.5824 26.0994C28.5881 27.0938 28.3011 27.9773 27.7216 28.75C27.1477 29.5227 26.3551 30.1307 25.3438 30.5739C24.3324 31.017 23.1733 31.2386 21.8665 31.2386Z" fill="#1F1F1F" />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_3960">
                            <rect width="44" height="44" rx="22" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>


                    </div>
                    <div>
                      <p className='text-center text-[12px] md:text-[16px] lg:text-[20px] poppins-bold mt-[15px]'>Pengembalian</p>
                    </div>
                    <div>
                      <p className='text-center  text-[10px] md:text-[14px] lg:text-[18px] poppins-bold text-slicing-grey'>07:00, 17 Agustus 2024</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className='grid md:hidden mt-[20px] gap-3' >
              <div className='flex justify-between'>
                <div>
                  <div className=''>
                    <div>
                      <div className='flex justify-center'>
                        <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_1_3948)">
                            <rect x="0.5" width="44" height="44" rx="22" fill="#156E3E" />
                            <path d="M25.5085 13.5455V31H21.8182V17.0483H21.7159L17.7188 19.554V16.2812L22.0398 13.5455H25.5085Z" fill="white" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_3948">
                              <rect x="0.5" width="44" height="44" rx="22" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>

                      </div>
                      <div>
                        <p className='text-center text-[12px] md:text-[16px] lg:text-[20px] poppins-bold text-slicing-foreground mt-[15px]'>Pesanan Dibuat</p>
                      </div>
                      <div>
                        <p className='text-center  text-[10px] md:text-[14px] lg:text-[18px] poppins-bold text-slicing-grey'>07:00, 16 Agustus 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className=''>
                    <div>
                      <div className='flex justify-center'>
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_1_3960)">
                            <rect width="44" height="44" rx="22" fill="#EAEAEA" />
                            <path d="M21.8665 31.2386C20.5938 31.2386 19.4602 31.0199 18.4659 30.5824C17.4773 30.1392 16.696 29.5312 16.1222 28.7585C15.554 27.9801 15.2614 27.0824 15.2443 26.0653H18.9602C18.983 26.4915 19.1222 26.8665 19.3778 27.1903C19.6392 27.5085 19.9858 27.7557 20.4176 27.9318C20.8494 28.108 21.3352 28.196 21.875 28.196C22.4375 28.196 22.9347 28.0966 23.3665 27.8977C23.7983 27.6989 24.1364 27.4233 24.3807 27.071C24.625 26.7187 24.7472 26.3125 24.7472 25.8523C24.7472 25.3864 24.6165 24.9744 24.3551 24.6165C24.0994 24.2528 23.7301 23.9687 23.2472 23.7642C22.7699 23.5597 22.2017 23.4574 21.5426 23.4574H19.9148V20.7472H21.5426C22.0994 20.7472 22.5909 20.6506 23.017 20.4574C23.4489 20.2642 23.7841 19.9972 24.0227 19.6562C24.2614 19.3097 24.3807 18.9062 24.3807 18.446C24.3807 18.0085 24.2756 17.625 24.0653 17.2955C23.8608 16.9602 23.571 16.6989 23.196 16.5114C22.8267 16.3239 22.3949 16.2301 21.9006 16.2301C21.4006 16.2301 20.9432 16.321 20.5284 16.5028C20.1136 16.679 19.7812 16.9318 19.5312 17.2614C19.2812 17.5909 19.1477 17.9773 19.1307 18.4205H15.5938C15.6108 17.4148 15.8977 16.5284 16.4545 15.7614C17.0114 14.9943 17.7614 14.3949 18.7045 13.9631C19.6534 13.5256 20.7244 13.3068 21.9176 13.3068C23.1222 13.3068 24.1761 13.5256 25.0795 13.9631C25.983 14.4006 26.6847 14.9915 27.1847 15.7358C27.6903 16.4744 27.9403 17.304 27.9347 18.2244C27.9403 19.2017 27.6364 20.017 27.0227 20.6705C26.4148 21.3239 25.6222 21.7386 24.6449 21.9148V22.0511C25.929 22.2159 26.9063 22.6619 27.5767 23.3892C28.2528 24.1108 28.5881 25.0142 28.5824 26.0994C28.5881 27.0938 28.3011 27.9773 27.7216 28.75C27.1477 29.5227 26.3551 30.1307 25.3438 30.5739C24.3324 31.017 23.1733 31.2386 21.8665 31.2386Z" fill="#1F1F1F" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_3960">
                              <rect width="44" height="44" rx="22" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>


                      </div>
                      <div>
                        <p className='text-center text-[12px] md:text-[16px] lg:text-[20px] poppins-bold mt-[15px]'>Pengembalian</p>
                      </div>
                      <div>
                        <p className='text-center  text-[10px] md:text-[14px] lg:text-[18px] poppins-bold text-slicing-grey'>07:00, 17 Agustus 2024</p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
              <div className='flex justify-center'>
                <div>
                  <div className=''>
                    <div>
                      <div className='flex justify-center'>
                        <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_1_3954)">
                            <rect x="0.5" width="44" height="44" rx="22" fill="#EAEAEA" />
                            <path d="M15.9148 31V28.3409L22.1278 22.5881C22.6563 22.0767 23.0994 21.6165 23.4574 21.2074C23.821 20.7983 24.0966 20.3977 24.2841 20.0057C24.4716 19.608 24.5653 19.179 24.5653 18.7188C24.5653 18.2074 24.4489 17.767 24.2159 17.3977C23.983 17.0227 23.6648 16.7358 23.2614 16.5369C22.858 16.3324 22.4006 16.2301 21.8892 16.2301C21.3551 16.2301 20.8892 16.3381 20.4915 16.554C20.0938 16.7699 19.7869 17.0795 19.571 17.483C19.3551 17.8864 19.2472 18.3665 19.2472 18.9233H15.7443C15.7443 17.7812 16.0028 16.7898 16.5199 15.9489C17.0369 15.108 17.7614 14.4574 18.6932 13.9972C19.625 13.5369 20.6989 13.3068 21.9148 13.3068C23.1648 13.3068 24.2528 13.5284 25.179 13.9716C26.1108 14.4091 26.8352 15.017 27.3523 15.7955C27.8693 16.5739 28.1278 17.4659 28.1278 18.4716C28.1278 19.1307 27.9972 19.7812 27.7358 20.4233C27.4801 21.0653 27.0227 21.7784 26.3636 22.5625C25.7045 23.3409 24.7756 24.2756 23.5767 25.3665L21.0284 27.8636V27.983H28.358V31H15.9148Z" fill="#1F1F1F" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_3954">
                              <rect x="0.5" width="44" height="44" rx="22" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>


                      </div>
                      <div>
                        <p className='text-center text-[12px] md:text-[16px] lg:text-[20px] poppins-bold mt-[15px]'>Pengantaran</p>
                      </div>
                      <div>
                        <p className='text-center  text-[10px] md:text-[14px] lg:text-[18px] poppins-bold text-slicing-grey'>17:00, 16 Agustus 2024</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
            {/* Pesanan */}
            <div className='bg-slicing-grey1 rounded border border-slicing-greyBorder mt-[20px]'>
              <div className='p-[20px]'>
                <div>
                  <p className='text-[14px] md:text-[24px] lg:text-[24px] poppins-bold'>Pesanan</p>
                </div>
                {/* List */}
                <div>
                  <div className='hidden lg:grid lg:grid-cols-7 gap-4 mt-[20px] '>
                    <div className='bg-slicing-deep rounded  lg:w-[124px] lg:h-[124px]  content-center'>
                      <div className='flex justify-center  '>
                        <img src="/images/slicing/redBag.png" className='lg:w-[100px] lg:h-[100px]  w-[55px] h-[55px] ' alt="" />
                      </div>

                    </div>
                    <div className='content-center col-span-2'>
                      <p className='text-[12px] md:text-[16px] lg:text-[18px] poppins-bold'>Carrier 60L + Rain Cover</p>
                    </div>
                    <div className='content-center'>
                      <p className='text-[12px] md:text-[16px] lg:text-[18px] poppins-bold text-slicing-grey text-end'>1 hari</p>
                    </div>
                    <div className='content-center'>
                      <p className='text-[12px] md:text-[16px] lg:text-[18px] poppins-bold text-slicing-grey text-end'>x1</p>

                    </div>
                    <div className='content-center'>
                      <p className='text-[12px] md:text-[16px] lg:text-[18px] poppins-bold text-slicing-grey text-end'>Rp 25.000</p>

                    </div>
                    <div className='content-center'>
                      <p className='text-[12px] md:text-[16px] lg:text-[18px] poppins-bold text-end'>Rp 25.000</p>

                    </div>
                  </div>
                  <div className='grid grid-cols-4 lg:hidden  mt-[20px] gap-3'>
                    <div className='bg-slicing-deep rounded  sm:w-[100px] sm:h-[100px]  content-center'>
                      <div className='flex justify-center'>
                        <img src="/images/slicing/redBag.png" className='sm:w-[80px] sm:h-[80px] w-[55px] h-[55px] ' alt="" />
                      </div>
                    </div>

                    <div className='col-span-3 content-center'>
                      <div>
                        <p className='text-[12px] md:text-[16px] lg:text-[18px] poppins-bold'>Carrier 601L + Rain Cover</p>
                      </div>
                      <div>
                        <p className='text-[12px] md:text-[16px] lg:text-[18px] poppins-bold text-slicing-grey '>1 hari</p>
                        <p className='text-[12px] md:text-[16px] lg:text-[18px] poppins-bold text-slicing-grey block md:hidden '>x1</p>
                      </div>
                      <div className='flex justify-between'>
                        <div className='flex justify-between'>
                          <p className='text-[12px] md:text-[16px] lg:text-[18px] poppins-bold text-slicing-grey '>Rp 25.000</p>
                          <p className='text-[12px] md:text-[16px] lg:text-[18px] poppins-bold text-slicing-grey ms-[25px] hidden md:block  '>x1</p>
                        </div>
                        <div>
                          <p className='text-[12px] md:text-[16px] lg:text-[18px] poppins-bold '>Rp 25.000</p>
                        </div>

                      </div>

                    </div>


                  </div>
                </div>
                <div>
                  <div className='grid content-center h-full'>
                    <div className='py-[20px]' >
                      <hr className='border-t-1 border-slicing-greyBorder' />
                    </div>
                  </div>
                </div>


                <div>
                  <div className='grid content-center h-full'>
                    <div className='py-[20px]' >
                      <hr className='border-t-1 border-slicing-greyBorder' />
                    </div>
                  </div>
                </div>


                <div>
                  <div className='grid content-center h-full'>
                    <div className='py-[20px]' >
                      <hr className='border-t-1 border-slicing-greyBorder' />
                    </div>
                  </div>
                </div>


                <div>
                  <div className='grid content-center h-full'>
                    <div className='py-[20px]' >
                      <hr className='border-t-1 border-slicing-greyBorder' />
                    </div>
                  </div>
                </div>


                <div>
                  <div className='grid content-center h-full'>
                    <div className='py-[20px]' >
                      <hr className='border-t-1 border-slicing-greyBorder' />
                    </div>
                  </div>
                </div>


                {/* total */}
                <div>
                  <div className='sm:grid grid-cols-4'>
                    <div className='col-span-3'>

                    </div>
                    <div>

                      <div className='flex justify-between'>
                        <p className='text-[12px] md:text-[16px] lg:text-[20px] poppins-bold text-slicing-grey'>Subtotal</p>
                        <p className='text-[12px] md:text-[16px] lg:text-[20px] poppins-bold text-slicing-grey'>Rp 90.000</p>

                      </div>
                      <div className='flex justify-between'>
                        <p className='text-[12px] md:text-[16px] lg:text-[20px] poppins-bold text-slicing-grey'>Ongkos Kirim</p>
                        <p className='text-[12px] md:text-[16px] lg:text-[20px] poppins-bold text-slicing-foreground'>Gratis</p>

                      </div>

                      <div>
                        <div className='grid content-center h-full'>
                          <div className='py-[20px]' >
                            <hr className='border-t-1 border-slicing-greyBorder' />
                          </div>
                        </div>
                      </div>


                      <div className='flex justify-between'>
                        <p className='text-[12px] md:text-[16px] lg:text-[20px] poppins-bold '>Total</p>
                        <p className='text-[12px] md:text-[16px] lg:text-[20px] poppins-bold '>Rp 90.000</p>

                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default Checkout
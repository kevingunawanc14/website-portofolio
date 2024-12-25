import React from 'react'
import { TitleProps } from '../type';

function Title({ title, description }: TitleProps) {
    return (
        <div className='my-[20px]'>
            <div className='bg-white border rounded-lg border-slate-300'>
                <div className='grid grid-cols-5 '>
                    <div>

                    </div>
                    <div className='col-span-3 text-center p-[30px] '>
                        <p className='text-[28px] text-red-600 poppins-semibold'>{title}</p>
                        <p className='text-[16px] text-blue-950 poppins-regular'>{description}</p>
                    </div>
                    <div className='grid content-end pe-[34px]'>
                        <div className='flex justify-end '>
                            <svg width="140" height="135" viewBox="0 0 140 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M133.336 6.65629C133.336 2.98938 130.333 -0.00878906 126.666 -0.00878906H113.335C109.669 -0.00878906 106.67 2.98938 106.67 6.65629V119.655C113.335 123.4 123.166 133.626 133.336 131.96V6.65629Z" fill="url(#paint0_linear_117_21608)" />
                                <path d="M136.667 143.163H133.335V130.992C123.165 129.326 114.003 124.995 106.669 118.492V143.163H99.9984V111.493C99.9984 92.9129 99.9984 89.363 99.9984 76.8632C99.9984 64.3634 99.9984 57.6036 99.9984 45.1595V40.1607C99.9984 36.4938 97.0002 33.4956 93.3333 33.4956H80.0032C76.3363 33.4956 73.3325 36.4938 73.3325 40.1607V143.163H66.6675V73.1628C66.6675 69.4959 63.6693 66.4978 60.0024 66.4978H46.6667C42.9998 66.4978 40.0016 69.4959 40.0016 73.1628V143.163H33.3365V106.494C33.3365 102.827 30.3328 99.8287 26.6714 99.8287H13.3357C9.66882 99.8287 6.67065 102.827 6.67065 106.494V143.163H3.33811C1.50466 143.163 0 144.662 0 146.495C0 148.329 1.50466 149.828 3.33811 149.828H136.667C138.501 149.828 140 148.329 140 146.495C140 144.495 138.501 143.163 136.667 143.163Z" fill="url(#paint1_linear_117_21608)" />
                                <defs>
                                    <linearGradient id="paint0_linear_117_21608" x1="114.294" y1="8.49605" x2="152.952" y2="19.4841" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#F9D075" />
                                        <stop offset="0.1826" stop-color="#F9C870" />
                                        <stop offset="0.459" stop-color="#FAB463" />
                                        <stop offset="0.7931" stop-color="#FA924E" />
                                        <stop offset="1" stop-color="#FB793F" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_117_21608" x1="40.0251" y1="40.9824" x2="96.6539" y2="136.979" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#F9D075" />
                                        <stop offset="0.1826" stop-color="#F9C870" />
                                        <stop offset="0.459" stop-color="#FAB463" />
                                        <stop offset="0.7931" stop-color="#FA924E" />
                                        <stop offset="1" stop-color="#FB793F" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Title
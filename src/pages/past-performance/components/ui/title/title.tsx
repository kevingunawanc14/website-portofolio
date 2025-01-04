import React from 'react'
import { TitleProps } from './type';

function Title({ title, description, svg }: TitleProps) {
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
                            {svg}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Title
import React from 'react'
import CopyRightProps from './type';

function Copyright({ year }: CopyRightProps) {
    return (
        <div>
            <div className='flex justify-center'>
                <p className='text-[14px] poppins-regular pt-4 pb-2'><span className='text-orange-400'>Copyright ©</span> {year} Keloola by Thrive</p>
            </div>
        </div>
    )
}

export default Copyright
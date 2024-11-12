import React from 'react'

function Footer() {
    return (
        <div className='container  '>
            <div className='h-40 grid grid-cols-2 sm:grid-cols-3 content-end pb-1  '>

                <div className='border-t-2 text-center'>
                    <a href='https://discord.gg/kRwwc2zGdA' target='_blank' className='poppins-medium  text-sm mt-2 text-center '>Community
                    </a>
                    <div className='flex justify-center'>
                        <div className='cursor-pointer'>
                            <lord-icon
                                src="https://cdn.lordicon.com/zvnxzuwv.json"
                                trigger="loop"
                                style={{
                                    // height: '2rem',
                                    paddingTop: '5px'
                                }}
                            >
                            </lord-icon>
                        </div>
                    </div>
                </div>
                <div className='border-t-2 text-center'>
                    <a href='https://discord.gg/kRwwc2zGdA' target='_blank' className='poppins-medium  text-sm mt-2 text-center'>Support<span className='hidden sm:inline-block poppins-medium text-sm'>:</span> <span className='hidden sm:inline-block poppins-medium text-sm'>sisteminformasikevin@gmail.com</span>
                    </a>

                    <div className='flex justify-center ' >
                        <div className='cursor-pointer'>
                            <lord-icon
                                src="https://cdn.lordicon.com/jdgfsfzr.json"
                                trigger="loop"
                                style={{
                                    // height: '2rem',
                                    paddingTop: '5px'
                                }}
                            >
                            </lord-icon>
                        </div>
                    </div>
                </div>
                <div className='border-t-2 text-center hidden sm:inline-block'>
                    <a href="https://lordicon.com/" target='_blank' className='poppins-medium text-sm'>Animated icons by Lordicon.com</a>
                    
                    <div className='flex justify-center'>
                        <div className='cursor-pointer'>
                            <lord-icon
                                src="https://cdn.lordicon.com/yrzvvdtr.json"
                                trigger="loop"
                                style={{
                                    // height: '2rem',
                                    paddingTop: '5px'
                                }}
                            >
                            </lord-icon>
                        </div>
                    </div>
                </div>

            </div>

            <div className='text-center block sm:hidden'>
                <a href="https://lordicon.com/" target='_blank' className='poppins-medium text-sm'>Animated icons by Lordicon.com
                </a>
            </div>

        </div >
    )
}

export default Footer
import React from 'react'

function Footer() {
    return (
        <div className='container '>
            <div className='h-40 grid grid-cols-1 sm:grid-cols-3 content-end pb-1  '>

                <div className='border-t-2'>
                    <p className='poppins-medium  text-sm mt-2 text-center '>Community</p>
                    <div className='flex justify-center cursor-pointer'>
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
                <div className='border-t-2'>
                    <p className='poppins-medium  text-sm mt-2 text-center'>Support</p>
                    <div className='flex justify-center cursor-pointer' >
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
                {/* <div className='border-t-2'>
                    <p className='poppins-medium  text-sm mt-2 text-center'>Feature Requests</p>
                    <div className='flex justify-center cursor-pointer'>
                        <lord-icon
                            src="https://cdn.lordicon.com/pflszboa.json"
                            trigger="loop"
                            style={{
                                // height: '2rem',
                                paddingTop: '5px'
                            }}
                        >
                        </lord-icon>
                    </div>

                </div>
                <div className='border-t-2'>
                    <p className='poppins-medium  text-sm mt-2 text-center'>Bug Report</p>
                    <div className='flex justify-center cursor-pointer'>
                        <lord-icon
                            src="https://cdn.lordicon.com/rpgflpkp.json"
                            trigger="loop"
                            state="loop-bug"
                            style={{
                                // height: '2rem',
                                paddingTop: '5px'
                            }}
                        >
                        </lord-icon>
                    </div>

                </div> */}
                <div className='border-t-2 text-center'>
                    <div className='mt-1'>
                        <a href="https://lordicon.com/" className='poppins-medium text-sm   '>Animated icons by Lordicon.com
                        </a>
                        <div className='flex justify-center cursor-pointer'>
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

        </div >
    )
}

export default Footer
import React from 'react'

export default function temp() {
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 container mx-auto justify-items-start mt-5'>
                <div className='h-72 ms-18 sm:ms-24'>
                    <div>
                        <p className='rubik-regular text-xl '>Biceps</p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        viewport={{ once: true }}
                        className='relative '>
                        <div className="absolute bottom-50 left-5 h-64 w-5 bg-primary -rotate-12"></div>


                        <div className="relative">
                            <motion.div
                                className="absolute top-36 left-0 w-64 h-5 bg-primary rotate-12"
                                animate={{ rotate: -55 }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                }}
                            >
                                <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 bg-secondary w-10 h-10 rounded-full"></div>
                            </motion.div>
                        </div>


                    </motion.div>
                </div>
                <div className='ms-18 sm:ms-24 '>
                    <div>
                        <p className='rubik-regular text-xl '>Triceps</p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        viewport={{ once: true }}
                        className='relative '>
                        <div className="absolute bottom-50 left-[90px] h-64 w-5 bg-primary"></div>


                        <div className="relative">
                            <motion.div
                                className="absolute top-36 left-0 w-64 h-5 bg-primary"
                                animate={{ rotate: 75 }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                }}
                            >
                                <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 bg-secondary w-10 h-10 rounded-full"></div>
                            </motion.div>
                        </div>


                    </motion.div>

                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 container mx-auto  justify-items-start mt-72 sm:mt-10'>
                <div className='h-72 ms-18 sm:ms-24 '>
                    <div>
                        <p className='rubik-regular text-xl '>Chest</p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        viewport={{ once: true }}
                        className='relative '>

                        <div className="relative">
                            <motion.div className="absolute bottom-[-220px] left-5 h-40 w-5 bg-primary"
                                animate={{ y: [30, -10, 30] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity, // repeats the animation infinitely
                                    repeatType: "loop", // loops the animation (no reversing)
                                    ease: "easeInOut", // smoothens the transition
                                }}
                            >
                                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-full bg-secondary w-10 h-10 rounded-full"></div>
                            </motion.div>


                        </div>

                        <div className="relative">
                            {/* Upper Rotated Line */}
                            <motion.div className="absolute bottom-[-220px] left-20 h-40 w-5 bg-primary"
                                animate={{ y: [30, -10, 30] }} // animate up and down
                                transition={{
                                    duration: 3, // controls how long each animation cycle takes
                                    repeat: Infinity, // repeats the animation infinitely
                                    repeatType: "loop", // loops the animation (no reversing)
                                    ease: "easeInOut", // smoothens the transition
                                }}
                            >
                                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-full bg-secondary w-10 h-10 rounded-full"></div>
                            </motion.div>


                        </div>

                        <div className="relative">
                            {/* The Rotating Line */}
                            <motion.div
                                className="absolute top-52 left-0 w-64 h-5 bg-primary"
                            // animate={{ rotate: -55 }} // rotates the line and the attached div
                            // transition={{
                            //     duration: 3, // controls how long each rotation takes
                            //     repeat: Infinity, // repeats the animation infinitely
                            //     repeatType: "mirror", // mirrors the animation (back and forth)
                            // }}
                            >
                                {/* The Attached Div (moving with the line) */}
                                {/* <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 bg-secondary w-10 h-10 rounded-full"></div> */}
                            </motion.div>
                        </div>


                    </motion.div>
                </div>
                <div className='ms-18 sm:ms-24'>
                    <div>
                        <p className='rubik-regular text-xl '>Back</p>
                    </div>



                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        viewport={{ once: true }}
                        className='relative '>

                        <div className="relative">
                            {/* The Rotating Line */}
                            <motion.div
                                className="absolute top-10 left-0 w-64 h-5 bg-primary"
                                animate={{ y: [70, -10, 70] }} // animate up and down
                                transition={{
                                    duration: 3, // controls how long each animation cycle takes
                                    repeat: Infinity, // repeats the animation infinitely
                                    repeatType: "loop", // loops the animation (no reversing)
                                    ease: "easeInOut", // smoothens the transition
                                }}
                            >
                                {/* The Attached Div (moving with the line) */}
                                {/* <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 bg-secondary w-10 h-10 rounded-full"></div> */}
                            </motion.div>
                        </div>


                        <div className="relative">
                            {/* Upper Rotated Line */}
                            <motion.div className="absolute bottom-[-220px] left-5 h-40 w-5 bg-primary"
                                animate={{ y: [70, -10, 70] }} // animate up and down
                                transition={{
                                    duration: 3, // controls how long each animation cycle takes
                                    repeat: Infinity, // repeats the animation infinitely
                                    repeatType: "loop", // loops the animation (no reversing)
                                    ease: "easeInOut", // smoothens the transition
                                }}
                            >
                                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-full bg-secondary w-10 h-10 rounded-full"></div>
                            </motion.div>


                        </div>

                        <div className="relative">
                            {/* Upper Rotated Line */}
                            <motion.div className="absolute bottom-[-220px] left-52 h-40 w-5 bg-primary"
                                animate={{ y: [70, -10, 70] }} // animate up and down
                                transition={{
                                    duration: 3, // controls how long each animation cycle takes
                                    repeat: Infinity, // repeats the animation infinitely
                                    repeatType: "loop", // loops the animation (no reversing)
                                    ease: "easeInOut", // smoothens the transition
                                }}
                            >
                                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-full bg-secondary w-10 h-10 rounded-full"></div>
                            </motion.div>


                        </div>

                        <motion.div className="absolute bottom-[-180px] left-28 h-40 w-5 bg-primary"

                        >

                        </motion.div>




                    </motion.div>



                </div>

            </div>
        </div>
    )
}

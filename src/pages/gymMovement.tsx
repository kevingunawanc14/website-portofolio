import React, { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { useState, useEffect } from 'react';

interface Movement {
    name: string;
    type: string[];
    id: number;
    components: ReactNode;
}

function GymMovement() {

    const movements = [
        { name: 'Incline Dumbell Press', type: ['upper', 'fullBody'], id: 1, components: <InclineDumbellPress /> },
        { name: 'Overhead Press', type: ['upper', 'fullBody'], id: 2, components: <OverheadPress /> },
        { name: 'Deadlift', type: ['upper', 'fullBody'], id: 3, components: <Deadlift /> },
        { name: 'Pull up', type: ['lower', 'fullBody'], id: 4, components: <PullUp /> },
        { name: 'Barbell Squat', type: ['lower', 'fullBody'], id: 5, components: <BarbellSquat /> },
        { name: 'Bicep Curls', type: ['upper', 'fullBody'], id: 6, components: <BicepCurls /> },
        { name: 'Plank', type: ['core'], id: 8, components: <Plank /> },
        { name: 'Sit Up', type: ['core'], id: 9, components: <SitUp /> },
        { name: 'Rope Cable Crunch', type: ['core'], id: 10, components: <RopeCableCrunch /> },
        { name: 'Walking Flat', type: ['cardio'], id: 11, components: <WalkingFlat /> },
        { name: 'Walking Incline', type: ['cardio'], id: 12, components: <WalkingIncline /> },
        { name: 'Running Flat', type: ['cardio'], id: 13, components: <RunningFlat /> },
        { name: 'Running Incline', type: ['cardio'], id: 14, components: <RunningIncline /> },
    ];

    const [activeMovement, setActiveMovements] = useState<Movement[]>([]);

    useEffect(() => {
        const filteredMovement = movements.filter(movement => movement.type.includes('fullBody'));
        setActiveMovements(filteredMovement)
    }, []);

    const listItems = activeMovement.map(movement =>
        <li key={movement.id}>
            {movement.name}
        </li>
    );

    const handleFilterMovement = (value: string) => {
        const filteredMovement = movements.filter(movement => movement.type.includes(value));
        setActiveMovements(filteredMovement)
    }

    const movementItems = activeMovement.map(movement =>
        <div className='min-h-80' key={movement.id}>
            <p className='text-lg rubik-regular '>
                {movement.name}
            </p>
            {movement.components}
        </div>
    );

    return (
        <div id='gym' className='h-screen mt-[500px]'>
            <div className='container mx-auto'>
                <p className="text-primary text-4xl md:text-5xl mb-4 font-bold poppins-medium tracking-tight pt-2">Gym Movement</p>
            </div>
            <div className='container mx-auto'>
                <Select onValueChange={handleFilterMovement}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Type: Full Body" />
                    </SelectTrigger>
                    <SelectContent >
                        <SelectGroup>
                            <SelectItem value="fullBody">Full Body</SelectItem>
                            <SelectItem value="upper">Upper</SelectItem>
                            <SelectItem value="lower">Lower</SelectItem>
                            <SelectItem value="core">Core</SelectItem>
                            <SelectItem value="cardio">Cardio</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className='container mx-auto mt-5'>
                <div className="grid sm:grid-cols-3 grid-cols-1   ">
                    {movementItems}
                </div>
            </div>
        </div>
    )
}

export default GymMovement

function InclineDumbellPress() {
    return (
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

            <div className=" bg-primary absolute bottom-[-20rem] left-[5.625rem]  w-[1.25rem] h-[16rem] rotate-[90deg] rounded-lg"></div>
            <div className=" bg-primary absolute bottom-[-16rem] left-[4.375rem]  w-[1.25rem] h-[16rem] -rotate-[60deg] rounded-t-lg"></div>

            <div className=" bg-accent absolute bottom-[-15.5rem] left-[5.5rem]  w-[1.25rem] h-[16rem] -rotate-[60deg] rounded-t-lg">
                <motion.div
                    animate={{ x: [1, -1, 1] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "mirror",
                    }}
                    className="bg-secondary absolute left-[-0.5rem] w-[2.25rem] h-[2.5rem] rounded-lg "></motion.div>
            </div>

            <div className=" bg-primary absolute bottom-[-17rem] left-[0rem]      w-[1rem]    h-[5rem]  -rotate-[0deg]"></div>
            <div className=" bg-primary absolute bottom-[-17rem] left-[12rem]     w-[1rem]    h-[5rem]  -rotate-[0deg]"></div>

            <motion.div
                animate={{ y: [30, -10, 30] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                }}
                className="bg-secondary  absolute bottom-[-8rem] left-[4rem] w-[1.25rem] h-[8rem] -rotate-[-30deg] rounded-lg">
                <div className="bg-primary absolute left-[-0.5rem] w-[2.25rem] h-[2.5rem] rounded-lg "></div>
            </motion.div>

            <div className=" bg-primary absolute bottom-[-25rem] left-[5.625rem]  w-[1.25rem] h-[16rem] rotate-[90deg] rounded-lg"></div>
        </motion.div>
    );
}

function OverheadPress() {
    return (
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


            <div
                className="bg-accent absolute bottom-[-17rem] left-[4.375rem]  w-[1.25rem] h-[15rem] -rotate-[0deg] rounded-t-lg">
                <motion.div
                    animate={{ x: [4, -8, 4] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "mirror",
                    }}
                    className="bg-secondary absolute left-[-0.5rem] w-[2.25rem] h-[2.5rem] rounded-lg "></motion.div>
            </div>

            <motion.div
                animate={{ y: [50, -10, 50] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                }}
                className="bg-secondary  absolute bottom-[-8rem] left-[4.5rem] w-[1.25rem] h-[8rem] -rotate-[-30deg] rounded-lg">
                <div className="bg-primary absolute left-[-0.5rem] w-[2.25rem] h-[2.5rem] rounded-lg "></div>
            </motion.div>

            <div className=" bg-primary absolute bottom-[-25rem] left-[5.625rem]  w-[1.25rem] h-[16rem] rotate-[90deg] rounded-lg"></div>
        </motion.div>
    );
}

function Deadlift() {
    return (
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

            <motion.div
                animate={{ y: [10, -10, 20] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                }}>
                <div
                    className="bg-accent absolute bottom-[-17rem] left-[4.375rem]  w-[1.25rem] h-[15rem] -rotate-[0deg] rounded-t-lg">
                    <motion.div
                        animate={{ x: [4, -8, 4] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "mirror",
                        }}
                        className="bg-secondary absolute left-[-0.5rem] w-[2.25rem] h-[2.5rem] rounded-lg "></motion.div>
                </div>

                <motion.div
                    className="bg-secondary  absolute bottom-[-15rem] left-[6rem] w-[1.25rem] h-[8rem] -rotate-[-0deg] rounded-lg"
                    initial={{ rotate: 160 }}
                    animate={{ y: [0, -30, 0] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}>
                    <div className="bg-primary absolute left-[-0.5rem] w-[2.25rem] h-[2.5rem] rounded-lg "></div>
                </motion.div>
            </motion.div>


            <div className=" bg-primary absolute bottom-[-25rem] left-[5.625rem]  w-[1.25rem] h-[16rem] rotate-[90deg] rounded-lg"></div>
        </motion.div>
    );
}

function PullUp() {
    return (
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

            <div className=" bg-primary absolute bottom-[-10rem] left-[5.625rem]  w-[1.25rem] h-[16rem] rotate-[90deg] rounded-lg"></div>
            <div className=" bg-primary absolute bottom-[-17rem] left-[0rem]  w-[1.25rem] h-[16rem] -rotate-[0deg] rounded-t-lg"></div>
            <div className=" bg-primary absolute bottom-[-17rem] left-[11.5rem]  w-[1.25rem] h-[16rem] -rotate-[0deg] rounded-t-lg"></div>

            <motion.div
                animate={{ y: [0, -40, 0] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                }}
                className="bg-accent absolute bottom-[-17rem] left-[6rem] w-[1.25rem] h-[15rem] -rotate-[0deg] rounded-t-lg z-10">
                <motion.div
                    animate={{ y: [4, -8, 4] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "mirror",
                    }}
                    className="bg-secondary absolute left-[-0.5rem] w-[2.25rem] h-[2.5rem] rounded-lg "></motion.div>
            </motion.div>

            <motion.div
                initial={{ rotate: -35 }}
                animate={{ y: [2, -1, 2] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                }}
                className="bg-secondary  absolute bottom-[-8rem] left-[4rem] w-[1.25rem] h-[8rem] -rotate-[-30deg] rounded-lg">
                <div className="bg-primary absolute left-[-0rem] w-[1.25rem] h-[1rem] rounded-t-lg"></div>
            </motion.div>

            <motion.div
                initial={{ rotate: 35 }}

                animate={{ y: [2, -1, 2] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                }}
                className="bg-secondary  absolute bottom-[-8rem] left-[8rem] w-[1.25rem] h-[8rem] -rotate-[-30deg] rounded-lg">
                <div className="bg-primary absolute left-[-0rem] w-[1.25rem] h-[1rem] rounded-t-lg  "></div>
            </motion.div>



            <div className=" bg-primary absolute bottom-[-25rem] left-[5.625rem]  w-[1.25rem] h-[16rem] rotate-[90deg] rounded-lg"></div>
        </motion.div >
    );
}

function BarbellSquat() {
    return (
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

            <motion.div
                animate={{ y: [10, -10, 20] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                }}>

                <div
                    className="bg-accent absolute bottom-[-17rem] left-[4.375rem]  w-[1.25rem] h-[15rem] -rotate-[0deg] rounded-t-lg">
                    <motion.div
                        animate={{ x: [4, -8, 4] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "mirror",
                        }}
                        className="bg-secondary absolute left-[-0.5rem] w-[2.25rem] h-[2.5rem] rounded-lg "></motion.div>
                </div>

                <motion.div
                    className="bg-secondary  absolute bottom-[-11rem] left-[4rem] w-[1.25rem] h-[8rem] -rotate-[-0deg] rounded-lg">
                    <div className="bg-primary absolute left-[-0.5rem] w-[2.25rem] h-[2.5rem] rounded-lg "></div>
                </motion.div>
            </motion.div>


            <div className=" bg-primary absolute bottom-[-25rem] left-[5.625rem]  w-[1.25rem] h-[16rem] rotate-[90deg] rounded-lg"></div>
        </motion.div>
    );
}

function BicepCurls() {
    return (
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


            <div
                className="bg-accent absolute bottom-[-17rem] left-[4.375rem]  w-[1.25rem] h-[15rem] -rotate-[0deg] rounded-t-lg">
                <motion.div
                    animate={{ x: [4, -8, 4] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "mirror",
                    }}
                    className="bg-secondary absolute left-[-0.5rem] w-[2.25rem] h-[2.5rem] rounded-lg "></motion.div>
            </div>

            <motion.div
                className="bg-secondary  absolute bottom-[-13rem] left-[6rem] w-[1.25rem] h-[8rem] -rotate-[-0deg] rounded-lg"
                initial={{ rotate: 150 }}
                animate={{ rotate: 20 }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "mirror",
                }}>
                <div className="bg-primary absolute left-[-0.5rem] w-[2.25rem] h-[2.5rem] rounded-lg "></div>
            </motion.div>





            <div className=" bg-primary absolute bottom-[-25rem] left-[5.625rem]  w-[1.25rem] h-[16rem] rotate-[90deg] rounded-lg"></div>
        </motion.div>
    );
}

function RomanianDeadlift() {
    return (
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




            <div className=" bg-primary absolute bottom-[-25rem] left-[5.625rem]  w-[1.25rem] h-[16rem] rotate-[90deg] rounded-lg"></div>
        </motion.div>
    );
}

function Plank() {
    return (
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

            <motion.div
                initial={{ rotate: 90 }}
                animate={{ y: [1, 2, -1] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                }}
                className="bg-accent absolute bottom-[-21rem] left-[6rem]  w-[1.25rem] h-[15rem]  rounded-t-lg">
                <motion.div
                    animate={{ x: [4, -8, 4] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "mirror",
                    }}
                    className="bg-secondary absolute left-[-0.5rem] w-[2.25rem] h-[2.5rem] rounded-lg "></motion.div>
            </motion.div>

            <motion.div
                className="bg-secondary  absolute bottom-[-19rem] left-[8rem] w-[1.25rem] h-[8rem] -rotate-[-110deg] rounded-lg">
                <div className="bg-primary absolute left-[-0rem] w-[1.25rem] h-[1rem] rounded-t-lg "></div>
            </motion.div>


            <div className=" bg-primary absolute bottom-[-25rem] left-[5.625rem]  w-[1.25rem] h-[16rem] rotate-[90deg] rounded-lg"></div>
        </motion.div>
    );
}

function SitUp() {
    return (
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

            <motion.div
                initial={{ rotate: 90 }}
                animate={{ rotate: 70 }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                }}
                className="bg-accent absolute bottom-[-23.15rem] left-[6rem]  w-[1.25rem] h-[15rem]  rounded-t-lg">
                <motion.div
                    // animate={{ x: [4, -8, 4] }}
                    // transition={{
                    //     duration: 3,
                    //     repeat: Infinity,
                    //     repeatType: "mirror",
                    // }}
                    className="bg-secondary absolute left-[-0.5rem] w-[2.25rem] h-[2.5rem] rounded-lg "></motion.div>
            </motion.div>

            <motion.div
                className="bg-secondary  absolute bottom-[-19rem] left-[6rem] w-[1.25rem] h-[8rem] -rotate-[90deg] rounded-lg">
                <div className="bg-primary absolute left-[-0rem] w-[1.25rem] h-[1rem] rounded-t-lg "></div>
            </motion.div>


            <div className=" bg-primary absolute bottom-[-25rem] left-[5.625rem]  w-[1.25rem] h-[16rem] rotate-[90deg] rounded-lg"></div>
        </motion.div>
    );
}

function RopeCableCrunch() {
    return (
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

            <motion.div
                initial={{ rotate: 40 }}
                animate={{ rotate: 30 }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                }}
                className=" bg-primary absolute bottom-[-13rem] left-[9rem]  w-[1.25rem] h-[10rem] rotate-[30deg] rounded-lg">

            </motion.div>
            <div className=" bg-primary absolute bottom-[-17rem] left-[11.5rem]  w-[1.25rem] h-[16rem] -rotate-[0deg] rounded-t-lg"></div>

            <motion.div
            // initial={{ rotate: 45 }}
            // animate={{ rotate: 10 }}
            // transition={{
            //     duration: 3,
            //     repeat: Infinity,
            //     repeatType: "mirror",
            // }}
            >
                <div>
                    <motion.div
                        initial={{ rotate: 45 }}
                        animate={{ rotate: 90 }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "mirror",
                        }}
                        className="bg-accent absolute bottom-[-20rem] left-[4rem]  w-[1.25rem] h-[15rem]  rounded-t-lg">
                        <motion.div
                            // animate={{ x: [4, -8, 4] }}
                            // transition={{
                            //     duration: 3,
                            //     repeat: Infinity,
                            //     repeatType: "mirror",
                            // }}
                            className="bg-secondary absolute left-[-0.5rem] w-[2.25rem] h-[2.5rem] rounded-lg "></motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ rotate: 35 }}
                        animate={{ rotate: 70 }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "mirror",
                        }}
                        className="bg-secondary  absolute bottom-[-15rem] left-[5rem] w-[1.25rem] h-[8rem] -rotate-[-50deg] rounded-lg">
                        <div className="bg-primary absolute left-[-0rem] w-[1.25rem] h-[1rem] rounded-t-lg "></div>
                    </motion.div>
                </div>

            </motion.div>



            <div className=" bg-primary absolute bottom-[-25rem] left-[5.625rem]  w-[1.25rem] h-[16rem] rotate-[90deg] rounded-lg"></div>
        </motion.div>
    );
}

function WalkingFlat() {
    return (
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


            <motion.div
                animate={{ x: [0, 100] }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    repeatType: "loop",
                }}
                className=""
            >

                <div
                    className="bg-accent absolute bottom-[-17rem] left-[4.375rem]  w-[1.25rem] h-[15rem] -rotate-[0deg] rounded-t-lg">
                    <motion.div
                        animate={{ x: [4, -8, 4] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "mirror",
                        }}
                        className="bg-secondary absolute left-[-0.5rem] w-[2.25rem] h-[2.5rem] rounded-lg "></motion.div>
                </div>

                <motion.div
                    animate={{
                        rotate: [140, 160, 140],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "mirror",
                    }}

                    className="bg-secondary  absolute bottom-[-12rem] left-[5rem] w-[1.25rem] h-[6rem] -rotate-[-0deg] rounded-lg">
                    <div className="bg-primary absolute left-[-0rem] w-[1.25rem] h-[2rem] rounded-t-lg "></div>
                </motion.div>
            </motion.div>

            <div className=" bg-primary absolute bottom-[-25rem] left-[5.625rem]  w-[1.25rem] h-[16rem] rotate-[90deg] rounded-lg"></div>


        </motion.div>

    );
}

function WalkingIncline() {
    return (
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

            <motion.div
                animate={{ x: [0, 100] }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    repeatType: "loop",
                }}
                className=""
            >
                <div
                    className="bg-accent absolute bottom-[-17rem] left-[4.375rem]  w-[1.25rem] h-[15rem] -rotate-[0deg] rounded-t-lg">
                    <motion.div
                        animate={{ x: [4, -8, 4] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "mirror",
                        }}
                        className="bg-secondary absolute left-[-0.5rem] w-[2.25rem] h-[2.5rem] rounded-lg "></motion.div>
                </div>

                <motion.div
                    animate={{
                        rotate: [140, 160, 140],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "mirror",
                    }}

                    className="bg-secondary  absolute bottom-[-12rem] left-[5rem] w-[1.25rem] h-[6rem] -rotate-[-0deg] rounded-lg">
                    <div className="bg-primary absolute left-[-0rem] w-[1.25rem] h-[2rem] rounded-t-lg "></div>
                </motion.div>
            </motion.div>



            <div className=" bg-primary absolute bottom-[-25rem] left-[5.625rem]  w-[1.25rem] h-[16rem] rotate-[80deg] rounded-lg"></div>
        </motion.div>
    );
}

function RunningFlat() {
    return (
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

            <motion.div
                animate={{ x: [0, 100] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop",
                }}
                className=""
            >
                <div
                    className="bg-accent absolute bottom-[-17rem] left-[4.375rem]  w-[1.25rem] h-[15rem] -rotate-[0deg] rounded-t-lg">
                    <motion.div
                        animate={{ x: [4, -8, 4] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "mirror",
                        }}
                        className="bg-secondary absolute left-[-0.5rem] w-[2.25rem] h-[2.5rem] rounded-lg "></motion.div>
                </div>

                <motion.div
                    animate={{
                        rotate: [70, 95, 70],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "mirror",
                    }}

                    className="bg-secondary  absolute bottom-[-10rem] left-[6rem] w-[1.25rem] h-[6rem] -rotate-[-0deg] rounded-lg">
                    <div className="bg-primary absolute left-[-0rem] w-[1.25rem] h-[2rem] rounded-t-lg "></div>
                </motion.div>

            </motion.div>


            <div className=" bg-primary absolute bottom-[-25rem] left-[5.625rem]  w-[1.25rem] h-[16rem] rotate-[90deg] rounded-lg"></div>
        </motion.div>
    );
}

function RunningIncline() {
    return (
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


            <motion.div
                animate={{ x: [0, 100] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop",
                }}
                className=""
            >
                <div
                    className="bg-accent absolute bottom-[-17rem] left-[4.375rem]  w-[1.25rem] h-[15rem] -rotate-[0deg] rounded-t-lg"
                >
                    <motion.div
                        animate={{ x: [4, -8, 4] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "mirror",
                        }}
                        className="bg-secondary absolute left-[-0.5rem] w-[2.25rem] h-[2.5rem] rounded-lg"
                    ></motion.div>
                </div>

                <motion.div
                    animate={{
                        rotate: [70, 95, 70],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "mirror",
                    }}
                    className="bg-secondary absolute bottom-[-10rem] left-[6rem] w-[1.25rem] h-[6rem] -rotate-[-0deg] rounded-lg"
                >
                    <div className="bg-primary absolute left-[-0rem] w-[1.25rem] h-[2rem] rounded-t-lg"></div>
                </motion.div>
            </motion.div>


            <div className=" bg-primary absolute bottom-[-25rem] left-[5.625rem]  w-[1.25rem] h-[16rem] rotate-[80deg] rounded-lg"></div>
        </motion.div>
    );
}




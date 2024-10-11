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

import { useState } from 'react';
import { useEffect } from 'react';

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
        { name: 'Bulgarian Split Squat', type: ['lower', 'fullBody'], id: 6, components: <BulgarianSplitSquat /> },
        { name: 'Romanian Deadlift', type: ['core'], id: 7, components: <RomanianDeadlift /> },
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
                <div className="grid sm:grid-cols-3 grid-cols-1">
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
        </motion.div>
    );
}

function Deadlift() {
    return (
        null
    );
}

function PullUp() {
    return (
        null
    );
}

function BarbellSquat() {
    return (
        null
    );
}

function BulgarianSplitSquat() {
    return (
        null
    );
}

function RomanianDeadlift() {
    return (
        null
    );
}

function Plank() {
    return (
        null
    );
}

function SitUp() {
    return (
        null
    );
}

function RopeCableCrunch() {
    return (
        null
    );
}

function WalkingFlat() {
    return (
        null
    );
}

function WalkingIncline() {
    return (
        null
    );
}

function RunningFlat() {
    return (
        null
    );
}

function RunningIncline() {
    return (
        null
    );
}




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
        { name: 'Overhead Press', type: ['upper', 'fullBody'], id: 2, components: <InclineDumbellPress /> },
        { name: 'Deadlift', type: ['upper', 'fullBody'], id: 3, components: <InclineDumbellPress /> },
        { name: 'Pull up', type: ['lower', 'fullBody'], id: 4, components: <InclineDumbellPress /> },
        { name: 'Barbell Squat', type: ['lower', 'fullBody'], id: 5, components: <InclineDumbellPress /> },
        { name: 'Bulgarian Split Squat', type: ['lower', 'fullBody'], id: 6, components: <InclineDumbellPress /> },
        { name: 'Romanian Deadlift', type: ['core'], id: 7, components: <InclineDumbellPress /> },
        { name: 'Plank', type: ['core'], id: 8, components: <InclineDumbellPress /> },
        { name: 'Sit Up', type: ['core'], id: 9, components: <InclineDumbellPress /> },
        { name: 'Rope Cable Crunch', type: ['core'], id: 10, components: <InclineDumbellPress /> },
        { name: 'Walking Flat', type: ['cardio'], id: 11, components: <InclineDumbellPress /> },
        { name: 'Walking Incline', type: ['cardio'], id: 12, components: <InclineDumbellPress /> },
        { name: 'Running Flat', type: ['cardio'], id: 13, components: <InclineDumbellPress /> },
        { name: 'Running Incline', type: ['cardio'], id: 14, components: <InclineDumbellPress /> },
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
    );
}
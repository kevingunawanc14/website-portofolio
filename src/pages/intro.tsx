import React from 'react'
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

function home() {
    return (
        <div className='h-screen container mx-auto content-center'>
            {/* <p className="text-4xl font-semibold leading-none tracking-tight text-start ms-5 ">Intro</p> */}

            <p className='text-primary mt-8 text-5xl md:text-7xl lg:text-9xl leading-relaxed  poppins-semibold '>Kevin Gunawan.</p>
            {/* <p className='text-primary text-5xl md:text-7xl lg:text-9xl'>Intuitive Controls for Effortless Gameplay</p> */}

            <p className='text-secondary text-3xl md:text-6xl font-semibold rubik-regular'>? Engineer</p>
            <div className='flex justify-start pt-5'>
                <motion.div
                    whileTap={{ scale: 0.9 }} // Gesture animation when the button is tapped
                    whileHover={{ scale: 1.1 }} // Gesture animation when the button is hovered
                >
                    <Github className='mx-2 cursor-pointer bg-accent p-1' size={30} />
                </motion.div>
                <motion.div
                    whileTap={{ scale: 0.9 }} // Gesture animation when the button is tapped
                    whileHover={{ scale: 1.1 }} // Gesture animation when the button is hovered
                >
                    <Linkedin className='cursor-pointer bg-accent p-1' size={30} />
                </motion.div>
            </div>
        </div>
    )
}

export default home
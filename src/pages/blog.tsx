import React from 'react'
import { motion } from 'framer-motion';

function Blog() {
    // indrive vs gojek vs grab
    // yc startup per company article
    return (
        <div className='h-screen container mx-auto content-center'>
            <motion.div
            // initial={{ opacity: 0, scale: 0.5 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{
            //     duration: 0.8,
            //     delay: 0.2,
            //     ease: [0, 0.71, 0.2, 1.01]
            // }}
            >
                <p className='text-primary mt-8 text-5xl md:text-7xl lg:text-9xl leading-relaxed  poppins-semibold '>Coming Soon.</p>
            </motion.div>
        </div>
    )
}

export default Blog
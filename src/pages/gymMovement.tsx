import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';


function gymMovement() {
    return (
        <div>
            <div className="">
                <div className="">
                    <div style={{
                        borderLeft: '10px solid gray',
                        height: '100%',
                        width: '10px',
                    }} />
                    <motion.hr
                        key="dynamic-hr"
                        initial={{ rotate: 45 }}
                        animate={{ rotate: -90 }}
                        transition={{
                            repeat: Infinity, repeatType: "mirror", duration: 5
                        }}
                        className="w-10 h-1 bg-gray-500 dynamic-hr"
                    />
                </div>


            </div>

        </div>
    )
}

export default gymMovement
import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'
import {Power4} from "gsap/all"

const Featured = () => {
    const cards = [useAnimation(), useAnimation()]
    
    const handleHover = (index) => {
        cards[index].start({y: "0"})
    }
    
    const handleEnd = (index) => {
        cards[index].start({y: "100%"})
    }

    return (
        <div className='relative py-10 bg-black'>
            <div className='w-full px-10 border-b-[1px] pb-[18px] border-zinc-300'>
                <h1 className='text-7xl font-["Founders_Grotesk"] tracking-tight'>Featured Project</h1>
            </div>
            <div className='w-full px-20 flex items-center justify-between relative'>
                {/* First Card */}
                <motion.div 
                    onHoverStart={() => handleHover(0)} 
                    onHoverEnd={() => handleEnd(0)} 
                    className="cardcontainer relative w-1/2 h-[80vh] pr-10"
                >
                    <div className="card rounded-xl w-full h-full overflow-hidden bg-zinc-500">
                        <h1 className='absolute flex overflow-hidden left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-7xl font-["Founders_Grotesk"] mb-10 leading-none tracking-tighter text-[#CDEA68]'>
                            {"FYDD".split('').map((item, index) =>
                                <motion.span 
                                    key={index}
                                    initial={{ y: "100%" }} 
                                    animate={cards[0]}
                                    transition={{ease: [0.22, 1, 0.36, 1], delay: index * 0.05}}
                                    className='inline-block'
                                >
                                    {item}
                                </motion.span>
                            )}
                        </h1>  
                        <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png" alt="Fyde" />
                    </div>
                </motion.div>

                {/* Second Card */}
                <motion.div 
                    onHoverStart={() => handleHover(1)} 
                    onHoverEnd={() => handleEnd(1)} 
                    className="cardcontainer relative w-1/2 h-[80vh] pl-10"
                >
                    <div className="card rounded-xl w-full h-full overflow-hidden bg-zinc-500">
                        <h1 className='absolute flex overflow-hidden left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-7xl font-["Founders_Grotesk"] mb-10 leading-none tracking-tighter text-[#CDEA68]'>
                            {"VISA".split('').map((item, index) =>
                                <motion.span 
                                    key={index}
                                    initial={{ y: "100%" }} 
                                    animate={cards[1]}
                                    transition={{ease: [0.22, 1, 0.36, 1], delay: index * 0.05}}
                                    className='inline-block'
                                >
                                    {item}
                                </motion.span>
                            )}
                        </h1>
                        <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png" alt="Vise" />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Featured
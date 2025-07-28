import React from 'react'
import { motion, useSpring } from "framer-motion"
const Marquee = () => {
  return (
      <div  data-scroll  data-scroll-speed=".2" className='w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-rl-3xl'>
          <div className='text border-t-2 flex whitespace-nowrap border-b-2 border-zinc-900  gap-10 overflow-hidden'>
              <motion.h1 initial={{ x: 0 }} transition={{ ease: "linear", repeat: Infinity, duration: 6 }} animate={{ x: "-100%" }} className='text-9xl leading-none font-["Founders_Grotesk"] font-semibold uppercase mb-4 pt-4 '>we are ochi--</motion.h1>
              <motion.h1 initial={{ x: 0 }} transition={{ ease: "linear", repeat: Infinity, duration: 6 }} animate={{ x: "-100%" }} className='text-9xl leading-none font-["Founders_Grotesk"] font-semibold uppercase mb-4 pt-4 '>We are ochi</motion.h1>
              <motion.h1 initial={{ x: 0 }} transition={{ ease: "linear", repeat: Infinity, duration: 6 }} animate={{ x: "-100%" }} className='text-9xl leading-none font-["Founders_Grotesk"] font-semibold uppercase mb-4 pt-4 '>We are ochi</motion.h1>
          </div>  
    </div>
  )
}

export default Marquee
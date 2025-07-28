import { motion } from 'framer-motion';
import React from 'react'
import { FaLongArrowAltUp } from 'react-icons/fa';
const LandingPage = () => {
    
  return (
      <div  data-scroll data-scoll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-2'>
          <div className='textstructure mt-40 px-20  '>
              {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
                  return <div className='masker flex '>
                      {index === 1 && (
                          <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "9vw" }}
                              transition={{ ease: [0.76, 0, 0.24, 1], duration:1}}
                              className=' w-[8vw] h-[3.5vw] mt-3 bg-red-500'></motion.div>)}
                      <h1 className='font-["Founders_Grotesk"] uppercase text-7xl -leading-[5.5vw] tracking-tighter font-semibold'>{item}</h1>
                  </div>
              })}   
          </div>
          <div className='border-t-2  border-zinc-70 mt-32 flex items-center  uppercase justify-between py-5 px-20'>
              {["For public and private companies", "from the first pitch to ipo"].map((item, index) => (
                  <p className='text-md font-light tracking-tight leading-none'>{item}</p>
              ))}
              <div className='start  flex items-center justify-between gap-6'>
                  <div className='px-5 py-2 border-[2px] font-light text-sm uppercase border-zinc-800 rounded-full'>Start the project</div>
                  <div className='w-5 h-5 border-[2px] rotate-[300deg]  border-zinc-500 rounded-full'>
                      <span className='rotate-45'>
                          <FaLongArrowAltUp/>
                      </span>
                  </div>
              </div>
          </div>
    </div>
  )
}
export default LandingPage
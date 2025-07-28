import React from 'react'

const About = () => {
  return (
      <div className='w-full p-20 rounded-tl-3xl bg-green-400 text-black'>
          <h1 className=' font-["Neue_Montrial"] text-4xl leading-[5vw] tracking-tight'>
              Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
          </h1>
          <div className='w-full flex gap-5 border-t-[2px] pt-10 mt-20 border-[#b1da1b]'>
              <div className='w-1/2 '>
                  <h1 className='text-7xl'>Our Appoarch</h1>
                  <button className=' flex  gap-10 items-center px-10 py-6 rounded-full bg-zinc-950 text-white'>Read more
                      <div className='w-2 h-2 bg-zinc-100 rounded-full'>
                      </div>
                  </button>
                  
              </div>
              <div className='w-1/2 h-[70vh] bg-red-700 rounded-3xl'>
                  
              </div>
          </div>
      </div>
  )
}

export default About
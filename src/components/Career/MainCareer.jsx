import React from 'react'

const MainCareer = () => {
  return (
    <>
    <div className='relative bg-mainColor'>
    <div className='  flex flex-col gap-10 items-center pt-24  lg:h-[610px] py-6'>
     
        <p className='font-semibold text-lg'>Careers</p>
        <div className='md:text-6xl text-4xl font-black flex flex-col items-center'>
          <p className='text-center'>Navigate your next</p>
          <p>
            <span className='text-green-700'>Carrer </span>
            Move
          </p>
        </div>
        <p className='w-64 text-center ' >
        We're continiously searching for the right talent. Check if you're a good match.
        </p>
        <button className='block px-8 rounded-md py-2.5 bg-blue-950 text-white text-sm'>Explore Opportunities</button>

    </div>
    </div>
    </>
  )
}

export default MainCareer
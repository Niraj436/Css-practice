import React from 'react'

const MainCareer = () => {
  return (
    <>
    <div className='bg-mainColor flex flex-col gap-10 items-center pt-24  lg:h-[610px] py-6'>
      {/* <h1 className='lg:hidden inline text-5xl tracking-widest text-red-500 font-bold '>Metalogic</h1> */}
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
    </>
  )
}

export default MainCareer
import React from 'react'
import { MdOutlineEmail } from "react-icons/md";

const NewsLetter = () => {
  return (
    <div className='bg-[#e6e6e6] py-16 flex flex-col justify-center items-center '>
      <p className='text-xl font-semibold pb-3'>Subscribe to our News Letters</p>
      <p className='text-gray-500 pb-4 px-3' >Stay informed, inspired, and equipped with the latest trends and breakthroughs in your field.</p>
      <form action="" className='flex sm:flex-row flex-col gap-3'>
        <input type="text" placeholder="Please Enter Your Email" className=' w-[42vw] py-3 outline-none focus-within:outline-none px-3 rounded-md'/>
        <button className='flex items-center justify-center bg-red-500 text-white sm:px-1 sm:py-0 py-3 rounded-md '>
          <MdOutlineEmail className='text-xl'/>
          <p className='px-1'>Subscribe</p>
          </button>
      </form>
    </div>
  )
}

export default NewsLetter
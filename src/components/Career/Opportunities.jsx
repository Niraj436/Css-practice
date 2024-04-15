"use client"
import React from 'react'
import { FaSearch } from "react-icons/fa";
import {motion} from "framer-motion"

const Opportunities = () => {
  return (
    <motion.div className='flex flex-col justify-center items-center gap-4 py-40'
     initial={{ opacity:0, y:"50px" }}
       whileInView={{ opacity:1, y:0}}
       transition={{ duration: 0.5}} 
    >
      <p className='text-xl font-semibold text-yellow-400 text-center'>Opportunities</p>
      <p className='text-4xl font-bold text-blue-950 text-center'>Available Vacancies</p>
      <form className=''>
        <input type="text" placeholder='Job Title/Keyword' className='ouline-none focus-within:outline-none border border-gray-300 rounded-lg lg:w-[700px] w-[80vw] py-2  px-2 mb-3' />
        <div className='flex items-center justify-center gap-1 lg:w-auto w-[80vw]'>
          <select className='border border-gray-300 lg:w-[650px] rounded-lg py-2  px-2  w-[80vw] focus-within:outline-none ' >
            <option value="opt" disabled selected>Level</option>
            <option value="opt1">Internships</option>
            <option value="opt2">Junior Level</option>
            <option value="opt2">Mid Level</option>
            <option value="opt2">Senior</option>
          </select>
          <button className='bg-red-500 px-6 py-3 text-white rounded-lg'>
            <FaSearch/>
          </button>
        </div>
      </form>
    </motion.div>
  )
}

export default Opportunities
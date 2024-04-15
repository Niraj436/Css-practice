"use client"
import React from 'react'
import { FaGift } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { BiSolidDonateHeart } from "react-icons/bi"
import { SiSololearn } from "react-icons/si";
import { GiFullPizza } from "react-icons/gi";
import { MdSportsVolleyball } from "react-icons/md"
import {motion} from "framer-motion"

const Cares = () => {
  return (
    <div className='grid xl:grid-cols-2 grid-cols-1 gap-x-8 bg-[#ffffe1] py-20 sm:px-40 px-5' >
      <motion.div className='flex gap-y-4 flex-col lg:w-3/6 mb-8'
       initial={{ opacity:0, y:"50px" }}
       whileInView={{ opacity:1, y:0}}
       transition={{ duration: 0.5}} 
      >
        <h1 className='text-blue-950 text-3xl font-semibold'>Metalogic Cares For You</h1>
        <p className='text-sm text-gray-500'>We're less about valuing perks and more about valuing people. Our employee benefits are built around enhancing your wellbeing - at work and at home</p>
      </motion.div>
      <motion.div className='grid lg:grid-cols-3 grid-cols-1 gap-2'
       initial={{ opacity:0, y:"50px" }}
       whileInView={{ opacity:1, y:0}}
       transition={{ duration: 0.5}} 
      >
          <div className="card border-1 rounded-2xl bg-white flex flex-col justify-center gap-3 px-8 py-14 shadow-xl">
            <p className='flex justify-start text-2xl text-red-700'><FaGift/></p>
             <p className='font-semibold text-blue-900'>performance bonus</p>
          </div>
          <div className="card border-1 rounded-2xl bg-white flex flex-col justify-center gap-3 px-8 py-14 shadow-xl">
            <p className='flex justify-start text-2xl text-red-700'><FaHeartCirclePlus/></p>
             <p className='font-semibold text-blue-900'>Health Benefits</p>
          </div>
          <div className="card border-1 rounded-2xl bg-white flex flex-col justify-center gap-3 px-8 py-14 shadow-xl">
            <p className='flex justify-start text-2xl text-red-700'><BiSolidDonateHeart/></p>
             <p className='font-semibold text-blue-900'>Paid Leave Policy</p>
          </div>
          <div className="card border-1 rounded-2xl bg-white flex flex-col justify-center gap-3 px-8 py-14 shadow-xl">
            <p className='flex justify-start text-2xl text-red-700'><SiSololearn/></p>
             <p className='font-semibold text-blue-900'>Learning And Development</p>
          </div>
          <div className="card border-1 rounded-2xl bg-white flex flex-col justify-center gap-3 px-8 py-14 shadow-xl">
            <p className='flex justify-start text-2xl text-red-700'><GiFullPizza/></p>
             <p className='font-semibold text-blue-900'>Food Credit</p>
          </div>
          <div className="card border-1 rounded-2xl bg-white flex flex-col justify-center gap-3 px-8 py-14 shadow-xl">
            <p className='flex justify-start text-2xl text-red-700'><MdSportsVolleyball/></p>
             <p className='font-semibold text-blue-900'>Team Activities</p>
          </div>
          
      </motion.div>
    </div>
  )
}

export default Cares
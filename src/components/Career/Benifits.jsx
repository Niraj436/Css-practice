"use client"
import React from 'react'
import { PiPersonSimpleRunFill } from "react-icons/pi"
import { FaChartLine } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { TbAtom2 } from "react-icons/tb";
import { GiStarsStack } from "react-icons/gi";
import { BsPersonLinesFill } from "react-icons/bs"
import {motion} from "framer-motion"
const Benifits = () => {
  return (
    <div className="  bg-white py-12 text-gray-600 font-medium">
      <motion.div className="text-center"
       initial={{ opacity:0, y:"50px" }}
       whileInView={{ opacity:1, y:0}}
       transition={{ duration: 0.5}} 
      >
        <p className="text-red-500 text-xl font-semibold">Benifits</p>
        <p className="text-indigo-950 font-extrabold text-4xl py-4">
        Life At MetaLogic
        </p>
      </motion.div>
      <motion.div className="grid grid-cols-1 lg:grid-cols-3  xl:grid-cols-4   gap-4 lg:px-36 md:px-20 px-6 text-sm  "
       initial={{ opacity:0, y:"50px" }}
       whileInView={{ opacity:1, y:0}}
       transition={{ duration: 0.5}} 
      >
        <div className=" card flex justify-start flex-col gap-3  p-8 hover:border-2  bg-white hover:shadow-md rounded-2xl group h-auto ">
          <div>
            <p className="text-4xl bg-[#f3f4f6] w-16 py-3 px-5 rounded-lg flex justify-center text-red-600">
              <PiPersonSimpleRunFill className="group-hover:scale-110" />
            </p>
          </div>
          <p className="text-lg font-bold text-blue-950">Flexibility at work</p>
          <p className="text-sm">
          Do your best work at a time and place that fits us and your work-life balance.
          </p>
        </div>
        <div className="card lg:w-auto flex justify-start flex-col gap-3  p-8 hover:border-2  bg-white hover:shadow-md rounded-2xl group h-auto">
          <div>
            <p className="text-4xl bg-[#f3f4f6] w-16 py-3 px-5 rounded-lg flex justify-center text-red-600">
              <BsPersonLinesFill className="group-hover:scale-110" />
            </p>
          </div>
          <p className="text-lg font-bold text-blue-950">Take Ownership</p>
          <p className="text-sm">
          Take responsibility to solve customer challenges by acting as your own boss.
          </p>
        </div>
        <div className="card lg:w-auto flex justify-start flex-col gap-3  p-8 hover:border-2  bg-white hover:shadow-md rounded-2xl group h-auto">
          <div>
            <p className="text-4xl bg-[#f3f4f6] w-16 py-3 px-5 rounded-lg flex justify-center text-red-600">
            <FaChartLine className="group-hover:scale-110" />

              
            </p>
          </div>
          <p className="text-lg font-bold text-blue-950">Unlimited Growth</p>
          <p className="text-sm">
          With no inner circle… absolutely everyone has the same opportunity to thrive.
          </p>
        </div>
        <div className="card lg:w-auto flex justify-start flex-col gap-3  p-8 hover:border-2  bg-white hover:shadow-md rounded-2xl group h-auto">
          <div>
            <p className="text-4xl bg-[#f3f4f6] w-16 py-3 px-5 rounded-lg flex justify-center text-red-600">
           
              <TbTargetArrow className="group-hover:scale-110" />
            </p>
          </div>
          <p className="text-lg font-bold text-blue-950">Make Yourself Heard</p>
          <p className="text-sm">
          We encourage diverse perspectives - making it count in achieving our collective goals.
          </p>
        </div>
        <div className="card lg:w-auto flex justify-start flex-col gap-3  p-8 hover:border-2  bg-white hover:shadow-md rounded-2xl group h-auto">
          <div>
            <p className="text-4xl bg-[#f3f4f6] w-16 py-3 px-5 rounded-lg flex justify-center text-red-600">
            
              <FaPeopleGroup className="group-hover:scale-110" />
            </p>
          </div>
          <p className="text-lg font-bold text-blue-950">Team Spirit</p>
          <p className="text-sm">
          Come together, work as one – this is at the heart of how we work, achieve results and collaborate.
          </p>
        </div>
        <div className="card lg:w-auto flex justify-start flex-col gap-3  p-8 hover:border-2  bg-white hover:shadow-md rounded-2xl group h-auto">
          <div>
            <p className="text-4xl bg-[#f3f4f6] w-16 py-3 px-5 rounded-lg flex justify-center text-red-600">
             
              <TbTargetArrow className="group-hover:scale-110" />
            </p>
          </div>
          <p className="text-lg font-bold text-blue-950">Inclusivity at Work</p>
          <p className="text-sm">
          We believe that everyone is entitled to equal opportunities to learn, lead, and grow in all directions
          </p>
        </div>
        <div className="card lg:w-auto flex justify-start flex-col gap-3  p-8 hover:border-2  bg-white hover:shadow-md rounded-2xl group h-auto">
          <div>
            <p className="text-4xl bg-[#f3f4f6] w-16 py-3 px-5 rounded-lg flex justify-center text-red-600">
          
              <TbAtom2 className="group-hover:scale-110" />
            </p>
          </div>
          <p className="text-lg font-bold text-blue-950">Transparent Environment</p>
          <p className="text-sm">
          Build confidence in a culture of trust and open communication - with each other and our clients.
          </p>
        </div>
        <div className="card lg:w-auto flex justify-start flex-col gap-3  p-8 hover:border-2  bg-white hover:shadow-md rounded-2xl group h-auto">
          <div>
            <p className="text-4xl bg-[#f3f4f6] w-16 py-3 px-5 rounded-lg flex justify-center text-red-600">
              <GiStarsStack className="group-hover:scale-110" />
            </p>
          </div>
          <p className="text-lg font-bold text-blue-950">Fuel Your Passion</p>
          <p className="text-sm">
          We encourage you to strive, push the limits and achieve your dreams by being best you can be.
          </p>
        </div>
        
      </motion.div>
    </div>
  )
}

export default Benifits
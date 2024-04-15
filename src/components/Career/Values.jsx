"use client"
import React from "react";
import { GiOpenBook } from "react-icons/gi";
import { PiHandshakeBold } from "react-icons/pi";
import { GiBoxUnpacking } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import { IoAccessibilitySharp } from "react-icons/io5"
import {motion} from "framer-motion"

const Values = () => {
  return (
    <div className="  bg-[#f6f8ff] py-12 text-gray-600 font-medium">
      <motion.div className="text-center"
       initial={{ opacity:0, y:"50px" }}
        whileInView={{ opacity:1, y:0}}
        transition={{ duration: 0.5}} >
        <p className="text-red-500 text-xl font-semibold">Values</p>
        <p className="text-indigo-950 font-extrabold text-4xl py-4">
          We believe in
        </p>
        <p className="pb-6">
          We believe in creating an environment where individuals can thrive and
          make a meaningful impact.
        </p>
      </motion.div>
      <motion.div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3   gap-10 lg:px-36 md:px-20 px-6 text-sm  "
       initial={{ opacity:0, y:"50px" }}
       whileInView={{ opacity:1, y:0}}
       transition={{ duration: 0.5}} 
      >
        <div className="card transition ease-in-out duration-500 flex justify-start flex-col gap-3  p-8 border-2  bg-white shadow-2xl rounded-2xl group h-72">
          <div>
            <p className="text-4xl bg-[#f3f4f6] w-16 py-3 px-5 rounded-lg flex justify-center text-red-600">
              <GiOpenBook className="group-hover:-rotate-12" />
            </p>
          </div>
          <p className="text-lg font-bold text-blue-950">Continious Learning</p>
          <p className="text-sm">
            We invest in our team&apos; growth through ongoing training, mentorship,
            and opportunities to expand your skill set. We're dedicated to your
            professional development journey.
          </p>
        </div>
        <div className="card transition ease-in-out duration-500 flex justify-start flex-col gap-3  p-8 border-2  bg-white shadow-2xl rounded-2xl group h-72">
          <div>
            <p className="text-4xl bg-[#f3f4f6] w-16 py-3 px-5 rounded-lg flex justify-center text-red-600">
              <PiHandshakeBold className="group-hover:-rotate-12" />
            </p>
          </div>
          <p className="text-lg font-bold text-blue-950">Team Work</p>
          <p className="text-sm">
          We believe that best solutions comes from diverse perspective and collaborative efforts.
          </p>
        </div>
        <div className="card transition ease-in-out duration-500 flex justify-start flex-col gap-3  p-8 border-2  bg-white shadow-2xl rounded-2xl group h-72">
          <div>
            <p className="text-4xl bg-[#f3f4f6] w-16 py-3 px-5 rounded-lg flex justify-center text-red-600">
              <GiBoxUnpacking className="group-hover:-rotate-12" />
            </p>
          </div>
          <p className="text-lg font-bold text-blue-950">Innovation</p>
          <p className="text-sm">
          Whether it&apos; the quality of our work, the impact we make, or the relationships we build, we consistently strive for the highest standards.
          </p>
        </div>
        <div className="card transition ease-in-out duration-500 flex justify-start flex-col gap-3  p-8 border-2  bg-white shadow-2xl rounded-2xl group h-72">
          <div>
            <p className="text-4xl bg-[#f3f4f6] w-16 py-3 px-5 rounded-lg flex justify-center text-red-600">
              <FaPeopleGroup className="group-hover:-rotate-12" />
            </p>
          </div>
          <p className="text-lg font-bold text-blue-950">Mentorship</p>
          <p className="text-sm">
          We embrace change, learn from challenges, and remain resilient in the face of obstacles, always seeking opportunities for improvement.
          </p>
        </div>
        <div className="card transition ease-in-out duration-500 flex justify-start flex-col gap-3  p-8 border-2  bg-white shadow-2xl rounded-2xl group h-72">
          <div>
            <p className="text-4xl bg-[#f3f4f6] w-16 py-3 px-5 rounded-lg flex justify-center text-red-600">
              <TbTargetArrow className="group-hover:-rotate-12" />
            </p>
          </div>
          <p className="text-lg font-bold text-blue-950">Tangible Impact Impact</p>
          <p className="text-sm">
          We're committed to delivering solutions that not only meet but exceed their expectations.
          </p>
        </div>
        <div className="card transition ease-in-out duration-500 flex justify-start flex-col gap-3  p-8 border-2  bg-white shadow-2xl rounded-2xl group h-72">
          <div>
            <p className="text-4xl bg-[#f3f4f6] w-16 py-3 px-5 rounded-lg flex justify-center text-red-600">
              <IoAccessibilitySharp className="group-hover:-rotate-12" />
            </p>
          </div>
          <p className="text-lg font-bold text-blue-950">Adaptability</p>
          <p className="text-sm">
          Thrive in a fast-paced world with resilience as your ally, valuing and cultivating adaptability in your career journey
          </p>
        </div>
        
      </motion.div>
    </div>
  );
};

export default Values;

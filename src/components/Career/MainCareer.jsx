"use client"
import React from "react";
import {motion} from "framer-motion"
import Link from "next/link";
const MainCareer = () => {
  return (
    <>
      <div className="relative bg-mainColor">
        <motion.div className="  flex flex-col gap-10 items-center pt-24  lg:h-[610px] py-6"
         initial={{ opacity:0, y:"80px" }}
         whileInView={{ opacity:1, y:0}}
         transition={{ duration: 0.5}} >
          <p className="font-semibold text-lg">Careers</p>
          <div className="md:text-6xl text-4xl font-black flex flex-col items-center">
            <p className="text-center">Navigate your next</p>
            <p>
              <span className="text-green-700">Carrer </span>
              Move
            </p>
          </div>
          <p className="w-64 text-center ">
            We&apos;re continiously searching for the right talent. Check if you&apos;re a
            good match.
          </p>
          <button className="block px-8 rounded-md py-2.5 bg-blue-950 text-white text-sm">
            Explore Opportunities
          </button>
        <Link href={'/information'} className="absolute top-12 right-44 text-5xl bg-white px-4 rounded-xl text-red-500"> i</Link>
        </motion.div>
      </div>
    </>
  );
};

export default MainCareer;

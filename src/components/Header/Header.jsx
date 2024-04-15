"use client"
import React, { useState } from 'react'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { IoMenu } from "react-icons/io5"
import { IoMdClose } from "react-icons/io";
import logo from "@/images/logo.png"
import Image from 'next/image';
import { motion } from "framer-motion"

const Header = () => {
  const pathname = usePathname();
  const [open , setOpen] = useState(false)
 
  const navLinks = [
    {name: "Home", href: "/",},
    { name: "Services", href: "/services",},
    { name: "Career",href: "/career",},
    {name: "Blogs",href: "/blogs",},
    {name: "About us",href: "/aboutus",},
  ];

  return (
    <div className=' sticky top-0 z-50 border-[1px] lg:bg-mainColor'
   
    >
      
      {
        open ? (

          <button onClick={()=>setOpen(!open)} className='absolute z-30 top-10 right-10 text-4xl lg:hidden block'><IoMenu/></button>
        ) : (

          <button onClick={()=>setOpen(!open)} className='absolute z-30 top-10 right-10 text-4xl lg:hidden block'><IoMdClose/></button>
        )
      }
      
       <motion.header className={`flex  lg:flex-row lg:gap-y-0 gap-y-10 lg:h-auto h-[100vh]  flex-col lg:justify-between items-center py-3 px-8 lg:bg-mainColor bg-white lg:relative absolute lg:left-0  lg:w-auto w-[100vw] ${!open ? "left-0 duration-100 block" : "-left-full"}`}
        initial={{ y: "-100px" }}
        animate={{ y:0 }}
        transition={{ duration: 0.2 }}
       >
         <div className='flex justify-center items-center gap-2'> 
          <Image src={logo} alt='logo' className='size-14'/>
          <h1 className='text-3xl tracking-widest text-blue-950 font-semibold'>MetaLogic</h1>
         </div>

         <nav className=''>
           <ul className='flex  lg:flex-row flex-col lg:gap-x-4 lg:gap-y-0 gap-y-8  text-sm font-semibold'>
           {
              navLinks.map((link,index)=>{
                const isActive = (pathname === link.href) || (pathname.startsWith(link.href) && link.href !== '/')
                return (
                  
                <div key={index}>
                  <li className='lg:block hidden px-4'>
                  <Link href={link.href} >
                    <p className={` py-1 ${isActive && "border-b-4 border-b-red-500"}`} >{link.name}</p>
                  </Link>
                  </li>
                 
                  <li className='lg:hidden block' onClick={()=>setOpen(!open)}>
                  <Link  href={link.href}>
                    <p className={` py-1 ${isActive && "border-b-4 border-b-red-500"}`}>{link.name}</p>
                  </Link>
                  </li>
                  </div>
              
                )
              })
              }
           </ul>
         </nav>
         <div>
          <button className='px-4 rounded-md py-2.5 lg:bg-red-500 bg-blue-950 text-white text-sm'>Get in touch</button>
         </div>
       </motion.header>
       </div>
       
    
  )
}

export default Header
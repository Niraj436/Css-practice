"use client"
import React, { useState } from 'react'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { IoMenu } from "react-icons/io5"
import { IoMdClose } from "react-icons/io";

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
  console.log(open)
  return (
    <div className=' sticky top-0 border'>
      {
        open ? (

          <button onClick={()=>setOpen(!open)} className='absolute z-30 top-10 right-10 text-4xl lg:hidden block'><IoMenu/></button>
        ) : (

          <button onClick={()=>setOpen(!open)} className='absolute z-30 top-10 right-10 text-4xl lg:hidden block'><IoMdClose/></button>
        )
      }
       <header className={`flex lg:flex-row lg:gap-y-0 gap-y-10 lg:h-auto h-[100vh]  flex-col lg:justify-between items-center py-4 px-8 lg:bg-mainColor bg-white lg:relative absolute lg:w-auto w-[100vw] ${open ? "custom-header" : "left-0 duration-100"}`}>
         <div> 
          <h1 className='text-3xl tracking-widest text-blue-950 font-normal'>MetaLogic</h1>
         </div>

         <nav className=''>
           <ul className='flex  lg:flex-row flex-col lg:gap-x-4 lg:gap-y-0 gap-y-8  text-sm font-semibold'>
           {
              navLinks.map((link)=>{
                const isActive = (pathname === link.href) || (pathname.startsWith(link.href) && link.href !== '/')
                return (
                 <>
                  <li className='lg:block hidden'>
                  <Link className={`px-3 py-3 ${isActive && "bg-red-500 text-white rounded-lg"}`} href={link.href} key={link.name}>{link.name}</Link>
                  </li>

                  <li className='lg:hidden block' onClick={()=>setOpen(!open)}>
                  <Link className={`px-3 py-3 ${isActive && "bg-red-500 text-white rounded-lg"}`} href={link.href} key={link.name}>{link.name}</Link>
                  </li>
                  </>
                )
              })
              }
           </ul>
         </nav>
         <div>
          <button className='px-4 rounded-md py-2.5 lg:bg-red-500 bg-blue-950 text-white text-sm'>Get in touch</button>
         </div>
       </header>
       </div>
  )
}

export default Header
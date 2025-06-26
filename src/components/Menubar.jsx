import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollToPlugin } from 'gsap/all';
import { IoPersonSharp } from "react-icons/io5";
import { SiReact } from "react-icons/si";
import { PiStudentBold } from "react-icons/pi";
import { IoFolderOpenOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

gsap.registerPlugin(ScrollToPlugin);
const Menubar = ({isOpen,setIsOpen}) => {

  const handleScroll = (target) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: target,
      ease: "power2.inOut",
    });
  };
  return (
    <div className={` fixed top-0 left-0 right-0 z-50 w-full mt-12 px-4 text-black py-2 bg-stone-200 rounded-b-lg ${!isOpen?'max-h-[0px] opacity-0 pointer-events-none':'max-h-[250px]'} transition-all duration-700 ease-in-out overflow-hidden flex flex-col backdrop:filter backdrop-blur-md`}>
        <a href="#hero" className='text-center w-full py-2 hover:bg-gray-900 flex gap-1 justify-center items-center ' onClick={(e)=>{e.preventDefault();setIsOpen(!isOpen);handleScroll('#hero');}}><IoPersonSharp/>Hero</a>
        <a href="#skills" className='text-center w-full py-2 rounded-lg hover:bg-gray-900 flex gap-1 justify-center items-center' onClick={(e)=>{e.preventDefault();setIsOpen(!isOpen);handleScroll('#skills');}}><SiReact/>Skills</a>
        <a href="#education" className='text-center w-full py-2 rounded-lg hover:bg-gray-900 flex gap-1 justify-center items-center' onClick={(e)=>{e.preventDefault();setIsOpen(!isOpen);handleScroll('#education');}}><PiStudentBold/>Education</a>
        <a href="#projects" className='text-center w-full py-2 rounded-lg hover:bg-gray-900 flex gap-1 justify-center items-center' onClick={(e)=>{e.preventDefault();setIsOpen(!isOpen);handleScroll('#projects');}}><IoFolderOpenOutline/>Projects</a>
        <a href="#contact" className='text-center w-full py-2 rounded-lg hover:bg-gray-900 flex gap-1 justify-center items-center' onClick={(e)=>{e.preventDefault();setIsOpen(!isOpen);handleScroll('#contact');}}><MdOutlineEmail/>Contact</a>
    </div>
  )
}

export default Menubar

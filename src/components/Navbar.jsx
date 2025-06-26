import React, { useEffect } from 'react'
import { IoMdMenu } from "react-icons/io";
import { ScrollToPlugin } from 'gsap/all';
import gsap from 'gsap';
import { useLocation, useNavigate } from 'react-router';

gsap.registerPlugin(ScrollToPlugin)


const Navbar = ({setIsOpen,isOpen}) => {

  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

    const scrollToSection = (target) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: target,
      ease: "power2.inOut",
    });
  };

    useEffect(()=>{
      const handleScroll = () => {
          if(window.scrollY>0){
            document.querySelector('.navbar').classList.add('bg-black')
          }
          else{
            document.querySelector('.navbar').classList.remove('bg-black')
          }
      }

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    },[])
    
  return (
    <div className='fixed top-0 left-0 right-0 border-b-[1px] border-gray-800 z-50 navbar  '>
        <div className='max-w-[900px] mx-auto md:min-w-[900px] h-12 flex items-center justify-between px-1 max-md:px-4 max-md:w-full'>
            <div className='text-lg tracking-widest font-extrabold'>PJ</div>
            <ul className='text-sm flex items-center text-gray-500 font-medium max-md:hidden'>
                <a href="#hero" className='px-3 py-1 hover:bg-gray-900 rounded-md hover:text-white' onClick={(e)=>{e.preventDefault();if(location.pathname!=='/'){handleGoBack();return}scrollToSection("#hero")}}>Hero</a>
                <a href="#skills" className='px-3 py-1 hover:bg-gray-900 rounded-md hover:text-white' onClick={(e)=>{e.preventDefault();if(location.pathname!=='/'){handleGoBack();return}scrollToSection("#skills")}}>Skills</a>
                <a href="#education" className='px-3 py-1 hover:bg-gray-900 rounded-md hover:text-white' onClick={(e)=>{e.preventDefault();if(location.pathname!=='/'){handleGoBack();return}scrollToSection("#education")}}>Education</a>
                <a href="#portfolio" className='px-3 py-1 hover:bg-gray-900 rounded-md hover:text-white' onClick={(e)=>{e.preventDefault();if(location.pathname!=='/'){handleGoBack();return}scrollToSection("#projects")}}>Projects</a>
                <a href="#contact" className='px-3 py-1 hover:bg-gray-900 rounded-md hover:text-white' onClick={(e)=>{e.preventDefault();if(location.pathname!=='/'){handleGoBack();return}scrollToSection("#contact")}}>Contact</a>
            </ul>
            <div className='md:hidden' onClick={()=>{setIsOpen(!isOpen)}}><IoMdMenu size={25}/></div>
        </div>
    </div>
  )
}

export default Navbar

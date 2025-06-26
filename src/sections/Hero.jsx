import React from 'react'
import handwave from '../assets/handwave.png'
import { FiGithub } from "react-icons/fi";
import { RiLinkedinFill } from "react-icons/ri";
import myPhoto from '../assets/myPhoto3.png'
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import Lottie from 'lottie-react';
import animation from '../assets/Animation.json'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all'
import { ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const Hero = () => {

    useGSAP(() => {
        const tl = gsap.timeline();
        const tl1 = gsap.timeline();
        tl1.from('.animate-hero-left', { duration: 3, y: 100, opacity: 0, stagger: 0.2, ease: "power4.out" })
        gsap.from('.animate-hero-image', { duration: 6, opacity: 0 })

        tl1.to('.hand',{duration: 0.2, rotate:20})
        tl1.to('.hand',{duration: 0.2, rotate:-20})
        tl1.to('.hand',{duration: 0.2, rotate:20})
        tl1.to('.hand',{duration: 0.2, rotate:-20})
        tl1.to('.hand',{duration: 0.2, rotate:0})


        ScrollTrigger.matchMedia({

            // For desktop
            "(min-width: 769px)": function () {
                gsap.utils.toArray('.animate-skills>div').forEach((element, index) => {
                    tl.from(
                        element,
                        { opacity: 0, duration: 0.7 }
                    );
                })
            },

            // For mobile (screen width up to 768px)
            "(max-width: 768px)": function () {
                gsap.utils.toArray('.animate-skills>div').forEach((element, index) => {
                    gsap.from(
                        element,
                        {
                            opacity: 0,
                            duration: 1,
                            scrollTrigger: {
                                trigger: '.animate-skills',
                                start: "top 95%",
                                end: "bottom 85%",
                                scrub: true
                            }
                        }
                    );
                })
            }

        });
    }, [])

    const scrollToSection = (target) => {
        gsap.to(window, {
            duration: 1,
            scrollTo: target,
            ease: "power2.inOut",
        });
    };

    return (
        <div className='min-h-[90vh] max-w-[900px] mx-auto flex flex-col justify-center relative max-md:px-6 mt-16' id='hero'>
            <div className='grid grid-cols-[1.3fr_1fr] max-md:grid-cols-1 max-md:auto-rows-auto max-md:gap-6'>
                {/* left content  */}
                <div className='max-md:order-2 '>
                    <div className='text-6xl max-md:text-5xl max-md:text-center font-bold leading-[1.1] max-md:leading-[1.2] animate-hero-left'>
                        <h1>Prathimesh</h1>
                        <div className='flex items-center gap-2 max-md:justify-center'>Jadhav <img src={handwave} alt="" width={40} className='mt-1 hand' /></div>
                    </div>
                    <div className='text-lg mt-5 text-gray-300 break-words text-justify animate-hero-left'>
                        Hello,I am a web developer skilled in the MERN stack, focused on building efficient, scalable web applications and have a strong passion for solving problems.
                    </div>

                    {/* button  */}
                    <div className='flex gap-6 mt-6 max-md:order-1 max-md:mt-10  animate-hero-left'>
                        <button className='bg-white text-black px-4 py-2 rounded-md  font-medium max-md:hidden' onClick={() => scrollToSection('#contact')}>Say Hello</button>
                        <div className='flex items-center gap-3 max-md:hidden'>
                            <div><a href="https://github.com/Prathimesh-Jadhav" target='_blank'><FiGithub size={20} /></a></div>
                            <div><a href="https://www.linkedin.com/in/prathimesh-jadhav-b42ab627a/" target='_blank'><RiLinkedinFill size={23} /></a></div>
                        </div>
                    </div>
                </div>

                {/* right content  */}
                <div className='flex justify-end max-md:justify-center items-center'>
                    <div className='max-w-[300px] max-h-[300px] max-md:max-w-[250px] max-md:max-h-[250px] flex justify-center items-center rounded-full  overflow-hidden'>
                        <img src={myPhoto} alt="" className='scale-125 bg-stone-900 animate-hero-image' />
                    </div>
                </div>
            </div>

            <div className='mt-[100px] max-md:mt-[40px]  mb-[30px] flex justify-center items-center '>
                <div className='h-12 max-w-[600px] mx-auto border border-gray-700 px-3 flex justify-center gap-3 items-center animate-skills'>
                    <div className='text-blue-500'><FaReact size={23} /></div>
                    <div className='text-green-500'><FaNodeJs size={23} /></div>
                    <div className='text-green-500'><DiMongodb size={23} /></div>
                    <div className='text-gray-500'><SiExpress size={23} /></div>
                    <div className='text-blue-500'><TbBrandMysql size={23} /></div>
                </div>

            </div>

            <div className='flex items-center gap-3 md:hidden justify-center mt-2'>
                <div><a href="https://github.com/Prathimesh-Jadhav" target='_blank'><FiGithub size={20} /></a></div>
                <div><a href="https://www.linkedin.com/in/prathimesh-jadhav-b42ab627a/" target='_blank'><RiLinkedinFill size={23} /></a></div>
            </div>
            <div className='text-center absolute bottom-1 w-full flex justify-center gap-2 items-center max-h-16 max-md:hidden'>
                <Lottie animationData={animation} loop={true} size={30} />
            </div>
        </div>
    )
}

export default Hero

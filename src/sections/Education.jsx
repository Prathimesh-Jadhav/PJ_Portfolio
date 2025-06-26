import React from 'react'
import { FaUserGraduate } from "react-icons/fa6";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const Qualification = () => {

    useGSAP(()=>{
        const tl = gsap.timeline();
        gsap.utils.toArray('.education').forEach((element, index) => {
            tl.from(
                element,
                {opacity: 0,y:100, duration: 1,
                    scrollTrigger: {
                        trigger: element,
                        start: "top 95%",
                        end: "bottom 95%",
                        scrub: true,
                    },
                }
            );
        })
    })
  return (
    <section className='xl:px-[18rem] max-xl:px-[4rem] max-sm:px-[1rem] mt-[100px] py-6' id='education' >
        <div>
            <p className='text-4xl font-medium text-center'>Education</p>
            <p className='text-slate-600 text-center text-sm  font-medium mt-2'>My Personal Journey</p>
        </div>

        <div className='flex flex-col items-center md:ml-[100px] mt-6'>
        <div className='grid grid-cols-5 max-w-xl mt-12 education'>
            <div className='col-span-2 max-w-full h-full mr-2 '>
                <h3 className=' text-lg break-all'>Schooling</h3>
                <p className='text-md break-all'>Siddarth Rural High School,Telangana.</p>
                <p className='mt-2 text-md'>till - 2019</p>
            </div>
            <div className='col-span-1 w-[3px] bg-slate-500 shadow-md relative ml-4'>
                 <div className='rounded-full w-4 h-4 absolute bg-slate-500 -right-[7.25px]'></div>
            </div>
             <div className='md:col-span-2  w-full h-full'>

             </div>
        </div>
        <div className='grid grid-cols-5 max-w-xl education'>
             <div className='col-span-2  w-full h-full'>

             </div>
             <div className='col-span-1 w-[3px] bg-slate-500 shadow-md relative ml-4'>
                 <div className='rounded-full w-4 h-4 absolute bg-slate-500 -right-[7.25px]'></div>
            </div>
             <div className='col-span-2 w-full h-full'>
                <h3 className=' text-lg  break-all'>Intermediate - P.C.M</h3>
                <p className='text-md  break-all'>Sadhana Junior College,Telangana.</p>
                <p className='mt-2 text-md'>2020-2022</p>
            </div>
        </div>
        <div className='grid grid-cols-5 max-w-xl education'>
        <div className='col-span-2 w-full h-full'>
                <h3 className=' text-lg  break-all'>B.Tech - CSE(AI&ML)</h3>
                <p className='text-md  break-all'>Rajarambapu Institute of Technology,Sangli.</p>
                <p className='mt-2 text-md'>2022-Present</p>
            </div>
            <div className='col-span-1 w-[3px] bg-slate-500 shadow-md relative ml-4'>
                 <div className='rounded-full w-4 h-4 absolute bg-slate-500 -right-[7.25px]'></div>
            </div>
             <div className='col-span-2  w-full h-full'>

             </div>  
        </div>
        </div>

        

    </section>
  )
}

export default Qualification
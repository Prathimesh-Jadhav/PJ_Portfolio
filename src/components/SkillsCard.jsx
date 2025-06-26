import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

const SkillsCard = ({name,percentage,image,value}) => {



  return (
    <div className='p-2 px-3 rounded-lg bg-gray-900 flex gap-4 hover:bg-gray-800 skill-card'>
         <div className='max-h-[50px] max-w-[50px] min-w-[50px] min-h-[50px] rounded-full overflow-hidden border border-gray-700 flex justify-center items-center'><img src={image} alt="" className='object-cover'/></div>
         <div className='mt-[2px]'>
            <p>{name}</p>
            <div className='w-full flex items-center gap-1 mt-1'>
                <div className={` h-2 bg-green-600 rounded-lg percentage`} style={{minWidth:`${value}px`}}></div> <div className='text-[0.6rem]'>{percentage}%</div>
            </div>
         </div>
    </div>
  )
}

export default SkillsCard

import React, { useState } from 'react'
import SkillsCard from '../components/SkillsCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all'
import nodejs from '../assets/nodejs.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import express from '../assets/express-js-40.png'
import mongodb from '../assets/mongo-db.png'
import brackets from '../assets/square-brackets.png'
import string from '../assets/long-words.png'

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {

    const [selectedSkill, setSelectedSkill] = useState('Programming');
    const [skills, setSkills] = useState(
        {
            Programming: [
                {
                    name: 'Java',
                    percentage: 90,
                    value: (90 / 100) * 80,
                    image: 'https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png'
                },
                {
                    name: 'Python',
                    value: (80 / 100) * 80,
                    percentage: 80,
                    image: 'https://img.icons8.com/color/48/000000/python.png'
                }
            ],
            Development: [
                {
                    name: 'JavaScript',
                    percentage: 90,
                    value: (90 / 100) * 80,
                    image: javascript
                },
                {
                    name: 'React',
                    percentage: 90,
                    value: (90 / 100) * 80,
                    image: react
                },
                {
                    name: 'NodeJS',
                    percentage: 80,
                    value: (80 / 100) * 80,
                    image: nodejs
                },
                {
                    name: 'ExpressJS',
                    percentage: 80,
                    value: (80 / 100) * 80,
                    image: express
                },
                {
                    name: 'MongoDB',
                    percentage: 80,
                    value: (80 / 100) * 80,
                    image: mongodb
                }
            ],
            'Problem Solving': [
                {
                    name: 'Arrays',
                    percentage: 90,
                    value: (90 / 100) * 80,
                    image: brackets
                },
                {
                    name: 'Strings',
                    percentage: 90,
                    value: (90 / 100) * 80,
                    image: string
                }
            ]
        }
    );


    useGSAP(() => {
        const tl = gsap.timeline();
        gsap.from('.skill-card', { duration: 2, x: 50, opacity: 0, ease: "power4.out", scrollTrigger: { trigger: ".skill-card", start: "top 80%", end: "bottom 70%"} })
    }, [selectedSkill])

    return (
        <div className='max-w-[900px] mx-auto max-md:px-6 py-16' id='skills'>
            <div className='text-4xl font-bold text-center mt-16'>Skills</div>
            <div className='text-center text-gray-500 mt-2'>My Tech stack to create Impact</div>

            <div className='mt-10'>
                {/* options */}
                <div className='flex justify-center'>
                    <div className='flex justify-center py-2 gap-2 border border-gray-800 rounded-md px-4 flex-wrap'>
                        <button className={`px-3 py-2  rounded-lg ${selectedSkill == 'Programming' ? 'bg-white text-black' : 'text-gray-500 hover:bg-gray-900'}`} onClick={() => { setSelectedSkill('Programming') }}>Programming</button>
                        <button className={`px-3 py-2  rounded-lg ${selectedSkill == 'Development' ? 'bg-white text-black' : 'text-gray-500 hover:bg-gray-900'}`} onClick={() => { setSelectedSkill('Development') }} >Development</button>
                        <button className={`px-3 py-2  rounded-lg ${selectedSkill == 'Problem Solving' ? 'bg-white text-black' : 'text-gray-500 hover:bg-gray-900'}`} onClick={() => { setSelectedSkill('Problem Solving') }}>Problem Solving</button>
                    </div>
                </div>

                {/* skills  */}
                <div className='mt-10 p-4 rounded-lg grid md:grid-cols-4 max-md:grid-cols-1 gap-6'>
                    {
                        skills[selectedSkill].map((skill, index) => {
                            return (
                                <SkillsCard key={index} name={skill.name} percentage={skill.percentage} image={skill.image} value={skill.value} />
                            )
                        })
                    }

                </div>



            </div>
        </div>
    )
}

export default Skills

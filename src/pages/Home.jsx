import React, { useState } from 'react'
import DeveloperFloatingBackground from '../components/DeveloperFloatingBackground'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import Skills from '../sections/Skills'
import Education from '../sections/Education'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'
import Menubar from '../components/Menubar'

const Home = () => {


    return (
        <div>

            <DeveloperFloatingBackground />
            <Hero />
            <Skills />
            <Education />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home

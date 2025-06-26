import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { Slider } from 'react-slick'
import ProjectCarousel from '../components/ProjectCaraousel';
import tracksy from '../assets/tracksy.avif'
import thali from '../assets/thali.avif'
import health from '../assets/health-policies.avif'
import cnc from '../assets/cnc.avif'
import nike from '../assets/nike.avif'


const Projects = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    const projects = [
        {
            id:1,
            title: "Tracksy",
            image: tracksy,
            liveUrl: "https://tracksy-theta.vercel.app/",
            githubUrl: "https://github.com/Prathimesh-Jadhav/Tracksy"
        },
        {
            id:2,
            title: "Buddy's Kitchen",
            image: thali,
            liveUrl: "https://buddyskitchen.vercel.app/",
            githubUrl: "https://github.com/username/resume-builder"
        },
        {
            id:3,
            title: "Health Bridge",
            image: health,
            liveUrl: "https://health-bridge-seven.vercel.app/",
            githubUrl: "https://github.com/Prathimesh-Jadhav/Health-Bridge"
        },
        {
            id:4,
            title: "Powercon Electronics (Freelance)",
            image: cnc,
            liveUrl: "https://powercon.vercel.app/",
            githubUrl: "https://github.com/Prathimesh-Jadhav/Powercon"
        },
        {
            id:5,
            title: "Nike",
            image: nike,
            liveUrl: "https://n-ike-one.vercel.app/",
            githubUrl: "https://github.com/Prathimesh-Jadhav/NIke"
        },

    ];


    return (
        <div className='max-w-[900px] mx-auto max-md:px-6 py-16' id='projects'>
            <div className='text-4xl font-bold text-center mt-16'>Projects</div>
            <div className='text-center text-gray-500 mt-2'>A Glimpse into What I have Built</div>


            {/* projects  */}
            <div className='mt-16 flex gap-4 w-full'>
                <ProjectCarousel>
                    {
                        projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))
                    }
                </ProjectCarousel>
            </div>
        </div>
    )
}

export default Projects

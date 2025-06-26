import { ExternalLink, Github, CheckCircle } from "lucide-react"
import { IoMdArrowBack } from "react-icons/io";
import { projects } from "../Data/index"
import { useLocation } from "react-router";
import { useEffect, useState } from "react";

export default function ProjectDescription() {
  const [project, setProject] = useState([]);
  const location = useLocation();
  const id = location.pathname.split("/").pop();

  useEffect(() => {
    const project = projects.find((project) => project.id === parseInt(id));
    setProject(project);
  }, [id]);

  return (
    <div className="min-h-screen bg-black text-white ">

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-black max-md:px-4">
        <div className="container mx-auto max-w-[900px]">
          <div>
            <button className="px-3 py-2 rounded-md border border-gray-700 hover:bg-gray-800 flex gap-1 items-center max-md:mt-6" onClick={() => { window.history.back(); }}><IoMdArrowBack /> Back</button>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center mt-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">{project.title}</h1>
                <p className="text-xl text-gray-300 max-w-[600px] leading-relaxed">
                  {project.smallDescription}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-black bg-white rounded-lg hover:bg-gray-100 transition-colors duration-200" href={project.projectLink} target='_blank'>
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
                <a className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-transparent border border-gray-600 rounded-lg hover:bg-gray-900 hover:border-gray-500 transition-colors duration-200" href={project.github} target='_blank'>
                  <Github className="h-4 w-4" />
                  View Code
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg border border-gray-800 max-w-[450px] max-h-[450px] ">
                <img
                  src={project.image}
                  alt="TaskFlow Pro Dashboard Screenshot"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-12 md:py-16 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6 max-w-[900px]">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 md:p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Project Overview</h2>
              <p className="text-gray-400">Understanding the problem and solution</p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">The Challenge</h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">The Solution</h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6 max-w-[900px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">Key Features</h2>
            <p className="text-gray-300 text-lg">Powerful features designed to enhance your workflow</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {project.features?.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg border border-gray-800 bg-gray-900 hover:bg-gray-800 transition-colors duration-200"
              >
                <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm font-medium text-white">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-12 md:py-16 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6 max-w-[900px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">Technology Stack</h2>
            <p className="text-gray-300 text-lg">Built with modern, industry-standard technologies</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-1">
              <div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.techstack?.slice(0, 10).map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-gray-200 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6 max-w-[900px]">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">Interested in This Project?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Feel free to explore the live demo or check out the source code on GitHub.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-black bg-white rounded-lg hover:bg-gray-100 transition-colors duration-200" href={project.projectLink} target='_blank'>
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
              <a className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-transparent border border-gray-600 rounded-lg hover:bg-gray-900 hover:border-gray-500 transition-colors duration-200" href={project.github} target='_blank'>
                <Github className="h-4 w-4" />
                View Code
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

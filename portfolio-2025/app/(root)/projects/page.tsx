"use client"

import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { FolderKanban, Loader } from "lucide-react"

const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with Next.js, Tailwind CSS and Framer Motion. A full-stack task management app with user auth, drag & drop and dark mode. A full-stack task management app with user auth, drag & drop and dark mode.A full-stack task management app with user auth, drag & drop and dark mode.A full-stack task management app with user auth, drag & drop and dark mode.s",
    image: "/images/portfolio.png",
    date: "2024-10-05",
    githubUrl: "https://github.com/yourname/portfolio",
    liveDemoUrl: "https://yourdomain.com",
  },
  {
    title: "Task Manager App",
    description: "A full-stack task management app with user auth, drag & drop and dark mode. A full-stack task management app with user auth, drag & drop and dark mode. A full-stack task management app with user auth, drag & drop and dark mode.A full-stack task management app with user auth, drag & drop and dark mode.A full-stack task management app with user auth, drag & drop and dark mode.",
    image: "/images/task-manager.png",
    date: "2024-06-20",
    githubUrl: "https://github.com/yourname/task-manager",
  },
  {
    title: "Weather App",
    description: "Simple weather app fetching real-time data using OpenWeatherMap API. Simple weather app fetching real-time data using OpenWeatherMap API Simple weather app fetching real-time data using OpenWeatherMap API. I will create this site in 5 days! This project was very difficult for me!",
    image: "/images/weather-app.jpg",
    date: "2024-01-10",
    liveDemoUrl: "https://weather.yoursite.com",
  },
]

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-sky-400 flex justify-center items-center gap-2">
        <FolderKanban className="text-sky-500" size={40}/> My Projects
      </h2>

      <div className="grid grid-cols-1 py-3 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>

      <div className="w-full border-b py-3 flex items-center justify-center">
        <Button variant={"outline"}>
          Yana ko'rish
          <Loader className="animate-spin h-6 w-6"/>
        </Button>
      </div>

      <div className="text-center mt-20">
        <h4 className="text-xl font-medium text-slate-700 dark:text-slate-100 mb-4">Want to collaborate or need something similar?</h4>
        <button
          className="bg-sky-500 hover:bg-sky-600 text-white py-3 px-6 rounded-xl text-lg font-semibold transition"
          onClick={() => alert("Let’s talk!")}
        >
          Get in Touch
        </button>
      </div>
    </div>
  )
}

export default Projects

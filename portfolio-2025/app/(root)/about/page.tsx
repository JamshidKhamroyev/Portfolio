"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Check, Code, Download, DownloadIcon, Users, View } from "lucide-react" // Using icons from lucide-react

const AboutPage = () => {
  const router = useRouter()

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-sky-400">About Me</h2>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Hello! I&apos;m Jamshid Khamroyev, a Full-stack developer with over years of experience. I primarily work with the MERN stack (MongoDB, Express.js, React, Node.js). My goal is to build modern and functional web applications that help grow your business.
          </p>

          <p className="text-lg text-slate-600 dark:text-slate-300">
            The applications I create are high-quality, aimed at enhancing user experience and increasing efficiency. I am confident that I can contribute to your current project or business with impactful solutions.
          </p>

          <div className="flex items-center gap-2">
            <Button size="lg" className="flex items-center gap-1">
              <a href="">Dowload Sertificat</a>
              <Download />
            </Button>

            <Button onClick={() => router.push("/projects")} size="lg">
              <p>View My Projects</p>
              <View />
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-slate-700 dark:text-slate-100">My Capabilities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <Check className="text-sky-500 text-3xl" size={49}/>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Creative Problem Solving: I approach each project with creativity and innovation to find the best solutions.
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <Code className="text-sky-500 text-3xl" size={49}/>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Full-stack Experience: I have strong expertise in both backend and frontend development, especially with the MERN stack.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Users className="text-sky-500" size={49}/>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Team Collaboration: Experienced in working efficiently with large teams and sharing knowledge effectively.
              </p>
            </div>
          </div>

          <Button size="lg">
            <a href="">Dowload Resume</a>
            <DownloadIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AboutPage

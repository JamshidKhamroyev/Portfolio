"use client"

import CurrentImage from "@/components/current-image"
import HeroSection from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Typewriter } from "react-simple-typewriter"

const HomePage = () => {
  const router = useRouter()

  return (
    <div className="w-full md:px-4 h-[100vh] relative pt-24">
      <div className="w-full flex items-center max-md:flex-col-reverse justify-between h-full">
        <div className="w-full">
          <p className="lg:text-xl text-lg mb-2 max-md:mt-8">Hello everyone!</p>
          <h2 className="lg:text-4xl text-3xl font-bold mb-2 capitalize">I&apos;m <span className="text-sky-400"><Typewriter words={["Jamshid Khamroyev","Full-stack Developer", "MERN stack expert", "Next js Developer", "Probling solver", "Jamshid Khamroyev","Full-stack Developer", "MERN stack expert", "Next js Developer", "Probling solver", "Jamshid Khamroyev","Full-stack Developer", "MERN stack expert", "Next js Developer", "Probling solver"]} cursor cursorStyle="|" typeSpeed={80}/></span></h2>
          <h4 className="lg:text-2xl text-xl">I create modern and functional web applications based on Full-stack and MERN stack!</h4>
          <div className="flex gap-2 items-center my-2">
            <Button onClick={() => router.push("/projects")} size={"lg"}>See my works</Button>
            <Button onClick={() => router.push("/contact")} size={"lg"}>Contact me</Button>
          </div>
        </div>  

        <div className="w-full flex items-center justify-center">
          <div className="relative h-[400px] w-[400px]">
            <CurrentImage fill src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzMlWIewtcbAtE1ytUAVGlsWZ587UOwaUALA&s" className="object-cover rounded-full dark:border-4 border-sky-400 shadow-lg shadow-sky-400"/>
          </div>
        </div>
      </div>

      <HeroSection />      
    </div>
  )
}

export default HomePage
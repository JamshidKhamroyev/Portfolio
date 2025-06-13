"use client"

import CurrentImage from "@/components/current-image"
import HeroSection from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Typewriter } from "react-simple-typewriter"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const HomePage = () => {
  const router = useRouter()

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const textVariants = {
    hidden: { x: isMobile ? 100 : 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const imageVariants = {
    hidden: { x: isMobile ? -100 : 0, y: isMobile ? 0 : 100, opacity: 0 },
    visible: { x: 0, y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <div className="w-full md:px-4 h-[100vh] relative pt-24">
      <div className="w-full flex items-center max-md:flex-col-reverse justify-between h-full">
        <motion.div
          className="w-full max-md:px-2"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="lg:text-xl text-lg mb-2 max-md:mt-8">Hello everyone!</p>
          <h2 className="lg:text-4xl text-3xl font-bold mb-2 capitalize">
            I&apos;m{" "}
            <span className="text-sky-400">
              <Typewriter
                words={[
                  "Jamshid Khamroyev",
                  "Full-stack Developer",
                  "MERN stack expert",
                  "Next js Developer",
                  "Probling solver",
                ]}
                cursor
                cursorStyle="|"
                typeSpeed={80}
              />
            </span>
          </h2>
          <h4 className="lg:text-2xl text-xl">
            I create modern and functional web applications based on Full-stack and MERN stack!
          </h4>
          <div className="flex gap-2 items-center my-2">
            <Button onClick={() => router.push("/projects")} size={"lg"}>
              See my works
            </Button>
            <Button onClick={() => router.push("/contact")} size={"lg"}>
              Contact me
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="w-full flex items-center justify-center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative h-[400px] w-[400px]">
            <CurrentImage
              fill
              src="/profile.png"
              className="object-cover rounded-full dark:border-4 border-sky-400 shadow-lg shadow-sky-400"
            />
          </div>
        </motion.div>
      </div>

      <HeroSection />
    </div>
  )
}

export default HomePage
"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Check, Code, Download, DownloadIcon, Users, View } from "lucide-react"
import { motion } from "framer-motion"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
}

const slideLeft = {
  hidden: { x: -100, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.7 } },
}

const slideRight = {
  hidden: { x: 100, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.7 } },
}

const AboutPage = () => {
  const router = useRouter()

  return (
    <motion.div
      className="md:px-4 w-full md:py-20 py-7"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <motion.h2
        className="text-3xl lg:text-4xl font-bold text-center mb-8 text-sky-400"
        variants={fadeUp}
      >
        About Me
      </motion.h2>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        <motion.div className="space-y-6" variants={slideLeft}>
          <p className="md:text-lg text-[17px] max-md:px-1 text-slate-600 dark:text-slate-300">
            Hello! I&apos;m Jamshid Khamroyev, a Full-stack developer with years of experience.
            I primarily work with the MERN stack (MongoDB, Express.js, React, Node.js).
            My goal is to build modern and functional web applications that help grow your business.
          </p>

          <p className="md:text-lg text-[17px] px-1 text-slate-600 dark:text-slate-300">
            The applications I create are high-quality, aimed at enhancing user experience and increasing efficiency.
            I am confident that I can contribute to your current project or business with impactful solutions.
          </p>

          <div className="flex items-center gap-2">
            <Button size="lg" className="flex items-center gap-1">
              <a href="/certificate.jpg" download={"certificate"}>
                Download Certificate
              </a>
              <Download />
            </Button>

            <Button onClick={() => router.push("/projects")} size="lg" className="flex items-center gap-1">
              View My Projects
              <View />
            </Button>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div className="space-y-6" variants={slideRight}>
          <h3 className="text-2xl max-md:text-center font-semibold text-slate-700 dark:text-slate-100">
            My Capabilities
          </h3>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div className="flex items-start md:gap-4 gap-2 px-1" variants={fadeUp}>
              <Check className="text-sky-500 md:block hidden" size={49} />
              <p className="md:text-lg text-[16px] text-slate-600 dark:text-slate-300">
                Creative Problem Solving: I approach each project with creativity and innovation to find the best solutions.
              </p>
            </motion.div>

            <motion.div className="flex items-start md:gap-4 gap-2 px-1" variants={fadeUp}>
              <Code className="text-sky-500 md:block hidden" size={49} />
              <p className="md:text-lg text-[16px] text-slate-600 dark:text-slate-300">
                Full-stack Experience: I have strong expertise in both backend and frontend development, especially with the MERN stack.
              </p>
            </motion.div>

            <motion.div className="flex items-start md:gap-4 gap-2 px-1 sm:col-span-2" variants={fadeUp}>
              <Users className="text-sky-500 md:block hidden" size={49} />
              <p className="md:text-lg text-[16px] text-slate-600 dark:text-slate-300">
                Team Collaboration: Experienced in working efficiently with large teams and sharing knowledge effectively.
              </p>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Button size="lg" className="flex items-center gap-1">
              <a href="/JamshidKhamroyevResume.pdf" download={"resume"}>
                Download Resume
              </a>
              <DownloadIcon />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default AboutPage

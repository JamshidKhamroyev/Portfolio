"use client"

import { CheckCircle, Code, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  }),
  whileHover: {
    scale: 1.03,
    boxShadow: "0px 8px 30px rgba(0,0,0,0.12)",
    transition: { duration: 0.3 }
  }
}

const HeroSection = () => {
  const router = useRouter()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" }) // scrollga nisbatan triggering

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900 py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-sky-400 capitalize">
          Why me?
        </h2>

        <p className="text-center text-lg text-slate-600 dark:text-slate-300 mb-12">
          I create modern and functional web applications that will help you grow your business and stand out from your competitors.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {[{
            icon: <CheckCircle className="text-sky-500 text-4xl mb-4" />,
            title: "Innovative Approach",
            desc: "I aim to solve problems effectively and creatively, applying an innovative approach to each project.",
            stat: "50+ I created a successful project.",
            action: () => router.push("/projects"),
            btn: "More"
          }, {
            icon: <Code className="text-sky-500 text-4xl mb-4" />,
            title: "Full-stack Experience",
            desc: "I am a specialist with experience in the MERN Stack and building effective systems using modern technologies.",
            stat: "200+ I served customers.",
            action: () => router.push("/about"),
            btn: "More"
          }, {
            icon: <Lightbulb className="text-sky-500 text-4xl mb-4" />,
            title: "Problem Solving",
            desc: "I combine strategic thinking and creativity to solve every problem quickly and efficiently.",
            stat: "99% successfully completed projects.",
            action: () => router.push("/contact"),
            btn: "Contact me"
          }].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="whileHover"
              variants={cardVariants}
              className="max-w-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg shadow-md p-6"
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-100 mb-2">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-4">{item.desc}</p>
              <p className="text-slate-600 dark:text-slate-300 mb-4 font-semibold">{item.stat}</p>
              <Button onClick={item.action} size="sm">{item.btn}</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroSection

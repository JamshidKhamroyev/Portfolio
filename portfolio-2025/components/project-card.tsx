"use client"

import { ExternalLink, Github, CalendarDays, BadgeCheck } from "lucide-react"
import CurrentImage from "./current-image"
import { IProject } from "@/types"
import { format } from "date-fns"
import Public from "@/hooks/use-public"
import { motion } from "framer-motion"

const ProjectCard = ({ title, description, image, createdAt, githubLink, demoLink }: IProject) => {
  const usePublic = Public()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        boxShadow: "0px 12px 25px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3 },
      }}
      className="dark:bg-background border border-gray-400 text-white shadow-lg overflow-hidden flex flex-col h-full"
    >
      <CurrentImage
        src={`${usePublic.url}/api/projects-images/${image}`}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="space-y-4 p-2 border-t flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center gap-2 text-sky-400 font-semibold text-lg">
            <BadgeCheck size={18} /> {title.slice(0, 35)}...
          </div>

          <p className="line-clamp-3 text-justify dark:text-white text-black text-sm">
            {description}
          </p>
        </div>
        <div className="flex items-center text-xs gap-2 text-gray-700 dark:text-white">
          <CalendarDays size={16} />
          Created: {format(createdAt, "dd-MMM-yyyy")}
        </div>

        {(githubLink || demoLink) ? (
          <div className="flex gap-4 mt-2">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1 dark:text-gray-400 text-gray-900"
              >
                <Github size={16} /> GitHub
              </a>
            )}
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline flex items-center gap-1"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>
        ) : <p className="dark:text-white text-slate-800 hover:underline cursor-pointer">No links</p>}
      </div>
    </motion.div>
  )
}

export default ProjectCard

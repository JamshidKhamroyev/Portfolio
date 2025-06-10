"use client"

import { ExternalLink, Github, CalendarDays, FileText, BadgeCheck } from "lucide-react"
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
        scale: 1.02,
        boxShadow: "0px 12px 25px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3 },
      }}
      className="dark:bg-background border border-gray-400 p-4 rounded-sm text-white shadow-lg overflow-hidden flex flex-col h-full"
    >
      <CurrentImage
        src={`${usePublic.url}/api/projects-images/${image}`}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />

      <div className="space-y-4 border-t mt-4 pt-3 flex flex-col flex-1 justify-between">
        <div className="flex items-center gap-2 text-sky-400 font-semibold text-lg">
          <BadgeCheck size={18} /> {title}
        </div>

        <p className="line-clamp-3 text-justify dark:text-white text-black text-sm">
          {description}
        </p>

        <div className="flex items-center text-xs gap-2 text-gray-700 dark:text-white">
          <CalendarDays size={16} />
          Created: {format(createdAt, "dd-MMM-yyyy")}
        </div>

        {(githubLink || demoLink) && (
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
        )}
      </div>
    </motion.div>
  )
}

export default ProjectCard

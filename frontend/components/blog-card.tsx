"use client"

import { CalendarDays, ExternalLink, FileText, ImageOff } from "lucide-react"
import CurrentImage from "./current-image"
import { IBlog } from "@/types"
import Public from "@/hooks/use-public"
import { format } from "date-fns"
import { motion } from "framer-motion"

const BlogCard = ({ title, description, createdAt, image, link }: IBlog) => {
  const usePublic = Public()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3 },
      }}
      className="bg-white dark:bg-background border-gray-400 border dark:border-gray-600 shadow-md overflow-hidden flex flex-col h-full"
    >
      {image ? (
        <CurrentImage
          src={`${usePublic.url}/api/blog-images/${image}`}
          alt={title}
          className="w-full h-56 object-cover bg-slate-200 dark:bg-slate-700"
        />
      ) : (
        <div className="w-full h-56 bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-400 dark:text-slate-500">
          <ImageOff size={32} />
        </div>
      )}

      <div className="space-y-3 p-2 flex flex-col justify-between flex-1">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-sky-400 flex items-center gap-2">
            <FileText size={18} /> {title}
          </h3>

          <p className="text-slate-600 line-clamp-3 dark:text-slate-300 text-sm">
            {description}
          </p>
        </div>

        <div className="pt-3">
          <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <CalendarDays size={14} />
            <span>{format(createdAt, "dd-MMMM")}</span>
          </p>

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-blue-500 hover:underline text-sm inline-flex items-center gap-1"
            >
              <ExternalLink size={14} /> Open link
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default BlogCard

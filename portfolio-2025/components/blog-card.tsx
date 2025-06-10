import { CalendarDays, ExternalLink, FileText, ImageOff } from "lucide-react"
import CurrentImage from "./current-image"

interface BlogCardProps {
  title: string
  description: string
  createdAt: string
  image?: string
  link?: string
}

const BlogCard = ({ title, description, createdAt, image, link }: BlogCardProps) => {
  return (
    <div className="bg-white dark:bg-background dark:border dark:border-gray-600 p-2 rounded-md shadow-md overflow-hidden hover:shadow-xl transition-all flex flex-col h-full">
      {image ? (
        <CurrentImage
          src={image}
          alt={title}
          className="w-full h-48 object-cover bg-slate-200 dark:bg-slate-700"
        />
      ) : (
        <div className="w-full h-48 bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-400 dark:text-slate-500">
          <ImageOff size={32} />
        </div>
      )}

      <div className="space-y-3 mt-3 px-1 flex flex-col justify-between flex-1">
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
            <CalendarDays size={14} /> {createdAt}
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
    </div>
  )
}

export default BlogCard

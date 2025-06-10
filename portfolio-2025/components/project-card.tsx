import { ExternalLink, Github, CalendarDays, FileText, BadgeCheck } from "lucide-react"
import CurrentImage from "./current-image"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  date: string
  githubUrl?: string
  liveDemoUrl?: string
}

const ProjectCard = ({ title, description, image, date, githubUrl, liveDemoUrl }: ProjectCardProps) => {
  return (
    <div className="dark:bg-background dark:border bg-slate-800 p-4 rounded-sm text-white shadow-lg overflow-hidden hover:shadow-xl transition-all">
        <CurrentImage src={image} alt={title} className="w-full h-48 object-cover"/>
        <div className="space-y-4 border-t">
          <div className="flex items-center gap-2 my-2 text-sky-400 font-semibold text-lg">
            <BadgeCheck size={18} /> {title}
          </div>    
          <div className="flex items-start gap-2 text-sm">
            <p className="line-clamp-3 text-justify">{description}</p>
          </div>    
          <div className="flex items-center gap-2 text-xs">
            <CalendarDays size={16} /> Created: {date}
          </div>    
          {(githubUrl || liveDemoUrl) && (
            <div className="flex gap-4 mt-3">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1"
                >
                  <Github size={16} /> GitHub
                </a>
              )}
              {liveDemoUrl && (
                <a
                  href={liveDemoUrl}
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
    </div>
  )
}

export default ProjectCard

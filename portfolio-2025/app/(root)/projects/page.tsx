"use client"

import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { FolderKanban, Loader } from "lucide-react"
import { IProject } from "@/types"
import Public from "@/hooks/use-public"

const Projects = () => {
  const usePublic = Public()

  const [projects, setProjects] = useState<IProject[]>([])
  const [limit, setLimit] = useState(3)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const getProjects = useCallback(async() => {
    setLoading(true)
    try {
      const { data } = await axios.get(`${usePublic.url}/api/project/get-all/${limit}`)
      if (data.succes) {
        if (data.data.length < limit) {
          setHasMore(false)
        } else {
          setHasMore(true)
        }
        setProjects(data.data)
      }
    } catch (error) {
      console.error("Error fetching projects:", error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    getProjects()
  }, [limit])
  
  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-sky-400 flex justify-center items-center gap-2">
        <FolderKanban className="text-sky-500" size={40} /> My Projects
      </h2>

      <div className="grid grid-cols-1 py-3 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects?.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>

      <div className="w-full border-b py-3 flex items-center justify-center">
        <Button
          variant="outline"
          onClick={() => setLimit(prev => prev + 3)}
          disabled={loading || !hasMore}
        >
          Yana ko&apos;rish
          {loading && <Loader className="animate-spin h-5 w-5 ml-2" />}
        </Button>
      </div>

      <div className="text-center mt-20">
        <h4 className="text-xl font-medium text-slate-700 dark:text-slate-100 mb-4">
          Want to collaborate or need something similar?
        </h4>
        <button
          className="bg-sky-500 hover:bg-sky-600 text-white py-3 px-6 rounded-xl text-lg font-semibold transition"
          onClick={() => alert("Let’s talk!")}
        >
          Get in Touch
        </button>
      </div>
    </div>
  )
}

export default Projects

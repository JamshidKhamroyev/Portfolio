"use client"

import BlogCard from "@/components/blog-card"
import { Button } from "@/components/ui/button"
import Public from "@/hooks/use-public"
import axios from "axios"
import { IBlog } from "@/types"
import { Loader } from "lucide-react"
import { useEffect, useState } from "react"

const Blogs = () => {
  const [load, setLoad] = useState(false)
  const usePublic = Public()
  const [limit, setLimit] = useState<number>(3)
  const [blogs, setBlogs] = useState<IBlog[]>([])
  const [hasMore, setHasMore] = useState(true)

  const getBlogs = async () => {
    setLoad(true)
    try {
      const { data } = await axios.get(`${usePublic.url}/api/blogs/get-all/${limit}`) 
      if (data.succes) {
        setBlogs(data.data)

        if (data.data.length < limit) {
          setHasMore(false)
        } else {
          setHasMore(true)
        }
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoad(false)
    }
  }

  useEffect(() => {
    getBlogs()
  }, [limit])

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-sky-400">
        My Blog Articles
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, idx) => (
          <BlogCard key={idx} {...blog} />
        ))}
      </div>

      <div className="w-full flex items-center py-4 lg:border-b justify-center">
        <Button
          disabled={load || !hasMore} 
          variant={"outline"}
          onClick={() => setLimit(prev => prev + 3)}
        >
          See more
          {load && <Loader className="animate-spin h-5 w-5 ml-2" />}
        </Button>
      </div>
    </div>
  )
}

export default Blogs

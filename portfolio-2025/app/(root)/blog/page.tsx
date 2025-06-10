"use client"

import BlogCard from "@/components/blog-card"
import { Button } from "@/components/ui/button"
import { Loader } from "lucide-react"

const blogs = [
  {
    title: "React Rendering Deep Dive",
    description: "A technical breakdown of React rendering phases, batching, and reconciliation.",
    createdAt: "2024-12-10",
    image: "/images/react-rendering.png",
    link: "https://myblog.com/react-rendering"
  },
  {
    title: "How I Structure Full-Stack Projects",
    description: "A walkthrough of my go-to project folder structures and tech choices.",
    createdAt: "2025-02-18"
  },
  {
    title: "Working with MongoDB Aggregation",
    description: "Practical tips and gotchas when using MongoDB's powerful aggregation pipeline.",
    createdAt: "2025-04-02",
    image: "/images/mongodb-aggregation.png",
    link: "https://myblog.com/mongodb-aggregation"
  }
]

const Blogs = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-sky-400">My Blog Articles</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, idx) => (
          <BlogCard key={idx} {...blog} />
        ))}
      </div>

      <div className="w-full flex items-center py-4 border-b justify-center">
        <Button variant={"outline"}>
            See all
            <Loader className="animate-spin h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

export default Blogs

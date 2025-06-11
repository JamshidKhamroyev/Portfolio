"use client";

import BlogCard from "@/components/blog-card";
import { PlusCircle } from "lucide-react";
import blogModal from "@/hooks/use-blog-modal"
import BlogCreateModal from "@/components/modals/blog-create.modal";
import { useEffect, useState } from "react";
import axios from "axios";
import useAdmin from "@/hooks/use-admin";
import { IBlog } from "@/types";

const Blog = () => {
  const useBlogModal = blogModal()
  const admin = useAdmin()
  const [limit, setLimit] = useState(5)
  const [blogs, setBlogs] = useState<IBlog[]>([])

  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get(`${admin.url}/api/blogs/get-all/${limit}`)      
      if(data.succes){
        setBlogs(data.data)
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllBlogs()
  }, [])
  return (
    <>
      <BlogCreateModal />
      <div className="p-4 space-y-6">
        <div className="flex items-center justify-between border-b pb-4">
          <div>
            <h2 className="text-2xl font-bold">Bloglar</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              So‘nggi yozilgan maqolalaringiz ro‘yxati.
            </p>
          </div>

          <button onClick={() => useBlogModal.onOpen()} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-sm cursor-pointer hover:bg-blue-700 transition text-sm">
            <PlusCircle size={18} /> Yangi qo‘shish
          </button>
        </div>

        <div className="grid items-center md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} {...blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
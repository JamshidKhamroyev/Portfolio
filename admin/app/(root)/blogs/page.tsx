"use client";

import BlogCard from "@/components/blog-card";
import { Loader, PlusCircle } from "lucide-react";
import blogModal from "@/hooks/use-blog-modal";
import BlogCreateModal from "@/components/modals/blog-create.modal";
import { useEffect, useState } from "react";
import axios from "axios";
import useAdmin from "@/hooks/use-admin";
import { IBlog } from "@/types";
import { v4 } from "uuid";
import { toast } from "react-toastify";

const Blog = () => {
  const useBlogModal = blogModal();
  const admin = useAdmin();

  const [limit, setLimit] = useState(5);
  const [isGetting, setIsGetting] = useState(false);
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [isFinished, setIsFinished] = useState(false); // ✅ yangi flag

  const getAllBlogs = async () => {
    setIsGetting(true);
    try {
      const { data } = await axios.get(`${admin.url}/api/blogs/get-all/${limit}`);
      if (data.succes) {
        setBlogs(data.data);
        setIsFinished(data.data.length < limit)
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsGetting(false);
    }
  };

  const handleDelete = async (id: string) => {
    setLoadingId(id);
    try {
      const { data } = await axios.delete(`${admin.url}/api/blogs/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${Math.floor(Math.random() * 100000)}14922${Date.now()}14922${process.env.NEXT_PUBLIC_SECRET_KEY}14922${v4()}`,
        },
      });
      if (data.succes) {
        setBlogs((prev) => prev.filter((blog) => blog._id !== id));
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      const result = error as Error
      toast.error(result.message || "Xatolik yuz berdi");
    } finally {
      setLoadingId(null);
    }
  };

  const submitHandler = (data: IBlog) => {
    setBlogs((prev) => [data, ...prev]);
  };

  useEffect(() => {
    getAllBlogs();
  }, [limit]);

  return (
    <>
      <BlogCreateModal submitHandler={submitHandler} />
      <div className="p-4 space-y-6 w-[80vw]">
        <div className="flex items-center w-full justify-between border-b pb-4">
          <div>
            <h2 className="text-2xl font-bold">Bloglar</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              So‘nggi yozilgan maqolalaringiz ro‘yxati.
            </p>
          </div>
          <button
            onClick={() => useBlogModal.onOpen()}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-sm hover:bg-blue-700 transition text-sm"
          >
            <PlusCircle size={18} /> Yangi qo‘shish
          </button>
        </div>

        <div className="grid items-start md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((blog) => (
            <BlogCard
              key={blog._id}
              {...blog}
              load={loadingId === blog._id}
              deleteHandler={() => handleDelete(blog._id)}
            />
          ))}
        </div>

        <div className="w-full flex items-center justify-center">
          <button
            onClick={() => setLimit((prev) => prev + 5)}
            disabled={isGetting || isFinished}
            className="px-4 py-1 rounded-sm border cursor-pointer hover:bg-blue-600 border-slate-600 hover:border-transparent hover:text-white duration-300 disabled:opacity-70 flex items-center justify-center gap-2"
          >
            {isFinished ? "Yana blog yo‘q" : "Yana ko‘rish"}
            {isGetting && <Loader className="w-5 h-5 animate-spin" />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Blog;

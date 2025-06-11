"use client"

import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import { Calendar, ExternalLink, FileText, Trash2, ImageOff, Loader } from "lucide-react"
import useAdmin from "@/hooks/use-admin"
import { useState } from "react"
import { IBlog } from "@/types"

const BlogCard = ({ _id, title, description, createdAt, image, link }: IBlog) => {
  const admin = useAdmin()
  const [load, setLoad] = useState(false)
  const [hasImage, setHasImage] = useState(!!image)

  const handleDelete = () => {
    alert(`Blog "${_id}" o‘chirildi`)
  }

  const isValidImage = typeof image === "string"

  return (
    <div className="border border-gray-300 dark:border-gray-600 rounded-lg shadow-md overflow-hidden bg-white dark:bg-gray-900 flex flex-col hover:shadow-lg transition">
      {hasImage && isValidImage ? (
        <Image
          src={`${admin.url}/api/blog-images/${image}`}
          alt={title}
          width={500}
          height={300}
          className="w-full h-56 object-cover"
        />
      ) : (
        <div className="w-full h-56 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-400">
          <ImageOff size={32} />
          <span className="ml-2 text-sm">Rasm mavjud emas</span>
        </div>
      )}

      <div className="p-2 flex flex-col justify-start space-y-3 h-full">
        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-lg">
          <FileText size={18} /> {title}
        </div>

        <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
          {description}
        </p>

        <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
          <Calendar size={14} />
          {format(new Date(createdAt), "dd-MMM-yyyy")}
        </div>

        {link && typeof link === "string" && (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-sm hover:underline flex items-center gap-1"
          >
            <ExternalLink size={16} /> O‘qish
          </Link>
        )}

        {admin.isAdmin && (
          <button
            onClick={handleDelete}
            className="flex items-center gap-1 text-red-500 border justify-center py-2 rounded-sm border-red-400 cursor-pointer hover:bg-red-500 hover:text-white duration-300 text-sm mt-2 transition"
          >
            {load && <Loader className="animate-spin h-5 w-5" />}
            <Trash2 size={16} /> O‘chirish
          </button>
        )}
      </div>
    </div>
  )
}

export default BlogCard

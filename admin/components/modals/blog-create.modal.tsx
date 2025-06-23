"use client";

import blogModal from "@/hooks/use-blog-modal";
import Modal from "../ui/modal";
import { useState, ChangeEvent } from "react";
import { Loader, PlusCircle, Upload } from "lucide-react";
import { v4 } from "uuid";
import axios from "axios";
import useAdmin from "@/hooks/use-admin";
import { IBlog } from "@/types";
import Image from "next/image";

const BlogCreateModal = ({ submitHandler }: { submitHandler: (data: IBlog) => void}) => {
  const useCreateModal = blogModal();
  const admin = useAdmin();

  const [title, setTitle] = useState("");
  const [load, setLoad] = useState(false)
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [newImage, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoad(true)
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
    setLoad(false)
  };

  const handleSubmit = async () => {
    setLoad(true)
    try {
      const formdata = new FormData();
      formdata.append("title", title);
      formdata.append("description", description);
      formdata.append("link", link);
      if (newImage) {
        formdata.append("image", newImage);
      }

      const { data } = await axios.post(
        `${admin.url}/api/blogs/create`,
        formdata,
        {
          headers: {
            Authorization: `Bearer ${Math.floor(Math.random() * 100000)}14922${Date.now()}14922${process.env.NEXT_PUBLIC_SECRET_KEY}14922${v4()}`,
          },
        }
      );

      if (data.succes) {
        submitHandler(data.data)
        useCreateModal.onClose();
      }
    } catch (error) {
      console.error("Xatolik:", error);
    }finally{
        setLoad(false)
    }
  };

  const body = (
    <div className="max-h-[70vh] overflow-y-auto md:p-4 p-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow bg-white dark:bg-gray-900 max-md:w-full md:max-w-xl mx-auto space-y-4">
      <h2 className="text-xl font-bold">Yangi blog qo‘shish</h2>
      <div>
        <label className="block text-sm font-medium mb-1">Sarlavha</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="w-full border rounded p-2 bg-white dark:bg-gray-800 dark:text-white"
          placeholder="Masalan: Next.js bilan SEO"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Tavsif</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded p-2 bg-white dark:bg-gray-800 dark:text-white"
          rows={3}
          placeholder="Maqola haqida qisqacha ma'lumot..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Blog havolasi</label>
        <input
          value={link}
          onChange={(e) => setLink(e.target.value)}
          type="url"
          className="w-full border rounded p-2 bg-white dark:bg-gray-800 dark:text-white"
          placeholder="https://example.com/blog"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Rasm yuklash</label>
        <div className="flex items-center gap-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="file:bg-indigo-600 file:text-white file:px-3 file:py-1 file:rounded file:cursor-pointer text-sm"
          />
          <Upload size={20} className="text-gray-500" />
        </div>
        {imagePreview && (
          <div className="mt-2">
            <Image
              src={imagePreview}
              alt="Preview"
              height={300}
              width={500}
              className="h-40 w-full object-cover rounded"
            />
          </div>
        )}  
      </div>

      <button
        onClick={handleSubmit}
        disabled={load}
        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition text-sm"
      >
        <PlusCircle size={16} /> Saqlash
        {load && <Loader className="animate-spin h-5 w-5" />}
      </button>
    </div>
  );

  return (
    <Modal isOpen={useCreateModal.isOpen} onClose={useCreateModal.onClose} body={body} />
  );
};

export default BlogCreateModal;

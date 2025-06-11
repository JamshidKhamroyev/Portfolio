"use client";

import useAdmin from "@/hooks/use-admin";
import { format } from "date-fns";
import {
  ExternalLink,
  Github,
  CalendarDays,
  BadgeCheck,
  FileText,
  Trash2,
  Loader,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Props {
  _id: string;
  title: string;
  description: string;
  image: string;
  createdAt: Date;
  githubLink?: string;
  demoLink?: string;
}

const ProjectCard = ({
  title,
  description,
  _id,
  image,
  createdAt,
  githubLink,
  demoLink,
}: Props) => {
  const admin = useAdmin();
  const [hasImage, setHasImage] = useState(true);
  const [load, setLoad] = useState(false)

  const handleDelete = () => {
    alert(`"${_id}" loyiha o‘chirildi`);
  };

  return (
    <div className="dark:bg-background bg-white border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white shadow-lg rounded-xl overflow-hidden flex flex-col h-full transition-transform cursor-pointer hover:shadow-2xl">
      <div className="w-full h-56 relative bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        {hasImage && image ? (
          <Image
            src={`${admin.url}/api/projects-images/${image}`}
            alt={title}
            fill
            className="object-cover"
            onError={() => setHasImage(false)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-400">
            <FileText size={40} />
            <span className="text-sm mt-1">Rasm mavjud emas</span>
          </div>
        )}
      </div>

      <div className="p-4 space-y-4 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center gap-2 text-sky-500 font-semibold text-lg mb-1">
            <BadgeCheck size={18} /> {title}
          </div>
          <p className="line-clamp-3 text-sm text-justify text-gray-700 dark:text-gray-200">
            {description}
          </p>
        </div>

        <div className="flex items-center text-xs gap-2 text-gray-500 dark:text-gray-400">
          <CalendarDays size={16} />
          Yar.: {format(createdAt, "dd-MMM-yyyy")}
        </div>

        {(githubLink || demoLink) ? (
          <div className="flex gap-4 mt-2">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1 text-blue-600 dark:text-blue-400"
              >
                <Github size={16} /> GitHub
              </a>
            )}
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline flex items-center gap-1"
              >
                <ExternalLink size={16} /> Demo
              </a>
            )}
          </div>
        ) : (
          <p className="text-slate-500 dark:text-slate-300 text-sm">Havolalar yo‘q</p>
        )}

        {admin.isAdmin && (
          <button
            onClick={handleDelete}
            className="flex items-center gap-1 text-red-500 border justify-center py-2 rounded-sm border-red-400 cursor-pointer hover:bg-red-500 hover:text-white duration-300 text-sm mt-2 transition"
          >
            {load && <Loader className="animate-spin h-5 w-5"/>}
            <Trash2 size={16} /> O‘chirish
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

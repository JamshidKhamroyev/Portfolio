"use client";

import ProjectCard from "@/components/project-card";
import { Plus } from "lucide-react";

const dummyProjects = [
  {
    _id: "1",
    title: "Admin Panel",
    description: "Admin panel Next.js va Tailwind bilan tuzilgan. Foydalanuvchilarni boshqarish, kontentni tahrirlash imkoniyatlari mavjud.",
    image: "admin-panel.png",
    createdAt: new Date("2024-11-01"),
    githubLink: "https://github.com/yourproject/admin-panel",
    demoLink: "https://admin.yoursite.com",
  },
  {
    _id: "2",
    title: "Portfolio",
    description: "Portfolio sayti developer ishlarini namoyish etish uchun. Zamonaviy dizayn va responsive layout.",
    image: "portfolio.jpg",
    createdAt: new Date("2025-01-15"),
    githubLink: "https://github.com/yourproject/portfolio",
  },
  {
    _id: "3",
    title: "Blog Platforma",
    description: "Foydalanuvchilar maqola yozish, ko‘rish va baholash imkoniyatiga ega.",
    image: "blog.jpg",
    createdAt: new Date("2025-03-10"),
    demoLink: "https://blog.yoursite.com",
  },
];

const Projects = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between border-b items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Loyihalar</h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md">
            Bu yerda siz yaratgan barcha loyihalarni ko‘rishingiz va boshqarishingiz mumkin.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-sm cursor-pointer hover:bg-blue-700 transition">
          <Plus size={18} />
          Yangi loyiha
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyProjects.map((project) => (
          <ProjectCard key={project._id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

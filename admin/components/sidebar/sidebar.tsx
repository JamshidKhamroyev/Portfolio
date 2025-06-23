"use client";

import { Home, Folder, Book } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // <-- bu muhim

const menuItems = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: Folder,
  },
  {
    title: "Blogs",
    href: "/blogs",
    icon: Book,
  },
];

const Sidebar = () => {
  const pathname = usePathname(); // <-- joriy sahifa URL

  return (
    <div className="h-full md:p-4 p-2 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white flex flex-col gap-4">
      <h2 className="text-xl font-bold mb-4">Menu</h2>

      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-2 md:p-2 p-1 rounded transition ${
              isActive
                ? "bg-blue-600 text-white"
                : "hover:bg-slate-200 dark:hover:bg-slate-800"
            }`}
          >
            <Icon size={20} />
            <span className="max-md:hidden">{item.title}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;

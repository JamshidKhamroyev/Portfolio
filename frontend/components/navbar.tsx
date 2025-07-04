"use client"

import { ModeToggle } from "@/lib/mode-icons";
import { cn } from "@/lib/utils";
import { Home, User, Code, Briefcase, FileText, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  

  return (
    <div className={cn("w-full lg:py-4 py-2 fixed duration-300 md:top-0 md:left-0 max-md:bottom-0 max-md:border-t z-50 bg-background flex justify-between items-center border-b px-4", isScroll && "shadow-md dark:shadow-slate-600 shadow-black/10")}>
      <Link href={'/'} className="md:block hidden text-2xl font-semibold">
        Khamroyev
      </Link>

      <div className="flex items-center justify-center md:gap-3 max-md:w-full">
        {navigationLinks.map(({ route, name, icon}) => (
            <Link href={route} key={name} className={cn("flex gap-1 max-md:w-full max-md:justify-between rounded-sm hover:text-sky-400 duration-100 capitalize items-center", pathname === route && "text-sky-400")}>
              <p className="md:block hidden">{name}</p>
              <p className="max-md:h-12 max-md:w-12 max-sm:h-6 max-sm:w-6 flex items-center justify-center">{icon}</p>
            </Link>
        ))}
        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}

export default Navbar

const navigationLinks = [
  {
    route: "/",
    name: "home",
    icon: <Home size={20} />,
  },
  {
    route: "/about",
    name: "about",
    icon: <User size={20} />,
  },
  {
    route: "/skills",
    name: "skills",
    icon: <Code size={20} />,
  },
  {
    route: "/projects",
    name: "projects",
    icon: <Briefcase size={20} />,
  },
  {
    route: "/blog",
    name: "blog",
    icon: <FileText size={20} />,
  },
  {
    route: "/contact",
    name: "contact",
    icon: <Mail size={20} />,
  },
]
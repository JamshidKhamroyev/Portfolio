"use client"

import Login from "@/components/auth/login"
import Sidebar from "@/components/sidebar/sidebar"
import useAdmin from "@/hooks/use-admin"
import NextTopLoader from "nextjs-toploader"
import { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => {
  const admin = useAdmin()

  return (
    <div className="w-screen relative min-h-screen">
      {admin.isAdmin ? (
        <div className="w-full flex justify-start items-start">
          <div className="fixed top-0 left-0 md:w-[20vw] h-full border-r-2">
            <Sidebar />
          </div>

          <div className="md:ml-[20.2vw]">
              <NextTopLoader  
                color="#155dfc "
                initialPosition={0.08}
                crawlSpeed={200}
                height={3}
                crawl={true}
                showSpinner={false}
                easing="ease"
                speed={200}
                shadow="0 0 10px #2299DD,0 0 5px #2299DD"
              />
            {children}
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default Layout
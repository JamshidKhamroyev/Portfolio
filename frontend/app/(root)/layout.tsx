import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { ChildrenProps } from "@/types"

const layout = ({ children }: ChildrenProps) => {
  return (
    <>
    <div className="lg:min-h-screen w-screen overflow-x-hidden">
      <div className="relative">
        <Navbar />
      </div>

      <div className="h-full w-full">
        {children}
      </div>
    </div>

    <div className="sm:block hidden">
      <Footer />
    </div>
    </>
  )
}

export default layout
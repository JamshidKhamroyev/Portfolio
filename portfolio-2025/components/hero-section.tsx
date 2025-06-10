import { CheckCircle, Code, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const HeroSection = () => {
  const router = useRouter()

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-sky-400 capitalize">
            Why me?
        </h2>
        <p className="text-center text-lg text-slate-600 dark:text-slate-300 mb-12">
            I create modern and functional web applications that will help you grow your business and stand out from your competitors.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          <div className="max-w-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg shadow-md p-6">
            <CheckCircle className="text-sky-500 text-4xl mb-4" /> 
            <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-100 mb-2">Innovative Approach</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-4">
            I aim to solve problems effectively and creatively, applying an innovative approach to each project.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              <span className="font-semibold">50+</span> I created a successful project.
            </p>
            <Button onClick={() => router.push("/projects")} size="sm">More</Button>
          </div>

          <div className="max-w-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg shadow-md p-6">
            <Code className="text-sky-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-100 mb-2">Full-stack Experience</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-4">
                I am a specialist with experience in the MERN Stack and building effective systems using modern technologies.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              <span className="font-semibold">200+</span> I served customers.
            </p>
            <Button onClick={() => router.push("/about")} size="sm">More</Button>
          </div>

          <div className="max-w-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg shadow-md p-6">
            <Lightbulb className="text-sky-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-100 mb-2">Problem Solving</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-4">
                I combine strategic thinking and creativity to solve every problem quickly and efficiently.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              <span className="font-semibold">99%</span> successfully completed projects.
            </p>
            <Button onClick={() => router.push("/contact")} size="sm">Contact me</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

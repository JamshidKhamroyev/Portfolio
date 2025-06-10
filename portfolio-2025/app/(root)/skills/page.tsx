"use client"

import { useEffect, useState } from "react"
import { CheckCircle, Code2, GitBranch, MousePointerClick } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { useRouter } from "next/navigation"

// Skill ma'lumotlari
const frontendSkills = [
  { name: "React.js", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "JavaScript (ES6+)", level: 95 },
  { name: "Vite", level: 75 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Figma (UI/UX Analysis)", level: 80 },
  { name: "Various UI Libraries (e.g., shadcn/ui, Material UI, AntD)", level: 85 },
]

const backendSkills = [
  { name: "Node.js / Express.js", level: 85 },
  { name: "MongoDB", level: 80 },
  { name: "REST API Integration", level: 90 },
  { name: "Secure Data Transfer & Cookie Handling", level: 85 },
  { name: "Protocol Messaging / Notifications", level: 75 },
  { name: "CRON Jobs & Scheduling", level: 70 },
  { name: "Cloud Integration (Firebase, Supabase, etc.)", level: 80 },
]

const SkillsPage = () => {
  const [frontendProgress, setFrontendProgress] = useState(frontendSkills.map(() => 0))
  const [backendProgress, setBackendProgress] = useState(backendSkills.map(() => 0))
  const router = useRouter()

  useEffect(() => {
    frontendSkills.forEach((skill, idx) => {
      setTimeout(() => {
        setFrontendProgress(prev => {
          const updated = [...prev]
          updated[idx] = skill.level
          return updated
        })
      }, idx * 300)
    })

    backendSkills.forEach((skill, idx) => {
      setTimeout(() => {
        setBackendProgress(prev => {
          const updated = [...prev]
          updated[idx] = skill.level
          return updated
        })
      }, (frontendSkills.length * 300) + (idx * 300))
    })
  }, [])

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-sky-400">My Technical Skills</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-slate-700 dark:text-slate-100 flex items-center gap-2">
            <MousePointerClick className="text-sky-500" /> Frontend Development
          </h3>
          <ul className="space-y-4">
            {frontendSkills.map((skill, idx) => (
              <li key={idx}>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                  <span className="text-slate-500 dark:text-slate-400">{frontendProgress[idx]}%</span>
                </div>
                <Progress value={frontendProgress[idx]} className="h-2 transition-all duration-1000 ease-in-out" />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-slate-700 dark:text-slate-100 flex items-center gap-2">
            <Code2 className="text-sky-500" /> Backend & Systems
          </h3>
          <ul className="space-y-4">
            {backendSkills.map((skill, idx) => (
              <li key={idx}>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                  <span className="text-slate-500 dark:text-slate-400">{backendProgress[idx]}%</span>
                </div>
                <Progress value={backendProgress[idx]} className="h-2 transition-all duration-1000 ease-in-out" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-4 text-slate-700 dark:text-slate-100 flex items-center gap-2">
          <GitBranch className="text-sky-500" /> Collaboration & Workflow
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <li className="flex items-start gap-3">
            <CheckCircle className="text-green-500 mt-1" />
            <p className="text-slate-600 dark:text-slate-300">Strong Git/GitHub skills for version control and collaborative development</p>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="text-green-500 mt-1" />
            <p className="text-slate-600 dark:text-slate-300">CI/CD awareness for streamlining deployments</p>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="text-green-500 mt-1" />
            <p className="text-slate-600 dark:text-slate-300">Agile workflow familiarity and project management tools like Trello, Jira</p>
          </li>
        </ul>
      </div>

      <div className="text-center mt-20">
        <h4 className="text-xl font-medium text-slate-700 dark:text-slate-100 mb-4">Need a reliable developer for your next project?</h4>
        <button
          className="bg-sky-500 hover:bg-sky-600 text-white py-3 px-6 rounded-xl text-lg font-semibold transition"
          onClick={() => router.push('/contact')}
        >
          Contact Me
        </button>
      </div>
    </div>
  )
}

export default SkillsPage

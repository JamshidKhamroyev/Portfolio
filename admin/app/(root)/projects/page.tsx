  "use client";

  import { useEffect, useState } from "react";
  import { Plus, Loader } from "lucide-react";
  import ProjectCard from "@/components/project-card";
  import { toast } from "react-toastify";
  import axios from "axios";
  import { v4 } from "uuid";
  import useAdmin from "@/hooks/use-admin";
  import projectModal from "@/hooks/use-project-modal";
  import ProjectCreateModal from "@/components/modals/project-create-modal";
  import { IProject } from "@/types";

  const Projects = () => {
    const admin = useAdmin();
    const useProjectModal = projectModal();

    const [projects, setProjects] = useState<IProject[]>([]);
    const [limit, setLimit] = useState(6);
    const [isGetting, setIsGetting] = useState(false);
    const [loadingId, setLoadingId] = useState<string | null>(null);
    const [isFinished, setIsFinished] = useState(false);

    const getProjects = async () => {
      setIsGetting(true);
      try {
        const { data } = await axios.get(`${admin.url}/api/project/get-all/${limit}`);
        if (data.succes) {
          setProjects(data.data);
          setIsFinished(data.data.length < limit);
        }
      } catch (err) {
        const result = err as Error
        toast.error(result.message || "Loyihalarni yuklashda xatolik");
      } finally {
        setIsGetting(false);
      }
    };

    const handleDelete = async (id: string) => {
      setLoadingId(id);
      try {
        const { data } = await axios.delete(`${admin.url}/api/project/delete/${id}`, {
          headers: {
            Authorization: `Bearer ${Math.floor(Math.random() * 100000)}14922${Date.now()}14922${process.env.NEXT_PUBLIC_SECRET_KEY}14922${v4()}`,
          },
        })
        if (data.succes) {
          setProjects((prev) => prev.filter((p) => p._id !== id));
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        const result = error as Error
        toast.error(result.message || "O‘chirishda xatolik");
      } finally {
        setLoadingId(null);
      }
    };

    const handleNewProject = (project: IProject) => {
      setProjects((prev) => [project, ...prev]);
    };

    useEffect(() => {
      getProjects();
    }, [limit, getProjects]);

    return (
      <>
        <ProjectCreateModal submitHandler={handleNewProject} />

        <div className="p-6 space-y-6 w-[80vw]">
          <div className="flex justify-between border-b w-full items-center pb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Loyihalar</h1>
              <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md">
                Bu yerda siz yaratgan barcha loyihalarni ko‘rishingiz va boshqarishingiz mumkin.
              </p>
            </div>
            <button
              onClick={() => useProjectModal.onOpen()}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-sm hover:bg-blue-700 transition text-sm"
            >
              <Plus size={18} />
              Yangi loyiha
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project._id}
                {...project}
                load={loadingId == project._id}
                deleteHandler={() => handleDelete(project._id)}
              />
            ))}
          </div>

          <div className="w-full flex justify-center">
            <button
              onClick={() => setLimit((prev) => prev + 6)}
              disabled={isGetting || isFinished}
              className="px-4 py-1 rounded-sm border cursor-pointer hover:bg-blue-600 border-slate-600 hover:border-transparent hover:text-white duration-300 disabled:opacity-70 flex items-center gap-2"
            >
              {isFinished ? "Yana loyiha yo‘q" : "Yana ko‘rish"}
              {isGetting && <Loader className="w-5 h-5 animate-spin" />}
            </button>
          </div>
        </div>
      </>
    );
  };

  export default Projects;

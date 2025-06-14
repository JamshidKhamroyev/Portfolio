import { create } from "zustand"

interface useAdminProps {
    isAdmin: boolean
    key: string
    url: string,
    loginHandler: () => void
    changeKey: (key: string) => void
}

const useAdmin = create<useAdminProps>((set) => ({
    isAdmin: false,
    url: "https://portfolio-backend-64di.onrender.com",
    key: "",
    changeKey: (key) => set({ key }),
    loginHandler: () => set({ isAdmin: true })
}))

export default useAdmin
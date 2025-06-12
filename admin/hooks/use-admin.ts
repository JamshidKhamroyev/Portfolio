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
    url: "http://localhost:4040",
    key: "",
    changeKey: (key) => set({ key }),
    loginHandler: () => set({ isAdmin: true })
}))

export default useAdmin
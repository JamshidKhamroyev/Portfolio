import { create } from "zustand"

interface useProjectModalProps {
    isOpen: boolean
    onClose: () => void
    onOpen: () => void
}

const useAdmin = create<useProjectModalProps>((set) => ({
    isOpen: false,
    onClose: () => set({ isOpen: false }),
    onOpen: () => set({ isOpen: true })
}))

export default useAdmin
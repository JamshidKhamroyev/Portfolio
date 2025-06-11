import { create } from "zustand"

interface useBlogModalProps {
    isOpen: boolean
    onClose: () => void
    onOpen: () => void
}

const useAdmin = create<useBlogModalProps>((set) => ({
    isOpen: false,
    onClose: () => set({ isOpen: false }),
    onOpen: () => set({ isOpen: true })
}))

export default useAdmin
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
} from "@/components/ui/dialog"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface Props {
  isOpen: boolean
  onClose: () => void
  body: React.ReactNode
}

const CustomModal = ({ isOpen, onClose, body }: Props) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" />
        <DialogContent
          className={cn(
            "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "bg-white dark:bg-zinc-900 text-black dark:text-white",
            "rounded-lg shadow-xl max-w-lg z-50 p-6",
            "[&>button]:hidden"
          )}
        >
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800 dark:hover:text-white transition"
            >
              <X size={24} />
            </button>
          </div>

          <div className="mt-2">{body}</div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}

export default CustomModal

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { ClassNameValue } from "tailwind-merge"
import { Typewriter } from "react-simple-typewriter"

interface CurrentImageProps {
  src: string
  alt?: string
  fill?: boolean
  className?: ClassNameValue
}

const CurrentImage = ({ src, alt = "image", fill = false, className }: CurrentImageProps) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={cn("relative", fill && "w-full h-full")}>
      {isLoading && (
        <div
          className={cn(
            "absolute inset-0 z-10 flex items-center justify-center bg-slate-200 dark:bg-slate-700 animate-pulse rounded",
            fill ? "w-full h-full" : "w-full h-full"
          )}
        >
          <span className="text-sky-500 font-semibold">Loading{<Typewriter loop words={[".", "..", "..."]}/>}</span>
        </div>
      )}

      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={fill ? undefined : 400}
        height={fill ? undefined : 300}
        className={cn(
          className,
          "transition-opacity duration-700 ease-in-out",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  )
}

export default CurrentImage

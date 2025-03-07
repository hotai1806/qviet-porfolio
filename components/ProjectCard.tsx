import Image from "next/image"

interface ProjectCardProps {
  imageSrc: string
  title: string
  subtitle: string
}

export default function ProjectCard({ imageSrc, title, subtitle }: ProjectCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-[#5f5f5f]">{subtitle}</p>
    </div>
  )
}


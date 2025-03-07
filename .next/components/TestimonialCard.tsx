import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  name: string
  position: string
  company: string
  imageSrc?: string
}

export default function TestimonialCard({
  quote,
  name,
  position,
  company,
  imageSrc = "/placeholder.svg?height=60&width=60",
}: TestimonialCardProps) {
  return (
    <div className="bg-[#1a1a1a] p-8 rounded-lg flex flex-col h-full">
      <div className="flex-grow mb-8">
        <p className="text-lg">"{quote}"</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#d94100]">
          <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-[#5f5f5f]">
            {position}, {company}
          </p>
        </div>
      </div>
    </div>
  )
}


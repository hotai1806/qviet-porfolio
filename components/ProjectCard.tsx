"use client";
import { useState } from "react";
import Image from "next/image";
import CardModal from "@/components/CardModal";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  linkGithub: string;
}

export default function ProjectCard({
  imageSrc,
  title,
  subtitle,
  linkGithub,
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div
      onClick={() => {
        setIsModalOpen(true);
        document.body.style.overflow = "auto";
      }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          layout="fill"
          className="transition-transform duration-300 group-hover:scale-105  object-contain"
        />
      </div>
      <CardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={subtitle}
        imageUrl={imageSrc}
        imageAlt="Product image"
        linkGithub={linkGithub}
      />

      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-[#5f5f5f]">{subtitle}</p>
    </div>
  );
}

"use client";
import React, { useState, useRef, useEffect } from "react";
import { ColumnsIcon, X } from "lucide-react";
import Link from "next/link";

interface CardModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  linkGithub: string;
}

const CardModal: React.FC<CardModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  imageUrl,
  imageAlt,
  linkGithub,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);

      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 ">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-lg max-w-2xl w-full overflow-hidden"
      >
        {/* Image header - taller now */}
        <div className="relative">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-64 object-cover"
          />

          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-2 right-2 p-1 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100 transition-opacity z-10"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content - more padding */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-3">{title}</h2>
          <Link href={linkGithub}>
            <h2 className="text-2xl font-bold mb-3 text-gray-700">
              {linkGithub}
            </h2>
          </Link>
          <p className="text-gray-700 text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

// Example usage component

export default CardModal;

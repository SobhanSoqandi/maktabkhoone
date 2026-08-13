"use client";

import { useRef } from "react";
import Image from "next/image";
import { HiOutlineCamera } from "react-icons/hi2";
import { base_url } from "../../../../../data/info";
import { useQueryClient } from "@tanstack/react-query";

export default function AvatarUploader({ preview, setPreview, setFile }) {
  const inputRef = useRef(null);
  
  const handleSelect = () => {
    inputRef.current?.click();
  };

  const handleFile = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const imageSrc = preview
    ? preview.startsWith("blob:")
      ? preview
      : preview
    : "/avatar-placeholder.png";

  return (
    <div className="group relative w-36 h-36">
      <div className="relative shadow-lg border-4 border-white rounded-full w-full h-full overflow-hidden">
        <Image
          src={imageSrc}
          alt="avatar"
          fill
          unoptimized
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
      </div>

      <button
        type="button"
        onClick={handleSelect}
        className="right-1 bottom-1 absolute flex justify-center items-center bg-teal-500 hover:bg-teal-600 shadow-lg rounded-full w-12 h-12 text-white hover:scale-110 transition-all duration-300"
      >
        <HiOutlineCamera className="text-2xl" />
      </button>

      <input
        ref={inputRef}
        type="file"
        hidden
        accept="image/*"
        onChange={handleFile}
      />
    </div>
  );
}

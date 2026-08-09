"use client";

import { useRef } from "react";
import Image from "next/image";
import { HiOutlineCamera } from "react-icons/hi2";

export default function AvatarUploader({
  preview,
  setPreview,
  setFile,
}) {
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

  return (
    <div className="relative">

      <div className="relative  h-32 w-32 overflow-hidden rounded-full border-2 border-teal-500">

        <Image
          src={preview}
          alt="avatar"
          fill
          className="object-cover"
        />

      </div>

      <button
        type="button"
        onClick={handleSelect}
        className="
          absolute
          bottom-1
          left-1
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-2xl
          bg-teal-500
          text-white
          shadow-lg
          transition
          hover:bg-teal-600
        "
      >
        <HiOutlineCamera className="text-xl" />
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
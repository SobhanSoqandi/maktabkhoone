import Image from "next/image";
import { base_url } from "../../../../../data/info";

export function CourseThumbnail({ image, title }) {
  return (
    <div className="relative rounded-2xl w-full md:w-[210px] h-36 sm:h-40 md:h-[120px] overflow-hidden shrink-0">
      <Image
        src={image ? base_url + image : "/images/default.png"}
        alt={title || "تصویر دوره"}
        fill
        className="object-cover"
        unoptimized
        sizes="(max-width: 768px) 100vw, 210px"
      />
    </div>
  );
}

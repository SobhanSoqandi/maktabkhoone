import Image from "next/image";
import { base_url } from "../../../../../data/info";

export default function Slider_item({ url }) {
  return (
    <div className="h-44 sm:h-60 lg:h-72">
      <Image src={base_url + url} alt="" width={1320} height={200} unoptimized className="h-full w-full object-cover" />
    </div>
  );
}

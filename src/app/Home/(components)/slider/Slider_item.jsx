import Image from "next/image";
import { base_url } from "../../../../../data/info";

export default function Slider_item({ url }) {
  console.log(base_url + url);
  return (
    <div className="h-40 lg:h-72" >
      <Image src={base_url + url} alt="" width={1320} height={200} unoptimized />
    </div>
  );
}

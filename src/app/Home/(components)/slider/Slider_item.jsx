import Image from "next/image";
import { base_url } from "../../../../../data/info";

export default function Slider_item({ url }) {
  console.log(base_url + url);
  return (
    <Image src={base_url + url} alt="" width={1320} height={360} unoptimized />
  );
}

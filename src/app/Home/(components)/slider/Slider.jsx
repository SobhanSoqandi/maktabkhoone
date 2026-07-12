import { req } from "@/app/(function)/request";
import SliderClient from "./SliderClient";

export default async function Slider() {
  const response = await req("/heroes/");

  return <SliderClient sliders={response} />;
}

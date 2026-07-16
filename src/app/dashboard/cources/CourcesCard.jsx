import Image from "next/image";
import {
  HiOutlinePlay,
  HiOutlineEllipsisHorizontal,
} from "react-icons/hi2";

export default function CourcesCard({ course }) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-5 transition hover:shadow-lg">
      <div className="flex gap-4">
        <Image
          src={course.banner}
          alt={course.title}
          width={120}
          height={120}
          className="h-20 w-28 rounded-lg object-cover"
        />

        <div className="flex-1">
          <h2 className="line-clamp-2 text-xl font-bold leading-9 text-gray-900">
            {course.title}
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            {course.teacher}
          </p>

          <div className="mt-4 flex justify-end">
            <span className="badge">
              {course.level}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <span className="w-10 text-sm font-bold">
          {course.progress}%
        </span>

        <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-teal-500 transition-all"
            style={{
              width: `${course.progress}%`,
            }}
          />
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex gap-3">
          <button className="btn btn-primary">
            ثبت امتیاز
          </button>

          <button className="btn btn-primary">
            <HiOutlineEllipsisHorizontal className="text-2xl" />
          </button>
        </div>

        <button className="flex btn btn-success ">
          <HiOutlinePlay className="rounded-full bg-white p-1 text-xl text-teal-600" />
          ادامه دوره
        </button>
      </div>
    </div>
  );
}
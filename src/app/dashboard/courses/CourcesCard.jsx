import Image from "next/image";
import { HiOutlinePlay, HiOutlineEllipsisHorizontal } from "react-icons/hi2";
import { base_url } from "../../../../data/info";

export default function CourcesCard({ course }) {
  return (
    <div className="bg-white hover:shadow-lg p-5 border border-gray-200 rounded-3xl transition">
      <div className="flex gap-4">
        <Image
          unoptimized
          src={base_url + course.banner}
          alt={course.title}
          width={120}
          height={120}
          className="rounded-lg w-28 h-20 object-cover"
        />

        <div className="flex-1">
          <h2 className="font-bold text-gray-900 text-xl line-clamp-2 leading-9">
            {course.title}
          </h2>

          <p className="mt-2 text-gray-500 text-sm">{course.teacher_name}</p>

          <div className="flex justify-end mt-4">
            <span className="badge">{course.course_level}</span>
          </div>
        </div>
      </div>

      {/* <div className="flex items-center gap-3 mt-8">
        <span className="w-10 font-bold text-sm">{course.progress}%</span>

        <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="bg-teal-500 rounded-full h-full transition-all"
            style={{
              width: `${course.progress}%`,
            }}
          />
        </div>
      </div> */}

      <div className="flex justify-between items-center mt-8">
        <div className="flex gap-3">
          <button className="btn btn-primary">ثبت امتیاز</button>

          <button className="btn btn-primary">
            <HiOutlineEllipsisHorizontal className="text-2xl" />
          </button>
        </div>

        <button className="flex btn btn-success">
          <HiOutlinePlay className="bg-white p-1 rounded-full text-teal-600 text-xl" />
          ادامه دوره
        </button>
      </div>
    </div>
  );
}

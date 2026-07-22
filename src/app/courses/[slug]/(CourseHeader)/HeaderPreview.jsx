"use client";

import Modal from "@/app/(components)/modal";
import Image from "next/image";
import {
  HiPlay,
  HiBookmark,
  HiClock,
  HiPaperClip,
} from "react-icons/hi2";
import PreviewModal from "./PreviewModal";
import ReviewModal from "./ReviewModal";

export default function HeaderPreview({ course }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">


      <div className="relative h-64 w-full lg:h-72">

        <Image
          src={course.banner}
          alt={course.title}
          fill
          className="object-cover"
        />

        <Modal>

          <Modal.Open name="preview">

            <button className="absolute inset-0 flex items-center justify-center">

              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/30 backdrop-blur-md">

                <HiPlay className=" text-4xl text-white" />

              </div>

            </button>

          </Modal.Open>

          <Modal.Window name="preview">
            <PreviewModal
              title={course.title}
              video={course.preview_video}
            />
          </Modal.Window>

        </Modal>

      </div>

      {/* دکمه ها */}

      <div className="space-y-4 p-5">

        <div className="flex gap-3">

          <button className="btn btn-success w-full">

            جلسه اول

          </button>

          <button className="btn btn-primary bg-gray-100 text-gray-500">

            <HiBookmark className=" text-xl lg:text-3xl" />

          </button>

        </div>

        <Modal>

          <Modal.Open name="review">

            <button className="btn btn-success bg-teal-100 p-4 w-full text-teal-700 transition hover:bg-teal-200">

              ثبت دیدگاه

            </button>

          </Modal.Open>

          <Modal.Window name="review">
            <ReviewModal course={course} />
          </Modal.Window>

        </Modal>

      </div>

      {/* اطلاعات */}

      <div className="border-t border-gray-100 p-5">

        <div className="space-y-4 text-sm">

          <Item
            icon={<HiClock />}
            title={`${course.course_hour} ساعت ویدیو`}
          />

          <Item
            icon={<HiPaperClip />}
            title={`${course.files_count ?? 38} فایل ضمیمه`}
          />

          <Item
            icon={<span className="text-xl">∞</span>}
            title="دسترسی مادام‌العمر"
          />

        </div>

      </div>

    </div>
  );
}

function Item({ icon, title }) {
  return (
    <div className="flex items-center justify-between">

      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-2xl text-gray-500">

        {icon}

      </div>

      <span className="text-gray-700">

        {title}

      </span>

    </div>
  );
}
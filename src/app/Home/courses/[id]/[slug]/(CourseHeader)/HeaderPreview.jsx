"use client";

import Modal from "@/app/(components)/modal";
import Image from "next/image";
import { HiPlay, HiBookmark, HiClock, HiPaperClip } from "react-icons/hi2";
import PreviewModal from "./PreviewModal";
import ReviewModal from "./ReviewModal";
import { base_url } from "../../../../../../../data/info";

export default function HeaderPreview({ course }) {
  return (
    <div className="bg-white shadow-sm border border-gray-200 rounded-3xl overflow-hidden">
      <div className="relative rounded-2xl w-full aspect-video overflow-hidden">
        <Image
          src={base_url + course.banner}
          alt={course.title}
          fill
          unoptimized
          sizes="100vw"
          className="object-cover"
        />

        <Modal>
          <Modal.Open name="preview">
            <button className="absolute inset-0 flex justify-center items-center">
              <div className="flex justify-center items-center bg-white/30 backdrop-blur-md rounded-full w-20 h-20">
                <HiPlay className="text-white text-4xl" />
              </div>
            </button>
          </Modal.Open>

          <Modal.Window name="preview">
            <PreviewModal
              title={course.title}
              video={base_url + course.trailer_url}
            />
          </Modal.Window>
        </Modal>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex gap-3">
          <button className="w-full btn btn-success">جلسه اول</button>

          <button className="bg-gray-100 text-gray-500 btn btn-primary">
            <HiBookmark className="text-xl lg:text-3xl" />
          </button>
        </div>

        <Modal>
          <Modal.Open name="review">
            <button className="bg-teal-100 hover:bg-teal-200 p-4 w-full text-teal-700 transition btn btn-success">
              ثبت دیدگاه
            </button>
          </Modal.Open>

          <Modal.Window name="review">
            <ReviewModal course={course} />
          </Modal.Window>
        </Modal>
      </div>

      <div className="p-5 border-gray-100 border-t">
        <div className="space-y-4 text-sm">
          <Item icon={<HiClock />} title={`${course.course_hour} ساعت ویدیو`} />

          {/* <Item
            icon={<HiPaperClip />}
            title={`${course.files_count ?? 38} فایل ضمیمه`}
          /> */}

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
    <div className="flex justify-between items-center">
      <div className="flex justify-center items-center bg-gray-100 rounded-full w-12 h-12 text-gray-500 text-2xl">
        {icon}
      </div>

      <span className="text-gray-700">{title}</span>
    </div>
  );
}

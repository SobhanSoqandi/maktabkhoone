"use client";

import Modal from "@/app/(components)/modal";
import Image from "next/image";
import { HiPlay, HiBookmark, HiClock } from "react-icons/hi2";
import PreviewModal from "./PreviewModal";
import ReviewModal from "./ReviewModal";
import { base_url } from "../../../../../../../data/info";
import { useContext } from "react";
import useMutationData from "@/app/(hooks)/useMutationData";
import { WishListContext } from "@/context/WishListContext";

export default function HeaderPreview({ course }) {
  const { wishlist, refetchWishlist } = useContext(WishListContext);

  const wishDetail =
    wishlist?.find((item) => item.course_id === course.id) ?? null;

  console.log(wishDetail);
  const saved = !!wishDetail;

  const { mutate: saveCourse } = useMutationData(
    "wishlists",
    "post",
    "add-wishlist",
    "دوره به علاقه‌مندی‌ها اضافه شد",
    {
      onSuccess: async () => {
        const res = await refetchWishlist();
        console.log(res.data);
      },
    },
  );

  const { mutate: removeCourse } = useMutationData(
    `wishlists`,
    "delete",
    "remove-wishlist",
    "با موفقیت حذف شد",
    {
      onSuccess: () => {
        refetchWishlist();
      },
    },
  );

  const handleWishlist = () => {
    if (saved) {
      removeCourse({
        params: {
          wishlist_id: wishDetail.id,
        },
      });
    } else {
      saveCourse({
        params: {
          course_id: course.id,
        },
      });
    }
  };

  return (
    <div className="bg-white shadow-sm border border-gray-200 rounded-3xl overflow-hidden">
      <div className="relative rounded-2xl w-full aspect-video overflow-hidden">
        <Image
          src={base_url + course.banner}
          alt={course.title}
          fill
          unoptimized
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
          <button className="flex-1 btn btn-success">جلسه اول</button>

          <button
            onClick={handleWishlist}
            className={`btn transition-all duration-300 ${
              saved
                ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-500"
            }`}
          >
            <HiBookmark
              className={`text-xl lg:text-3xl ${saved ? "fill-current" : ""}`}
            />
          </button>
        </div>

        <Modal>
          <Modal.Open name="review">
            <button className="w-full btn btn-success">ثبت دیدگاه</button>
          </Modal.Open>

          <Modal.Window name="review">
            <ReviewModal course={course} />
          </Modal.Window>
        </Modal>
      </div>

      <div className="p-5 border-gray-100 border-t">
        <Item icon={<HiClock />} title={`${course.course_hour} ساعت ویدیو`} />

        <Item
          icon={<span className="text-xl">∞</span>}
          title="دسترسی مادام‌العمر"
        />
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

      <span>{title}</span>
    </div>
  );
}

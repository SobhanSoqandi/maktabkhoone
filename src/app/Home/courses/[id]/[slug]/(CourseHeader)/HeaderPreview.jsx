"use client";

import Modal from "@/app/(components)/modal";
import Image from "next/image";
import { HiPlay, HiBookmark, HiClock } from "react-icons/hi2";
import PreviewModal from "./PreviewModal";
import ReviewModal from "./ReviewModal";
import { base_url } from "../../../../../../../data/info";
import { BsCheck2Square, BsJournalCheck } from "react-icons/bs";
import Link from "next/link";


import { useContext } from "react";
import useMutationData from "@/app/(hooks)/useMutationData";
import { WishListContext } from "@/context/WishListContext";

export default function HeaderPreview({ course }) {

  let isacces = false;

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


        


  {
            isacces ?
              <button className="w-full btn btn-success">جلسه اول</button>
              :
              <Modal>
                <Modal.Open>
                  <button className="w-full btn btn-success"> افزودن به سبد خرید </button>
                </Modal.Open>

                <Modal.Window>
                  <div className="p-3 w-96" >
                   <div className="flex items-center" >
                    <BsJournalCheck className="text-teal-600" />
                     <span className="p-2" > دوره به سبد خرید اضافه شد </span>
                   </div>
                    <div className="flex items-center p-3">
                      <div className="w-full" >
                        <button className=" btn bg-teal-100 text-teal-800" >
                         <Link href="/cart" >
                          مشاهده سبد  خرید
                         </Link>
                        </button>
                      </div>
                      <div className="flex justify-end items-center w-full gap-4">


                        <span className="rounded-xl text-nowrap bg-rose-500 p-1 text-xs text-white">
                          % 45
                        </span>

                        <div>

                          <div className="mb-1 text-sm text-gray-400 line-through">
                            45000000
                          </div>


                          <div className="flex gap-1">

                            <span className="text-sm font-black">
                              {course.price.toLocaleString("fa-IR")}
                            </span>

                            <span className="pb-1 text-xs text-gray-600">
                              تومان
                            </span>



                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </Modal.Window>
              </Modal>

          }




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

          {
            isacces ?
              <Modal.Open name="review">
                <button className="bg-teal-100 hover:bg-teal-200 p-4 w-full text-teal-700 transition btn btn-success">
                  ثبت دیدگاه
                </button>
              </Modal.Open>
              :
              <div className="flex items-center gap-4">

                {course.discount > 0 && (
                  <span className="badge bg-rose-500 text-white p-1 px-3 text-xs">
                    %{toPersianNumbers(course.discount)}
                  </span>
                )}

                {course.is_free ? (
                  <span className="badge bg-teal-500 text-white">
                    رایگان
                  </span>
                ) : (
                  <div className="flex items-end gap-2">

                    <span className="text-lg font-black">
                      {course.price.toLocaleString("fa-IR")}
                    </span>

                    <span className="pb-1 text-sm">
                      تومان
                    </span>

                    {course.old_price && (
                      <span className="text-lg text-gray-400 line-through">
                        {course.old_price.toLocaleString("fa-IR")}
                      </span>
                    )}

                  </div>
                )}

              </div>
          }

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

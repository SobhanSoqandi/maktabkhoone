
"use client";

import Modal, { useModal } from "@/app/(components)/modal";
import Image from "next/image";
import { HiPlay, HiBookmark, HiClock, HiCheckBadge, HiSparkles, HiArrowLeft, HiShieldCheck } from "react-icons/hi2";
import PreviewModal from "./PreviewModal";
import ReviewModal from "./ReviewModal";
import { base_url } from "../../../../../../../data/info";
import { BsJournalCheck } from "react-icons/bs";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import useMutationData from "@/app/(hooks)/useMutationData";
import { WishListContext } from "@/context/WishListContext";
import { useAuth } from "@/context/AuthContext";
import { CartButton } from "./CartButton";
import toast from "react-hot-toast";
import useGet from "@/app/(hooks)/useGet";

export default function HeaderPreview({ course, section }) {
  const { user } = useAuth();
  const [firstLessonId, setFirstLessonId] = useState(null);

  useEffect(() => {
    if (section?.length) {
      const firstChapter = section.sort(
        (a, b) => a.order_index - b.order_index,
      )[0];

      const firstLesson = firstChapter?.lessons?.sort(
        (a, b) => a.order_index - b.order_index,
      )[0];

      setFirstLessonId(firstLesson?.id);
    }
  }, [section]);

  console.log("SLUG:", course.slug);

  const { wishlist, refetchWishlist } = useContext(WishListContext);

  const { data: isacces } = useGet(`course/${course.id}/access`, [
    "access",
    course.id,
  ]);

  const wishDetail =
    wishlist?.find((item) => item.course_id === course.id) ?? null;

  const saved = !!wishDetail;

  const { mutate: add_to_cart } = useMutationData(
    "cart-course/",
    "post",
    ["add_course_cart", course.id],
    "دوره به سبد اضافه شد ",
    {
      onError: (error) => {
        console.log(error);
        toast.error(error.response?.data?.detail || "خطایی رخ داده است");
      },
    },
  );

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
    <div className="group relative overflow-hidden rounded-[28px] border border-blue-100/80 bg-white shadow-[0_12px_45px_-20px_rgba(59,130,246,0.22)] transition-all duration-500 hover:border-blue-200 hover:shadow-[0_24px_60px_-24px_rgba(59,130,246,0.3)]">
      <div className="pointer-events-none absolute -right-20 -top-20 z-0 h-52 w-52 rounded-full bg-sky-100/70 blur-3xl" />

      <div className="relative z-10">
        <div className="relative m-3 aspect-video overflow-hidden rounded-[22px] bg-blue-50 sm:m-4">
          <Image
            src={base_url + course.banner}
            alt={course.title}
            fill
            unoptimized
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-900/5 to-blue-950/10" />

          

          <Modal>
            <Modal.Open name="preview">
              <button
                type="button"
                aria-label="پخش پیش‌نمایش دوره"
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="absolute h-24 w-24 rounded-full border border-white/40 transition-all duration-500 group-hover:scale-125 group-hover:border-white/70 sm:h-28 sm:w-28" />

                <span className="relative flex h-[68px] w-[68px] items-center justify-center rounded-full border border-white/60 bg-white/90 text-blue-600 shadow-[0_8px_35px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white sm:h-[76px] sm:w-[76px]">
                  <HiPlay className="mr-[-3px] text-3xl sm:text-4xl" />
                </span>

                <span className="absolute bottom-4 left-4 rounded-xl border border-white/20 bg-black/25 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md sm:bottom-5 sm:left-5 sm:text-sm">
                  مشاهده پیش‌نمایش
                </span>
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

        <div className="space-y-5 px-4 pb-5 sm:px-5 sm:pb-6">
          <div className="flex gap-3">
            {isacces && user ? (
              <Link
                href={`/Home/courses/${course.id}/${course.slug}/unit/${firstLessonId}`}
                className="group/start relative flex min-h-[54px] flex-1 items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-l from-blue-600 via-blue-500 to-sky-500 px-4 py-3 text-sm font-extrabold text-white shadow-[0_8px_20px_-8px_rgba(37,99,235,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(37,99,235,0.55)]"
              >
                <span className="absolute inset-0 translate-x-full bg-gradient-to-l from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover/start:translate-x-[-100%]" />
                <HiPlay className="relative text-xl" />
                <span className="relative">شروع یادگیری</span>
                <HiArrowLeft className="relative mr-auto text-lg transition-transform duration-300 group-hover/start:-translate-x-1" />
              </Link>
            ) : (
              <Modal>
                <CartButton course={course} add_to_cart={add_to_cart} />

                <Modal.Window name={"add_cart"}>
                  <div className="w-96 max-w-full rounded-3xl bg-white p-4 sm:p-5">
                    <div className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-gradient-to-l from-blue-50 to-sky-50 p-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-2xl text-blue-600 shadow-sm">
                        <BsJournalCheck />
                      </div>
                      <div>
                        <p className="font-extrabold text-slate-800">
                          دوره به سبد خرید اضافه شد
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          برای ادامه، سبد خرید خود را مشاهده کنید.
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-3">
                      <div className="flex flex-col gap-2">
                        <Link
                          href="/cart"
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-md shadow-blue-200 transition-all hover:bg-blue-700 hover:shadow-lg"
                        >
                          مشاهده سبد خرید
                          <HiArrowLeft className="text-lg" />
                        </Link>
                      </div>

                      <div className="flex items-end gap-3">
                        <span className="rounded-lg bg-rose-100 px-2 py-1 text-xs font-bold text-rose-600">
                          % 45
                        </span>
                        <div>
                          <div className="mb-1 text-xs text-slate-400 line-through">
                            45000000
                          </div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-lg font-black text-slate-800">
                              {course.price.toLocaleString("fa-IR")}
                            </span>
                            <span className="text-xs text-slate-500">
                              تومان
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal.Window>
              </Modal>
            )}

            <button
              type="button"
              onClick={handleWishlist}
              aria-label={
                saved ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"
              }
              aria-pressed={saved}
              className={`flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 active:scale-95 ${
                saved
                  ? "border-blue-500 bg-blue-500 text-white shadow-lg shadow-blue-200 hover:bg-blue-600"
                  : "border-blue-100 bg-blue-50/70 text-blue-500 hover:border-blue-300 hover:bg-blue-100 hover:text-blue-700"
              }`}
            >
              <HiBookmark
                className={`text-2xl transition-transform duration-300 ${
                  saved ? "scale-110 fill-current" : "group-hover:scale-110"
                }`}
              />
            </button>
          </div>

          <div className="h-px bg-gradient-to-l from-transparent via-blue-100 to-transparent" />

          <Modal>
            {isacces ? (
              <Modal.Open name="review">
                <button
                  type="button"
                  className="group/review flex min-h-[50px] w-full items-center justify-center gap-2 rounded-2xl border border-blue-100 bg-gradient-to-l from-blue-50 to-sky-50 px-4 py-3 text-sm font-extrabold text-blue-700 transition-all duration-300 hover:border-blue-200 hover:from-blue-100 hover:to-sky-100 hover:shadow-md hover:shadow-blue-100"
                >
                  <HiCheckBadge className="text-xl text-blue-500 transition-transform duration-300 group-hover/review:scale-110" />
                  ثبت دیدگاه
                </button>
              </Modal.Open>
            ) : (
              <div className="rounded-2xl border border-blue-100/80 bg-gradient-to-br from-white via-blue-50/40 to-sky-50/60 p-4">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="text-sm font-bold text-slate-500">
                    هزینه ثبت‌نام دوره
                  </span>

                  {course.discount > 0 && (
                    <span className="rounded-lg bg-rose-100 px-2.5 py-1 text-xs font-extrabold text-rose-600">
                      %{toPersianNumbers(course.discount)} تخفیف
                    </span>
                  )}
                </div>

                {course.is_free ? (
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-slate-500">
                      دسترسی رایگان
                    </span>
                    <span className="rounded-xl border border-sky-100 bg-sky-100 px-4 py-2 text-sm font-extrabold text-blue-700">
                      رایگان
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="text-2xl font-black tracking-tight text-slate-800 sm:text-3xl">
                          {course.price.toLocaleString("fa-IR")}
                        </span>
                        <span className="text-sm font-semibold text-slate-500">
                          تومان
                        </span>
                      </div>

                      {course.old_price && (
                        <div className="mt-1.5 text-sm font-medium text-slate-400 line-through">
                          {course.old_price.toLocaleString("fa-IR")} تومان
                        </div>
                      )}
                    </div>

                    {course.discount > 0 && (
                      <div className="mb-1 flex items-center gap-1.5 rounded-xl bg-blue-100/80 px-3 py-2 text-xs font-bold text-blue-700">
                        <HiSparkles className="text-base text-blue-500" />
                        فرصت یادگیری
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            <Modal.Window name="review">
              <ReviewModal course={course} />
            </Modal.Window>
          </Modal>

          <div className="flex items-center gap-2 rounded-xl bg-sky-50/70 px-3 py-2.5 text-xs leading-6 text-slate-500">
            <HiShieldCheck className="shrink-0 text-lg text-blue-500" />
            <span>با دسترسی به دوره، مسیر یادگیری خود را آغاز کنید.</span>
          </div>
        </div>

        <div className="border-t border-blue-100/80 bg-gradient-to-br from-blue-50/70 via-white to-sky-50/50 px-4 py-5 sm:px-5">
          <div className="space-y-3">
            <Item icon={<HiClock />} title={`${course.course_hour} ساعت ویدیو`} />
            <Item
              icon={<span className="text-2xl font-medium">∞</span>}
              title="دسترسی مادام‌العمر"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Item({ icon, title }) {
  return (
    <div className="group/item flex items-center gap-3 rounded-2xl border border-transparent px-2 py-2 transition-all duration-300 hover:border-blue-100 hover:bg-white hover:shadow-sm">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-white text-xl text-blue-500 shadow-sm transition-all duration-300 group-hover/item:border-blue-200 group-hover/item:bg-blue-50 group-hover/item:text-blue-600">
        {icon}
      </div>
      <span className="text-sm font-semibold text-slate-600 transition-colors group-hover/item:text-blue-700">
        {title}
      </span>
      <HiCheckBadge className="mr-auto text-lg text-sky-400 opacity-70" />
    </div>
  );
}

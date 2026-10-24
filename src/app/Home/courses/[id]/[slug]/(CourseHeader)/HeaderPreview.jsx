"use client";

import { useContext, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import {
  HiPlay,
  HiBookmark,
  HiClock,
  HiCheckBadge,
  HiSparkles,
  HiArrowLeft,
  HiShieldCheck,
} from "react-icons/hi2";
import { BsJournalCheck } from "react-icons/bs";

import Modal from "@/app/(components)/modal";
import useMutationData from "@/app/(hooks)/useMutationData";
import useGet from "@/app/(hooks)/useGet";
import { WishListContext } from "@/context/WishListContext";
import { useAuth } from "@/context/AuthContext";
import { base_url } from "../../../../../../../data/info";

import PreviewModal from "./PreviewModal";
import ReviewModal from "./ReviewModal";
import { CartButton } from "./CartButton";

const formatNumber = (value) => (value ?? 0).toLocaleString("fa-IR");

const byOrder = (a, b) => a.order_index - b.order_index;

function getFirstLessonId(section) {
  if (!section?.length) return null;

  for (const chapter of [...section].sort(byOrder)) {
    const lesson = [...(chapter.lessons ?? [])].sort(byOrder)[0];
    if (lesson) return lesson.id;
  }

  return null;
}

function getCartItems(cart) {
  if (Array.isArray(cart)) return cart;
  return cart?.items ?? cart?.courses ?? [];
}

export default function HeaderPreview({ course, section }) {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const firstLessonId = useMemo(() => getFirstLessonId(section), [section]);

  const { wishlist, refetchWishlist } = useContext(WishListContext);

  const { data: isacces } = useGet(
    `course/${course.id}/access`,
    ["access", course.id],
    { enabled: !!user },
  );

  const { data: cart } = useGet("cart", ["cart"], {
    enabled: !!user,
    staleTime: 0,
  });

  const hasAccess = !!user && !!isacces;
  const [inCart, setIncart] = useState(
    getCartItems(cart).some(
      (item) => (item.course_id ?? item.course?.id) === course.id,
    ),
  );

  useEffect(() => {
    setIncart(
      getCartItems(cart).some(
        (item) => (item.course_id ?? item.course?.id) === course.id,
      ),
    );
  }, [cart]);

  const wishDetail =
    wishlist?.find((item) => item.course_id === course.id) ?? null;

  const saved = !!wishDetail;

  const hasDiscount = course.discount > 0;

  const { mutate: add_to_cart, isPending: adding } = useMutationData(
    "cart-course/",
    "post",
    ["add_course_cart", course.id],
    "دوره به سبد اضافه شد ",
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["cart"] });
      },
      onError: (error) => {
        const detail = error.response?.data?.detail;
        toast.error(typeof detail === "string" ? detail : "خطایی رخ داده است");
      },
    },
  );

  const { mutate: saveCourse } = useMutationData(
    "wishlists",
    "post",
    "add-wishlist",
    "دوره به علاقه‌مندی‌ها اضافه شد",
    {
      onSuccess: () => {
        refetchWishlist();
      },
    },
  );

  const { mutate: removeCourse } = useMutationData(
    "wishlists",
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
    if (!user) {
      toast.error("ابتدا وارد حساب کاربری خود شوید");
      return;
    }

    if (saved) {
      removeCourse({ params: { wishlist_id: wishDetail.id } });
    } else {
      saveCourse({ params: { course_id: course.id } });
    }
  };

  return (
    <div className="group relative bg-white shadow-[0_12px_45px_-20px_rgba(59,130,246,0.22)] hover:shadow-[0_24px_60px_-24px_rgba(59,130,246,0.3)] border border-blue-100/80 hover:border-blue-200 rounded-[28px] overflow-hidden transition-all duration-500">
      <div className="-top-20 -right-20 z-0 absolute bg-sky-100/70 blur-3xl rounded-full w-52 h-52 pointer-events-none" />

      <div className="z-10 relative">
        <div className="relative bg-blue-50 m-3 sm:m-4 rounded-[22px] aspect-video overflow-hidden">
          <Image
            src={base_url + course.banner}
            alt={course.title}
            fill
            unoptimized
            className="object-cover group-hover:scale-[1.045] transition-transform duration-700 ease-out"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-900/5 to-blue-950/10" />

          <Modal>
            <Modal.Open name="preview">
              <button
                type="button"
                aria-label="پخش پیش‌نمایش دوره"
                className="absolute inset-0 flex justify-center items-center"
              >
                <span className="absolute border border-white/40 group-hover:border-white/70 rounded-full w-24 sm:w-28 h-24 sm:h-28 group-hover:scale-125 transition-all duration-500" />

                <span className="relative flex justify-center items-center bg-white/90 hover:bg-white shadow-[0_8px_35px_rgba(0,0,0,0.18)] backdrop-blur-md border border-white/60 rounded-full w-[68px] sm:w-[76px] h-[68px] sm:h-[76px] text-blue-600 hover:scale-110 transition-all duration-300">
                  <HiPlay className="mr-[-3px] text-3xl sm:text-4xl" />
                </span>

                <span className="bottom-4 sm:bottom-5 left-4 sm:left-5 absolute bg-black/25 backdrop-blur-md px-3 py-2 border border-white/20 rounded-xl font-semibold text-white text-xs sm:text-sm">
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

        <div className="space-y-5 px-4 sm:px-5 pb-5 sm:pb-6">
          <div className="flex gap-3">
            {hasAccess ? (
              firstLessonId ? (
                <Link
                  href={`/Home/courses/${course.id}/${course.slug}/unit/${firstLessonId}`}
                  className="group/start relative flex flex-1 justify-center items-center gap-2 bg-gradient-to-l from-blue-600 via-blue-500 to-sky-500 shadow-[0_8px_20px_-8px_rgba(37,99,235,0.65)] hover:shadow-[0_12px_28px_-8px_rgba(37,99,235,0.55)] px-4 py-3 rounded-2xl min-h-[54px] overflow-hidden font-extrabold text-white text-sm transition-all hover:-translate-y-0.5 duration-300"
                >
                  <span className="absolute inset-0 bg-gradient-to-l from-transparent via-white/15 to-transparent transition-transform translate-x-full group-hover/start:translate-x-[-100%] duration-700" />
                  <HiPlay className="relative text-xl" />
                  <span className="relative">شروع یادگیری</span>
                  <HiArrowLeft className="relative mr-auto text-lg transition-transform group-hover/start:-translate-x-1 duration-300" />
                </Link>
              ) : (
                <div className="flex flex-1 justify-center items-center bg-slate-100 px-4 py-3 rounded-2xl min-h-[54px] font-bold text-slate-400 text-sm">
                  هنوز درسی برای این دوره ثبت نشده است
                </div>
              )
            ) : (
              <Modal>
                <CartButton
                  course={course}
                  add_to_cart={add_to_cart}
                  inCart={inCart}
                  adding={adding}
                />

                <Modal.Window name="add_cart">
                  <div className="bg-white p-4 sm:p-5 rounded-3xl w-96 max-w-full">
                    <div className="flex items-center gap-3 bg-gradient-to-l from-blue-50 to-sky-50 p-3 border border-blue-100 rounded-2xl">
                      <div className="flex justify-center items-center bg-white shadow-sm rounded-xl w-11 h-11 text-blue-600 text-2xl shrink-0">
                        <BsJournalCheck />
                      </div>
                      <div>
                        <p className="font-extrabold text-slate-800">
                          دوره به سبد خرید اضافه شد
                        </p>
                        <p className="mt-1 text-slate-500 text-xs">
                          برای ادامه، سبد خرید خود را مشاهده کنید.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap justify-between items-center gap-4 bg-slate-50/70 mt-4 p-3 border border-slate-100 rounded-2xl">
                      <div className="flex flex-col gap-2">
                        <Link
                          href="/cart"
                          className="inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 shadow-blue-200 shadow-md hover:shadow-lg px-4 py-3 rounded-xl font-bold text-white text-sm transition-all"
                        >
                          مشاهده سبد خرید
                          <HiArrowLeft className="text-lg" />
                        </Link>
                      </div>

                      <div className="flex items-end gap-3">
                        {hasDiscount && (
                          <span className="bg-rose-100 px-2 py-1 rounded-lg font-bold text-rose-600 text-xs">
                            %{formatNumber(course.discount)}
                          </span>
                        )}
                        <div>
                          {course.old_price && (
                            <div className="mb-1 text-slate-400 text-xs line-through">
                              {formatNumber(course.old_price)}
                            </div>
                          )}
                          <div className="flex items-baseline gap-1">
                            <span className="font-black text-slate-800 text-lg">
                              {formatNumber(course.price)}
                            </span>
                            <span className="text-slate-500 text-xs">
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

          <div className="bg-gradient-to-l from-transparent via-blue-100 to-transparent h-px" />

          <Modal>
            {hasAccess ? (
              <Modal.Open name="review">
                <button
                  type="button"
                  className="group/review flex justify-center items-center gap-2 bg-gradient-to-l from-blue-50 hover:from-blue-100 to-sky-50 hover:to-sky-100 hover:shadow-blue-100 hover:shadow-md px-4 py-3 border border-blue-100 hover:border-blue-200 rounded-2xl w-full min-h-[50px] font-extrabold text-blue-700 text-sm transition-all duration-300"
                >
                  <HiCheckBadge className="text-blue-500 text-xl group-hover/review:scale-110 transition-transform duration-300" />
                  ثبت دیدگاه
                </button>
              </Modal.Open>
            ) : (
              <div className="bg-gradient-to-br from-white via-blue-50/40 to-sky-50/60 p-4 border border-blue-100/80 rounded-2xl">
                <div className="flex justify-between items-center gap-2 mb-3">
                  <span className="font-bold text-slate-500 text-sm">
                    هزینه ثبت‌نام دوره
                  </span>

                  {hasDiscount && (
                    <span className="bg-rose-100 px-2.5 py-1 rounded-lg font-extrabold text-rose-600 text-xs">
                      %{formatNumber(course.discount)} تخفیف
                    </span>
                  )}
                </div>

                {course.is_free ? (
                  <div className="flex justify-between items-center gap-3">
                    <span className="font-semibold text-slate-500 text-sm">
                      دسترسی رایگان
                    </span>
                    <span className="bg-sky-100 px-4 py-2 border border-sky-100 rounded-xl font-extrabold text-blue-700 text-sm">
                      رایگان
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-wrap justify-between items-end gap-3">
                    <div>
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="font-black text-slate-800 text-2xl sm:text-3xl tracking-tight">
                          {formatNumber(course.price)}
                        </span>
                        <span className="font-semibold text-slate-500 text-sm">
                          تومان
                        </span>
                      </div>

                      {course.old_price && (
                        <div className="mt-1.5 font-medium text-slate-400 text-sm line-through">
                          {formatNumber(course.old_price)} تومان
                        </div>
                      )}
                    </div>

                    {hasDiscount && (
                      <div className="flex items-center gap-1.5 bg-blue-100/80 mb-1 px-3 py-2 rounded-xl font-bold text-blue-700 text-xs">
                        <HiSparkles className="text-blue-500 text-base" />
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

          <div className="flex items-center gap-2 bg-sky-50/70 px-3 py-2.5 rounded-xl text-slate-500 text-xs leading-6">
            <HiShieldCheck className="text-blue-500 text-lg shrink-0" />
            <span>با دسترسی به دوره، مسیر یادگیری خود را آغاز کنید.</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50/70 via-white to-sky-50/50 px-4 sm:px-5 py-5 border-blue-100/80 border-t">
          <div className="space-y-3">
            <Item
              icon={<HiClock />}
              title={`${course.course_hour} ساعت ویدیو`}
            />
            <Item
              icon={<span className="font-medium text-2xl">∞</span>}
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
    <div className="group/item flex items-center gap-3 hover:bg-white hover:shadow-sm px-2 py-2 border border-transparent hover:border-blue-100 rounded-2xl transition-all duration-300">
      <div className="flex justify-center items-center bg-white group-hover/item:bg-blue-50 shadow-sm border border-blue-100 group-hover/item:border-blue-200 rounded-xl w-11 h-11 text-blue-500 group-hover/item:text-blue-600 text-xl transition-all duration-300 shrink-0">
        {icon}
      </div>
      <span className="font-semibold text-slate-600 group-hover/item:text-blue-700 text-sm transition-colors">
        {title}
      </span>
      <HiCheckBadge className="opacity-70 mr-auto text-sky-400 text-lg" />
    </div>
  );
}

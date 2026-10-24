"use client";

import Link from "next/link";
import { useModal } from "@/app/(components)/modal";

export function CartButton({
  course,
  add_to_cart,
  inCart = false,
  adding = false,
}) {
  const { setActiveModal } = useModal();

  if (inCart) {
    return (
      <Link href="/cart" className="btn-outline w-full btn btn-success">
        مشاهده سبد خرید
      </Link>
    );
  }

  return (
    <button
      type="button"
      disabled={adding}
      className="w-full btn btn-success"
      onClick={() =>
        add_to_cart(
          { data: { course_id: course.id } },
          { onSuccess: () => setActiveModal("add_cart") },
        )
      }
    >
      {adding ? "در حال افزودن..." : "افزودن به سبد خرید"}
    </button>
  );
}

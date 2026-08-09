import { useModal } from "@/app/(components)/modal";

export function CartButton({ course, add_to_cart }) {
  const { setActiveModal } = useModal();

  return (
    <button
      className="w-full btn btn-success"
      onClick={() =>
        add_to_cart(
          {
            data: {
              course_id: course.id,
            },
          },
          {
            onSuccess: () => {
              setActiveModal("add_cart");
            },
          },
        )
      }
    >
      افزودن به سبد خرید
    </button>
  );
}

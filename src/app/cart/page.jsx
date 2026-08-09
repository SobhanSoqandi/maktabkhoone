"use client";

import Link from "next/link";
import { LuShoppingBag } from "react-icons/lu";

import CartList from "./(cart-list)/CartList";
import CartSummary from "./(cart-list)/CartSummary";
import useGet from "../(hooks)/useGet";
import EmptyCart from "./(cart-list)/EmptyCart";

function CartLoading() {
  return (
    <div className="mx-auto mt-10 mb-10 px-4 container">
      <div className="gap-8 grid grid-cols-12">
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-gray-200 rounded w-48 h-8 animate-pulse" />

          <div className="space-y-4 mt-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-gray-100 rounded-2xl h-32 animate-pulse"
              />
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <div className="bg-gray-100 rounded-2xl h-64 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const { data: cart, isLoading } = useGet("cart", "get_cart");

  if (isLoading) {
    return <CartLoading />;
  }

  if (!cart?.items?.length) {
    return <EmptyCart />;
  }

  return (
    <div className="mx-auto mt-5 mb-10 px-4 container">
      <div className="gap-8 grid grid-cols-12">
        <div className="order-2 lg:order-1 col-span-12 lg:col-span-8">
          <div className="flex items-center gap-2 mb-6">
            <h1 className="font-bold text-gray-800 text-2xl">سبد خرید</h1>

            <span className="text-gray-500 text-sm">
              ({cart.items.length} دوره)
            </span>
          </div>

          <CartList courses={cart.items} />
        </div>

        <div className="order-1 lg:order-2 col-span-12 lg:col-span-4">
          <CartSummary courses={cart} />
        </div>
      </div>
    </div>
  );
}

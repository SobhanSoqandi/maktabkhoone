"use client";


import { LuShoppingBag } from "react-icons/lu";
import CartList from "./(cart-list)/CartList";
import CartSummary from "./(cart-list)/CartSummary";
import { cart } from "./(cart-list)/cart-data";

export default function Page() {

    console.log(cart.items);


    return (
        <div className="container mx-auto mt-8 px-3 md:px-20">

            <div className="grid grid-cols-12 gap-8">

                {/* لیست دوره‌ها */}

                <div className="order-2 col-span-12 lg:order-1 lg:col-span-8">

                    <div className="mb-5 flex items-center justify-between">


                        <div className="flex gap-2 text-2xl" >
                            <LuShoppingBag />
                            <h1 className="text-xl font-black">
                                سبد خرید
                            </h1>
                        </div>


                        <span className="text-gray-500">
                            ({cart.items.length} دوره)
                        </span>

                    </div>

                    <CartList
                        courses={cart.items}
                    />

                </div>

                {/* صورت حساب */}

                <div className="order-1 col-span-12 lg:order-2 lg:col-span-4">

                    <CartSummary
                        courses={cart.items}
                    />

                </div>

            </div>

        </div>
    );
}
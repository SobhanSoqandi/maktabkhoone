"use client";

import useGet from "@/app/(hooks)/useGet";

import TransactionsTable from "./TransactionsTable";

export default function Page() {
  const { data: transactions, isLoading } = useGet("payments", "get_payment");
  return (
    <div className="mx-auto mt-8 container">
      <div className="mb-10">
        <h1 className="font-black text-3xl">گزارش تراکنش‌ها</h1>
      </div>

      <>
        {isLoading ? (
          <div>loading</div>
        ) : (
          <TransactionsTable transactions={transactions} />
        )}
      </>
    </div>
  );
}

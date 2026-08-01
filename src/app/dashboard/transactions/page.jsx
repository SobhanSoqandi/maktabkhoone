"use client";

import { transactions } from "./transaction-data";
import TransactionsTable from "./TransactionsTable";

export default function Page() {
  return (
    <div className="container mx-auto mt-8 ">

      <div className="mb-10">

        <h1 className="text-3xl font-black">
          گزارش تراکنش‌ها
        </h1>

      </div>

      <TransactionsTable
        transactions={transactions}
      />

    </div>
  );
}
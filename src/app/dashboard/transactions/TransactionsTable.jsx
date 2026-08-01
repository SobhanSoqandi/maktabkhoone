"use client";

import TransactionRow from "./TransactionRow";

function TransactionsTable({ transactions }) {
  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      {transactions.map((item) => (
        <TransactionRow key={item.id} transaction={item} />
      ))}
    </div>
  );
}

export default TransactionsTable;
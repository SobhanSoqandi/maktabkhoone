"use client";
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { payments } from "../payments";
import { toman, fdate } from "@/app/Utils/toPersianNumbers";

const data = Object.values(
  payments.reduce((acc, { date, amount }) => {
    acc[date] = { date, amount: (acc[date]?.amount || 0) + amount };
    return acc;
  }, {})
).sort((a, b) => a.date.localeCompare(b.date));

export default function ChartStats() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 font-bold text-gray-900 ">نمودار درآمد (تومان)</h2>
      <div dir="ltr" className="h-80">
        <ResponsiveContainer>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="income" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1E90FF" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#1E90FF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
            <XAxis dataKey="date" tickFormatter={fdate} tick={{ fontSize: 12 }} />
            <YAxis tickFormatter={toman} tick={{ fontSize: 12 }} width={90} />
            <Tooltip labelFormatter={fdate} formatter={(v) => [`${toman(v)} تومان`, "درآمد"]} />
            <Area type="monotone" dataKey="amount" stroke="#1E90FF" strokeWidth={2} fill="url(#income)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

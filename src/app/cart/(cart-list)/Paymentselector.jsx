import { useState } from "react";
import { BsPaypal } from "react-icons/bs";
import { FaCreditCard } from "react-icons/fa";
import { MdPayment } from "react-icons/md";

const paymentMethods = [
  {
    id: "gateway",
    title: "درگاه پرداخت اینترنتی",
    subtitle: "پرداخت از طریق کارت‌های عضو شتاب",
    color: "#0EA5E9",
    Icon: FaCreditCard,
  },
  {
    id: "snapppay",
    title: "پرداخت قسطی و اعتباری با اسنپ‌پی",
    subtitle: "۴ قسط، آخر ماه، اعتبار بانکی",
    color: "#00C2CB",
    Icon: BsPaypal,
  },
];

export default function Paymentselector() {
  const [selected, setSelected] = useState("gateway");

  return (
    <div
      dir="rtl"
      style={{
        maxWidth: 480,
        margin: "0 auto",
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      {paymentMethods.map((method) => {
        const isSelected = selected === method.id;
        return (
          <button
            key={method.id}
            onClick={() => setSelected(method.id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              width: "100%",
              padding: "14px 16px",
              borderRadius: 14,
              border: isSelected ? "1.5px solid #14B8A6" : "1px solid #E5E7EB",
              background: isSelected ? "#F0FDFA" : "#FFFFFF",
              cursor: "pointer",
              textAlign: "right",
              fontFamily: "inherit",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: method.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <method.Icon size={18} color="#FFFFFF" />
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: "#1F2937" }}>
                {method.title}
              </span>
              <span style={{ fontSize: 12, color: "#9CA3AF" }}>{method.subtitle}</span>
            </div>

            <span
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                border: isSelected ? "6px solid #14B8A6" : "1.5px solid #D1D5DB",
                background: "#FFFFFF",
                flexShrink: 0,
                boxSizing: "border-box",
              }}
            />
          </button>
        );
      })}
    </div>
  );
}

import { toJalaali } from "jalaali-js";

export function toPersianDate(dateString) {
    if (!dateString) return "";

    const date = new Date(dateString);

    if (Number.isNaN(date.getTime())) return "";

    const { jy, jm, jd } = toJalaali(
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
    );

    const formattedDate = `${jy}/${String(jm).padStart(2, "0")}/${String(jd).padStart(2, "0")}`;

    return formattedDate.replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]);
}

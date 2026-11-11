
const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function toPersianNumbersWithComma(n) {
  if (n === null || n === undefined || n === "") return "";

  const numWithCommas = numberWithCommas(n);
  return toPersianNumbers(numWithCommas);
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function toPersianNumbers(n) {
  if (n === null || n === undefined || n === "") return "";

  return n.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
}

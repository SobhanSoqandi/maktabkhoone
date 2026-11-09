
export const courseLevels = (value) => {
  const levels = {
    beginner: "مبتدی",
    intermediate: "متوسط",
    advanced: "پیشرفته",
  };

  return levels[value] || "نامشخص";
};

export const transactionStatuses = (value) => {
  const statuses = {
    pending: "در انتظار",
    success: "موفق",
    failed: "ناموفق",
    cancelled: "لغو شده",
  };

  return statuses[value] || "نامشخص";
};

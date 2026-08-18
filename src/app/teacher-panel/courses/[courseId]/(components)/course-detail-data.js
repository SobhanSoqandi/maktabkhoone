const courseDetails = [
  {
    id: "1",
    faTitle: "آموزش React پروژه‌محور با ساخت پنل مدیریت",
    description: "یک دوره‌ی پروژه‌محور برای ساخت پنل مدیریت با React",
    categoryId: "react",
    teacherId: 1,
    courseLevel: "intermediate",
    prerequisites: "آشنایی مقدماتی با جاوااسکریپت",
    price: 1200000,
    isFree: false,
    courseHour: 18,
  },
  {
    id: "2",
    faTitle: "آموزش React Query به‌صورت پروژه‌محور",
    description: "مدیریت داده و ارتباط با API با React Query",
    categoryId: "react",
    teacherId: 1,
    courseLevel: "intermediate",
    prerequisites: "آشنایی با React",
    price: 890000,
    isFree: false,
    courseHour: 10,
  },
  {
    id: "3",
    faTitle: "دوره جامع Next.js از صفر تا صد",
    description: "آموزش کامل Next.js از مبانی تا استقرار",
    categoryId: "nextjs",
    teacherId: 1,
    courseLevel: "beginner",
    prerequisites: "",
    price: 0,
    isFree: true,
    courseHour: 22,
  },
  {
    id: "4",
    faTitle: "مبانی TypeScript برای توسعه‌دهندگان React",
    description: "استفاده از TypeScript در پروژه‌های React",
    categoryId: "typescript",
    teacherId: 1,
    courseLevel: "advanced",
    prerequisites: "آشنایی با React",
    price: 650000,
    isFree: false,
    courseHour: 8,
  },
];

export function getCourseById(courseId) {
  return courseDetails.find((course) => course.id === courseId) ?? courseDetails[0];
}
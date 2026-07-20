import CourseTabs from "./(Tabs)/CourseTabs";
import CourseHeader from "./(CourseHeader)/CourseHeader";
import Content from "./(content)/Content";
import Prerequisites from "./(Prerequisites)/Prerequisites";
import Description from "./(Description)/Description";
import Reviews from "./(reviews)/Reviews";
import Chapters from "./(Chapters)/Chapters";

export default async function CoursePage({ params }) {
  const { slug } = await params;

  const chapters = [
    {
      id: 1,
      title: "مقدمه",
      lessons: [
        {
          id: 1,
          title: "معرفی دوره",
          duration: 8,
          is_free: true,
        },
        {
          id: 2,
          title: "نصب ابزارهای موردنیاز",
          duration: 7,
          is_free: true,
        },
        {
          id: 3,
          title: "اولین پروژه",
          duration: 6,
          is_free: false,
        },
      ],
    },

    {
      id: 2,
      title: "نصب و راه‌اندازی",
      lessons: [
        {
          id: 4,
          title: "نصب Node.js",
          duration: 15,
          is_free: true,
        },
        {
          id: 5,
          title: "نصب VSCode",
          duration: 11,
          is_free: false,
        },
        {
          id: 6,
          title: "ساخت اولین پروژه React",
          duration: 24,
          is_free: false,
        },
        {
          id: 7,
          title: "ساختار پروژه",
          duration: 26,
          is_free: false,
        },
        {
          id: 8,
          title: "تنظیمات ESLint",
          duration: 20,
          is_free: false,
        },
        {
          id: 9,
          title: "تنظیمات Prettier",
          duration: 20,
          is_free: false,
        },
        {
          id: 10,
          title: "جمع‌بندی",
          duration: 20,
          is_free: false,
        },
      ],
    },

    {
      id: 3,
      title: "کامپوننت‌ها",
      lessons: [
        {
          id: 11,
          title: "مفهوم Component",
          duration: 18,
          is_free: false,
        },
        {
          id: 12,
          title: "Props",
          duration: 22,
          is_free: false,
        },
        {
          id: 13,
          title: "Children",
          duration: 19,
          is_free: false,
        },
        {
          id: 14,
          title: "کامپوننت‌های قابل استفاده مجدد",
          duration: 27,
          is_free: false,
        },
      ],
    },

    {
      id: 4,
      title: "هوک‌ها",
      lessons: [
        {
          id: 15,
          title: "useState",
          duration: 28,
          is_free: false,
        },
        {
          id: 16,
          title: "useEffect",
          duration: 35,
          is_free: false,
        },
        {
          id: 17,
          title: "useMemo",
          duration: 22,
          is_free: false,
        },
        {
          id: 18,
          title: "useCallback",
          duration: 18,
          is_free: false,
        },
        {
          id: 19,
          title: "Custom Hooks",
          duration: 32,
          is_free: false,
        },
      ],
    },
  ];

  const course = {
    title: "آموزش جامع React.js از مقدماتی تا پیشرفته",
    teacher: "ابول 447",
    banner: "/images/slide3.jfif",
    description:
      "در این دوره React را از پایه تا سطح پیشرفته همراه با پروژه‌های واقعی یاد خواهید گرفت.",
    rate: 4.9,
    students: 12580,
    course_hour: 42,
    files_count: 56,
    preview_video:
    "https://www.aparat.com/video/video/embed/videohash/znrh3un/vt/frame",

    prerequisites:
      "این دوره به نحوی تهیه و تدوین شده است که مباحث آن به ساده‌ترین شکل ممکن بیان شوند...",

    reviews: {
      rate: 4.6,
      students: 12689,

      rates: [
        { star: 5, percent: 82 },
        { star: 4, percent: 63 },
        { star: 3, percent: 20 },
        { star: 2, percent: 8 },
        { star: 1, percent: 3 },
      ],

      items: [
        {
          id: 1,
          user: "یوسف مختار",
          rate: 1,
          time: "۱۴ ساعت پیش",
          comment:
            "دوره بسیار کامل و کاربردی بود. پروژه‌های عملی باعث شد مطالب را خیلی بهتر یاد بگیرم.",
        },
        {
          id: 2,
          user: "سید میثم طالبی",
          rate: 2,
          time: "۱ روز پیش",
          comment:
            "به نظرم یکی از بهترین دوره‌های React فارسی است. توضیحات مدرس بسیار روان بود.",
        },
        {
          id: 4,
          user: "علی رضایی",
          rate: 2,
          time: "۳ روز پیش",
          comment:
            "کیفیت دوره عالی بود، فقط اگر مثال‌های بیشتری داشت بهتر هم می‌شد.",
        },
        {
          id: 5,
          user: "علی رضایی",
          rate: 1,
          time: "۳ روز پیش",
          comment:
            "کیفیت دوره عالی بود، فقط اگر مثال‌های بیشتری داشت بهتر هم می‌شد.",
        },
        {
          id: 6,
          user: "علی رضایی",
          rate: 4,
          time: "۳ روز پیش",
          comment:
            "کیفیت دوره عالی بود، فقط اگر مثال‌های بیشتری داشت بهتر هم می‌شد.",
        },
      ],
    },
  };

  const sections = [
    {
      id: "content",
      component: <Content />,
    },
    {
      id: "Prerequisites",
      component: <Prerequisites
        course={course}
      />,
    },
    {
      id: "desc",
      component: <Description
        course={course}
      />,
    },
    {
      id: "review",
      component: <Reviews reviews={course.reviews} />,
    },
    {
      id: "chapters",
      component: <Chapters chapters={chapters} /> ,
    },
  ];
  
  return (
    <div className="">
      <h1 className="text-3xl font-bold">
        صفحه دوره
      </h1>

      <p className="mt-5">
        Slug:
        {" "}
        {slug}
      </p>
      <CourseHeader course={course} />


      <div className="container mx-auto px-3" >
        <CourseTabs sections={sections} />
      </div>


    </div>
  );
}
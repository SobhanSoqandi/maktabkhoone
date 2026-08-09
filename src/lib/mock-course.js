const courses = {
  "482": {
    id: "482",
    slug: "algorithms-design",
    title: "طراحی الگوریتم‌ها",
    chapters: [
      {
        id: "ch1",
        title: "فصل اول: مفاهیم مقدماتی",
        sessionsCount: 5,
        duration: "۲ ساعت و ۷ دقیقه",
        sessions: [
          {
            id: "1053",
            title: "جلسه ۰ - بخش اول: مقدمه‌ای بر درس و سرفصل‌ها",
            duration: "۱۲:۳۰",
            videoUrl: "/videos/session-1053.mp4",
            files: [
              {
                id: "f1",
                label: "دانلود ویدیو HD (۷۲۰p)",
                downloadUrl: "/files/session-1053-720p.mp4",
              },
            ],
          },
          {
            id: "1054",
            title: "جلسه ۱ - آشنایی با نماد O بزرگ",
            duration: "۱۸:۴۰",
            videoUrl: "/videos/session-1054.mp4",
            files: [
              {
                id: "f2",
                label: "دانلود ویدیو HD (۷۲۰p)",
                downloadUrl: "/files/session-1054-720p.mp4",
              },
              {
                id: "f3",
                label: "اسلایدهای جلسه (PDF)",
                downloadUrl: "/files/session-1054-slides.pdf",
              },
            ],
          },
        ],
      },
      {
        id: "ch2",
        title: "فصل دوم: روش‌های کلاسیک طراحی الگوریتم‌ها",
        sessionsCount: 19,
        duration: "۱۲ ساعت و ۴۷ دقیقه",
        sessions: [
          {
            id: "1060",
            title: "جلسه ۰ - الگوریتم‌های حریصانه",
            duration: "۲۲:۱۵",
            videoUrl: "/videos/session-1060.mp4",
            files: [],
          },
        ],
      },
    ],
  },
};

export function getCourse(courseId) {
  return courses[courseId] ?? null;
}

export function findSession(course, unitId) {
  for (const chapter of course.chapters) {
    const session = chapter.sessions.find((s) => s.id === unitId);
    if (session) {
      return { session, chapter };
    }
  }
  return { session: null, chapter: null };
}
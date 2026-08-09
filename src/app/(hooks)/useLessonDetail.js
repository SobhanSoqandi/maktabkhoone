"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "../../../data/server";

export default function useLessonDetail(lessonId) {
  return useQuery({
    queryKey: ["lesson-detail", lessonId],

    enabled: !!lessonId,

    queryFn: async ({ signal }) => {
      const [lesson, download] = await Promise.all([
        api.get(`/lesson/${lessonId}`, { signal }),
        api.get(`/lesson/lessons/${lessonId}/download`, { signal }),
      ]);

      return {
        lesson: lesson.data,
        downloadUrl: download.data,
      };
    },

    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
  });
}



// "use client";

// import { useQuery } from "@tanstack/react-query";
// import { req } from "../(function)/request";

// const getLessonDetail = async (lessonId) => {
//     return req(`/lesson/${lessonId}`);
// };

// export default function useLessonDetail(lessonId) {
//     return useQuery({
//         queryKey: ["lesson-detail", lessonId],
//         queryFn: () => getLessonDetail(lessonId),
//         enabled: Boolean(lessonId),
//     });
// }
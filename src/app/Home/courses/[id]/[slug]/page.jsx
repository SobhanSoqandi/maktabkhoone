import CourseTabs from "./(Tabs)/CourseTabs";
import CourseHeader from "./(CourseHeader)/CourseHeader";
import Content from "./(content)/Content";
import Prerequisites from "./(Prerequisites)/Prerequisites";
import Description from "./(Description)/Description";
import Reviews from "./(reviews)/Reviews";
import Chapters from "./(Chapters)/Chapters";
import { req } from "@/app/(function)/request";
import Teacher from "./About-Teacher/Teacher";
import FAQ from "./faq/FAQ";


export default async function CoursePage({ params }) {
  const { slug, id } = await params;

  const response = await req(`/course/${id}`);
  console.log(response);
  const chapters = response.section;

  const sections = [
    {
      id: "content",
      component: <Content />,
    },
    {
      id: "Prerequisites",
      component: <Prerequisites response={response} />,
    },
    {
      id: "desc",
      component: <Description response={response} />,
    },
    {
      id: "review",
      component: <Reviews response={response} />,
    },
     {
      id: "chapters",
      component: <Chapters chapters={chapters} />,
    },
    {
      id: "teacher",
      component: <Teacher />,
    },
    {
      id: "faq",
      component: <FAQ />,
    },
  ];

  return (
    <div className="">
      <CourseHeader response={response} />

      <div className="mx-auto px-3 container">
        <CourseTabs sections={sections} />
      </div>
    </div>
  );
}

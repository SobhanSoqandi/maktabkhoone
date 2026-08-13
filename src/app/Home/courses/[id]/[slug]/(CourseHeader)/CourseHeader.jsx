// import HeaderPreview from "./HeaderPreview";
// import HeaderInfo from "./HeaderInfo";
// import HeaderStats from "./HeaderStats";

import HeaderInfo from "./HeaderInfo";
import HeaderPreview from "./HeaderPreview";
import HeaderStats from "./HeaderStats";

export default function CourseHeader({ response }) {
  return (
    <section className="mx-auto px-10 py-8 container">
      <div className="flex lg:flex-row flex-col gap-8">
        <div className="flex-1 order-2 lg:order-1">
          <HeaderInfo
            course={response.course}
            rate={response.rating}
            students={response.students}
            teacher={response.teacher_firstname + response.teacher_lastname}
          />
          <div className="mt-8">
            <HeaderStats course={response.course} />
          </div>
        </div>

        <div className="order-1 lg:order-2 w-full lg:w-[430px]">
          <HeaderPreview course={response.course} section={response.section} />
        </div>
      </div>
    </section>
  );
}

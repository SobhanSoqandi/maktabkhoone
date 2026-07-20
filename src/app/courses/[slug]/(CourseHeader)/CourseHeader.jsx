// import HeaderPreview from "./HeaderPreview";
// import HeaderInfo from "./HeaderInfo";
// import HeaderStats from "./HeaderStats";

import HeaderInfo from "./HeaderInfo";
import HeaderPreview from "./HeaderPreview";
import HeaderStats from "./HeaderStats";

export default function CourseHeader({ course }) {
  return (
    <section className="mx-auto container py-8 px-10 ">

      <div className="flex flex-col gap-8 lg:flex-row">

        {/* Right */}
        <div className="order-2 flex-1 lg:order-1">

          <HeaderInfo course={course} />
          <div className="mt-8">
            <HeaderStats course={course} />
          </div>

        </div>

        {/* Left */}
        <div className="order-1 w-full lg:order-2 lg:w-[430px]">

          <HeaderPreview course={course} />
        </div>

      </div>

    </section>
  );
}
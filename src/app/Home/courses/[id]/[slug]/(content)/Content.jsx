import {
  HiOutlinePlayCircle,
  HiOutlinePencilSquare,
  HiOutlineChatBubbleLeftRight,
  HiOutlineAcademicCap,
  HiOutlineClipboardDocumentList,
  HiOutlineCalendarDays,
  HiOutlineDocumentText,
} from "react-icons/hi2";

export default function Content() {
  const includes = [
    // {
    //   id: 1,
    //   icon: <HiOutlinePlayCircle />,
    //   title: "17 ساعت ویدئو",
    // },
    {
      id: 2,
      icon: <HiOutlinePencilSquare />,
      title: " تمرین و پروژه",
    },
    // {
    //     id: 3,
    //     icon: <HiOutlineChatBubbleLeftRight />,
    //     title: "دسترسی به تالار گفتگو",
    // },
    {
      id: 4,
      icon: <HiOutlineCalendarDays />,
      title: "دسترسی مادام‌العمر به محتوای دوره",
    },
    {
      id: 5,
      icon: <HiOutlineAcademicCap />,
      title: "گواهینامه مکتب‌خونه",
    },
    // {
    //     id: 6,
    //     icon: <HiOutlineClipboardDocumentList />,
    //     title: "118 سوال سنجش و یادگیری",
    // },
    {
      id: 7,
      icon: <HiOutlineCalendarDays />,
      title: "10 هفته مهلت ارسال تمرین و پروژه",
    },
    // {
    //   id: 8,
    //   icon: <HiOutlineDocumentText />,
    //   title: "1 جلسه متنی",
    // },
  ];

  return (
    <section className="bg-white shadow my-5 p-5 rounded-3xl">
      <h2 className="mb-10 font-black text-xl">این دوره شامل :</h2>

      <div className="gap-x-12 gap-y-8 grid md:grid-cols-2">
        {includes.map(({ id, icon, title }) => (
          <div key={id} className="flex items-center gap-4">
            <div className="flex justify-center items-center bg-gray-100 rounded-full w-10 h-10 text-gray-600 text-lg shrink-0">
              {icon}
            </div>

            <span className="font-medium text-gray-800 text-sm leading-8">
              {title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

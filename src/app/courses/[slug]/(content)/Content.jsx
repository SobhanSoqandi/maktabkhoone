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
        {
            id: 1,
            icon: <HiOutlinePlayCircle />,
            title: "17 ساعت ویدئو",
        },
        {
            id: 2,
            icon: <HiOutlinePencilSquare />,
            title: "27 تمرین و پروژه",
        },
        {
            id: 3,
            icon: <HiOutlineChatBubbleLeftRight />,
            title: "دسترسی به تالار گفتگو",
        },
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
        {
            id: 6,
            icon: <HiOutlineClipboardDocumentList />,
            title: "118 سوال سنجش و یادگیری",
        },
        {
            id: 7,
            icon: <HiOutlineCalendarDays />,
            title: "10 هفته مهلت ارسال تمرین و پروژه",
        },
        {
            id: 8,
            icon: <HiOutlineDocumentText />,
            title: "1 جلسه متنی",
        },
    ];

    return (
        <section className="rounded-3xl shadow bg-white my-5 p-5">
            <h2 className="mb-10 text-xl font-black">
                این دوره شامل : 
            </h2>

            <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
                {includes.map(({ id, icon, title }) => (
                    <div
                        key={id}
                        className="flex items-center gap-4"
                    >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-lg text-gray-600">
                            {icon}
                        </div>

                        <span className="text-sm font-medium leading-8 text-gray-800">
                            {title}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
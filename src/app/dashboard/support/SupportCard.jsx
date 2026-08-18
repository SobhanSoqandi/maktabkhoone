import { HiOutlineChatBubbleLeftRight, HiOutlinePhone } from "react-icons/hi2";

export default function SupportCard({
    title,
    description,
    value,
    icon = "chat",
}) {
    const Icon =
        icon === "phone"
            ? HiOutlinePhone
            : HiOutlineChatBubbleLeftRight;

    return (
        <div className="flex items-center flex-col md:flex-row gap-y-4 md:justify-between rounded-3xl border border-gray-200 bg-white p-6">

            <div className="flex items-center gap-5">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                    <Icon className="text-2xl text-gray-500" />
                </div>

                <div>
                    <h3 className="text-base font-bold">
                        {title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                        {description}
                    </p>
                </div>



            </div>
            
            <div className="flex p-2 h-12 px-8 items-center justify-center rounded-2xl bg-cyan-100">
                <span className="text-base font-bold text-cyan-700">
                    {value}
                </span>
            </div>

        </div>
    );
}
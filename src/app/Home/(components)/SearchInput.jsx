import { FiSearch } from "react-icons/fi";

function SearchInput() {
    return (
        <div className="relative mx-2 flex-1 md:mx-5">

            <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2">
                <img
                    src="/next.svg"
                    alt="مکتب‌خونه"
                    className="h-4 w-[50px]"
                />
            </div>

            <input
                type="text"
                placeholder="جستجو در دوره‌ها"
                className="
                    h-12
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    bg-gray-50
                    pr-20
                    pl-12
                    outline-none
                    placeholder:text-gray-400
                    focus:border-teal-500
                "
            />

            <FiSearch
                className="
                    absolute
                    left-5
                    top-1/2
                    -translate-y-1/2
                    text-2xl
                    text-gray-500
                "
            />

        </div>
    );
}

export default SearchInput;
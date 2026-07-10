import React from 'react'
import { FiSearch } from 'react-icons/fi'

function SearchInput() {
    return (
        <div className="relative flex-1 mx-2 md:mx-10">

            <input
                type="text"
                className="w-full h-12 rounded-2xl border border-gray-200 bg-gray-50 px-5 outline-none focus:border-teal-500"
            />
         
            <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center gap-2 text-gray-400">

                <span>جستجو در</span>

                <img
                    src="/next.svg"
                    alt="مکتب‌خونه"
                    className="h-3 w-auto"
                />

            </div>

            <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl text-gray-500" />

        </div>
    )
}

export default SearchInput
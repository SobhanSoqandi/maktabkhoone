'use client'

import Modal from '@/app/(components)/modal'
import React from 'react'
import { FiFilter } from 'react-icons/fi'
import Filters from '../(Filters)/Filters'
import { IoFilter } from 'react-icons/io5'

function CoursesHeader() {
    return (
        <div className="flex items-center p-2 rounded-xl shadow border border-gray-200 m-3 text-nowrap" >
            <button className="lg:flex hidden btn font-bold" >
                <IoFilter className="text-lg" />
                ترتیب : 
            </button>
            <Modal>
                <Modal.Open name="filters" >
                    <button className="lg:hidden flex btn btn-primary" >
                        <FiFilter />
                        فیلتر ها
                    </button>
                </Modal.Open>

                <Modal.Window name="filters" >
                    <div className="p-2" >
                        <Filters />
                    </div>
                </Modal.Window>

            </Modal>
            <div className="flex gap-5 p-3 px-5 text-sm text-gray-500 cursor-pointer overflow-x-auto overflow-y-hidden" >
                <span className="hover:text-teal-500" >
                    جدید ترین
                </span>
                <span className="hover:text-teal-500" >
                    محبوب ترین
                </span>
                <span className="hover:text-teal-500" >
                    پیش فرض
                </span>
                <span className="hover:text-teal-500" >
                    بالا ترین امتیاز
                </span>
            </div>
        </div>
    )
}

export default CoursesHeader
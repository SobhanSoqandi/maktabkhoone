import SupportCard from '@/app/dashboard/support/SupportCard'
import React from 'react'
import { FiPhoneCall } from 'react-icons/fi'

function page() {
    return (
        <div className="space-y-5">

            <div className="space-y-4 py-3" >
                <h1 className="font-bold md:text-2xl" > پشتیبانی مدرسین </h1>
                <p className="md:text-lg" > مدرس گرامی میتوانید از طریق راه های زیر با ما در ارتباط باشید </p>
            </div>

            <SupportCard
                icon="phone"
                title="تماس با پشتیبانی"
                description="شنبه تا چهارشنبه، ۱۰ تا ۱۸"
                value="۰۲۱-۹۱۰۱۳۱۷۳۱"
            />

            <SupportCard
                icon="chat"
                title="پشتیبانی آنلاین در بله"
                description="۷ روز هفته، ۹ تا ۱۸"
                value="@maktabsupportbot"
            />


        <button className='btn btn-primary w-full sm:w-56 bg-teal-400 text-white btn-shake hover:bg-teal-300' >
            <FiPhoneCall />
            درخواست پشتیبانی
        </button>

        </div>
    )
}

export default page
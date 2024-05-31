import React from 'react'
import Image from 'next/image'

const Welcome = () => {
    return (
        <div className='h-auto md:h-[120px] bg-white border-[1px] border-[#D0D5DD] rounded-lg relative box-border p-4'>
            <h3 className='font-semibold text-[24px]'>Welcome back, John Doe</h3>
            <p className='text-[14px]'>The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.</p>
            <p className='text-[#BC006D] underline text-[14px]'>Look here for more information</p>
            <Image
                src="/Vector.svg"
                width={160}
                height={160}
                style={{height: "auto"}}
                alt="Notification icon"
                className='absolute left-[889px] top-0'
            />

            <Image
                src="/Close.svg"
                width={24}
                height={24}
                alt="Notification icon"
                className='absolute cursor-pointer top-4 right-10'
            />
        </div>
    )
}

export default Welcome
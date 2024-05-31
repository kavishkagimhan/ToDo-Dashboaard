import Image from 'next/image'


const Navbar = () => {
    return (
        <div className='bg-white h-[80px] flex justify-between items-center p-[28px] '>
            <h4 className='font-semibold text-[20px] cursor-pointer'>Dashboard</h4>
            <div className='flex items-center gap-6'>
                <Image
                    src="/Notifications.svg"
                    width={20}
                    height={20}
                    alt="Notification icon"
                    className='cursor-pointer'
                />
                <Image
                    src="/Profile.svg"
                    width={40}
                    height={40}
                    alt="Profile icon"
                    className='cursor-pointer'
                />
                <Image
                    src="/Chevron-down.svg"
                    width={24}
                    height={24}
                    alt="down icon"
                    className='cursor-pointer'
                />
            </div>
        </div>
    )
}

export default Navbar
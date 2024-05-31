import Image from 'next/image'

const Sidebar = () => {
    return (
        <div className='bg-[#33074F] relative h-screen lg:w-[272px] text-[24px] text-white font-semibold w-[80px]'>
            <div className='h-[80px] flex items-center justify-center bg-[#EBE6ED1A]'>
                <h3 className='hidden cursor-pointer lg:block'>Acmy Solutions</h3>
            </div>
            <div className='flex lg:w-[240px] w-full items-center bg-[#EBE6ED1A] px-2 py-3 md:gap-[8px]  mx-auto rounded-full absolute top-[140px] lg:left-[16px] justify-center lg:justify-start'>
                <Image
                    src="/Dashboard.svg"
                    width={18}
                    height={18}
                    alt="Dashboard icon"
                />
                <p className='font-400 text-[16px] hidden lg:block'>Dashboard</p>
            </div>
        </div>
    )
}

export default Sidebar
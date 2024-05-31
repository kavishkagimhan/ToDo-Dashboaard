import Image from 'next/image';
import React from 'react';

const ActivityItem = ({ avatar, name, action, date }) => {
    return (
        <div className='flex items-start gap-6 px-2 py-1'>
            <Image
                src={avatar}
                width={32}
                height={32}
                alt="Image icon"
                className='cursor-pointer'
            />
            <div className='border-b border-[#EAECF0]'>
                <p className='text-[14px]'>
                    <strong>{name} </strong>
                    <span dangerouslySetInnerHTML={{ __html: action }} />
                </p>
                <p className='text-[12px] text-[#757575]'>{date}</p>
            </div>
        </div>
    );
};

export default ActivityItem;

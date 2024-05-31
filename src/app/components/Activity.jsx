import React from 'react';
import ActivityItem from './ActivityItem';

const activities = [
    {
        avatar: "/Avatar-1.svg",
        name: "Kushantha Charuka",
        action: `created <strong><span class='text-[#BC006D]'>Contract #00124 need John Beige’s signature</span></strong>`,
        date: "Sep 16, 2022 at 11:30 AM",
    },
    {
        avatar: "/Avatar-2.svg",
        name: "Lorem ipsum",
        action: "<strong>dolor sit amet,</strong> consectetur adipiscing elit. <strong>Maecenas</strong> pretium neque",
        date: "Sep 16, 2022 at 11:45 AM",
    },
    {
        avatar: "/Avatar-2.svg",
        name: "Lorem ipsum",
        action: "<strong>dolor sit amet,</strong> consectetur adipiscing elit. <strong>Maecenas</strong> pretium neque",
        date: "Sep 16, 2022 at 11:45 AM",
    },
];

const Activity = () => {
    return (
        <div className='w-full border border-[#D0D5DD] rounded-lg'>
            <p className='font-medium text-16 border-b border-[#D0D5DD] p-2'>Activity Feed</p>
            <div>
                {activities.map((activity, index) => (
                    <ActivityItem
                        key={index}
                        avatar={activity.avatar}
                        name={activity.name}
                        action={activity.action}
                        date={activity.date}
                    />
                ))}
            </div>
        </div>
    );
};

export default Activity;

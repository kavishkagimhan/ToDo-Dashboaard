'use client';

import React, { useState, useContext, useEffect } from 'react';
import Image from 'next/image';
import { DataContext } from '@/context/DataContext';

const Tasks = () => {
    const data = useContext(DataContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const itemsPerPage = 8;

    useEffect(() => {
        if (data.length) {
            setLoading(false);
        }
    }, [data]);

    // Calculate the tasks to be displayed on the current page
    const indexOfLastTask = currentPage * itemsPerPage;
    const indexOfFirstTask = indexOfLastTask - itemsPerPage;
    const currentTasks = data.slice(indexOfFirstTask, indexOfLastTask);

    // Calculate total pages
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Priority to image mapping
    const priorityToImage = {
        HIGH: '/Priority-High.svg',
        MEDIUM: '/Priority-Medium.svg',
        LOW: '/Priority-Low.svg',
    };

    // Function to format the date
    const formatDate = (dateString) => {
        const options = { month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-full lg:w-[656px] border border-[#D0D5DD] rounded-lg">
            <p className="font-medium text-16 border-b border-[#D0D5DD] p-2">Tasks</p>
            <div className="p-2">
                {currentTasks.map((task) => (
                    <div
                        key={task.id}
                        className="p-1 border-b border-[#D0D5DD] flex justify-between items-start"
                    >
                        <div className="flex items-center">
                            <Image
                                src={priorityToImage[task.priority]}
                                width={20}
                                height={20}
                                alt={`${task.priority} Priority Icon`}
                                className="cursor-pointer"
                            />
                            <div>
                                <p className="ml-2 text-[14px]">{task.todo}</p>
                                {!task.completed && (
                                    <p className="cursor-pointer text-[#BC006D] text-[12px] ml-2">
                                        Mark as done
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center">
                            <p
                                className="mr-2 text-[12px] rounded-full px-2"
                                style={{
                                    color: task.completed ? '#219653' : '#F2C94C',
                                    backgroundColor: task.completed ? '#E8F5E9' : '#FFF3E0',
                                }}
                            >
                                {task.completed ? 'Done' : 'In-Progress'}
                            </p>
                            <p className="text-[12px] text-[#757575]">
                                {formatDate(task.createdAt)}
                            </p>
                        </div>
                    </div>
                ))}
                <div className="flex items-center justify-center mt-4">
                    <button
                        className={`p-2 ${currentPage === 1 ? 'text-gray-400' : 'text-blue-500'}`}
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <Image
                            src="/Chevron-down.svg"
                            width={20}
                            height={20}
                            alt="Previous Page"
                            className="rotate-90"
                        />
                    </button>
                    <div className="text-gray-600">
                        Page {currentPage} of {totalPages}
                    </div>
                    <button
                        className={`p-2 ${currentPage === totalPages ? 'text-gray-400' : 'text-blue-500'}`}
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <Image
                            src="/Chevron-down.svg"
                            width={20}
                            height={20}
                            alt="Next Page"
                            className="-rotate-90"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Tasks;

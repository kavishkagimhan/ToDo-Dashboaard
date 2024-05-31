'use client';

import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from '@/context/DataContext';

const Chart = () => {
    const data = useContext(DataContext);

    const [chartData, setChartData] = useState({
        datasets: [
          {
            label: '# of Tasks',
            data: [0, 0, 0],
            backgroundColor: [
              '#5671cc',
              '#eb1c42',
              '#d6cf1c',
            ],
            borderColor: [
                '#5671cc',
                '#eb1c42',
                '#d6cf1c',
            ],
            borderWidth: 1,
          },
        ],
    });

    useEffect(() => {
        if (data.length > 0) {
            countPriorities(data);
        }
    }, [data]);

    const countPriorities = (tasks) => {
        let highCount = 0;
        let mediumCount = 0;
        let lowCount = 0;

        tasks.forEach(task => {
            switch (task.priority) {
                case 'HIGH':
                    highCount++;
                    break;
                case 'MEDIUM':
                    mediumCount++;
                    break;
                case 'LOW':
                    lowCount++;
                    break;
                default:
                    break;
            }
        });

        setChartData({
            datasets: [
              {
                label: '# of Tasks',
                data: [lowCount, highCount, mediumCount],
                backgroundColor: [
                  '#5671cc',
                  '#eb1c42',
                  '#d6cf1c',
                ],
                borderColor: [
                    '#5671cc',
                    '#eb1c42',
                    '#d6cf1c',
                ],
                borderWidth: 1,
              },
            ],
        });
    };

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: false,
          },
        },
    };

    return (
        <div className='w-full border border-[#D0D5DD] rounded-lg mt-4'>
            <p className='font-medium text-16 border-b border-[#D0D5DD] p-2'>Tasks Priorities</p>
            <div className='p-4 h-[160px] w-full flex items-center justify-center gap-4'> 
                <Doughnut data={chartData} options={options} />
                <div>
                    <div className='flex items-center gap-2'>
                        <div className='w-2 h-2 bg-[#eb1c42] rounded-full'></div>
                        <p className=' text-[14px] '>High</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='w-2 h-2 bg-[#d6cf1c] rounded-full'></div>
                        <p className=' text-[14px] '>Medium</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='w-2 h-2 bg-[#5671cc] rounded-full'></div>
                        <p className=' text-[14px] '>Low</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chart;

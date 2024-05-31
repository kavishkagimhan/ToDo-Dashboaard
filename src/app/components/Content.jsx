import React from 'react'
import Welcome from './Welcome'
import Tasks from './Tasks'
import Activity from './Activity'
import Chart from './Chart'

const Content = () => {
    return (
        <div className=''>
            <Welcome />
            <div className='flex gap-6 py-6 w-[100%] flex-col lg:flex-row'>
                <div>
                    <Tasks />
                </div>
                <div className='flex flex-col flex-grow '>
                    <Activity />
                    <Chart />
                </div>
            </div>
        </div>
    )
}

export default Content
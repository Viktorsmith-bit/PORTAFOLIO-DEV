import React, { Component } from 'react'
import Index2018 from './components/index2018';
import Index2019 from './components/index2019';
import Index2020 from './components/index2020';

export default class experience extends Component {
    render() {
        return (
            <div className='mt-16 lg:mt-32' style={{ backgroundColor: '#0a192f' }}>
                <div className='flex justify-center items-center px-4 md:px-0 lg:px-8 xl:px-0'>
                    <div className='w-16 xl:w-20 flex lg:justify-start xl:justify-center'>
                        <div className='w-14 h-14 rounded-full flex items-center justify-center' style={{ backgroundColor: '#112240' }}>
                            <h1 className='text-green-400 text-2xl font-medium font-mono'>03</h1>
                        </div>
                    </div>
                    <div className='flex-1 w-full md:max-w-xl lg:max-w-6xl'>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-300 font-mono'>Experience</h1>
                    </div>
                    <div className='w-16 xl:w-20'></div>
                </div>
                <Index2020 />
                <Index2019 />
                <Index2018 />
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class courses extends Component {
    render() {
        return (
            <div className='mt-16 lg:mt-32'>
                <div className='flex justify-center items-center px-4 md:px-0 lg:px-8 xl:px-0'>
                    <div className='w-16 xl:w-20 flex lg:justify-start xl:justify-center'>
                        <div className='w-14 h-14 rounded-full flex items-center justify-center' style={{ backgroundColor: '#112240' }}>
                            <h1 className='text-green-400 text-2xl font-medium font-mono'>04</h1>
                        </div>
                    </div>
                    <div className='flex-1 lg:flex-1 md:max-w-xl lg:max-w-6xl'>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-300 font-mono'>Courses</h1>
                    </div>
                    <div className='w-16 xl:w-20'></div>
                </div>
                <div className='flex justify-center mt-5'>
                    <div className='flex-1 md:max-w-xl lg:max-w-6xl px-4 md:px-0 lg:px-8 xl:px-0'>
                        <div className='flex-1 max-w-lg'>
                            <h1 className='text-gray-400 md:text-justify lg:text-justify'>Over the years I have taken some courses, this because companies ask you for certification of your knowledge, currently I want to establish myself economically to do a master's degree and diploma.</h1>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-8 md:mt-12 lg:mt-14'>
                    <div className='flex flex-col lg:flex-row justify-center flex-wrap px-4 md:px-0 lg:px-8 xl:px-0 lg:flex-1 md:max-w-xl lg:max-w-6xl gap-3'>
                        <div className='w-full lg:w-80 rounded-sm p-6 lg:p-6 xl:p-8 border border-gray-700' style={{ backgroundColor: '#112240' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="white" className="bi bi-folder2" viewBox="0 0 16 16">
                                <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z" />
                            </svg>
                            <h1 className='font-medium text-lg mt-5 text-green-400'>HQSE</h1>
                            <h1 className='text-base text-gray-300'>SST</h1>
                            <h1 className='mt-5 text-gray-400'>"IPERC-Hazard Identification, Risk Assessment and Control Measures against COVID-19"</h1>
                        </div>
                        <div className='w-full lg:w-80 rounded-sm p-6 lg:p-6 xl:p-8 border border-gray-700' style={{ backgroundColor: '#112240' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="white" className="bi bi-folder2" viewBox="0 0 16 16">
                                <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z" />
                            </svg>
                            <h1 className='font-medium text-lg mt-5 text-green-400'>UNASAM</h1>
                            <h1 className='text-base text-gray-300'>Office 2019</h1>
                            <h1 className='mt-5 text-gray-400'>Intermediate office automation, Windows 10, internet and email tools.</h1>
                        </div>
                        <div className='w-full lg:w-80 rounded-sm p-6 lg:p-6 xl:p-8 border border-gray-700' style={{ backgroundColor: '#112240' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="white" className="bi bi-folder2" viewBox="0 0 16 16">
                                <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z" />
                            </svg>
                            <h1 className='font-medium text-lg mt-5 text-green-400'>UNASAM</h1>
                            <h1 className='text-base text-gray-300'>ISO 14001:2015</h1>
                            <h1 className='mt-5 text-gray-400'>Manage and identify the environmental risks that can occur internally in the companies.</h1>
                        </div>
                        <div className='w-full lg:w-80 rounded-sm p-6 lg:p-6 xl:p-8 border border-gray-700' style={{ backgroundColor: '#112240' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="white" className="bi bi-folder2" viewBox="0 0 16 16">
                                <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z" />
                            </svg>
                            <h1 className='font-medium text-lg mt-5 text-green-400'>UNASAM</h1>
                            <h1 className='text-base text-gray-300'>Prior consultation</h1>
                            <h1 className='mt-5 text-gray-400'>law on the right to prior consultation with indigenous or native peoples.</h1>
                        </div>
                        <div className='w-full lg:w-80 rounded-sm p-6 lg:p-6 xl:p-8 border border-gray-700' style={{ backgroundColor: '#112240' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="white" className="bi bi-folder2" viewBox="0 0 16 16">
                                <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z" />
                            </svg>
                            <h1 className='font-medium text-lg mt-5 text-green-400'>Udemy</h1>
                            <h1 className='text-base text-gray-300'>NodeJS</h1>
                            <h1 className='mt-5 text-gray-400'>Introduction to backend development with NodeJS and Express JS</h1>
                        </div>
                        <div className='w-full lg:w-80 rounded-sm p-6 lg:p-6 xl:p-8 border border-gray-700' style={{ backgroundColor: '#112240' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="white" className="bi bi-folder2" viewBox="0 0 16 16">
                                <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z" />
                            </svg>
                            <h1 className='font-medium text-lg mt-5 text-green-400'>Udemy</h1>
                            <h1 className='text-base text-gray-300'>NodeJS</h1>
                            <h1 className='mt-5 text-gray-400'>Become a backend expert</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

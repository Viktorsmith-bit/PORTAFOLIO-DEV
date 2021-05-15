import React, { Component } from 'react'

export default class engineer extends Component {
    render() {
        return (
            <div className='flex justify-center mt-10 lg:mt-20'>
                <div className='flex flex-col lg:flex-row w-full flex-1 lg:max-w-6xl px-4 md:px-0 lg:px-8 xl:px-0'>
                    <div className='xl:flex-1 lg:mr-auto md:mx-auto'>
                        <div className='flex-1 xl:max-w-lg z-10'>
                            <div className='flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-gear" viewBox="0 0 16 16">
                                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                                </svg>
                                <h1 className='text-lg lg:text-xl font-normal ml-3 text-gray-300  font-semibold'>Environmental Engineer</h1>
                            </div>
                            <h1 className='text-base lg:text-justify mt-5 p-4 md:p-8 lg:p-8 rounded-md shadow-lg z-10 text-gray-400 md:max-w-xl hidden md:block lg:block' style={{ backgroundColor: '#112240' }}>My engineering skills come from my college training and some extracurricular tasks. The years that appear on the screen correspond to the time I have been studying them, and not to a work experience.</h1>
                            <h1 className='text-base lg:text-justify mt-5 p-4 md:p-8 lg:p-8 rounded-md shadow-lg z-10 text-gray-400 md:max-w-xl md:hidden lg:hidden ' style={{ backgroundColor: '#112240' }}>My engineering skills clearly come from my college education, some extracurricular assignments, and some courses taken over time as part of my training.</h1>
                            <div className='flex gap-5 mt-5'>
                                <h1 className='text-gray-300 text-base'>SIG</h1>
                                <h1 className='text-gray-300 text-base'>QGis</h1>
                                <h1 className='text-gray-300 text-base'>ArcGis</h1>
                                <h1 className='text-gray-300 text-base'>SGA</h1>
                            </div>
                            <div className='flex mt-5 gap-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" className="bi bi-folder2" viewBox="0 0 16 16">
                                    <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" className="bi bi-compass" viewBox="0 0 16 16">
                                    <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                                    <path d="M6.94 7.44l4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='xl:flex-1'>
                        <div className='flex-1 md:max-w-xl lg:max-w-xl md:mx-auto '>
                            <div className='px-4 py-6 md:p-8 lg:p-8 rounded-md mt-8 md:border lg:border border-gray-700 lg:mt-36 xl:mt-0 z-20 lg:-ml-48 xl:-ml-0' style={{ backgroundColor: '#112240' }}>
                                <div className='flex gap-3 mb-7'>
                                    <div className='h-4 w-4 rounded-full bg-red-400'></div>
                                    <div className='h-4 w-4 rounded-full bg-yellow-400'></div>
                                    <div className='h-4 w-4 rounded-full bg-green-400'></div>
                                </div>
                                <div className='flex flex-wrap gap-1 md:hidden lg:hidden'>
                                    <h1 className='text-gray-400'>SIG</h1>
                                    <code><h1 className='text-green-400'>{'>'}</h1></code>
                                    <h1 className='text-gray-400'>Gestión Ambiental</h1>
                                    <code><h1 className='text-green-400'>{'>'}</h1></code>
                                    <h1 className='text-gray-400'>SST</h1>
                                    <code><h1 className='text-green-400'>{'>'}</h1></code>
                                    <h1 className='text-gray-400'>Modelamiento Ambiental</h1>
                                    <code><h1 className='text-green-400'>{'>'}</h1></code>
                                    <h1 className='text-gray-400'>QGis</h1>
                                    <code><h1 className='text-green-400'>{'>'}</h1></code>
                                    <h1 className='text-gray-400'>Ordenamiento Ambiental</h1>
                                    <code><h1 className='text-green-400'>{'>'}</h1></code>
                                    <h1 className='text-gray-400'>ArcGis</h1>
                                    <h1 className='text-gray-400'>Teledetección Ambiental</h1>
                                    <code><h1 className='text-green-400'>{'>'}</h1></code>
                                    <h1 className='text-gray-400'>EIA</h1>
                                </div>
                                <div className='hidden md:block lg:block'>
                                    <code><h1 className='text-gray-300'>module.exports = <span className='text-white'>{`{`}</span></h1></code>
                                    <code><h1 className='text-gray-300 px-5'>SIG: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Intermediate, <span className='text-red-400'>time</span>: 2 years <span className='text-white'>{`}`}</span>,</h1></code>
                                    <code><h1 className='text-gray-300 px-5'>QGis: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Intermediate, <span className='text-red-400'>time</span>: 2 years <span className='text-white'>{`}`}</span>,</h1></code>
                                    <code><h1 className='text-gray-300 px-5'>ArcGis: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Intermediate, <span className='text-red-400'>time</span>: 2 years <span className='text-white'>{`}`}</span>,</h1></code>
                                    <code><h1 className='text-gray-300 px-5'>Ordenamiento: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Intermediate, <span className='text-red-400'>time</span>: 1 year <span className='text-white'>{`}`}</span>,</h1></code>
                                    <code><h1 className='text-gray-300 px-5'>Modelamiento: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Intermediate, <span className='text-red-400'>time</span>: 1 year <span className='text-white'>{`}`}</span>,</h1></code>
                                    <code><h1 className='text-gray-300 px-5'>Teledetección: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Intermediate, <span className='text-red-400'>time</span>: 1 year <span className='text-white'>{`}`}</span>,</h1></code>
                                    <code><h1 className='text-gray-300 px-5'>EIA: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Intermediate, <span className='text-red-400'>time</span>: 1 years <span className='text-white'>{`}`}</span>,</h1></code>
                                    <code><h1 className='text-gray-300 px-5'>SGA: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Intermediate, <span className='text-red-400'>time</span>: 2 years <span className='text-white'>{`}`}</span>,</h1></code>
                                    <code><span className='text-gray-300'>{`}`}</span></code>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

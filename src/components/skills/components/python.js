import React, { Component } from 'react'

export default class python extends Component {
    render() {
        return (
            <div className='flex justify-center mt-10 md:mt-16 lg:mt-20 xl:mt-36' >
                <div className='flex flex-col lg:flex-row w-full flex-1 lg:max-w-6xl px-4 md:px-0 lg:px-8 xl:px-0'>
                    <div className='xl:flex-1 lg:mr-auto md:mx-auto'>
                        <div className='flex-1 xl:max-w-lg'>
                            <div className='flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-cpu" viewBox="0 0 16 16">
                                    <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                                </svg>
                                <h1 className='text-lg lg:text-xl ml-3 text-gray-300 font-semibold'>Python Developer</h1>
                            </div>
                            <h1 className='text-base lg:text-justify mt-5 p-4 md:p-8 lg:p-8 rounded-md shadow-lg z-10 text-gray-400 md:max-w-xl' style={{ backgroundColor: '#112240' }}>As in web development, I became a Python programmer in a self-taught way, I am currently developing my thesis in data science with Python, this to obtain my degree as an engineer.</h1>
                            <div className='flex gap-5 mt-5'>
                                <h1 className='text-gray-300 text-base'>Python</h1>
                                <h1 className='text-gray-300 text-base'>Numpy</h1>
                                <h1 className='text-gray-300 text-base'>Pandas</h1>
                            </div>
                            <div className='flex mt-5 gap-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" className="bi bi-folder2" viewBox="0 0 16 16">
                                    <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" className="bi bi-laptop" viewBox="0 0 16 16">
                                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='xl:flex-1' id='experience'>
                        <div className='flex-1 md:max-w-xl md:mx-auto'>
                            <div className='px-4 py-6 md:p-8 lg:p-8 rounded-md mt-8 md:border lg:border border-gray-700 lg:mt-36 xl:mt-0 z-20 lg:-ml-48 xl:-ml-0' style={{ backgroundColor: '#112240' }}>
                                <div className='flex gap-3 mb-7'>
                                    <div className='h-4 w-4 rounded-full bg-red-400'></div>
                                    <div className='h-4 w-4 rounded-full bg-yellow-400'></div>
                                    <div className='h-4 w-4 rounded-full bg-green-400'></div>
                                </div>
                                <div className='flex flex-wrap gap-1 md:hidden lg:hidden'>
                                    <h1 className='text-gray-400'>Python</h1>
                                    <code><h1 className='text-green-400'>{'>'}</h1></code>
                                    <h1 className='text-gray-400'>Numpy</h1>
                                    <code><h1 className='text-green-400'>{'>'}</h1></code>
                                    <h1 className='text-gray-400'>Pandas</h1>
                                    <code><h1 className='text-green-400'>{'>'}</h1></code>
                                    <h1 className='text-gray-400'>PyQGis</h1>
                                    <code><h1 className='text-green-400'>{'>'}</h1></code>
                                    <h1 className='text-gray-400'>Matplotlib</h1>
                                    <code><h1 className='text-green-400'>{'>'}</h1></code>
                                    <h1 className='text-gray-400'>Scikit-Learn</h1>
                                    <code><h1 className='text-green-400'>{'>'}</h1></code>
                                    <h1 className='text-gray-400'>Tensorflow</h1>
                                </div>
                                <div className='hidden md:block lg:block' >
                                    <code><h1 className='text-gray-300'>module.exports = <span className='text-white'>{`{`}</span></h1></code>
                                    <code><h1 className='text-gray-300 px-5'>Python: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Intermediate, <span className='text-red-400'>time</span>: 4 years <span className='text-white'>{`}`}</span>,</h1></code>
                                    <code><h1 className='text-gray-300 px-5'>Numpy: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Intermediate, <span className='text-red-400'>time</span>: 3 years <span className='text-white'>{`}`}</span>,</h1></code>
                                    <code><h1 className='text-gray-300 px-5'>Pandas: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Intermediate, <span className='text-red-400'>time</span>: 3 years <span className='text-white'>{`}`}</span>,</h1></code>
                                    <code><h1 className='text-gray-300 px-5'>PyQGis: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Intermediate, <span className='text-red-400'>time</span>: 1 year <span className='text-white'>{`}`}</span>,</h1></code>
                                    <code><h1 className='text-gray-300 px-5'>Matplotlib: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Intermediate, <span className='text-red-400'>time</span>: 1 year <span className='text-white'>{`}`}</span>,</h1></code>
                                    <code><h1 className='text-gray-300 px-5'>Scikit-Learn: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Intermediate, <span className='text-red-400'>time</span>: 1 year <span className='text-white'>{`}`}</span>,</h1></code>
                                    <code><h1 className='text-gray-300 px-5'>Tensorflow: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Intermediate, <span className='text-red-400'>time</span>: 1 year <span className='text-white'>{`}`}</span>,</h1></code>
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

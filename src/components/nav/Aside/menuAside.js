import React, { Component } from 'react'

export default class menuAside extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='w-80 md:w-96'>
                <div className='fixed right-0 w-80 md:w-96 h-screen lg:hidden z-40 animate__animated animate__fadeInRight' style={{ backgroundColor: '#112240' }}>
                    <div className='flex flex-col justify-between items-center flex-wrap h-screen px-12 py-14' >
                        <div className='flex justify-end items-center w-full'>
                            <svg onClick={this.props.message} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="bi bi-x-octagon" viewBox="0 0 16 16">
                                <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1L1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <a href='#profile'><h1 className='cursor-pointer text-gray-300'><span className='text-green-400'>01.</span> About</h1></a>
                            <a href='#skills'><h1 className='cursor-pointer text-gray-300'><span className='text-green-400'>02.</span> Skills</h1></a>
                            <a href='#experience'><h1 className='cursor-pointer text-gray-300'><span className='text-green-400'>04.</span> Experience</h1></a>
                            <a href='#courses'><h1 className='cursor-pointer text-gray-300'><span className='text-green-400'>04.</span> Courses</h1></a>
                            <a href='#contact'><h1 className='cursor-pointer text-gray-300'><span className='text-green-400'>05.</span> Contact</h1></a>
                        </div>
                        <div className='flex flex-col gap-6 items-center justify-center'>
                            <div className='flex cursor-pointer px-3 lg:px-4 py-2 lg:py-3 border border-green-400 rounded-sm'>
                                <a href="mailto:smith_12_47@hotmail.com"><h1 className='text-green-400 nav'>Request Resume</h1></a>
                            </div>
                            <a href='#home'><h1 className='text-gray-300 cursor-pointer'>Home</h1></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

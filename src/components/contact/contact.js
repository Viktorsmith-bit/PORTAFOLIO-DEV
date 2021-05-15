import React, { Component } from 'react'

export default class contact extends Component {
    render() {
        return (
            <div className='flex justify-center mt-24 lg:mt-32 pb-10' id='contact'>
                <div className='flex justify-center px-4 md:px-0 lg:px-0 max-w-full lg:flex-1 lg:max-w-6xl'>
                    <div className='flex flex-col items-center flex-1 w-full md:max-w-md lg:max-w-xl'>
                        <div className='w-20 flex justify-center items-center'>
                            <div className='w-14 h-14 rounded-full flex items-center justify-center' style={{ backgroundColor: '#112240' }}>
                                <h1 className='text-green-400 text-2xl font-medium font-mono'>05</h1>
                            </div>
                        </div>
                        <h1 className='text-4xl lg:text-5xl font-bold text-center text-gray-300 mt-5 '>Get In Touch</h1>
                        <h1 className='text-base mt-5 lg:mt-8 text-center text-gray-400'>I am currently looking for work as an environmental engineer or developer, if you have a job proposal do not hesitate to contact me, you can also request my resume without any commitment.</h1>
                        <div className='flex mt-10 gap-6'>
                            <div className='flex flex-col items-center'>
                                <a href="mailto:smith_12_47@hotmail.com">
                                    <button className='flex border-2 border-green-400 px-6 py-4 rounded-sm'>
                                        <h1 className='text-green-400 font-medium'>Send Message</h1>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <h1 className='text-gray-400 text-base text-center mt-24'>Designed and Built with</h1>
                        <div className='flex gap-6 mt-1'>
                            <div className='flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-star" viewBox="0 0 16 16">
                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                </svg>
                                <h1 className='text-gray-400 text-base text-center'>JavaScript</h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-star" viewBox="0 0 16 16">
                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                </svg>
                                <h1 className='text-gray-400 text-base text-center'>React</h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-star" viewBox="0 0 16 16">
                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                </svg>
                                <h1 className='text-gray-400 text-base text-center'>Tailwindcss</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

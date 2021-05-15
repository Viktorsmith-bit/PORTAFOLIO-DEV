import React, { Component } from 'react'

export default class python extends Component {
    render() {
        return (
            <div className='max-w-xl animate__animated animate__pulse'>
                <div className='flex h-10 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-geo-alt" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    <h1 className='ml-2 text-gray-400'>Ancash, Perú</h1>
                </div>
                <h1 className='text-4xl lg:text-5xl font-bold mt-2 text-gray-300 font-sans'>Passionate about scientific programming</h1>
                <button className='px-6 py-3 border border-green-400 mt-8 rounded-sm'>
                    <a href='#python'><h1 className='text-green-400'>See Experience</h1></a>
                </button>
                <h1 className='text-base mt-8 lg:mt-16 lg:text-justify text-gray-400 p-4 lg:p-8 rounded-md' style={{ backgroundColor: '#112240' }}>With four years of experience, Python was one of the first programming languages I learned, along with Java, the most important project I did was while doing my pre-professional internship as an environmental engineering student at the Center for Environmental Research for Development, a research center that belongs to the university where I was trained.</h1>
                <div className='flex mt-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-layers" viewBox="0 0 16 16">
                        <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0l3.515-1.874zM8 9.433L1.562 6 8 2.567 14.438 6 8 9.433z" />
                    </svg>
                    <h1 className='text-base ml-3 text-gray-400'>Autotdidact</h1>
                </div>
            </div>
        )
    }
}

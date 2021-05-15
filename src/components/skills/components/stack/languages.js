import React, { Component } from 'react'

export default class languages extends Component {
    render() {
        return (
            <div className='px-4 py-6 md:p-8 lg:p-8 rounded-md mt-5 lg:mt-5 md:border lg:border-0 xl:border border-gray-700' style={{ backgroundColor: '#112240' }}>
                <div className='flex gap-3 mb-7'>
                    <div className='h-4 w-4 rounded-full bg-red-400'></div>
                    <div className='h-4 w-4 rounded-full bg-yellow-400'></div>
                    <div className='h-4 w-4 rounded-full bg-green-400'></div>
                </div>
                <div className='flex flex-wrap gap-1 md:hidden lg:hidden animate__animated animate__pulse'>
                    <h1 className='text-gray-400'>JavaScript</h1>
                    <code><h1 className='text-green-400'>{'>'}</h1></code>
                    <h1 className='text-gray-400'>Python</h1>
                    <code><h1 className='text-green-400'>{'>'}</h1></code>
                    <h1 className='text-gray-400'>MatLab</h1>
                    <code><h1 className='text-green-400'>{'>'}</h1></code>
                    <h1 className='text-gray-400'>R</h1>
                    <code><h1 className='text-green-400 '>{'>'}</h1></code>
                    <h1 className='text-gray-400'>Visual Basic</h1>
                    <code><h1 className='text-green-400'>{'>'}</h1></code>
                    <h1 className='text-gray-400'>Java</h1>
                    <code><h1 className='text-green-400'>{'>'}</h1></code>
                    <h1 className='text-gray-400'>Rust</h1>
                </div>
                <div className='hidden md:block lg:block animate__animated animate__pulse'>
                    <code><h1 className='text-gray-300'>module.exports = <span className='text-white'>{`{`}</span></h1></code>
                    <code><h1 className='text-gray-300 px-5'>JavaScript: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Intermediate, <span className='text-red-400'>time</span>: 3 years <span className='text-white'>{`}`}</span>,</h1></code>
                    <code><h1 className='text-gray-300 px-5'>Python: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Intermediate, <span className='text-red-400'>time</span>: 4 years <span className='text-white'>{`}`}</span>,</h1></code>
                    <code><h1 className='text-gray-300 px-5'>MatLab: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Intermediate, <span className='text-red-400'>time</span>: 2 years <span className='text-white'>{`}`}</span>,</h1></code>
                    <code><h1 className='text-gray-300 px-5'>R: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Intermediate, <span className='text-red-400'>time</span>: 2 years <span className='text-white'>{`}`}</span>,</h1></code>
                    <code><h1 className='text-gray-300 px-5'>Visual Basic: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Intermediate, <span className='text-red-400'>time</span>: 3 years <span className='text-white'>{`}`}</span>,</h1></code>
                    <code><h1 className='text-gray-300 px-5'>Java: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Intermediate, <span className='text-red-400'>time</span>: 4 years <span className='text-white'>{`}`}</span>,</h1></code>
                    <code><h1 className='text-gray-300 px-5'>Rust: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Basic, <span className='text-red-400'>time</span>: 6 months <span className='text-white'>{`}`}</span>,</h1></code>
                    <code><span className='text-gray-300'>{`}`}</span></code>
                </div>
            </div>
        )
    }
}

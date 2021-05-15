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
                    <h1 className='text-gray-400'>Git</h1>
                    <code><h1 className='text-green-400'>{'>'}</h1></code>
                    <h1 className='text-gray-400'>MongoDB</h1>
                    <code><h1 className='text-green-400'>{'>'}</h1></code>
                    <h1 className='text-gray-400'>RxDB</h1>
                    <code><h1 className='text-green-400'>{'>'}</h1></code>
                    <h1 className='text-gray-400'>Docker</h1>
                    <code><h1 className='text-green-400'>{'>'}</h1></code>
                    <h1 className='text-gray-400'>PostgreSQL</h1>
                    <code><h1 className='text-green-400 '>{'>'}</h1></code>
                    <h1 className='text-gray-400'>MySQL</h1>
                    <code><h1 className='text-green-400 '>{'>'}</h1></code>
                    <h1 className='text-gray-400'>SQL</h1>
                </div>
                <div className='hidden md:block lg:block animate__animated animate__pulse'>
                    <code><h1 className='text-gray-300'>module.exports = <span className='text-white'>{`{`}</span></h1></code>
                    <code><h1 className='text-gray-300 px-5'>Git: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Intermediate, <span className='text-red-400'>time</span>: 2 years <span className='text-white'>{`}`}</span>,</h1></code>
                    <code><h1 className='text-gray-300 px-5'>MongoDB: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Intermediate, <span className='text-red-400'>time</span>: 2 years <span className='text-white'>{`}`}</span>,</h1></code>
                    <code><h1 className='text-gray-300 px-5'>RxDB: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Intermediate, <span className='text-red-400'>time</span>: 1 year <span className='text-white'>{`}`}</span>,</h1></code>
                    <code><h1 className='text-gray-300 px-5'>Docker: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Intermediate, <span className='text-red-400'>time</span>: 1 year <span className='text-white'>{`}`}</span>,</h1></code>
                    <code><h1 className='text-gray-300 px-5'>PostgreSQL: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Advanced, <span className='text-red-400'>time</span>: 4 years <span className='text-white'>{`}`}</span>,</h1></code>
                    <code><h1 className='text-gray-300 px-5'>MySQL: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Advanced, <span className='text-red-400'>time</span>: 4 years <span className='text-white'>{`}`}</span>,</h1></code>
                    <code><h1 className='text-gray-300 px-5'>SQL: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Advanced, <span className='text-red-400'>time</span>: 4 years <span className='text-white'>{`}`}</span>,</h1></code>
                    <code><span className='text-gray-300'>{`}`}</span></code>
                </div>
            </div>
        )
    }
}
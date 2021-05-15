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
                    <h1 className='text-gray-400'>NodeJs</h1>
                    <code><h1 className='text-green-400'>{'>'}</h1></code>
                    <h1 className='text-gray-400'>ExpressJs</h1>
                    <code><h1 className='text-green-400'>{'>'}</h1></code>
                    <h1 className='text-gray-400'>NestJs</h1>
                    <code><h1 className='text-green-400'>{'>'}</h1></code>
                    <h1 className='text-gray-400'>Jest</h1>
                    <code><h1 className='text-green-400'>{'>'}</h1></code>
                    <h1 className='text-gray-400'>TypeScript</h1>
                    <code><h1 className='text-green-400 '>{'>'}</h1></code>
                    <h1 className='text-gray-400'>GraphQL</h1>
                    <code><h1 className='text-green-400'>{'>'}</h1></code>
                    <h1 className='text-gray-400'>Awilix</h1>
                    <code><h1 className='text-green-400'>{'>'}</h1></code>
                </div>
                <div className='hidden md:block lg:block animate__animated animate__pulse'>
                    <code><h1 className='text-gray-300'>module.exports = <span className='text-white'>{`{`}</span></h1></code>
                    <code><h1 className='text-gray-300 px-5'>NodeJs: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Intermediate, <span className='text-red-400'>time</span>: 3 years <span className='text-white'>{`}`}</span>,</h1></code>
                    <code><h1 className='text-gray-300 px-5'>ExpressJs: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Intermediate, <span className='text-red-400'>time</span>: 3 years <span className='text-white'>{`}`}</span>,</h1></code>
                    <code><h1 className='text-gray-300 px-5'>NestJs: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Intermediate, <span className='text-red-400'>time</span>: 2 years <span className='text-white'>{`}`}</span>,</h1></code>
                    <code><h1 className='text-gray-300 px-5'>Jest: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Intermediate, <span className='text-red-400'>time</span>: 1 year <span className='text-white'>{`}`}</span>,</h1></code>
                    <code><h1 className='text-gray-300 px-5'>TypeScript: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Intermediate, <span className='text-red-400'>time</span>: 2 years <span className='text-white'>{`}`}</span>,</h1></code>
                    <code><h1 className='text-gray-300 px-5'>GraphQL: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Intermediate, <span className='text-red-400'>time</span>: 1 year <span className='text-white'>{`}`}</span>,</h1></code>
                    <code><h1 className='text-gray-300 px-5'>Awilix: <span className='text-white'>{`{`}</span> <span className='text-red-400'>level</span>: Intermediate, <span className='text-red-400'>time</span>: 1 year <span className='text-white'>{`}`}</span>,</h1></code>
                    <code><span className='text-gray-300'>{`}`}</span></code>
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react'
import Engineer from './components/engineer';
import Stack from './components/stack';
import Python from './components/python';

export default class skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            engineer: true,
            dev: false,
            python: false,
            languages: false
        }
        this.hundleClick = this.hundleClick.bind(this);
        this.hundleClickDev = this.hundleClickDev.bind(this);
        this.hundleClickPython = this.hundleClickPython.bind(this);
    }
    hundleClick(e) {
        e.preventDefault();
        this.setState({ engineer: true, dev: false, python: false })
    }
    hundleClickDev(e) {
        e.preventDefault();
        this.setState({ engineer: false, dev: true, python: false })
    }
    hundleClickPython(e) {
        e.preventDefault();
        this.setState({ engineer: false, dev: false, python: true })
    }
    render() {
        return (
            <div className='mt-16 lg:mt-32' id='skills' style={{ backgroundColor: '#0a192f' }}>
                <div className='flex justify-center items-center px-4 md:px-0 lg:px-8 xl:px-0'>
                    <div className='w-16 xl:w-20 flex lg:justify-start xl:justify-center'>
                        <div className='w-14 h-14 rounded-full flex items-center justify-center' style={{ backgroundColor: '#112240' }}>
                            <h1 className='text-green-400 text-2xl font-medium font-mono'>02</h1>
                        </div>
                    </div>
                    <div className='flex-1 w-full md:max-w-xl lg:max-w-6xl'>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-300 font-mono'>Skills</h1>
                    </div>
                    <div className='w-16 xl:w-20'></div>
                </div>
                <Engineer />
                <Stack />
                <Python />
            </div>
        )
    }
}

import React, { Component } from 'react'
import Engineer from './components/engineer';
import Stack from './components/stack';
import Python from './components/python';
import Aside from './components/aside';

export default class profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            engineer: true,
            dev: false,
            python: false
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
            <div className='mt-16 lg:mt-32' >
                <div className='flex flex-col items-center mt-16 px-4 lg:px-8 xl:px-0'>
                    <div className='flex-1 max-w-6xl'>
                        <div className='flex items-center justify-start'>
                            <div className='w-16 flex lg:justify-start'>
                                <div className='w-14 h-14 rounded-full flex items-center justify-center' style={{ backgroundColor: '#112240' }}>
                                    <h1 className='text-green-400 text-2xl font-medium font-mono'>01</h1>
                                </div>
                            </div>
                            <div className='flex-1 ml-1'>
                                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-300 font-mono'>About me</h1>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row mt-10 gap-2'>
                            <Aside engineer={this.hundleClick} engineerState={this.state.engineer} dev={this.hundleClickDev} devState={this.state.dev} python={this.hundleClickPython} pythonState={this.state.python}/>
                            {this.state.engineer ? <Engineer /> : null}
                            {this.state.dev ? <Stack /> : null}
                            {this.state.python ? <Python /> : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

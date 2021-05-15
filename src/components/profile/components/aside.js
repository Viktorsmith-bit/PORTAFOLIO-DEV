import React, { Component } from 'react'

export default class aside extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='flex md:flex-row flex-col lg:flex-col max-w-xl lg:w-56 mb-10 lg:mb-0'>
                <div className={`${this.props.engineerState ? 'border-l-2 border-green-400' : 'border-l-2 border-gray-700'} h-10 px-3 flex items-center cursor-pointer font-semibold`} onClick={this.props.engineer}>
                    <div className='flex items-center'>
                        <h1 className={`${this.props.engineerState ? 'text-green-400' : 'text-gray-400'} text-base ml-2`}>Environmental Engineer</h1>
                    </div>
                </div>
                <div className={`${this.props.devState ? 'border-l-2 border-green-400' : 'border-l-2 border-gray-700'} h-10 px-3 border-l-2 border-gray-700 flex items-center cursor-pointer font-semibold`} onClick={this.props.dev} >
                    <div className='flex items-center'>
                        <h1 className={`${this.props.devState ? 'text-green-400' : 'text-gray-400'} text-base ml-2`}>Full Stack Developer</h1>
                    </div>
                </div>
                <div className={`${this.props.pythonState ? 'border-l-2 border-green-400' : 'border-l-2 border-gray-700'} h-10 px-3 border-l-2 border-gray-700 flex items-center cursor-pointer font-semibold`} onClick={this.props.python}>
                    <div className='flex items-center'>
                        <h1 className={`${this.props.pythonState ? 'text-green-400' : 'text-gray-400'} text-base ml-2`}>Python Developer</h1>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import MenuAside from './Aside/menuAside';

export default class nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            close: true
        }
        this.hundleclickOpen = this.hundleclickOpen.bind(this);
        this.hundleclickClose = this.hundleclickClose.bind(this);
    }
    hundleclickOpen(e) {
        e.preventDefault();
        this.setState({ open: true, close: false });
    }
    hundleclickClose(e) {
        e.preventDefault();
        this.setState({ open: false, close: true });
    }
    render() {
        return (
            <div className='flex justify-center h-24'>
                {this.state.open ? <MenuAside message={this.hundleclickClose} open={this.state.open} close={this.state.close} /> : null}
                <div className='fixed flex justify-center h-24 w-full z-30' style={{ backgroundColor: '#0a192f' }} >
                    <div className='w-full flex items-center lg:flex-1 max-w-full px-4 md:px-8 lg:px-8 xl:px-0 lg:max-w-6xl h-24 z-10 border-b border-gray-700 shadow-sm' style={{ backgroundColor: '#0a192f#0a192f' }}>
                        <div className='flex gap-6 mr-auto items-center'>
                            <a href="mailto:smith_12_47@hotmail.com">
                                <div className='flex cursor-pointer px-3 lg:px-4 py-2 lg:py-3 border border-green-400 rounded-sm'>
                                    <h1 className='text-green-400 font-medium'>Request Resume</h1>
                                </div>
                            </a>
                            <a href='#home'><h1 className='text-gray-300 cursor-pointer hidden lg:block'>Home</h1></a>
                        </div>
                        <div className='flex gap-6 flex-wrap hidden lg:flex animate__animated animate__backInDown'>
                            <a href='#profile'><h1 className='cursor-pointer text-gray-300'><span className='text-green-400 font-medium font-mono'>01.</span> About</h1></a>
                            <a href='#skills'><h1 className='cursor-pointer text-gray-300'><span className='text-green-400 font-medium font-mono'>02.</span> Skills</h1></a>
                            <a href='#experience'><h1 className='cursor-pointer text-gray-300'><span className='text-green-400 font-medium font-mono'>03.</span> Experience</h1></a>
                            <a href='#courses'><h1 className='cursor-pointer text-gray-300'><span className='text-green-400 font-medium font-mono'>04.</span> Courses</h1></a>
                            <a href='#contact'><h1 className='cursor-pointer text-gray-300'><span className='text-green-400 font-medium font-mono'>05.</span> Contact</h1></a>
                        </div>
                        <svg onClick={this.hundleclickOpen} xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="white" className="lg:hidden bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';
import Languages from './stack/languages';
import Frontend from './stack/frontend';
import Backend from './stack/backend';
import Other from './stack/other';

export default class stack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: true,
            frontend: false,
            backend: false,
            other: false
        }

        this.hundleClick = this.hundleClick.bind(this);
        this.hundleClickFron = this.hundleClickFron.bind(this);
        this.hundleClickBack = this.hundleClickBack.bind(this);
        this.hundleClickOther = this.hundleClickOther.bind(this);
    }
    hundleClick(e) {
        e.preventDefault();
        this.setState({ languages: true, frontend: false, backend: false, other: false })
    }
    hundleClickFron(e) {
        e.preventDefault();
        this.setState({ languages: false, frontend: true, backend: false, other: false })
    }
    hundleClickBack(e) {
        e.preventDefault();
        this.setState({ languages: false, frontend: false, backend: true, other: false })
    }
    hundleClickOther(e) {
        e.preventDefault();
        this.setState({ languages: false, frontend: false, backend: false, other: true })
    }


    render() {
        return (
            <div className='flex justify-center mt-10 md:mt-16 lg:mt-24'>
                <div className='flex flex-col-reverse lg:flex-row w-full flex-1 lg:max-w-6xl px-4 md:px-0 lg:px-8 xl:px-0'>
                    <div className='xl:flex-1'>
                        <div className='flex-1 md:max-w-xl mt-8 lg:mt-0 xl:mt-0 z-10 lg:-mr-48 xl:-ml-0 md:mr-auto md:mx-auto'>
                            <div className='flex flex-wrap items-center gap-2 lg:gap-0 xl:gap-2'>
                                <h1 onClick={this.hundleClick} className={`${this.state.languages ? 'text-green-400 md:border md:border-green-400 lg:border lg:border-green-400 p-0 md:px-4 md:py-2 lg:px-4 lg:py-2' : 'text-gray-300 border-0 p-0 md:px-4 md:py-2 lg:px-4 lg:py-2'} text-base cursor-pointer`} >Languages</h1>
                                <code><h1 className='text-gray-300'>{`>`}</h1></code>
                                <h1 onClick={this.hundleClickFron} className={`${this.state.frontend ? 'text-green-400 md:border md:border-green-400 lg:border lg:border-green-400 p-0 md:px-4 md:py-2 lg:px-4 lg:py-2' : 'text-gray-300 border-0 p-0 md:px-4 md:py-2 lg:px-4 lg:py-2'} text-base cursor-pointer`}>Frontend</h1>
                                <code><h1 className='text-gray-300'>{`>`}</h1></code>
                                <h1 onClick={this.hundleClickBack} className={`${this.state.backend ? 'text-green-400 md:border md:border-green-400 lg:border lg:border-green-400 p-0 md:px-4 md:py-2 lg:px-4 lg:py-2' : 'text-gray-300 border-0 p-0 md:px-4 md:py-2 lg:px-4 lg:py-2'} text-base cursor-pointer`}>Backend</h1>
                                <code><h1 className='text-gray-300'>{`>`}</h1></code>
                                <h1 onClick={this.hundleClickOther} className={`${this.state.other ? 'text-green-400 md:border md:border-green-400 lg:border lg:border-green-400 p-0 md:px-4 md:py-2 lg:px-4 lg:py-2' : 'text-gray-300 border-0 p-0 md:px-4 md:py-2 lg:px-4 lg:py-2'} text-base cursor-pointer`}>Others</h1>
                            </div>
                            {this.state.languages ? <Languages /> : null}
                            {this.state.frontend ? <Frontend /> : null}
                            {this.state.backend ? <Backend /> : null}
                            {this.state.other ? <Other /> : null}
                        </div>
                    </div>
                    <div className='flex-1 flex justify-end md:mx-auto'>
                        <div className='flex flex-col xl:justify-center flex-1 md:max-w-xl xl:max-w-lg z-20 lg:mt-72 xl:mt-0'>
                            <div className='flex items-center justify-end'>
                                <h1 className='text-lg lg:text-xl mr-3 text-gray-300 font-semibold'>Full Stack Developer</h1>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-hdd-rack" viewBox="0 0 16 16">
                                    <path d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm2 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                                    <path d="M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v2H2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1V7h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm0 7v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-3-4v2H4V7h8z" />
                                </svg>
                            </div>
                            <h1 className='text-base lg:text-justify mt-5 p-4 md:p-8 lg:p-8 rounded-md shadow-lg z-10 text-gray-400 md:max-w-xl lg:border xl:border-0 lg:border-gray-700' style={{ backgroundColor: '#112240' }}>My knowledge as a full stack developer is clearly self-taught, my passion for web programming led me to study through only the documentation of programming languages and frameworks.</h1>
                            <div className='flex gap-6 mt-5 justify-end'>
                                <h1 className='text-gray-300'>JavaScript</h1>
                                <h1 className='text-gray-300'>React</h1>
                                <h1 className='text-gray-300'>Node.js</h1>
                                <h1 className='text-gray-300'>Express</h1>
                            </div>
                            <div className='flex mt-5 justify-end gap-5'>
                                <a href='https://github.com/Viktorsmith-bit' target='blank'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-github" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                </a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" className="bi bi-folder2" viewBox="0 0 16 16">
                                    <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

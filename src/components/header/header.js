import React, { Component } from 'react'
import Nav from '../nav/nav';
import Perfil from './components/perfil';
import Image from './components/image';

export default class header extends Component {
    render() {
        return (
            <div className='header' id='home'>
                <Nav />
                <div className='flex justify-center' style={{ backgroundColor: '#0a192f' }}>
                    <div className='flex flex-col-reverse lg:flex-row lg:flex-1 w-full lg:px-8 xl:px-0 lg:max-w-6xl py-16 lg:py-24 border-b border-gray-700'>
                        <Perfil />
                        <Image />
                    </div>
                </div>
            </div>
        )
    }
}

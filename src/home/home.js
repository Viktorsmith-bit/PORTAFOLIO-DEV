import React, { Component } from 'react'
import Header from '../components/header/header';
import Experience from '../components/experience/experience';
import Skills from '../components/skills/skills';
import Profile from '../components/profile/profile';
import Courses from '../components/courses/courses';
import Contact from '../components/contact/contact';

export default class home extends Component {
    render() {
        return (
            <div className='home' style={{ backgroundColor: '#0a192f' }}>
                <Header />
                <Profile />
                <Skills />
                <Experience />
                <Courses />
                <Contact />
            </div>
        )
    }
}

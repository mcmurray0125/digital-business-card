import React from 'react'
import Info from './Info'
import Footer from './Footer'

export default function Main() {
    return(
        <div className="main-container">
            <img className='profile-picture' src="src/assets/mm-photo.jpg" alt="profile-picture" />
            <div className="basic-text">
                <h1 className='name-title'>Michael Murray</h1>
                <p className="job-text lt">Frontend Developer</p>
                <small className='website-text lt'>michaelmurray.website</small>
            </div>
            <div className="btn-wrapper">
                <button className='email-btn'>
                    <i className="fa-solid fa-envelope" id='email-icon'></i>
                    <span>Email</span>
                </button>
                <button className='linkedin-btn'>
                    <i className="fa-brands fa-linkedin"></i>
                    <span>LinkedIn</span>
                </button>
            </div>
            <Info/>
            <Footer/>
        </div>
    )
}
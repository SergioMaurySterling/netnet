import React from 'react'
import '../CSS/BrandLogo.css'
import logo from '../images/logo-netflix.png'

function BrandLogo () {
    return (
        <React.Fragment>
            <nav className='logo-navbar'>
                <img className='logo' src={logo} alt='NetNet logo'></img>
            </nav>
        </React.Fragment>
    )
}

export {BrandLogo}
import React from 'react'
import '../CSS/Navbar.css'

function Navbar () {
    return (
            <div className='navbarContainer'>
                <ul className='Navbar'>
                    <li>Series</li>
                    <li>Películas</li>
                    <li>Mi lista</li>
                </ul>
            </div>
    );
}

export {Navbar}
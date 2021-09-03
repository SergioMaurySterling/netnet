import React from 'react'
import '../CSS/CarrouselMovies.css'

function CarrouselMovies (props) {
    return (
        <div className='container'>
            <div className='littePhoto1'>
                <img className='littleImage' src={props.movie1} alt='Foto pelicula'/>
            </div>

            <div className='littePhoto'>
                <img className='littleImage' src={props.movie2} alt='Foto pelicula'/>
            </div>

            <div className='littePhoto'>
                <img className='littleImage' src={props.movie3} alt='Foto pelicula'/>
            </div>

            <div className='littePhoto'>
                <img className='littleImage' src={props.movie4} alt='Foto pelicula'/>
            </div>
        </div>
    );
}

export {CarrouselMovies}
import React from 'react';
import '../CSS/MovieMainPicture.css'

function MovieMainPicture ({matrixBigPhoto}) {
    return (
        <React.Fragment>
            <img className='mainPhoto' src={matrixBigPhoto} alt='Foto portada matrix'/>
        </React.Fragment>
    );
}

export {MovieMainPicture}
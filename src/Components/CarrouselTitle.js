import React from 'react'
import '../CSS/CarrouselTitle.css'

export const CarrouselTitle = (props) => {

    return (
        <>
            <div className='titleContainer'>
                <h1 className='carrouselTitle'>{props.name}</h1>
            </div>
        </>
    );
}
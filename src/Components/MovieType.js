import React from 'react'
import '../CSS/MovieType.css'

function MovieType (props) {
    return (
        <React.Fragment>
            <div className='movieTypeContainer'>
                <h5 className='movieTypes'>{props.type1} - {props.type2} - {props.type3}- {props.type4}- {props.type5}</h5>
            </div>
        </React.Fragment>
    );
}

export {MovieType}
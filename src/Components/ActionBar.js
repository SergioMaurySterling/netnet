import React from 'react'
import '../CSS/ActionBar.css'

/*Icons*/
import AddIcon from '@material-ui/icons/Add';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

function ActionBar (){
    return (
        <div className='actionBarContainer'>
            <div className='componentsDiv'>
                <AddIcon className='actionBarIcon'/>
                <p className='actionBarWord'>Mi lista</p>
            </div>
            <button className='buttonDiv'>
                <PlayArrowIcon/>
                <p>Reproducir</p>
            </button>
            <div className='componentsDiv'>
                <InfoOutlinedIcon className='actionBarIcon'/>
                <p className='actionBarWord'>Info</p>
            </div>
        </div>
    );
}

export {ActionBar}
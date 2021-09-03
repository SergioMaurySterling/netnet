import React from 'react'
import '../CSS/Footer.css'

/*Icons*/
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MovieFilterOutlinedIcon from '@material-ui/icons/MovieFilterOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';

export const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='componentsDivs'>
                <HomeOutlinedIcon className='footerIcon'/>
                <p className='footerWord'>Inicio</p>
            </div>
            <div className='componentsDivs'>
                <MovieFilterOutlinedIcon className='footerIcon'/>
                <p className='footerWord'>Proximamente</p>
            </div>
            <div className='componentsDivs'>
                <SearchOutlinedIcon className='footerIcon'/>
                <p className='footerWord'>Buscar</p>
            </div>
            <div className='componentsDivs'>
                <GetAppOutlinedIcon className='footerIcon'/>
                <p className='footerWord'>Descargas</p>
            </div>
        </div>
    );
}
import React from 'react';
import '../CSS/AppUI.css'

/*Componentes*/
import {BrandLogo} from './BrandLogo.js'
import {MovieMainPicture} from './MovieMainPicture.js'
import { MovieType } from './MovieType.js';
import { Navbar } from './Navbar';
import { ActionBar } from './ActionBar';
import { CarrouselTitle } from './CarrouselTitle';
import { CarrouselMovies } from './CarrouselMovies';
import {Footer} from './Footer'

/* Fotos peliculas */
import matrixBigPhoto from '../images/matrixBigFoto.png'
import matrixLittlePhoto from '../images/matrixLittlePhoto.jpg'
import spongeBobLittlePhoto from '../images/spongeBobLittlePhoto.png'
import spidermanLittlePhoto from '../images/spidermanLittelPhoto.png'
import dragonLittlePhoto from '../images/dragonLittlePhoto.png'
import narutoLittlePhoto from '../images/narutoLittlePhoto.png'
import pokemonLittlePhoto from '../images/pokemonLittlePhoto.png'
import caballerosLittlePhoto from '../images/caballerosLittlePhoto.png'
import animeLittlePhoto from '../images/animeLittlePhoto.png'
import bbLittlePhoto from '../images/bbLittlePhoto.png'
import arrowLittlePhoto from '../images/arrowLittlePhoto.png'
import chapoLittlePhoto from '../images/chapoLittlePhoto.png'
import noneLittlePhoto from '../images/noneLittlePhoto.png'


function AppUI ()  {

    const movie = [
        {name: 'Matrix: Recargado', littlePhoto: {matrixLittlePhoto}, bigPhoto: {matrixBigPhoto}, year: '2003', duration: '2h 18m', description: 'Neo, Morpheus, Trinity y el resto de la tripulación continúan en la lucha contra las máquinas que han esclavizado a la raza humana. Ahora más humanos han sido despertados e intentan vivir en el mundo real. A medida que aumentan en número, la batalla se acerca a Sion, la última ciudad real en el mundo y centro de la resistencia humana. Y tiene poco tiempo, muy poco tiempo... ', cast: 'Keanu Reeves, Laurence Fishburne', directors: 'Lily Wachowski, Lana Wachowski', type1:'Surrealista', type2:'Distópico', type3:'Hábil', type4:'Siniestro', type5:'Emocionante' },
        {name: '', littlePhoto: {spongeBobLittlePhoto}, bigPhoto: '', year: '', duration: '', description: '', cast: '', directors: '', type1:'', type2:'', type3:'', type4:'', type5:'' },
        {name: '', littlePhoto: {spidermanLittlePhoto}, bigPhoto: '', year: '', duration: '', description: '', cast: '', directors: '', type1:'', type2:'', type3:'', type4:'', type5:'' },
        {name: '', littlePhoto: {dragonLittlePhoto}, bigPhoto: '', year: '', duration: '', description: '', cast: '', directors: '', type1:'', type2:'', type3:'', type4:'', type5:'' },
        {name: '', littlePhoto: {narutoLittlePhoto}, bigPhoto: '', year: '', duration: '', description: '', cast: '', directors: '', type1:'', type2:'', type3:'', type4:'', type5:'' },
        {name: '', littlePhoto: {pokemonLittlePhoto}, bigPhoto: '', year: '', duration: '', description: '', cast: '', directors: '', type1:'', type2:'', type3:'', type4:'', type5:'' },
        {name: '', littlePhoto: {caballerosLittlePhoto}, bigPhoto: '', year: '', duration: '', description: '', cast: '', directors: '', type1:'', type2:'', type3:'', type4:'', type5:'' },
        {name: '', littlePhoto: {animeLittlePhoto}, bigPhoto: '', year: '', duration: '', description: '', cast: '', directors: '', type1:'', type2:'', type3:'', type4:'', type5:'' },
        {name: '', littlePhoto: {bbLittlePhoto}, bigPhoto: '', year: '', duration: '', description: '', cast: '', directors: '', type1:'', type2:'', type3:'', type4:'', type5:'' },
        {name: '', littlePhoto: {arrowLittlePhoto}, bigPhoto: '', year: '', duration: '', description: '', cast: '', directors: '', type1:'', type2:'', type3:'', type4:'', type5:'' },
        {name: '', littlePhoto: {chapoLittlePhoto}, bigPhoto: '', year: '', duration: '', description: '', cast: '', directors: '', type1:'', type2:'', type3:'', type4:'', type5:'' },
        {name: '', littlePhoto: {noneLittlePhoto}, bigPhoto: '', year: '', duration: '', description: '', cast: '', directors: '', type1:'', type2:'', type3:'', type4:'', type5:'' }
      ]

    const movieTypeTitles = [
        {name:'Populares en Netnet'},
        {name:'Series japonesas de anime'},
        {name:'Series de EE.UU. sobre crimenes'}
    ]

    return(
        <React.Fragment>
            <BrandLogo/>
            <div className='mainBlock'>
                <MovieMainPicture
                    matrixBigPhoto={matrixBigPhoto}
                />
                <Navbar/>
                <div className='separator'/>
                <MovieType
                    type1={movie[0].type1}
                    type2={movie[0].type2}
                    type3={movie[0].type3}
                    type4={movie[0].type4}
                    type5={movie[0].type5}
                />
            </div>
            <ActionBar></ActionBar>
            <CarrouselTitle 
                key={movieTypeTitles.name}
                name={movieTypeTitles[0].name}
            />
            <CarrouselMovies
                key={movie.littlePhoto}
                movie1={matrixLittlePhoto}
                movie2={spongeBobLittlePhoto}
                movie3={spidermanLittlePhoto}
                movie4={dragonLittlePhoto}
            />
            <CarrouselTitle
                key={movieTypeTitles.name}
                name={movieTypeTitles[1].name}
            />
            <CarrouselMovies
                key={movie.littlePhoto}
                movie1={narutoLittlePhoto}
                movie2={pokemonLittlePhoto}
                movie3={caballerosLittlePhoto}
                movie4={animeLittlePhoto}
            />
            <CarrouselTitle
                key={movieTypeTitles.name}
                name={movieTypeTitles[2].name}
            />
            <CarrouselMovies
                key={movie.littlePhoto}
                movie1={bbLittlePhoto}
                movie2={arrowLittlePhoto}
                movie3={chapoLittlePhoto}
                movie4={noneLittlePhoto}
            />
            <Footer/>
        </React.Fragment>
    );
}

export {AppUI}
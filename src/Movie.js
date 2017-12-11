import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title, poster}){
    return (
        <div>
            <MoviePoster poster={poster}/>
            <h1>{title}</h1>
        </div>
    );
}

function MoviePoster({poster}){  //Dumb ()  state없음 props 와 return만 존재함
    return (
        <img src={poster} alt="Movie Poster" />
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}


MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired
}


export default Movie;
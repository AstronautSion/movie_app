import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';

function Movie({title, poster, genres, synopsis, year}){
    return (
        <div className="Movie">
            <div className="Movie__Columns">
            <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Columns">
            <div className="Movie__Year">{year}</div>
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />
                </div>
                
            </div>
        </div>
    )
}

function MovieYear({year}){
    return(
        {year}
    );
}

function MoviePoster({poster, alt}){  //Dumb ()  state없음 props 와 return만 존재함
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    );
}

function MovieGenre({genre}){
    return (
        <span className="Movie__Genre">{genre}</span>
    );
}




Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
}


MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

MovieYear.propTypes = {
    year: PropTypes.number.isRequired
}


export default Movie;
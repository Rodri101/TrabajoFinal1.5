import React from 'react';
import "../streaming.css"

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;

return (
    <div className="srpostercontenedor">
        {props.movies.map((movie,index)=> (
            <div className='srpeli' >
                <img className="srposter" src={movie.Poster} alt='movie'></img>
                <div className='overlay' 
                    onClick={()=>props.handleFavouritesClick(movie)}>
                    <FavouriteComponent />
                </div>
            </div>
        ))}
    </div>
);
};

export default MovieList;
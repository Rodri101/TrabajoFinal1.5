import React, { useState , useEffect } from 'react';
import "./streaming.css";
import MovieList from './minicomps/MovieList';
import MovieListHeading from './minicomps/MovieListHeading';
import SearchBox from './minicomps/SearchBox';
import AddFavourites from './minicomps/AddFavourites';
import RemoveFavourites from './minicomps/RemoveFavourites';


const Streaming = () => {
    const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');
    
    /* se pide la API */
    const getMovieRequest = async(searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=f0287181`;

        const response = await fetch(url);
		const responseJson = await response.json();

        if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
    };

    /* buscar pelicula de la API */
    useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

    useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

/* la lista guardada no se perdera al recargar la pagina */
const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
}

/* Agregar peliculas favoritas */
const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
};

/* Remover de la lista de peliculas favoritas */
const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
        (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
};

return (
    <div className='papastreamer'>
        
        <div>
            <MovieListHeading heading='Peliculas y Juegos'/>

            {/* buscador de peliculas por nombre */}
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
            {/* Resultados de busqueda */}
        <div >
            <MovieList 
                movies={movies} 
                handleFavouritesClick={addFavouriteMovie} 
                favouriteComponent={AddFavourites}
            />
        </div>
            {/* Peliculas favoritas */}
        <div>
            <MovieListHeading 
            heading='Favoritas'/>
        </div>
            {/* Coleccion de peliculas favoritas */}
        <div>
            <MovieList 
                movies={favourites} 
                handleFavouritesClick={removeFavouriteMovie} 
                favouriteComponent={RemoveFavourites}
            />
        </div>

    </div>
    );
}




export default Streaming;
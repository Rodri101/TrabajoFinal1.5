import React from 'react';
import "../streaming.css"

const MovieListHeading = (props) => {
    return(
        <div>
            <h1 className="srtitulopeliculas">{props.heading}</h1>
        </div>
    );
};

export default MovieListHeading;
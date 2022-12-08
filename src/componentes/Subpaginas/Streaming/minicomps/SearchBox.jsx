import React from "react";
import "../streaming.css"

const SearchBox =(props) =>{
    return(
        <div>
            <input className="srinput" placeholder="Buscar..."
            value={props.value}
            onChange={(event)=> props.setSearchValue(event.target.value)}
            ></input>
        </div>
    )
}

export default SearchBox;
import React from "react";
import "./noencontro.css"
import lost from "./john.gif"

function Noencontro() {
  return (
    <div>
      <div className="background">
        <div className="padre">
          <h1 className="texto error404">Error 404 - Pagina No Encontrada</h1>

          <h2 className="texto">
            la pagina que buscabas probablemente fue removida o esta temporalmente deshabilitada
          </h2>
          
          <img src={lost} className="john"></img>
        </div>
      </div>
    </div>
  );
}

export default Noencontro;
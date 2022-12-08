import React from "react";
import "./noencontro.css"
import lost from "./john.gif"

function Noencontro() {
  return (
    <div>
      <div className="background">
        <div className="padre">
          <div className="texto404 error404380px">Error 404 - Pagina No Encontrada</div>
          <h1 className="texto404 error404">Error 404 - Pagina No Encontrada</h1>

          <h2 className="texto404">
            la pagina que buscabas probablemente fue removida o esta temporalmente deshabilitada
          </h2>
          
          <img src={lost} className="john"></img>
        </div>
      </div>
    </div>
  );
}

export default Noencontro;
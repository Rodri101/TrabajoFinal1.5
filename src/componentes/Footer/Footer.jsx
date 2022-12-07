import  React from "react";
import "./Footer.css";

const Footer = () => {
    return(
        <div className="papafooter ">

                {/* Texto de derechos reservados */}
                <div className="textofoot textoblanco">
                    © Pelijuegos. Todos los derechos reservados. Todas las marcas registradas pertenecen a sus respectivos dueños en Argentina y otros países. 
                </div>

                {/* VINCULOS */}
                <div className="col1">
                    <a className="vinculofoot" href="*">Politica de privacidad</a>
                    <a className="vinculofoot" href="*">Prueba de velocidad</a>
                </div>

                <div className="col2">
                    <div className="vinculos2" >
                        <a className="vinculofoot " href="*">Centro de Ayuda</a>
                        <a className="vinculofoot " href="*">Cookies</a>
                    </div>
                    {/* Texto de seguir nuestras redes sociales */}
                    <div className="textoblanco descred"> Siguenos en nuestras redes sociales</div>
                </div>

                {/* un par de vinculos mas */}
                <div className="col3">
                    <a className="vinculofoot" href="*">Acuerdo de subscriptor a Pelijuegos</a>
                    <a className="vinculofoot" href="*">Avisos Legales</a>
                </div>

                {/* botones de redes sociales */}
                <div className="midfoot claro1 buttons">
                    <a href="https://www.whatsapp.com" class="wsp fa fa-whatsapp" aria-hidden="true"></a>
                    <a href="http://www.instagram.com" class="fa fa-instagram" aria-hidden="true"></a>
                    <a href="https://www.facebook.com" class="fcb fa fa-facebook" aria-hidden="true"></a>
                </div>
                {/* texto final de footer */}
                <div className="botfoot claro1">powered by Rodrigo</div>
        </div>
    )
}

export default Footer;
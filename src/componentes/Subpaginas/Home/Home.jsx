import React from "react";
import img1 from "../../Carousel/img/1.jpg"
import img2 from "../../Carousel/img/2.jpg"
import img3 from "../../Carousel/img/3.jpg"
import img4 from "../../Carousel/img/4.jpg"
import {Slideshow, Slide, TextoSlide} from "../../Carousel/Slideshow";
import { NavLink } from "react-router-dom";
import "./home.css";

function Home() {
    return (
    <div className="Home">
        <div>
            {/* aca va el contenido principal */}
            <div>
            <Slideshow controles={true} autoplay={false} velocidad="400" intervalo="5000">
				
                <Slide>
                    <NavLink to="/src/componentes/Subpaginas/Streaming/Streaming" className="item">
                        <img src={img4} className="imagen" alt=" "/>
                    </NavLink>
					<TextoSlide>
						<p>Harry Potter y la Piedra Filosofal ya disponible en nuestro catalogo de peliculas</p>
					</TextoSlide>
				</Slide>
                
                <Slide>
                    <NavLink to="/src/componentes/Subpaginas/Streaming/Streaming" className="item">
                        <img src={img1} className="imagen" alt=" "/>
                    </NavLink>
					<TextoSlide>
						<p>Rememorando un clasico Shrek 1 disponible</p>
					</TextoSlide>
				</Slide>

				<Slide>
                    <NavLink to="/src/componentes/Subpaginas/Streaming/Streaming" className="item">
                        <img src={img2} className="imagen" alt=" "/>
                    </NavLink>
					<TextoSlide>
						<p>Roma regresa en el nuevo DLC de Age of Empires 2</p>
					</TextoSlide>
				</Slide>
                
				<Slide>
                    <NavLink to="/src/componentes/Subpaginas/Streaming/Streaming" className="item">
                        <img src={img3} className="imagen" alt=" "/>
                    </NavLink>
					<TextoSlide>
						<p>Nuevo evento de Trincheras en Halo Infinite</p>
					</TextoSlide>
				</Slide>
			</Slideshow>
            </div>
                
            <div>
                {/* Aca van los productos */}
            </div>
        </div>
        <div>
            {/* aca va la barra lateral con el ingreso a la cuenta*/}
        </div>
    </div>
    );
}

export default Home;
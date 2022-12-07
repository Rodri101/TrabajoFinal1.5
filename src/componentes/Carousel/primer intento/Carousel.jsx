import React,{useRef,useEffect} from "react";
import "./carousel.css"
import { NavLink } from "react-router-dom";
import img1 from "./img/1.jpg"
import img1 from "./img/2.jpg"
import img1 from "./img/3.jpg"

import {ReactComponent as FleIzq} from "./img/iconmonstr-angel-left-thin.svg"
import {ReactComponent as FleDer} from "./img/iconmonstr-angel-right-thin.svg"



const Carousel =() => {
    const slideshow = useRef(null);
    const intervaloSlideshow = useRef(null);

    const siguiente =() =>{
        if(slideshow.current.children.length > 0){
            console.log('siguiente')
            /* obtenemos primer elemento del slideshow */
            const primerElemento = slideshow.current.children[0];
            /* establecemos la transicion para el slideshow */
            slideshow.current.style.transition = '300ms ease-out all';
            /* movemos el slideshow */
            slideshow.current.style.transform = 'translateX(-100%)';

            const transicion = () =>{
                /* reiniciamos la posicion del slideshow */
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = 'translateX(0)';
                /* tomamos el primer elemento y lo mandamos al final */
                slideshow.current.appendChild(primerElemento);
                /* terminamos con el eventlistener para no tener problemas al terminar
                una transicion tanto sea siguente o anterior */
                slideshow.current.removeEventListener('transitionend',transicion);
            }
            /* al terminar la transicion ejecutar transicion */
            slideshow.current.addEventListener('transitionend',transicion);
        }
    }
    
    const anterior =() =>{
        console.log('anterior');
        if(slideshow.current.children.length > 0){
            const index = slideshow.current.children.length - 1;
            const ultimoElemento = slideshow.current.children[index];
            slideshow.current.insertBefore(ultimoElemento,slideshow.current.firstChild);
            slideshow.current.style.transition='none';
            slideshow.current.style.transform='translateX(-100%)';

            setTimeout(() =>{
                slideshow.current.style.transition = '300ms ease-out all'
                slideshow.current.style.transform = 'translateX(0)'
            },30)
        }
    }

    useEffect(()=>{
        intervaloSlideshow.current =setInterval(()=>{
            siguiente();
        },5000)
        /* eliminamos los intervalos */
        slideshow.current.addEventListener('mouseenter',()=>{
            clearInterval(intervaloSlideshow.current);
        });
        /* volvemos a poner el intervalo cuando alejen el cursor del slideshow */
        slideshow.current.addEventListener('mouseleave',()=>{
            intervaloSlideshow.current = setInterval(()=>{
                siguiente();
            },5000);
        });
    },[]);

    return(
        <div className="contenedorprincipal">

            <div className="contenedorslide" ref={slideshow}>

            <div className="slide">
                    <NavLink to="/" className="item">
                        <img src={img1} className="imagen" alt=" "/>
                    </NavLink>
                    <div className="textoslide">
                        <p>Nuevas Peliculas y juegos disponibles</p>
                    </div>
                </div>

                <div className="slide">
                    <NavLink to="/" className="item">
                        <img src={img2} className="imagen" alt=" "/>
                    </NavLink>
                    <div className="textoslide">
                        <p>Nuevas Peliculas y juegos disponibles</p>
                    </div>
                </div>

                <div className="slide">
                    <NavLink to="/" className="item">
                        <img src={img3} className="imagen" alt=" "/>
                    </NavLink>
                    <div className="textoslide">
                        <p>Nuevas Peliculas y juegos disponibles</p>
                    </div>
                </div>

            </div>

            <div className="controles">
                <button onClick={anterior} className="boton izquierdo">
                    <FleIzq/>
                </button>
                <button onClick={siguiente} className="boton derecho">
                    <FleDer/>
                </button>
            </div>
            
        </div>
    );
}

export {Carousel};
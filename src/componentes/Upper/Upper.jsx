import  React,{useState} from "react";
import "./Upper.css";
import Onbutton from "./img/onb.png"
import Logo from "./img/neondvds.png"
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const Upper = () => {
    const[showMobileMenu, setShowMobileMenu]=useState(false);
    /* la posicion de la barra de navegacion empieza por defecto oculta (left:-100%) */

    return(
        <div className="barrasuperior">

            {/* al presionar el boton alternara de un estado (left:-100%) a otro (left:0) y asi en viceversa*/}
            <div className="logomobile"onClick={() => setShowMobileMenu(!showMobileMenu)} >
                <a class="fa fa-bars" aria-hidden="true"></a>
            </div>
            
            <NavLink to="/" className="logopagina">
                <img className="logoupper" src={Logo}/>
                <div className="titulo"> PELIJUEGOS</div>
            </NavLink>

            <Navbaropciones  open={showMobileMenu}>
                <li className="antili homemob">
                    <NavLink to="/" className="navbaropt">HOME</NavLink>
                </li>
                <li className="antili iniciomob">
                    <NavLink to="/" className="navbaropt iniciomob">INICIA SESION</NavLink>
                </li>
                <li className="antili">
                    <NavLink to="*" className="navbaropt">TIENDA</NavLink>
                </li>
                <li className="antili">
                    <NavLink to="*" className="navbaropt">STREAMING</NavLink>
                </li>
                <li className="antili">
                    <NavLink to="/src/componentes/Subpaginas/Contacto/Contacto" className="navbaropt">ACERCA DE</NavLink>
                </li>
                <li className="antili">
                    <NavLink to="/src/componentes/Subpaginas/Soporte/Soporte" className="navbaropt">SOPORTE</NavLink>
                </li>
            </Navbaropciones>

            <div>
                <li className="botoninises">
                    <NavLink to="/" className="inises">
                        <img className="onbut" src={Onbutton}/> Iniciar sesion</NavLink>
                </li>
                {/* lista de idiomas va aqui */}
                {/* ------------------------ */}
            </div>

        </div>
    )
}

/* hoja de estilos dinamica */
const Navbaropciones = styled.ul` //estilo de formato ul
    display: flex;
    @media screen and (max-width:980px){
        background-color: #002B5B;
        position: absolute;
        top: 6.4rem;
        left: ${({ open }) => (open ? "0" : "-100%")}; //valor dinamico
        width: 100%;
        height: 50vh;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        transition: 0.5s all ease;
        z-index: 21;
    }
    
`;

export default Upper;
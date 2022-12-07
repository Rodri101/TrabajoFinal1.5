import React from "react";
import { useForm } from "react-hook-form";
import imgoficina from "./img/oficina.jpg"
import "./contacto.css";

const Formu = () => {
  const { register, formState: { errors }, handleSubmit } = useForm("");
  const onSubmit = (data) => {
    console.log(data);
  }

  return (
/* Texto infomativo, horarios y direccion con imagen incluida */
    <div>
      <div >
        <div className="textoinfo">

          <div className="flexcaja textocontacto">
            La atención al cliente es nuestra mayor prioridad<br/>
            es por esto que nuestras oficinas en: 
            <div className="listahorario">
              Argentina:<br/>
              {/* <img src={icongps} className="iconogps" /> */}
              <li className="lineadir">Calle falsa 6955</li>
              <li className="lineadir">Calle real 100</li>
              <br></br>
            </div>
            <div className="listahorario">
              Colombia:<br/>
              {/* <img src={icongps} className="iconogps" /> */}
              <li className="lineadir">Calle orginal 343</li>
              <br></br>
            </div>
            están disponibles para su atención al cliente de:<br/>
            <div className="listahorario">
              de Lunes a viernes:
              <li className="lineahora">9hs a 12hs</li>
              <li className="lineahora">15hs a 19hs</li>
              <br></br>
              Y los sabados:
              <li className="lineahora">10hs a 12hs</li>
              <li className="lineahora">16hs a 18hs</li>
            </div>
            <br></br>
          </div>
          <img src={imgoficina} className="imgofi" />
          <div className="textofinal">
            Si no fuese posible la presencia en las direcciones anteriormente especificadas<br/>
            puede contactarnos por medio del siguiente numero telefonico:
            <br/>
            <div className="listahorario nopad">
            <li className="lineacall">(111)111 111 111</li>
            </div>
            O puede optar por dejar un mensaje registrando su información y alguna opinion que nos
            quiera compartir<br />
            Muchas Gracias
          </div>

        </div>
      </div>

{/* Formulario */}
  <div className="ingresoinfo">
    <div className="formutit">Comparte tu opinion con nosotros</div>
  <div className="formulario">
  <form onSubmit={handleSubmit(onSubmit)}>

    <div className="lineaylabel">
      <label> Nombre </label>
      <input className="lideformu" type="text" {...register('nombre', {
        required: true,
        maxLength: 5
      })}/>

      {errors.nombre?.type === 'required' && <p className="err"> El campo nombre es obligatorio </p>}
      {errors.nombre?.type === 'maxlength' && <p className="err"> El campo debe de tener menos de 15 caracteres </p>}
    </div>

    <div className="lineaylabel">
      <label> Apellido </label>
      <input className="lideformu" type="text" {...register('apellido', {
        maxlength: 5
      })} />
    </div>

    <div className="lineaylabel">
      <label> Email </label>
      <input className="lideformu" type="text" {...register('email', {
        pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
      })}/>

      {errors.email?.type === 'pattern' && <p> El formato es incorrecto</p>}
    </div>

{/* seleccion de pais */}
    <div>
      <label> Pais </label>
      <select {...register('pais')}>
        <option value="arg"> Argentina </option>
        <option value="uru"> Uruguay </option>
        <option value="per"> Peru </option>
        <option value="bra"> Brasil </option>
        <option value="col"> Colombia </option>
        <option value="chi"> Chile </option>
      </select>
    </div>

    <input type="submit" value="Enviar" />

      </form>
  </div>
  </div>
{/* final de formulario */}
    </div>
  );
};

export default Formu;
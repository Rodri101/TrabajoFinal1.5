import React from "react";
import { useForm } from "react-hook-form";
import { createGlobalStyle } from "styled-components";
import "./soporte.css"

const Soporte = () => {
  const { register, formState:{errors},handleSubmit} = useForm("");
  const onSubmit = (data) =>{
    console.log(data);
  }
  /* Formulario */
  return (
    <div>

      <div className="formutextotop">
          <h1 className="h1formu">¿Cómo podemos ayudarte?</h1>
          <h4>Completa el siguiente formulario, y un miembro de nuestro equipo se pondrá en contacto contigo para poder resolver tu problema</h4>
      </div>

      <form className="papaformu" onSubmit={handleSubmit(onSubmit)}>

        <div className="formustandar">
          {/* Nombre */}
          <label>Nombre</label>
          <input className="barrainput" type="text" {...register('nombre',{required:true})}/>
          {errors.nombre?.type==='required'&& <p className="errorformulario">El campo Nombre es obligatorio</p>}
        </div>

          {/* Apellido */}
        <div className="formustandar">
          <label>Apellido</label>
          <input className="barrainput" type="text" {...register('apellido',{required:true})}/>
          {errors.apellido?.type==='required'&& <p className="errorformulario">El campo Apellido es obligatorio</p>}
        </div>

          {/* Email */}
        <div className="formustandar">
          <label>Email</label>
          <input className="barrainput" type="text" {...register('email',{pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        })}/>
        {errors.email?.type==='pattern'&& <p className="errorformulario">El formato es incorrecto</p>}
        </div>

          {/* Seleccion de Pais */}
        <div className="widthpadd">
          <label>Pais</label>
          <select {...register('pais')}>
            <option value="arg">Argentina</option>
            <option value="col">Colombia</option>
          </select>
        </div>

          {/* Categoria de Problema */}
        <div className="widthpadd">
          <label className="paddingtoright">Tipo de Problema</label>
          <select className="selectproblema"{...register('problema')}>
            <option value="confall">Mi conexion falla</option>
            <option value="serifall">No puedo reproducir una serie</option>
            <option value="accstol">Mi cuenta fue robada</option>
            <option value="playfall">No puedo utilizar un juego de mi biblioteca</option>
            <option value="playsubfall">No puedo utilizar un juego de la subscripcion</option>
            <option value="playsubfall">Otro (especificar en la casilla de abajo)</option>
          </select>
        </div>

          {/* Descripcion extra del problema */}
        <div className="espproblema">
          <label className="textoproblema">Puede especificar un poco mas su problema</label>
          <input className="detalles" type="text"/>
        </div>

          {/* boton de enviar */}
        <input className="botonenviarformulario" type="submit" value="Enviar"/>
      </form>
    </div>
  );
};

export default Soporte;
import React from "react";
import { useState } from "react";
import SelectModelComponent from "./SelectModelComponent";
import "./styles.css";

export default function FormularioCompra() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [mail, setMail] = useState("");

  function handleSubmit(event){
    event.preventDeafault();
    console.log(`Nombre: ${nombre}\nApellido: ${apellido}\nMail: ${mail}`);
    alert(`Nombre: ${nombre}\nApellido: ${apellido}\nMail: ${mail}`);
  }


  return (
    <>
      <div>
        <form className="formularioCompra" name="formulario-compra" onSubmit={handleSubmit}>
          <input
            name="nombre"
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          ></input>
          <input
            name="apellido"
            type="text"
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => {
              setApellido(e.target.value);
            }}
          ></input>
          <input
            name="mail"
            type="email"
            placeholder="Email"
            value={mail}
            onChange={(e) => {
              setMail(e.target.value);
            }}
          ></input>
          <SelectModelComponent/>
          <input type="submit"/>
        </form>
      </div>
    </>
  );
}

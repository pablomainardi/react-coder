import React, { useState } from "react";

const Form = () => {
  const [userData, setuserData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
  });

  //console.log(nombre);
  //console.log(apellido);

  const handleChange = (e) => {
    setuserData({ ...userData, [e.target.name]: e.target.value });
  };

  const envioDeFormulario = (evento) => {
    evento.preventDefault();
    console.log(userData);
  };

  return (
    <div>
      <h1>Aca estamos en el Formulario</h1>

      <form onSubmit={envioDeFormulario}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          name="nombre"
          value={userData.nombre}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Ingresa tu apellido"
          name="apellido"
          value={userData.apellido}
          onChange={handleChange}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;

import React, { useState } from 'react';

export default function Formulario() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [error, setError] = useState(false);
  const [mensajeError, setMensajeError] = useState('');

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleEdadChange = (e) => {
    setEdad(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim() === '') {
      setError(true);
      setMensajeError('Por favor, ingrese su nombre.');
      return;
    }

    if (!edad || edad < 18) {
      setError(true);
      setMensajeError('La edad no puede ser menor a 18.');
      return;
    }

    if (edad > 100) {
      setError(true);
      setMensajeError('La edad no puede ser mayor a 100.');
      return;
    }

    setError(false);
    setMensajeError('');
    alert('Formulario enviado con éxito 🎉');
  };

  return (
    <form onSubmit={handleSubmit}>
     
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre:</label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          placeholder="Ingrese su nombre"
          value={nombre}
          onChange={handleNombreChange}
        />
        <br />

        <label htmlFor="edad" className="form-label">Edad:</label>
        <input
          type="number"
          className="form-control"
          id="edad"
          placeholder="Ingrese su edad"
          value={edad}
          onChange={handleEdadChange}
        />
        <br />

        <button type="submit" className="btn btn-primary">Enviar</button>

        {error && (
          <p className="text-danger mt-2">{mensajeError}</p>
        )}
      </div>
    </form>
  );
}

import React from 'react';
import './Message.css';

function Message({ idiomas }) {
  const name = "Runster";
  const edad = '33';
  const titulo = 'Desarrollador';
  const color = 'red';

  const style = {
    color: color,
    fontSize: '20px',
    fontWeight: 'bold',
  }

  return (
    <div>
      <h2>Mi Perfil</h2>
      <h1>Nombre: {name}</h1>
      <p style={style}>Edad: {edad}</p>
      <p>Titulo: {titulo}</p>
      
      <h4>Idiomas</h4>
      <ul>
        {idiomas.idioma.map(idioma => (
          <li key={idioma}>{idioma}</li>
        ))}
      </ul>
    </div>
  )
}

export default Message
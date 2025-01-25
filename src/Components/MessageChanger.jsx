import React, { useState } from 'react';

function MessageChanger({ mensajeInical }) {
    const [mensaje, setMensaje] = useState(mensajeInical);

    const cambiarMensaje = () => {
        setMensaje((mensajeActual) => 
            mensajeActual === mensajeInical 
                ? '¡El mensaje ha sido modificado!' 
                : mensajeInical
        );
    };

    return (
        <div>
            <p>{mensaje}</p>
            <button onClick={cambiarMensaje}>Cambiar Mensaje</button>
        </div>
    )
}

export default MessageChanger;
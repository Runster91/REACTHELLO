import React from 'react'
import Message from './Components/Message'
import SimpleButton from './Components/SimpleButton'
import MessageChanger from './Components/MessageChanger'
import './App.css'

function App() {
  const idiomas = {
    idioma: ['Português', 'Inglês', 'Espanhol', 'Francês', 'Alemão']
  };
  
  return (
    <div className="App">
      <Message idiomas={idiomas} />
      <MessageChanger mensajeInical={'Haz click para modificar el mensaje'} />
      <SimpleButton />
    </div>
  )
}

export default App

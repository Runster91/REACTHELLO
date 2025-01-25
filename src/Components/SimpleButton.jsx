import React from 'react';

function SimpleButton() {
  const handleClick = () => {
    alert('Parabéns, você clicou!');
  }

  return (
    <button onClick={handleClick}>
      Click Me!
    </button>
  );
}

export default SimpleButton;
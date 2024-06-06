import React, { useState, useEffect } from 'react';

const ColorChanger = () => {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [hexCode, setHexCode] = useState('#FFFFFF'); 

  const randomColor = () => {
    const colors = ['#4fcbc7 ', '#b8ddb1', '#d3b74c', '#f4bcc2']
    return colors[Math.floor(Math.random() * colors.length)];
  };


  const changeColor = () => {
    const newColor = randomColor();
    setBackgroundColor(newColor); 
    setHexCode(newColor);
  };

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
    setHexCode(backgroundColor);
  }, [backgroundColor]);

  return (
    <div>
      <h1>Código HEX da cor: {hexCode}</h1>
      <button onClick={changeColor}>Mudar Cor</button>
      
    </div>
  );
};

export default ColorChanger;
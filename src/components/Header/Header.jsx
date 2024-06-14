
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react';
import Three from '../../Three';
import './Header.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

// Produz um índice aleatório que gera as diferentes palavras possíveis de forma aleatória

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));

  
}


const Header = () => {

    const [descriptionIndex, setDescriptionIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setDescriptionIndex(getRandomInt(2));
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []); // O segundo argumento vazio faz com que o useEffect seja executado apenas uma vez, após a montagem do componente
  


  return (
    <header>
        <Canvas
      // camera={{
      //   fov: 45,
      //   near: 0.1,
      //   far: 100,
      //   position: [1, 1, 6],
      // }}
    >
      <Suspense>
          <Three />
      </Suspense>
    </Canvas>
        <h1>Three Js</h1>
        <p>
        {reactDescriptions[descriptionIndex]} Three.js principles for crafting immersive 3D experiences in any web application you aspire to develop
        </p>
    </header>
  )
}

export default Header
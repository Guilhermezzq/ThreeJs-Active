
import { PresentationControls } from '@react-three/drei'
import React from 'react'

const Materials = () => {


  return (
    <>

    {/* Os controles de apresentação nos permitir girar um modele/objeto e ao solta-lo ele volta á sua posição inicial */}

    <PresentationControls 
    global
    polar={[-Math.PI / 3, Math.PI / 3]}
    azimuth={[-Math.PI / 1.4, Math.PI / 2]}
    config={{ mass: 2, tension: 500 }} // Faz pensar nas animações em termos de propriedades físicas gerais
    snap={{ mass: 4, tension: 1500 }} // Fará o objeto voltar a sua posição original 

    // No final o objeot voltará a sua posição inicial após soltar

    
    > 
    <mesh
    
    rotation={[Math.PI / 4, Math.PI / 4, 0]}
    >
        <boxGeometry 
        args={[2, 2, 2]}
        
        
        />
        <meshBasicMaterial color="#F5F5F5" />
    </mesh>
    </PresentationControls>
    </>
  )
}

export default Materials;
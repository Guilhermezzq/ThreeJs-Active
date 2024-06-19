import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei"
import { useEffect, useState } from "react";



const Mario = () => {

    const Mario = useGLTF("./model/model.gltf")

    const animations = useAnimations(Mario.animations, Mario.scene);

    console.log(Mario);
    console.log(animations);

    

    useEffect(() => {
      animations.actions.Waiting.play();

      
      // Aguarda 500 milissegundos antes de iniciar a próxima animação
      const timeoutId = setTimeout(() => {
        animations.actions.PortalOpen.play();
      }, 500);

      // Retorna uma função de limpeza para evitar vazamentos de memória
      return () => {
      clearTimeout(timeoutId);
     
      }   
    }, []);


  return (
   <>

   
   <directionalLight />
   <ambientLight intensity={4} />
   <primitive
   object={Mario.scene}
   scale={2.5}
   position={[0, -2.2, 0]}

   />
   </>
  )
}

 
useGLTF.preload("./model/model.gltf")

export default Mario;
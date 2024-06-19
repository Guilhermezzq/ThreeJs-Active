

import { useGLTF } from "@react-three/drei"
import React from "react";
import { useRef } from "react";




const Object3D = () => {

    const object3d = useGLTF("./model/m4_sopmod.glb");

    const objectRef = useRef();

  const animate = () => {
    objectRef.current.rotation.y += 0.03;
    
    requestAnimationFrame(animate);
  }

  React.useEffect(() => {
    animate();
  }, []);


  return (
   <>
   

   
   <directionalLight />
   <ambientLight intensity={4} />
   <primitive
   ref={objectRef}
   object={object3d.scene}
   scale={2}
   

   />
   </>
  )
}

 
useGLTF.preload("./model/m4_sopmod.glb");

export default Object3D;
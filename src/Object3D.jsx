

import { useGLTF } from "@react-three/drei"
import React from "react";
import { useRef } from "react";




const Object3D = () => {

    const object3d = useGLTF("./model/salty.glb");

  const objectRef = useRef();

  const animate = () => {
    objectRef.current.rotation.y += 0.02;
    
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
   scale={1}
   position={[0, 0, 0]}
   

   />
   </>
  )
}

 
useGLTF.preload("./model/salty.glb");

export default Object3D;
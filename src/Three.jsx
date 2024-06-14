import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";


const Three = () => {
  

  const three = useGLTF("./model/three.glb");

  const threeRef = useRef();

  const animate = () => {
    threeRef.current.rotation.y += 0.008;
    
    requestAnimationFrame(animate);
  }

  React.useEffect(() => {
    animate();
  }, []);



  return (
    <>
      {/* <OrbitControls /> */}

      <directionalLight />
      <ambientLight intensity={4}  />

      <primitive 
      object={three.scene}
      ref={threeRef}
      scale={0.05}
      position={[0, -0.5, 0]}
      rotation={[0, 0, 0]}
      />
      
    </>
  );
};

useGLTF.preload("./model/three.glb");

export default Three;

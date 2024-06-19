import { Canvas } from "@react-three/fiber";
import Mario from "./Mario";
import { Suspense } from "react";
import Camera from "./Camera";
import Materials from "./Materials";
import Object3D from "./Object3D";


export const CORE_CONCEPTS = [
  {
    model: (
      <Canvas>
        <Suspense>
          <Mario />
        </Suspense>
      </Canvas>
    ),
    title: "Animation",
    description:
      "Animation is an essential technique for creating movement and interactivity in your 3D scenes. ",
  },
  {
    model: (
      <Canvas>
        <Suspense>
          <Camera />
        </Suspense>
      </Canvas>
    ),
    title: "Camera",
    description:
      "Abstract base class for cameras. This class should always be inherited when you build a new camera.",
  },
  {
    model: (
      <Canvas>
        <Suspense>
          <Materials />
        </Suspense>
      </Canvas>
    ),
    title: "Materials",
    description:
      "These constants define properties common to all material types, with the exception of Texture Combine.",
  },
  {
    model: (
      <Canvas>
        <Suspense>
          <Object3D />
        </Suspense>
      </Canvas>
    ),
    title: "Objetc3D",
    description:
      "This is the base class for most objects in three.js and provides a set of properties and methods for manipulating objects in 3D space.",
  },
];

export const EXAMPLES = {
  animation: {
    title: "Animation",
    description:
      "Animation in Three.js involves changing the properties of objects over time to create the illusion of motion. This can include transformations such as rotation, translation (movement), scaling, and changing material properties. Three.js provides a built-in animation system that allows developers to easily create and control animations.",
    code: ` 
import { OrbitControls, useAnimations,
useGLTF } from "@react-three/drei"
import { useEffect, useState } from "react";



const Mario = () => {

const Mario = useGLTF("./model/model.gltf")

    const animations = 
    useAnimations(Mario.animations, Mario.scene);

    console.log(Mario);
    console.log(animations);

  
useEffect(() => {
      animations.actions.Waiting.play();

      
      const timeoutId = setTimeout(() => {
        animations.actions.PortalOpen.play();
      }, 500);

      
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
    scale={3}
    position={[0, -2.2, 0]}

    />
    </>
    )
  }

 
useGLTF.preload("./model/model.gltf")

export default Mario; 
      `,
  },
  camera: {
    title: "Camera",
    description:
      "Abstract base class for cameras. This class should always be inherited when you build a new camera.",
    code: 
    `
    
import { useGLTF } from "@react-three/drei"


const Camera = () => {

const Mario = useGLTF("./model/camera.glb")


  return (
   <>

   
   <directionalLight />
   <ambientLight intensity={10} />
   <primitive
   object={Mario.scene}
   scale={2}
   rotation={[0, 2, 0]}
   position={[0, 0, 0]}

   />
   </>
  )
}

 
useGLTF.preload("./model/camera.glb")

export default Camera;
    `
   ,
  },
  materials: {
    title: "Materials",
    description:
      "These constants define properties common to all material types, with the exception of Texture Combine Operations which only apply to MeshBasicMaterial, MeshLambertMaterial and MeshPhongMaterial.",
    code: 
    `
    
import { PresentationControls 
} from '@react-three/drei'
import React from 'react'

const Materials = () => {


  return (
    <>


    <PresentationControls 
    global
    polar={[-Math.PI / 3, Math.PI / 3]}
    azimuth={[-Math.PI / 1.4, Math.PI / 2]}
    config={{ mass: 2, tension: 500 }}  
    snap={{ mass: 4, tension: 1500 }} 

    
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
    `
    ,
  },
  object3D: {
    title: "Object3D",
    description:
      "This is the base class for most objects in three.js and provides a set of properties and methods for manipulating objects in 3D space. Note that this can be used for grouping objects via the .add( object ) method which adds the object as a child, however it is better to use Group for this.",
    code: 
    `
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
    `
    ,
  },
};

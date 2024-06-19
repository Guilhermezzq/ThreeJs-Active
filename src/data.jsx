import { Canvas } from "@react-three/fiber";
import Mario from "./Mario";
import { Suspense } from "react";




export const CORE_CONCEPTS = [
    {
  
      model: 
      <Canvas>
        <Suspense>
          <Mario /> 
        </Suspense>
      </Canvas> ,
      title: 'Animation',
      description:
        'Animation is an essential technique for creating movement and interactivity in your 3D scenes. ',
    },
    {
     // image: ,
      title: 'Camera',
      description:
        'Abstract base class for cameras. This class should always be inherited when you build a new camera.',
    },
    {
     // image: ,
      title: 'Materials',
      description:
        'These constants define properties common to all material types, with the exception of Texture Combine.',
    },
    {
    //   image: ,
      title: 'Objetc3D',
      description:
        'This is the base class for most objects in three.js and provides a set of properties and methods for manipulating objects in 3D space.',
    },
  ];


  
  export const EXAMPLES = {
    animation: {
      title: 'Animation',
      description:
        'Animation in Three.js involves changing the properties of objects over time to create the illusion of motion. This can include transformations such as rotation, translation (movement), scaling, and changing material properties. Three.js provides a built-in animation system that allows developers to easily create and control animations.',
      code: 
      `
  var rotationSpeed = 0.01;
  var rotationAxis = new THREE.Vector3(0, 1, 0); // Eixo de rotação (eixo Y)
  
  function animate() {
      requestAnimationFrame(animate);
  
      cube.rotation.x += rotationSpeed;
      cube.rotation.y += rotationSpeed;
  
      renderer.render(scene, camera);
  }
  
  animate();`,
    },
    camera: {
      title: 'Camera',
      description:
        'Abstract base class for cameras. This class should always be inherited when you build a new camera.',
      code: `
  var scene = new THREE.Scene();
  
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1,
  1000);
  camera.position.z = 5;
  
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  `,
    },
    materials: {
      title: 'Materials',
      description:
        'These constants define properties common to all material types, with the exception of Texture Combine Operations which only apply to MeshBasicMaterial, MeshLambertMaterial and MeshPhongMaterial.',
      code: `
  var geometry = new THREE.BoxGeometry();
  
  var material = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Vermelho
  
  var cube = new THREE.Mesh(geometry, material);
  
  scene.add(cube);`,
    },
    object3D: {
      title: 'Object3D',
      description:
        'This is the base class for most objects in three.js and provides a set of properties and methods for manipulating objects in 3D space. Note that this can be used for grouping objects via the .add( object ) method which adds the object as a child, however it is better to use Group for this.',
      code: ` var group = new THREE.Object3D();`,
    },
  };
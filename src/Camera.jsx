


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
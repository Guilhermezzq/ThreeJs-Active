import { useGLTF } from "@react-three/drei"



const Mario = () => {

    const Mario = useGLTF("./model/mario_obj.glb")


  return (
   <>
   <directionalLight />
   <ambientLight intensity={4} />
   <primitive
   object={Mario.scene}
   scale={0.8}
   position={[0, -3, 0]}

   />
   </>
  )
}

 
useGLTF.preload("./model/mario_obj.glb")

export default Mario;
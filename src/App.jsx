

import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Three from './Three'

const App = () => {



  return (
    <>
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
    
    </>
  )
}

export default App
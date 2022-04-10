import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Portfolio from './Portfolio';




const ThreeScene = () => {

    

  return (
    <div className="Container" style={{ width:"100%", height:"100vh" }  }>
     <Canvas>
     <Suspense fallback={null}>
      <Portfolio  />

       <OrbitControls />
    </Suspense>

     </Canvas>
    </div>
  )
}

export default ThreeScene
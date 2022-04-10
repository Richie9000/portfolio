import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Portfolio from './Portfolio';




const ThreeScene = () => {

    

  return (
    <div className="Container" style={{ width:"100%", height:"100vh" }  }>
     <Canvas camera={{ fov: 70, position: [0,0,2]}}>
     <Suspense fallback={null}>
       <ambientLight />
      <Portfolio  />
      <directionalLight intensity={2} position={[0,0,50]} />

       <OrbitControls />
    </Suspense>

     </Canvas>
    </div>
  )
}

export default ThreeScene
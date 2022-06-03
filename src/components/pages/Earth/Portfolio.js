import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Watch from './Earth2';

const Portfolio = () => {

    

  return (
    <div className="Container" style={{ width:"100%", height:"100vh" } }>
     <Canvas camera={{ fov: 70, position: [0,0,10]}}>
     <Suspense fallback={null}>
       <ambientLight intensity={3}/>
      <Watch  />
    
      <directionalLight intensity={1} position={[0,0,50]} color="blue" />

       <OrbitControls />
    </Suspense>

     </Canvas>
    </div>
  )
}

export default Portfolio
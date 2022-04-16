import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';




const ThreeScene = () => {

    

  return (
    <div className="Container" style={{ width:"100%", height:"100vh" } }>
     <Canvas camera={{ fov: 70, position: [0,0,10]}}>
     <Suspense fallback={null}>
       <ambientLight intensity={1}/>
      <Portfolio  />
      <About position={[5,0,0]} />
      <Contact position={[-5,0,0]} />
      <directionalLight intensity={1} position={[0,0,50]} color="blue" />

       <OrbitControls />
    </Suspense>

     </Canvas>
    </div>
  )
}

export default ThreeScene
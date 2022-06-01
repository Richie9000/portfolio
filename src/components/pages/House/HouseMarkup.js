import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Mdvr from "./Mdvr"


const HouseMarkup = () => {
  return (
    <div div className="Container" style={{ width:"100%", height:"100vh" } }>
        <Canvas camera={{ fov: 70, position: [0,0,10]}}>
     <Suspense fallback={null}>
       <ambientLight intensity={3}/>
       <Mdvr/>

       <OrbitControls />
    </Suspense>

     </Canvas>
       
    </div>
  )
}

export default HouseMarkup
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import Home from './Home'

const HomeMarkup = () => {

  return (
   
        <div className="Container" style={{ width:"100%", height:"100vh" } }>
            <Canvas>
            <Suspense fallback={null}>
            <ambientLight intensity={.7} />
            <spotLight intensity={.7} angle={.1} penumbra={1} position={[10,25,10]} castShadow />
            <Home rotation={[0,Math.PI / -2, 0 ]} position={[-3,-1,0]} scale={.8} />
            <directionalLight intensity={1} position={[0,0,50]} color="blue" />

            <OrbitControls />
            </Suspense>
            </Canvas>

        </div>
        
 

  )
}

export default HomeMarkup
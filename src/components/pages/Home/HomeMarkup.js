import { OrbitControls, Bounds, BakeShadows } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import Home from './Home'

const HomeMarkup = () => {

  return (
   
        <div className="Container" style={{ width:"100%", height:"100vh" } }>
             <Canvas orthographic shadows dpr={[1, 2]} camera={{ position: [10, 10, 10], zoom: 10 }}>
            <Suspense fallback={null}>
            <ambientLight intensity={.3} />
            <hemisphereLight intensity={0.125} color="#8040df" groundColor="red" />
            <spotLight castShadow color="orange" intensity={2} position={[-50, 50, 40]} angle={0.25} penumbra={1} shadow-mapSize={[128, 128]} shadow-bias={0.00005} />
            <directionalLight intensity={1} position={[0,0,50]} color="blue" />
            <Bounds fit clip observe margin={1}>
            <Home rotation={[0,Math.PI / -4, 0 ]} position={[-3,-1,0]} scale={.8} />
        
        </Bounds>
        <BakeShadows />
        <OrbitControls
        makeDefault
        minAzimuthAngle={0}
        maxAzimuthAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 3}
        enableZoom={true}
        enablePan={true}
        zoomSpeed={0.3}
      />
       <gridHelper args={[1000, 200, '#151515', '#020202']} position={[0, -4, 0]} />
            </Suspense>
            </Canvas>

        </div>
        
 

  )
}

export default HomeMarkup
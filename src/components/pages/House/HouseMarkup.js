import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Mdvr from "./Mdvr"


const HouseMarkup = () => {
  return (
    <div div className="Container" style={{ width:"100%", height:"80vh" } }>
        <Canvas camera={{ fov: 70, position: [ 28, 0, -20 ]}}>
     <Suspense fallback={null}>
       <ambientLight intensity={5}/>
       <spotLight position={[70, 41, 60]} intensity={10} angle={0.29} penumbra={1} shadow-mapSize={[512, 512]} castShadow />
       <Mdvr position={[15, -5, -5]} />

       <OrbitControls />
    </Suspense>

     </Canvas>
    <footer style={{margin: "15px"}} >
      If you wanna see the live action of the scene, you can visit...
      <a href="https://housedecentraland.herokuapp.com?realm=localhost-stub&renderer-branch=master">3d World!</a>
      <div>
        (Loading the 3d world may take a few moments) If you wanna know more about Decentraland visit....
      <a href="https://decentraland.org/n|">Decentraland</a>
      </div>
    </footer>
    </div>
  )
}

export default HouseMarkup
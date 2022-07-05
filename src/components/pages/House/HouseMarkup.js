import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Mvdr from "./Mvdr"
import { Breakpoint } from 'react-socks';


const HouseMarkup = () => {
  return (
    <div>
      <Breakpoint large up>
        <div style={{width: "100%", height:"100%"}}>

        <div style={{display: "flex", justifyContent: "center", margin: "0 auto", alignItems: "center", textAlign:"center"}} >
        <h1 style={{margin:"20px", marginTop: "20px", fontSize:"24px"}}>NFT created for Decentraland Metaverse</h1>
         </div>
          <div className="containerhouse" style={{ width:"100%", height:"auto" } }>
        <Canvas camera={{ fov: 70, position: [ 28, 0, -20 ]}} style={{ width:"100%", height: "60vh" } }>
        <Suspense fallback={null}>
       <ambientLight intensity={10}/>
       <spotLight position={[70, 41, 60]} intensity={19} angle={0.29} penumbra={1} shadow-mapSize={[512, 512]} castShadow />
       <Mvdr position={[15, -5, -5]} />

       <OrbitControls />
    </Suspense>

     </Canvas>
     
    </div>
    <footer style={{ margin: "10 px", padding: "20px", fontSize: '1.2em', fontWeight: 500, letterSpacing: '-0.05em', lineHeight: "1.9em" }}>
      If you wanna see the live action of the scene, you can visit...
      <a style={{ margin: "10 px", padding: 0, fontSize: '1.2em', fontWeight: 500, letterSpacing: '-0.05em', lineHeight: "1.9em" }} href="https://housedecentraland.herokuapp.com?realm=localhost-stub&renderer-branch=master">3d World!</a>
      <div>
        (Loading the 3d world may take a few moments) If you wanna know more about Decentraland visit....
      <a style={{ margin: "10 px", padding: 0, fontSize: '1.2em', fontWeight: 500, letterSpacing: '-0.05em', lineHeight: "1.9em" }} href="https://decentraland.org/">Decentraland</a>
      </div>
    </footer>
        </div>
      </Breakpoint>
      <Breakpoint small down>
      <div style={{display: "flex", justifyContent: "center", margin: "0 auto", alignItems: "center", textAlign:"center"}} >
        <h1 style={{margin:"20px", marginTop: "14px", fontSize:"24px"}}>NFT created for Decentraland Metaverse</h1>
    </div>
    <div style={{ width:"100%" } }>
        <Canvas camera={{ fov: 70, position: [ 28, 0, -20 ]}}>
     <Suspense fallback={null}>
       <ambientLight intensity={5}/>
       <spotLight position={[70, 41, 60]} intensity={10} angle={0.29} penumbra={1} shadow-mapSize={[512, 512]} castShadow />
       <Mvdr position={[15, -5, -5]} />

       <OrbitControls />
    </Suspense>

     </Canvas>
    <footer style={{ margin: "10 px", padding: "10px", fontSize: '1em', fontWeight: 500, letterSpacing: '-0.05em', lineHeight: "1.9em" }}>
      If you wanna see the live action of the scene, you can visit...
      <a style={{ margin: "10 px", padding: 0, fontSize: '1.2em', fontWeight: 500, letterSpacing: '-0.05em', lineHeight: "1.9em" }} href="https://housedecentraland.herokuapp.com?realm=localhost-stub&renderer-branch=master">3d World!</a>
      <div>
        (Loading the 3d world may take a few moments) If you wanna know more about Decentraland visit....
      <a style={{ margin: "10 px", padding: 0, fontSize: '1.2em', fontWeight: 500, letterSpacing: '-0.05em', lineHeight: "1.9em" }} href="https://decentraland.org/">Decentraland</a>
      </div>
    </footer>
    </div>
      </Breakpoint>
    </div>
  )
}

export default HouseMarkup
import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
import { PresentationControls, ContactShadows, Environment } from "@react-three/drei";
import Watch from './Watch';
import { Breakpoint } from 'react-socks';


const WatchMarkup = () => {

    

  return (
    <div>

    <Breakpoint large up>
    <div style={{display: "flex", justifyContent: "center", margin: "0 auto", alignItems: "center", textAlign:"center"}} >
        <h1 style={{margin:"20px", marginTop: "74px", fontSize:"25px"}}>Show your product on detail, increase user retention!</h1>
    </div>

    <div className="Container" style={{ width:"100%", height:"100vh" } }>

    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
    <Suspense fallback={null}>
    <ambientLight intensity={0.5} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />
    <PresentationControls
      global
      config={{ mass: 2, tension: 500 }}
      snap={{ mass: 4, tension: 1500 }}
      rotation={[0, 0.3, 0]}
      polar={[-Math.PI / 3, Math.PI / 3]}
      azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
      <Watch rotation={[-Math.PI / 7, 0, 0]} position={[0, 0.25, 0]} scale={0.0021} />
     
    </PresentationControls>
    <ContactShadows rotation-x={Math.PI / 2} position={[0, -1.4, 0]} opacity={0.75} width={10} height={10} blur={2.6} far={2} />
    <Environment preset="city" />
    </Suspense>
  </Canvas>
    </div>
    </Breakpoint>
    <Breakpoint small down>
      <div style={{display: "flex", justifyContent: "center", margin: "0 auto", alignItems: "center", textAlign:"center"}} >
        <h1 style={{margin:"20px", top: "14px", fontSize:"15px"}}>Show your product on detail, increase user retention!</h1>
       
        </div>
      <div className="Container" style={{ width:"100%", height:"100vh" } }>

<Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
<Suspense fallback={null}>
<ambientLight intensity={0.5} />
<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />
<PresentationControls
  global
  config={{ mass: 2, tension: 500 }}
  snap={{ mass: 4, tension: 1500 }}
  rotation={[0, 0.3, 0]}
  polar={[-Math.PI / 3, Math.PI / 3]}
  azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
  <Watch rotation={[-Math.PI / 7, 0, 0]} position={[0, 0.25, 0]} scale={0.0011} />
 
</PresentationControls>
<ContactShadows rotation-x={Math.PI / 2} position={[0, -1.4, 0]} opacity={0.75} width={10} height={10} blur={2.6} far={2} />
<Environment preset="city" />
</Suspense>
</Canvas>
</div>
    </Breakpoint>
    </div>
  )
}

export default WatchMarkup
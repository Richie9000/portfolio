import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Portfolio from './Navbar/Portfolio';




const ThreeScene = () => {

    

  return (
    <div className="Container" style={{ width:"100%", height:"100vh" }  }>
     <Canvas>
     <Suspense fallback={null}>
      <Portfolio  />
    </Suspense>
       <mesh position={[3,0,0]}>
         <boxBufferGeometry args={[1,1,1]} />
         <meshBasicMaterial color={"#ff0000"} />
       </mesh>
       <mesh position={[0,0,0]}>
         <boxBufferGeometry args={[1,1,1]} />
         <meshBasicMaterial color={"#ff00ff"} />
       </mesh>
       <mesh position={[-3,0,0]}>
         <boxBufferGeometry args={[1,1,1]} />
         <meshBasicMaterial color={"#ff00bb"} />
       </mesh>

       <OrbitControls />
     </Canvas>
    </div>
  )
}

export default ThreeScene
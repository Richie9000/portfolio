import React from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const ThreeScene = () => {
  return (
    <div className="Container" style={{ width:"100%", height:"100vh" }}>
     <Canvas>
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
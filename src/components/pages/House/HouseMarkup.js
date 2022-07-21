import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import Mvdr from "./Mvdr";
import { Breakpoint} from "react-socks";
import Ocean from "./Water";
import styles from "./HouseMarkup.module.css"


 const HouseMarkup = () => {

  return (
    <div>
    
       <Breakpoint large up>
      
     
     <Canvas style={{position: "absolute", top: 0, left: 0, fov: 70, width:"100%", height:"100%" }}>
       <OrbitControls />
       <Suspense fallback={null}>
      <ambientLight intensity={5} />
    
       <Mvdr scale={.15} />
       <Sky scale={1000} sunPosition={[500, 1, -1000]} turbidity={.1} />
       </Suspense>
     </Canvas>
     
       </Breakpoint>
      <Breakpoint small down>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "0 auto",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h1 style={{ margin: "20px", marginTop: "14px", fontSize: "24px" }}>
            NFT created for Decentraland Metaverse
          </h1>
        </div>
        <div style={{ width: "100%" }}>
          <Canvas style={{ position: "absolute", top: 0, left: 0, width:"100%", height:"100%"}} camera={{ fov: 70, position: [50, 0, -40] }}>
            <Suspense fallback={null}>
              <ambientLight intensity={5} />
              <spotLight
                position={[70, 41, 60]}
                intensity={10}
                angle={0.29}
                penumbra={1}
                shadow-mapSize={[512, 512]}
                castShadow
              />
              <Mvdr scale={.5} position={[15, -5, -5]} />
           
              <OrbitControls />
            </Suspense>
          </Canvas>
          <footer
            style={{
              margin: "10 px",
              padding: "10px",
              fontSize: "1em",
              fontWeight: 500,
              letterSpacing: "-0.05em",
              lineHeight: "1.9em",
            }}
          >
            If you wanna see the live action of the scene, you can visit...
            <a
              style={{
                margin: "10 px",
                padding: 0,
                fontSize: "1.2em",
                fontWeight: 500,
                letterSpacing: "-0.05em",
                lineHeight: "1.9em",
              }}
              href="https://housedecentraland.herokuapp.com?realm=localhost-stub&renderer-branch=master"
            >
              3d World!
            </a>
            <div>
              (Loading the 3d world may take a few moments) If you wanna know
              more about visit....
              <a
                style={{
                  margin: "10 px",
                  padding: 0,
                  fontSize: "1.2em",
                  fontWeight: 500,
                  letterSpacing: "-0.05em",
                  lineHeight: "1.9em",
                }}
                href="https://decentraland.org/"
              >
                Decentraland
              </a>
            </div>
          </footer>
        </div>
      </Breakpoint>
    </div>
  );
};

export default HouseMarkup;

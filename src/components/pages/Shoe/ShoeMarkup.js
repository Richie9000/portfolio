import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import { Breakpoint } from 'react-socks'
import Shoe from './Shoe'
import "./Shoe.css"

const ShoeMarkup = () => {

    const [mesh, setMesh] = useState("#ffffff")
    const [stripes, setStripes] = useState("#ffffff")
    const [sole, setSole] = useState("#ffffff")
  return (
    <div>

    <Breakpoint large up>
    <div style={{display: "flex", justifyContent: "center", margin: "0 auto", alignItems: "center", textAlign:"center"}} >
        <h1 style={{margin:"5px", marginTop: "44px", fontSize:"25px"}}>Let your client customize your products!</h1>
    </div>

      <div className="wrapper">
      <div className="card">
          <div >
              <Canvas style={{ width: "35vw", height: "40vh",backgroundColor:"white"}}>
              <Suspense fallback={null}>
              <ambientLight intensity={.7} />
              <spotLight intensity={.7} angle={.1} penumbra={1} position={[10,25,10]} castShadow />
              <Shoe customColors={{mesh:mesh, stripes:stripes, sole:sole}}  />
              <directionalLight intensity={1} position={[0,0,50]} color="blue" />
  
              <OrbitControls />
              </Suspense>
  
              </Canvas>
  
          </div>
          <h2>Color chooser</h2>
          <div className='colors'>
               <div>
                  <input onChange={(e) => setMesh(e.target.value)} type="color" id="mesh" name="mesh"
                         value={mesh} />
                  <label for="mesh">Main</label>
                </div>
  
              <div>
                  <input onChange={(e)=> setStripes(e.target.value)} type="color" id="stripes" name="stripes"
                          value={stripes} />
                  <label for="stripes">Stripes</label>
              </div>
               <div>
                  <input onChange={(e)=>setSole(e.target.value)} type="color" id="sole" name="sole"
                          value={sole} />
                  <label for="sole">Sole</label>
              </div>
          </div>
      </div>
      </div>
   
    </Breakpoint>
    <Breakpoint small down>
    <div style={{display: "flex", justifyContent: "center", margin: "0 auto", alignItems: "center", textAlign:"center"}} >
        <h1 style={{margin:"20px", top: "14px", fontSize:"15px"}}>Let your client customize your products!</h1>
       
    </div>
    <div style={{marginLeft: "6px", position: "absolute", top: "30%"}}>
    <div style={{backgroundColor:"#16094e", borderRadius:"13px", padding:"1rem"}}>
        <div >
            <Canvas style={{ width: "85vw", backgroundColor:"white"}}>
            <Suspense fallback={null}>
            <ambientLight intensity={.7} />
            <spotLight intensity={.7} angle={.1} penumbra={1} position={[10,25,10]} castShadow />
            <Shoe customColors={{mesh:mesh, stripes:stripes, sole:sole}}  />
            <directionalLight intensity={1} position={[0,0,50]} color="blue" />

            <OrbitControls />
            </Suspense>

            </Canvas>

        </div>
        <h2>Color chooser</h2>
        <div className='colors'>
             <div>
                <input onChange={(e) => setMesh(e.target.value)} type="color" id="mesh" name="mesh"
                       value={mesh} />
                <label for="mesh">Main</label>
              </div>

            <div>
                <input onChange={(e)=> setStripes(e.target.value)} type="color" id="stripes" name="stripes"
                        value={stripes} />
                <label for="stripes">Stripes</label>
            </div>
             <div>
                <input onChange={(e)=>setSole(e.target.value)} type="color" id="sole" name="sole"
                        value={sole} />
                <label for="sole">Sole</label>
            </div>
        </div>
    </div>
    </div>
    </Breakpoint>
    </div>

  )
}

export default ShoeMarkup
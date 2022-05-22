import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import Shoe from './Shoe'
import "./Shoe.css"

const ShoeMarkup = () => {

    const [mesh, setMesh] = useState("#ffffff")
    const [stripes, setStripes] = useState("#ffffff")
    const [sole, setSole] = useState("#ffffff")
  return (
    <div className="wrapper">
    <div className="card">
        <div className="product-canvas">
            <Canvas>
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
 

  )
}

export default ShoeMarkup
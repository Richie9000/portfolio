import React from 'react'
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Portfolio = () => {
    const gltf = useLoader(GLTFLoader, "./models/portfolio.glb");
    return (
      <>
        <primitive object={gltf.scene} scale={0.4} />
      </>
    );
}

export default Portfolio
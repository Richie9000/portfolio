/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function About({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/about.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Text.geometry} material={materials.Material} position={[-0.07, -0.66, -1.06]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/about.gltf')
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Home({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/untitled.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Window1Cube1.geometry} material={materials['Glass  Invisible']} position={[-0.07, 1.46, -3.52]} rotation={[-Math.PI, -0.01, -Math.PI]} scale={[0.1, 1.47, 6.47]} />
      <mesh geometry={nodes.Text.geometry} material={materials.Material} position={[-0.11, 2.85, 2.77]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
    </group>
  )
}

useGLTF.preload('/untitled.gltf')

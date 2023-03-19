import * as THREE from 'three'
import { useRef, startTransition } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useIntersect, Image, ScrollControls, Scroll } from '@react-three/drei'
import styles from "./ScrollWindow.module.css";

function Item({ url, scale, ...props }) {
  const visible = useRef(false)
  const ref = useIntersect((isVisible) => (visible.current = isVisible))
  const { height } = useThree((state) => state.viewport)
  useFrame((state, delta) => {
    startTransition(() => {
      ref.current.position.y = THREE.MathUtils.damp(
        ref.current.position.y,
        visible.current ? 0 : -height / 2 + 1,
        4,
        delta
      );
      ref.current.material.zoom = THREE.MathUtils.damp(
        ref.current.material.zoom,
        visible.current ? 1 : 1.5,
        4,
        delta
      );
    });
  });
  return (
    <group {...props}>
      <Image ref={ref} scale={scale} url={url} />
    </group>
  )
}

function Items() {
  const { width: w, height: h } = useThree((state) => state.viewport)
  return (
    <Scroll>
      <Item url="/1.jpg" scale={[w / 3, w / 3, 1]} position={[-w / 6, 0, 0]} />
      <Item url="/2.jpg" scale={[2, w / 3, 1]} position={[w / 30, -h, 0]} />
      <Item url="/3.jpg" scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 1, 0]} />
      <Item url="/4.jpg" scale={[w / 5, w / 5, 1]} position={[w / 4, -h * 1.2, 0]} />
      <Item url="/5.jpg" scale={[w / 5, w / 5, 1]} position={[w / 10, -h * 1.75, 0]} />
      <Item url="/6.jpg" scale={[w / 3, w / 3, 1]} position={[-w / 4, -h * 2, 0]} />
      <Item url="/7.jpg" scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 2.6, 0]} />
      <Item url="/8.jpg" scale={[w / 2, w / 2, 1]} position={[w / 4, -h * 3.1, 0]} />
      <Item url="/12.jpg" scale={[w / 2.5, w / 2, 1]} position={[-w / 6, -h * 4.1, 0]} />
    </Scroll>
  )
}

export const ScrollWindow = () => (
  <Canvas style={{height: '100vh', zIndex: '0' }} orthographic camera={{ zoom: 80 }} gl={{ alpha: false, antialias: false, stencil: false, depth: false }} dpr={[1, 1.5]}>
    <color attach="background" args={['#f0f0f0']} />
    <ScrollControls damping={6} pages={5}>
      <Items />
      <Scroll html style={{ width: '100%',  height: '100vh', zIndex: '0' }}>
        <h1 style={{ position: 'absolute', top: `50vh`, right: '8vw', fontSize: '5em', backgroundColor: 'black', zIndex: '5'}}>Would you like </h1>
        <h1 style={{ position: 'absolute', top: '180vh', left: '10vw', fontSize: '5em', backgroundColor: 'black', zIndex: '1' }}>a web page</h1>
        <h1 style={{ position: 'absolute', top: '260vh', right: '10vw',fontSize: '5em',  backgroundColor: 'black', zIndex: '1' }}>like </h1>
        <h1 style={{ position: 'absolute', top: '350vh', left: '10vw', fontSize: '5em', backgroundColor: 'black', zIndex: '1' }}>this one?</h1>
        <h1 style={{ position: 'absolute', top: '450vh', right: '10vw', fontSize: '5em', backgroundColor: 'black', zIndex: '1' }}>
          Contact
          <br />
          me!
        </h1>
      </Scroll>
    </ScrollControls>
  </Canvas>
)
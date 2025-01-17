import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import CanvasLoader from '../Loader'
import { Suspense } from 'react'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])

  return (
    <Float speed={0.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1,1]} />
        <meshStandardMaterial 
          color='white' 
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal 
          map={decal}
          rotation={[2 * Math.PI, 0, 6.25]}
          position={[0, 0, 1]}
          flatShading
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas 
      frameloop='demand' 
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
        />
        <Ball imgUrl={icon}/>
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default BallCanvas
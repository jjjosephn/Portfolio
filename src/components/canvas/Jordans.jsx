import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Jordans = ({ isMobile }) => {
  const jordans = useGLTF("./jordans/scene.gltf")

  return (
    <mesh>
      <hemisphereLight intensity={4} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight
        position={[-50, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={jordans.scene}
        scale={isMobile ? 10 : 20}
        position={isMobile ? [0, -2, -2.2] : [0, -2.9, 0]} 
        rotation={[0.05, -3, 0]}
        />
    </mesh>
  )
}

const JordansCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    setIsMobile(mediaQuery.matches)
    const handleMediaQueryChange = (e) => setIsMobile(e.matches)
    mediaQuery.addEventListener('change', handleMediaQueryChange)
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange)
  })

  return (
    <Canvas 
      frameloop='demand' 
      shadows 
      camera={{ position: [20, 2, 10], fov: 30}}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate={true}
          autoRotateSpeed={2}
        />
        <Jordans isMobile={isMobile}/>
        <Preload all />
      </Suspense>
    </Canvas>
  )
}
export default JordansCanvas
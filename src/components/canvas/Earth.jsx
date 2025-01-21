import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Planet = ({ isMobile }) => {
  const planet = useGLTF("./earth/scene.gltf")

  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={planet.scene}
        scale={0.44}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
  )
}

const EarthCanvas = () => {
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
      camera={{fov: 45, far: 200, position:[-4, 3, 6]}}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          autoRotateSpeed={2}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Planet isMobile={isMobile}/>
        <Preload all />
      </Suspense>
    </Canvas>
  )
}
export default EarthCanvas
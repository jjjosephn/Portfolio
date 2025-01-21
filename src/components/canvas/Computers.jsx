import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./computers/scene.gltf")

  return (
    <mesh>
      <hemisphereLight intensity={1.2} groundColor='black' />
      <pointLight intensity={1} />
      <primitive 
        object={computer.scene}
        scale={isMobile ? 1.1 : 1.2}
        position={isMobile ? [0, -4.3, 0] : [0, -3.85, 0]}
        rotation={[0, 1.3, 0]}
        />
    </mesh>
  )
}

const ComputersCanvas = () => {
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
      camera={{ position: [20, 3, 5], fov: 25}}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
          enableRotate={false}
        />
        <Computers isMobile={isMobile}/>
        <Preload all />
      </Suspense>
    </Canvas>
  )
}
export default ComputersCanvas
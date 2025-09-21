'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import { Mesh, Object3D } from 'three'

function Atom() {
  const nucleusRef = useRef<Mesh>(null)
  const electronRefs = [useRef<Mesh>(null), useRef<Mesh>(null), useRef<Mesh>(null)]
  const orbitRefs = [useRef<Object3D>(null), useRef<Object3D>(null), useRef<Object3D>(null)]

  const radii = [4, 3, 2.5]
  const speed = [1, 1.5, 2]
  const planeAngles = [
    { x: 0, y: 0, z: 0 },
    { x: Math.PI / 4, y: Math.PI / 4, z: 0 },
    { x: Math.PI / 6, y: 0, z: Math.PI / 3 },
  ]

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    electronRefs.forEach((ref, i) => {
      if (ref.current) {
        const r = radii[i]
        const s = speed[i]
        const { x: ax, y: ay, z: az } = planeAngles[i]
        ref.current.position.x = r * Math.cos(s * t) * Math.cos(ax)
        ref.current.position.y = r * Math.sin(s * t) * Math.cos(ay)
        ref.current.position.z = r * Math.sin(s * t) * Math.cos(az)
      }
    })
  })

  return (
    <>
      {/* Nucleus */}
      <mesh ref={nucleusRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>

      {/* Orbit rings */}
      {radii.map((r, i) => (
        <mesh
          key={i}
          ref={orbitRefs[i]}
          rotation={[planeAngles[i].x, planeAngles[i].y, planeAngles[i].z]}
        >
          <torusGeometry args={[r, 0.02, 16, 100]} />
          <meshStandardMaterial color="gray" />
        </mesh>
      ))}

      {/* Electrons */}
      {electronRefs.map((ref, i) => (
        <mesh key={i} ref={ref}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color={i === 0 ? 'blue' : i === 1 ? 'green' : 'yellow'} />
        </mesh>
      ))}
    </>
  )
}

export default function QuantumAtom() {
  return (
    <Canvas style={{ height: 500, width: '100%' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Atom />
      <OrbitControls />
    </Canvas>
  )
}

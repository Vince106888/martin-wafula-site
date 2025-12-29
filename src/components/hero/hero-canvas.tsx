"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useMemo } from "react";

function Network() {
  const points = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 300; i++) {
      vertices.push(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12
      );
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    return geometry;
  }, []);

  return (
    <points geometry={points}>
      <pointsMaterial
        size={0.04}
        color="#60a5fa"
        transparent
        opacity={0.75}
      />
    </points>
  );
}

export function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
      <ambientLight intensity={0.4} />
      <Network />
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.6}
      />
    </Canvas>
  );
}

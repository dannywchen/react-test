// src/components/PlayPage.js
import React, { Suspense, useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, MeshDistortMaterial } from "@react-three/drei";
import { TextureLoader, RepeatWrapping } from "three";
import * as THREE from "three";

const Island = () => {
  const grassTexture = useLoader(
    TextureLoader,
    "https://media.discordapp.net/attachments/917589799299321897/1225281783310843905/MIfesDJB.png?ex=66208f95&is=660e1a95&hm=e2abc8e5ce3a396971bf14cd4d9037c8dd22f017209058f0303b38d541c515c5&=&format=webp&quality=lossless&width=605&height=302"
  );
  grassTexture.wrapS = RepeatWrapping;
  grassTexture.wrapT = RepeatWrapping;
  grassTexture.repeat.set(4, 4);

  return (
    <mesh position={[0, -0.5, 0]}>
      <coneGeometry args={[5, 2, 32]} />
      <meshStandardMaterial map={grassTexture} />
    </mesh>
  );
};

const MagicalPortal = () => {
  const portalTexture = useLoader(
    TextureLoader,
    "https://media.discordapp.net/attachments/917589799299321897/1225281783310843905/MIfesDJB.png?ex=66208f95&is=660e1a95&hm=e2abc8e5ce3a396971bf14cd4d9037c8dd22f017209058f0303b38d541c515c5&=&format=webp&quality=lossless&width=605&height=302"
  );
  portalTexture.wrapS = RepeatWrapping;
  portalTexture.wrapT = RepeatWrapping;
  portalTexture.repeat.set(1, 1);

  const portalRef = useRef();

  // Rotate the portal for some added effect
  useFrame(() => {
    if (portalRef.current) {
      portalRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh position={[2, 1, 0]} ref={portalRef}>
      <torusGeometry args={[1, 0.3, 16, 100]} />
      <MeshDistortMaterial
        attach="material"
        map={portalTexture}
        distort={0.4}
        speed={2}
        color={"purple"}
        emissive={"purple"}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

const FloatingIsland = () => {
  const gltf = useGLTF("/models/floating_island.glb");
  return <primitive object={gltf.scene} />;
};

const PlayPage = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <FloatingIsland />
          <MagicalPortal />
          {/* Add Trees and other components here if needed */}
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default PlayPage;

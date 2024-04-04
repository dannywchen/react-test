// src/components/PlayPage.js

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SplineScene from "./SplineScene"; // Import the Spline scene

export default function PlayPage() {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas>
        <Suspense fallback={null}>
          <SplineScene />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

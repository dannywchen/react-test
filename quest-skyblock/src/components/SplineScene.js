// src/components/SplineScene.js

import React from "react";
import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera } from "@react-three/drei";

export default function SplineScene({ ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/q4-NsWZRWJYOCfXo/scene.splinecode"
  );

  return (
    <>
      <color attach="background" args={["#a8b3d9"]} />
      <group {...props} dispose={null}>
        {/* Spline generated JSX */}
      </group>
    </>
  );
}

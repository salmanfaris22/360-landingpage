"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { prefersReducedMotion } from "@/lib/gsap";

/** Spiral galaxy point cloud — violet core bleeding into cyan arms. */
function Galaxy({ count }: { count: number }) {
  const group = useRef<THREE.Group>(null!);
  const reduced = useMemo(prefersReducedMotion, []);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const inside = new THREE.Color("#8b5cf6");
    const mid = new THREE.Color("#4d7cff");
    const outside = new THREE.Color("#22d3ee");
    const branches = 4;
    const radiusMax = 5.2;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = Math.pow(Math.random(), 1.6) * radiusMax;
      const branchAngle = ((i % branches) / branches) * Math.PI * 2;
      const spinAngle = radius * 1.15;

      const rand = () =>
        Math.pow(Math.random(), 2.8) * (Math.random() < 0.5 ? 1 : -1) * 0.42 * radius;

      pos[i3] = Math.cos(branchAngle + spinAngle) * radius + rand();
      pos[i3 + 1] = rand() * 0.45;
      pos[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + rand();

      const t = radius / radiusMax;
      const c = t < 0.5 ? inside.clone().lerp(mid, t * 2) : mid.clone().lerp(outside, (t - 0.5) * 2);
      col[i3] = c.r;
      col[i3 + 1] = c.g;
      col[i3 + 2] = c.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (reduced) return;
    group.current.rotation.y += delta * 0.045;
    // Mouse parallax: ease the whole galaxy toward the pointer
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      state.pointer.y * 0.12,
      0.04
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      -state.pointer.x * 0.08,
      0.04
    );
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      state.pointer.x * 0.5,
      0.03
    );
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={group} rotation={[0.35, 0, 0.12]}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.016}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.95}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

/** Distant static starfield surrounding the galaxy. */
function Stars({ count }: { count: number }) {
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 14 + Math.random() * 14;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        sizeAttenuation
        color="#ffffff"
        transparent
        opacity={0.55}
        depthWrite={false}
      />
    </points>
  );
}

export default function GalaxyScene() {
  const [ready, setReady] = useState(false);
  // Lighter particle budget on small screens
  const [counts] = useState(() => {
    const small =
      typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;
    return small ? { galaxy: 3200, stars: 900 } : { galaxy: 7500, stars: 2200 };
  });

  useEffect(() => setReady(true), []);

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-[1500ms] ease-out ${
        ready ? "opacity-100" : "opacity-0"
      }`}
    >
      <Canvas
        camera={{ position: [0, 1.9, 4.6], fov: 52 }}
        dpr={[1, 1.75]}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <Galaxy count={counts.galaxy} />
        <Stars count={counts.stars} />
      </Canvas>
    </div>
  );
}

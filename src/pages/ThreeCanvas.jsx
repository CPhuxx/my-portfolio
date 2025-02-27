import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Stars } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function AnimatedSphere() {
  const meshRef = useRef();
  useFrame((state) => {
    meshRef.current.rotation.y += 0.005;
    meshRef.current.rotation.x += 0.003;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
  });

  return (
    <Sphere ref={meshRef} args={[1.8, 64, 64]}>
      <meshPhysicalMaterial
        attach="material"
        color="var(--color-primary)" // ฟ้าเข้ม
        metalness={0.5}
        roughness={0.2}
        clearcoat={1}
      />
    </Sphere>
  );
}

function ThreeCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.3} />
      <pointLight
        position={[10, 10, 10]}
        intensity={2}
        color="var(--color-primary)"
      />
      <AnimatedSphere />
      <Stars
        radius={150}
        depth={50}
        count={8000}
        factor={5}
        saturation={1}
        fade
        color="var(--color-primary)"
      />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}

export default ThreeCanvas;

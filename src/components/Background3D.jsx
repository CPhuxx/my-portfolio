import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls, Sphere, Ring } from '@react-three/drei';
import { useRef } from 'react';

function Background3D() {
  const sphereRef = useRef();

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="var(--color-primary)" />
      <Stars
        radius={200}
        depth={60}
        count={20000}
        factor={7}
        saturation={1}
        fade
        speed={1}
        color="var(--color-primary)" // จุดสีฟ้าชัดเจน
      />
      {/* เพิ่ม Sphere 3D ลอย */}
      <Sphere ref={sphereRef} args={[1, 32, 32]} position={[0, 0, -5]}>
        <meshStandardMaterial color="var(--color-primary)" metalness={0.8} roughness={0.2} />
      </Sphere>
      {/* เพิ่ม Ring 3D ลอย */}
      <Ring args={[2, 3, 32]} position={[5, 0, -5]} rotation={[0, 0, Math.PI / 4]}>
        <meshStandardMaterial color="var(--color-primary)" side={2} />
      </Ring>
      {/* เพิ่ม OrbitControls สำหรับทดสอบ (สามารถลบได้ถ้าไม่ต้องการให้ผู้ใช้หมุน) */}
      <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
    </Canvas>
  );
}

export default Background3D;
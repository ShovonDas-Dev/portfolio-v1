import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, RoundedBox } from '@react-three/drei';

const Cube = () => {
  const meshRef = useRef();

  // কিউবটিকে আস্তে আস্তে ঘোরানোর জন্য
  useFrame((state) => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  // রুবিক্স কিউবের ছোট ছোট বক্স তৈরি
  const cubes = [];
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        cubes.push(
          <RoundedBox 
            key={`${x}-${y}-${z}`} 
            position={[x * 1.05, y * 1.05, z * 1.05]} 
            args={[1, 1, 1]} // সাইজ
            radius={0.05} // কোণাগুলো একটু গোল করার জন্য
            smoothness={4}
          >
            <meshStandardMaterial 
              color={(x + y + z) % 2 === 0 ? "#2563eb" : "#f8fafc"} 
              metalness={0.5}
              roughness={0.2}
            />
          </RoundedBox>
        );
      }
    }
  }

  return <group ref={meshRef}>{cubes}</group>;
};

const RubiksScene = () => {
  return (
    <div className="w-full h-full min-h-[320px] sm:min-h-[420px]">
      <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
        
        <Cube />
        
        {/* মাউস দিয়ে ঘোরানোর জন্য */}
        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>
    </div>
  );
};

export default RubiksScene;
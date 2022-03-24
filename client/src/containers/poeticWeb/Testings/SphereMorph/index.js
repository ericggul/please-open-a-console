import * as S from "./styles";
import * as THREE from "three";
import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const MorphingBox = () => {
  const boxRef = useRef();
  const meshRef = useRef();

  useEffect(() => {
    if (boxRef && boxRef.current && meshRef && meshRef.current) {
      meshRef.current.morphTargetInfluences = [];
      boxRef.current.morphAttributes.position = [];
      const positionAttribute = boxRef.current.attributes.position;

      //To Transit
      const spherePositions = [];
      for (let i = 0; i < positionAttribute.length; i++) {
        const x = positionAttribute.getX(i);
        const y = positionAttribute.getY(i);
        const z = positionAttribute.getZ(i);

        spherePositions.push(
          x * Math.sqrt(1 - (y * y) / 2 - (z * z) / 2 + (y * y * z * z) / 3),
          y * Math.sqrt(1 - (x * x) / 2 - (z * z) / 2 + (x * x * z * z) / 3),
          z * Math.sqrt(1 - (y * y) / 2 - (x * x) / 2 + (x * x * y * y) / 3)
        );
      }

      boxRef.current.morphAttributes.position[0] = new THREE.Float32BufferAttribute(spherePositions, 3);
    }
  }, [boxRef, meshRef]);

  useFrame(
    (state) => {
      if (meshRef && meshRef.current && meshRef.current.morphTargetInfluences) {
        meshRef.current.morphTargetInfluences[0] = Math.min(1, state.clock.elapsedTime / 10);
      }
    },
    [meshRef]
  );

  return (
    <mesh ref={meshRef}>
      <boxGeometry ref={boxRef} args={[2, 2, 2, 32, 32, 32]} />
      {/* <cylinderGeometry ref={boxRef} args={[5, 5, 20, 64]} /> */}
      <meshPhongMaterial color="red" flatShading={true} />
    </mesh>
  );
};

export default function SphereMorph() {
  return (
    <S.Container>
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 100, position: [0, 0, 20] }}>
        <color attach="background" args={["black"]} />

        <ambientLight intensity={0.2} />
        <directionalLight intensity={3} color={"#fff"} position={[100, 0, 100]} castShadow shadow-mapSize={[1024, 1024]} />
        <MorphingBox />
        <OrbitControls />
      </Canvas>
    </S.Container>
  );
}
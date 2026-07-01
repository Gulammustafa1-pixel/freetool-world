import { useGLTF } from "@react-three/drei";

export default function Robot() {
  const gltf = useGLTF("/models/robot.glb");

  console.log(gltf);

  return (
    <primitive
      object={gltf.scene}
      scale={0.5}
      position={[0, 0, 0]}
    />
  );
}
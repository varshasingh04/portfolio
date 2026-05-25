import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Edges } from "@react-three/drei";
import * as THREE from "three";
import type { SectionId } from "@/constants";
import { SHAPE_BY_SECTION } from "@/constants";

type Props = {
  section: SectionId;
};

const CYAN = "#22D3EE";
const VIOLET = "#A78BFA";

function Icosahedron() {
  return (
    <mesh>
      <icosahedronGeometry args={[1.05, 1]} />
      <meshStandardMaterial
        color="#0A0A0F"
        emissive={CYAN}
        emissiveIntensity={0.18}
        roughness={0.45}
        metalness={0.7}
      />
      <Edges scale={1.001} threshold={1} color={CYAN} />
    </mesh>
  );
}

function TorusKnot() {
  return (
    <mesh>
      <torusKnotGeometry args={[1.05, 0.32, 180, 28]} />
      <meshStandardMaterial
        color="#0A0A0F"
        emissive={VIOLET}
        emissiveIntensity={0.22}
        roughness={0.35}
        metalness={0.85}
      />
      <Edges scale={1.001} threshold={20} color={CYAN} />
    </mesh>
  );
}

function Ring() {
  return (
    <group>
      <mesh rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[1.6, 0.04, 32, 180]} />
        <meshStandardMaterial color={CYAN} emissive={CYAN} emissiveIntensity={1.2} />
      </mesh>
      <mesh rotation={[Math.PI / 2.4, Math.PI / 3, 0]}>
        <torusGeometry args={[1.95, 0.025, 32, 180]} />
        <meshStandardMaterial color={VIOLET} emissive={VIOLET} emissiveIntensity={1} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.55, 48, 48]} />
        <MeshDistortMaterial
          color="#0A0A0F"
          emissive={CYAN}
          emissiveIntensity={0.35}
          distort={0.3}
          speed={1.4}
          roughness={0.2}
          metalness={0.95}
        />
      </mesh>
    </group>
  );
}

function CubesGrid() {
  const positions: [number, number, number][] = [
    [-0.7, 0.7, 0],
    [0.7, 0.7, 0],
    [-0.7, -0.7, 0],
    [0.7, -0.7, 0],
  ];
  return (
    <group>
      {positions.map((p, i) => (
        <Float key={i} speed={1.6} rotationIntensity={0.6} floatIntensity={0.6}>
          <mesh position={p}>
            <boxGeometry args={[0.85, 0.85, 0.85]} />
            <meshStandardMaterial
              color="#0A0A0F"
              emissive={i % 2 === 0 ? CYAN : VIOLET}
              emissiveIntensity={0.3}
              roughness={0.35}
              metalness={0.85}
            />
            <Edges scale={1.001} threshold={20} color={CYAN} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function Sphere() {
  return (
    <mesh>
      <sphereGeometry args={[1.4, 64, 64]} />
      <MeshDistortMaterial
        color="#0A0A0F"
        emissive={CYAN}
        emissiveIntensity={0.4}
        distort={0.25}
        speed={1.2}
        roughness={0.2}
        metalness={0.95}
      />
    </mesh>
  );
}

function Diamond() {
  return (
    <mesh rotation={[0, 0, Math.PI / 4]}>
      <octahedronGeometry args={[1.5, 0]} />
      <meshStandardMaterial
        color="#0A0A0F"
        emissive={CYAN}
        emissiveIntensity={0.3}
        roughness={0.15}
        metalness={0.95}
      />
      <Edges scale={1.001} threshold={1} color={CYAN} />
    </mesh>
  );
}

function Sheet() {
  return (
    <group>
      <mesh rotation={[0, 0.15, 0.05]}>
        <planeGeometry args={[1.6, 2.1, 4, 4]} />
        <meshStandardMaterial
          color="#0F0F17"
          emissive={CYAN}
          emissiveIntensity={0.05}
          roughness={0.6}
          metalness={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh
          key={i}
          rotation={[0, 0.15, 0.05]}
          position={[0, 0.7 - i * 0.18, 0.005]}
        >
          <planeGeometry args={[1.2, 0.04]} />
          <meshBasicMaterial color={CYAN} transparent opacity={0.25} />
        </mesh>
      ))}
    </group>
  );
}

function Orb() {
  return (
    <group>
      <mesh>
        <sphereGeometry args={[0.85, 64, 64]} />
        <meshPhysicalMaterial
          color="#0A0A0F"
          emissive={CYAN}
          emissiveIntensity={0.3}
          roughness={0.1}
          metalness={0.2}
          transmission={0.4}
          thickness={1.0}
          ior={1.4}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.25, 32, 32]} />
        <meshBasicMaterial
          color={CYAN}
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

const POSITION_BY_SECTION: Record<SectionId, [number, number, number]> = {
  hero: [1.8, 0.15, 0],
  about: [2.0, 0, 0],
  skills: [0, 0, -1.5],
  projects: [0, 0, -2.5],
  education: [2.0, 0, 0],
  certifications: [0, 0, -2],
  resume: [2.0, 0, -0.5],
  contact: [2.6, -0.4, -2],
};

function ShapeFor({ section }: { section: SectionId }) {
  switch (SHAPE_BY_SECTION[section]) {
    case "icosahedron":
      return <Icosahedron />;
    case "torus":
      return <TorusKnot />;
    case "ring":
      return <Ring />;
    case "cubes":
      return <CubesGrid />;
    case "sphere":
      return <Sphere />;
    case "diamond":
      return <Diamond />;
    case "sheet":
      return <Sheet />;
    case "orb":
      return <Orb />;
    default:
      return <Icosahedron />;
  }
}

export function Centerpiece({ section }: Props) {
  const group = useRef<THREE.Group>(null!);
  const inner = useRef<THREE.Group>(null!);
  const [displayed, setDisplayed] = useState<SectionId>(section);
  const phaseRef = useRef<"idle" | "out" | "in">("in");
  const scaleRef = useRef(0.001);
  const targetPos = useRef(new THREE.Vector3(...POSITION_BY_SECTION[section]));

  useEffect(() => {
    if (section !== displayed) {
      phaseRef.current = "out";
    }
    targetPos.current.set(...POSITION_BY_SECTION[section]);
  }, [section, displayed]);

  useFrame((_, delta) => {
    if (!group.current || !inner.current) return;

    group.current.rotation.y += delta * 0.18;
    group.current.rotation.x += delta * 0.05;

    const posLerp = Math.min(delta * 2.2, 0.1);
    group.current.position.lerp(targetPos.current, posLerp);

    const lerpAmt = Math.min(delta * 5, 0.3);
    if (phaseRef.current === "out") {
      scaleRef.current = THREE.MathUtils.lerp(scaleRef.current, 0, lerpAmt);
      if (scaleRef.current < 0.04) {
        setDisplayed(section);
        phaseRef.current = "in";
      }
    } else {
      scaleRef.current = THREE.MathUtils.lerp(scaleRef.current, 1, lerpAmt);
      if (scaleRef.current > 0.985) phaseRef.current = "idle";
    }

    inner.current.scale.setScalar(scaleRef.current);
  });

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.6}>
        <group ref={inner}>
          <ShapeFor section={displayed} />
        </group>
      </Float>
    </group>
  );
}

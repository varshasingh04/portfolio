import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((_, delta) => {
    const targetX = mouse.current.x * 0.25;
    const targetY = mouse.current.y * 0.18;
    const lerp = Math.min(delta * 2.5, 0.1);
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, lerp);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, lerp);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

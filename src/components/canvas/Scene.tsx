import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Centerpiece } from "./Centerpiece";
import { CameraRig } from "./CameraRig";
import { Lights } from "./Lights";
import { Effects } from "./Effects";
import { Particles } from "./Particles";
import type { SectionId } from "@/constants";
import { useIsMobile } from "@/hooks/useMediaQuery";

type Props = {
  section: SectionId;
};

export function Scene({ section }: Props) {
  const isMobile = useIsMobile();

  return (
    <div className="fixed inset-0 -z-0 pointer-events-none">
      <Canvas
        dpr={[1, isMobile ? 1.25 : 1.6]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        camera={{ position: [0, 0, 5], fov: 42 }}
      >
        <Suspense fallback={null}>
          <Lights />
          <Particles count={isMobile ? 220 : 600} />
          <Centerpiece section={section} />
          {!isMobile && <CameraRig />}
          {!isMobile && <Effects />}
        </Suspense>
      </Canvas>
    </div>
  );
}

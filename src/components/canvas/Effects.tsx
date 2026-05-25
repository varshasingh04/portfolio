import { EffectComposer, Bloom, Vignette, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export function Effects() {
  return (
    <EffectComposer multisampling={0}>
      <Bloom
        intensity={0.6}
        luminanceThreshold={0.25}
        luminanceSmoothing={0.4}
        mipmapBlur
      />
      <Vignette eskil={false} offset={0.1} darkness={0.85} />
      <Noise
        opacity={0.025}
        blendFunction={BlendFunction.OVERLAY}
        premultiply
      />
    </EffectComposer>
  );
}

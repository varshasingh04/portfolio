export function Lights() {
  return (
    <>
      <ambientLight intensity={0.18} color="#ffffff" />
      <directionalLight
        position={[4, 6, 5]}
        intensity={1.4}
        color="#22D3EE"
      />
      <directionalLight
        position={[-5, -2, -3]}
        intensity={0.8}
        color="#A78BFA"
      />
      <pointLight position={[0, 0, 3]} intensity={0.4} color="#ffffff" />
    </>
  );
}

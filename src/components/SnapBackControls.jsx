import { useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function SnapBackControls({ target = [0, 1.5, 0], position = [4.8, 7, -11.3] }) {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;

    const handleEnd = () => {
      const startPos = camera.position.clone();
      const endPos = new THREE.Vector3(...position);
      const startTime = performance.now();

      function animate() {
        const elapsed = performance.now() - startTime;
        const t = Math.min(elapsed / 500, 1);
        camera.position.lerpVectors(startPos, endPos, t);
        controls.target.lerp(new THREE.Vector3(...target), t);
        controls.update();
        if (t < 1) requestAnimationFrame(animate);
      }

      animate();
    };

    controls.addEventListener('end', handleEnd);
    return () => controls.removeEventListener('end', handleEnd);
  }, [camera, position, target]);

  return (
    <OrbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      enablePan={false}
      enableZoom={false}
      target={new THREE.Vector3(...target)}
      minPolarAngle={Math.PI / 3}
      maxPolarAngle={Math.PI / 2}
      minAzimuthAngle={-0.5}
      maxAzimuthAngle={0.5}
    />
  );
}

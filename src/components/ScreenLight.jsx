import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import * as THREE from 'three';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib';

export default function ScreenLight() {
  const { scene } = useThree();

  useEffect(() => {
    RectAreaLightUniformsLib.init();

    const rectLight = new THREE.RectAreaLight(0xffffff, 10, 1.2, 0.9);
    rectLight.position.set(0, 5.5, -2.2); 
    rectLight.lookAt(0, 4.5, 0);
    scene.add(rectLight);

    return () => {
      scene.remove(rectLight);
    };
  }, [scene]);

  return null;
}

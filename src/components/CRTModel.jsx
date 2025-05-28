import { useGLTF } from '@react-three/drei';
import { useEffect, useState } from 'react';
import * as THREE from 'three';

export default function CRTModel({ texture, channel }) {
  const { scene } = useGLTF('/models/CRT-TV.glb');
  const [screenMesh, setScreenMesh] = useState(null);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material?.name === 'Screen-Panel') {
        setScreenMesh(child);
        console.log('📺 Found screen mesh:', child.name);
      }
    });
  }, [scene]);

  new THREE.MeshStandardMaterial({
    map: texture,
    emissiveMap: texture,
    emissive: new THREE.Color(0xffffff),
    emissiveIntensity: 1,
    toneMapped: false,
  })  

  useEffect(() => {
    if (!screenMesh) return;

    const colorMap = {
      1: 'red',
      2: 'green',
      3: 'blue',
    };

    let material;

    if (texture) {
      material = new THREE.MeshBasicMaterial({
        map: texture,
        toneMapped: false,
      });
      console.log('🖼️ Applied texture to screen');
    } else {
      material = new THREE.MeshBasicMaterial({
        color: colorMap[channel] || 'white',
      });
      console.log(`🎨 Set fallback color for channel ${channel}`);
    }

    // Dispose previous material
    if (screenMesh.material) {
      screenMesh.material.dispose();
    }

    screenMesh.material = material;
    screenMesh.material.needsUpdate = true;

  }, [texture, channel, screenMesh]);

  return <primitive object={scene} />;
}

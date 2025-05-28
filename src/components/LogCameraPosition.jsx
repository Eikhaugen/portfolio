import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

export default function LogCameraPosition() {
  const { camera } = useThree();

  useEffect(() => {
    const logTransform = () => {
      console.log('📷 Camera position:', camera.position.toArray());
      console.log('🎯 Camera rotation (radians):', camera.rotation.toArray());
    };

    window.addEventListener('click', logTransform);
    return () => window.removeEventListener('click', logTransform);
  }, [camera]);

  return null;
}

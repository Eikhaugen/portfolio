import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

export default function SetCameraRotation({ rotation }) {
  const { camera } = useThree();

  useEffect(() => {
    camera.rotation.set(...rotation);
  }, [camera, rotation]);

  return null;
}

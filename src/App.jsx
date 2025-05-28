import { useEffect, useRef, useState, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import * as THREE from 'three';
import html2canvas from 'html2canvas';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import LogCameraPosition from './components/LogCameraPosition';
import SetCameraRotation from './components/SetCameraRotation';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';
import ScreenLight from './components/ScreenLight';
RectAreaLightUniformsLib.init();

import CRTModel from './components/CRTModel';
import Channel1 from './routes/Channel1';
import Channel2 from './routes/Channel2';
import Channel3 from './routes/Channel3';

function App() {
  const [texture, setTexture] = useState(null);
  const location = useLocation();
  const renderRef = useRef(null);

  const channel = useMemo(() => {
    const match = location.pathname.match(/\/channel\/(\d)/);
    return match ? parseInt(match[1], 10) : 1;
  }, [location]);

  useEffect(() => {
    const renderToTexture = async () => {
      const node = renderRef.current;
      if (!node) return;

      try {
        await new Promise((resolve) => setTimeout(resolve, 100));
        const canvas = await html2canvas(node, {
          backgroundColor: null,
          useCORS: true,
        });
        const tex = new THREE.CanvasTexture(canvas);
        tex.needsUpdate = true;
        tex.encoding = THREE.sRGBEncoding;
        tex.anisotropy = 16;
        tex.center.set(0.5, 0.5);
        tex.offset.set(0, 0);
        tex.repeat.set(1.8, 1.8);
        tex.wrapS = THREE.ClampToEdgeWrapping;
        tex.wrapT = THREE.ClampToEdgeWrapping;
        setTexture(tex);
        console.log('✅ Texture updated with html2canvas for channel', channel);
      } catch (error) {
        console.error('❌ html2canvas failed:', error);
      }
    };

    renderToTexture();
  }, [channel]);

  return (
    <>
      <div className="flex flex-row w-screen h-screen overflow-hidden">
        <div className="w-1/2 h-full bg-gray-900">
        <Canvas camera={{ position: [4.8, 7, -11.3], fov: 50 }}>
        <LogCameraPosition />
        <SetCameraRotation rotation={[-2.78, 0.28, 3.05]} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <CRTModel texture={texture} channel={channel} />
        <OrbitControls
          enablePan={false}
          enableZoom={false} 
          target={[0, 4.5, 0]}
        />
        <EffectComposer>
          <Bloom intensity={0.1} luminanceThreshold={0.1} luminanceSmoothing={0.2} />
        </EffectComposer>
        <ScreenLight />
      </Canvas>

        </div>

        <div className="w-1/2 h-full bg-white overflow-auto p-4">
          <div
            id="offscreen-render"
            ref={renderRef}
            className="w-[512px] h-[384px]"
          >
              <Routes location={location}>
                <Route path="/channel/1" element={<Channel1 />} />
                <Route path="/channel/2" element={<Channel2 />} />
                <Route path="/channel/3" element={<Channel3 />} />
              </Routes>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 bg-black text-white p-4 rounded shadow-lg space-x-2">
        <p>Change Channel:</p>
        <Link to="/channel/1" className="underline">1</Link>
        <Link to="/channel/2" className="underline">2</Link>
        <Link to="/channel/3" className="underline">3</Link>
      </div>
    </>
  );
}

export default App;

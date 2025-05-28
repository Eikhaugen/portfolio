import { useEffect, useRef, useState, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Routes, Route, useLocation, useNavigate, Link } from 'react-router-dom';
import * as THREE from 'three';
import html2canvas from 'html2canvas';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import LogCameraPosition from './components/LogCameraPosition';
import SetCameraRotation from './components/SetCameraRotation';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';
import ScreenLight from './components/ScreenLight';
RectAreaLightUniformsLib.init();
import TVRemote from './components/TVRemote';

import CRTModel from './components/CRTModel';
import Channel100 from './routes/Channel100';
import Channel200 from './routes/Channel200';
import Channel3 from './routes/Channel3';

const dev = false;

function App() {
  const [texture, setTexture] = useState(null);
  const [currentView, setCurrentView] = useState(() => Number(localStorage.getItem('currentView')) || 100);
  const [input, setInput] = useState(""); // <-- Add this line
  const location = useLocation();
  const navigate = useNavigate();
  const renderRef = useRef(null);

  const channel = useMemo(() => {
    const match = location.pathname.match(/\/channel\/(\d+)/);
    return match ? parseInt(match[1], 10) : currentView;
  }, [location, currentView]);

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
  }, [channel, input]); // <-- Add input here

  // Handle channel change from TVRemote
  const handleChannelChange = (digit) => {
    const newInput = (input + digit).slice(-3);
    setInput(newInput);

    if (newInput.length === 3) {
      setCurrentView(Number(newInput));
      localStorage.setItem('currentView', Number(newInput));
      navigate(`/channel/${Number(newInput)}`);
      setInput(""); // reset input after navigation
    }
  };

  return (
    <>
      <div className="flex flex-row w-screen h-screen overflow-hidden">
        <div className="w-full h-full bg-gray-900">
          <Canvas camera={{ position: [4.8, 7, -11.3], fov: 50 }}>
            <LogCameraPosition />
            <SetCameraRotation rotation={[-2.78, 0.28, 3.05]} />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <CRTModel texture={texture} channel={currentView} />
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

        {dev ? (
          <div className="w-full h-full bg-white overflow-auto p-4">
            <div
              id="offscreen-render"
              ref={renderRef}
              className="w-[512px] h-[384px]"
            >
              {currentView === 100 && <Channel100 />}
              {currentView === 200 && <Channel200 />}
              {currentView === 3 && <Channel3 />}
            </div>
          </div>
        ) : (
      <div
        id="offscreen-render"
        ref={renderRef}
        className="w-[512px] h-[384px] absolute -left-[9999px] top-0"
      >
        {currentView === 100 && (
          <Channel100 input={input.length > 0 ? input : String(currentView)} />
        )}
        {currentView === 200 && <Channel200 />}
        {currentView === 3 && <Channel3 />}
      </div>
        )}
      </div>

      <TVRemote onChannelChange={handleChannelChange} input={input} />
    </>
  );
}

export default App;

import { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import html2canvas from 'html2canvas';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import LogCameraPosition from './components/LogCameraPosition';
import SetCameraRotation from './components/SetCameraRotation';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';
import ScreenLight from './components/ScreenLight';
import CRTModel from './components/CRTModel';
import TVRemote from './components/TVRemote';
import InfoContainer from './components/InfoContainer';

// Pages
import Page100 from './routes/Page100';
import Page101 from './routes/Page101';
import Page200 from './routes/Page200';
import Page210 from './routes/Page210';
import Page220 from './routes/Page220';
import Page230 from './routes/Page230';
import Page300 from './routes/Page300';
import Page400 from './routes/Page400';

RectAreaLightUniformsLib.init();

const dev = false;

function App() {
  const [texture, setTexture] = useState(null);
  const [currentView, setCurrentView] = useState(100);
  const [input, setInput] = useState('');
  const renderRef = useRef(null);

  const [showInfo, setShowInfo] = useState(false);

  const handleToggleInfo = () => {
    setShowInfo(prev => !prev);
  };


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
      } catch (error) {
        console.error('❌ html2canvas failed:', error);
      }
    };

    renderToTexture();
  }, [currentView, input]);

  const handlePageChange = (digit) => {
    const newInput = (input + digit).slice(-3);
    setInput(newInput);

    if (newInput.length === 3) {
      const nextPage = Number(newInput);
      setCurrentView(nextPage);
      setInput('');
    }
  };

  const renderPage = () => {
    const props = { input: input.length > 0 ? input : String(currentView), currentView };
    switch (currentView) {
      case 100: return <Page100 {...props} />;
      case 101: return <Page101 {...props} />;
      case 200: return <Page200 {...props} />;
      case 210: return <Page210 {...props} />;
      case 220: return <Page220 {...props} />;
      case 230: return <Page230 {...props} />;
      case 300: return <Page300 {...props} />;
      case 400: return <Page400 {...props} />;
      default: return <Page100 {...props} />;
    }
  };

  const offscreenRenderElement = (
    <div
      id="offscreen-render"
      ref={renderRef}
      className={`w-[512px] h-[384px] overflow-auto
        ${dev ? 'relative bg-white' : 'absolute -left-[9999px] top-0'}
      `}
    >
      {renderPage()}
    </div>
  );

<InfoContainer
  visible={showInfo}
  onClose={() => setShowInfo(false)}
  currentView={currentView}
/>

  return (
    <div>
<div className="flex flex-row w-screen h-screen overflow-hidden">
  <div className="w-full h-full bg-gray-900">
    <Canvas camera={{ position: [4.8, 7, -11.3], fov: 50 }}>
      <LogCameraPosition />
      <SetCameraRotation rotation={[-2.78, 0.28, 3.05]} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <CRTModel texture={texture} page={currentView} />
      <OrbitControls enablePan={false} enableZoom={false} target={[0, 4.5, 0]} />
      <EffectComposer>
        <Bloom intensity={0.1} luminanceThreshold={0.1} luminanceSmoothing={0.2} />
      </EffectComposer>
      <ScreenLight />
    </Canvas>
  </div>

  {dev && (
    <div>
      <div className="relative">
        {offscreenRenderElement}
      </div>
    </div>
  )}
</div>

{!dev && offscreenRenderElement} 

<InfoContainer
  visible={showInfo}
  onClose={() => setShowInfo(false)}
  currentView={currentView}
/>

<TVRemote
  onPageChange={handlePageChange}
  input={input}
  currentView={currentView}
  onInfo={handleToggleInfo}
/>

    </div>
  );
}

export default App;

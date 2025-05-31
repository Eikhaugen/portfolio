import InfoPage210 from './info/InfoPage210.jsx';
import InfoPage220 from './info/InfoPage220.jsx';
import InfoPage230 from './info/InfoPage230.jsx';
import InfoPage300 from './info/InfoPage300.jsx';
import InfoPage400 from './info/InfoPage400.jsx';

const infoPages = [210, 220, 230, 300, 400];

export default function InfoContainer({ visible, onClose, currentView }) {
  const isInfoPage = infoPages.includes(currentView);
  if (!isInfoPage) return null; // 🔒 Hide completely if not valid

  const renderInfoContent = () => {
    switch (currentView) {
      case 210: return <InfoPage210 />;
      case 220: return <InfoPage220 />;
      case 230: return <InfoPage230 />;
      case 300: return <InfoPage300 />;
      case 400: return <InfoPage400 />;
      default: return null;
    }
  };

  return (
    <div
      className={`
        fixed top-0 right-0 h-full w-[80vw] max-w-[1024px] backdrop-blur-md bg-black/60 text-white
        p-6 z-40 border-4 border-cyan-400 rounded-lg
        shadow-[0_0_20px_5px_rgba(0,255,255,0.5)]
        transition-transform duration-300 ease-in-out
        ${visible ? 'translate-x-0' : 'translate-x-full'}
      `}
    >
      <div className="w-full flex justify-end mb-4">
        <button
          onClick={onClose}
          className="text-sm px-3 py-1 rounded border border-pink-400 text-pink-300 hover:bg-pink-500 hover:text-black cursor-pointer
          shadow-[0_0_10px_rgba(255,0,150,0.6)] transition"
        >
          ✕ Close
        </button>
      </div>
      <div className="max-h-[calc(100%-4rem)] overflow-y-auto pr-2">
        {renderInfoContent()}
      </div>
    </div>
  );
}

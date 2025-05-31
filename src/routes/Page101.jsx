import DateBar from "../components/DateBar";

export default function Channel101({ input, currentView }) {
  return (
    <div className="w-[512px] h-[384px] bg-black flex flex-col items-center text-white p-2">
      <DateBar input={input} currentView={currentView}/>
      <h1 className="text-left w-full text-2xl bg-[#0000ff] font-bold pb-4 pl-4">Page Index</h1>
      <div  className="w-full flex p-2 mt-2">
        <div className="flex flex-col w-full border-[#ff0000] border-2 pb-2">
        <div className="flex w-full p-2">
            <span>Home</span>
            <div className="w-full border-b-2 border-dotted"></div>
            <span>100</span>
          </div>
          <div className="flex w-full p-2">
            <span>Index</span>
            <div className="w-full border-b-2 border-dotted"></div>
            <span>101</span>
          </div>
          <div className="flex w-full p-2">
            <span>My{'\u00A0'}Projects</span>
            <div className="w-full border-b-2 border-dotted"></div>
            <span>200</span>
          </div>
        </div>
                <div className="flex flex-col w-full border-[#ff0000] border-2 pb-2">
          <div className="flex w-full p-2">
            <span>About{'\u00A0'}Me</span>
            <div className="w-full border-b-2 border-dotted"></div>
            <span>300</span>
          </div>
          <div className="flex w-full p-2">
            <span>Contact</span>
            <div className="w-full border-b-2 border-dotted"></div>
            <span>400</span>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

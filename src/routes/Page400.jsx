import DateBar from "../components/DateBar";
export default function Channel400({ input, currentView }) {
    return (
      <div className="w-[512px] h-[384px] bg-black flex flex-col items-center text-white p-2">
      <DateBar input={input} currentView={currentView}/>
      <h1 className="text-left w-full text-2xl bg-[#09ff00] font-bold pb-4 pl-4">Contact Me</h1>
      <div  className="w-full flex p-2 mt-2 mb-26">
        <div className="flex flex-col w-full border-[#09ff00] border-2 pb-2">
            <p>
              You can contact me via the contact form on the info page.
              <br />
              I am also on LinkedIn and GitHub.
            </p>
        </div>
      </div>
              <div className="flex w-full justify-center gap-2"><span className="font-bold text-lg">
            Click
        </span>
            <span className="text-[#ffffff] font-bold bg-[#007800] px-2 pb-4">
                INFO
            </span>
            <span className="font-bold text-lg">
                for more information
            </span>
        </div>
    </div>
    );
  }
  
import DateBar from "../components/DateBar";

export default function Channel200({ input }) {
  return (
    <div className="w-[512px] h-[384px] bg-black flex flex-col items-center text-white p-2">
      <DateBar input={input} />
      <h1 className="text-left w-full text-2xl bg-[#ff0000] font-bold pb-4 pl-4">My Projects</h1>
      <p className="p-2">
        This is a list of some of my projects.
      </p>
      <div  className="w-full flex p-2 mt-2">
        <div className="flex flex-col w-full border-[#ff0000] border-2 pb-2">
          <div className="flex w-full p-2">
            <span>Anemic{'\u00A0'}Heroes</span>
            <div className="w-full border-b-2 border-dotted"></div>
            <span>210</span>
          </div>
          <div className="h-full w-[4px] bg-[#ff0000] mr-2 ml-2"></div>
          <div className="flex w-full p-2">
            <span>Holidaze</span>
            <div className="w-full border-b-2 border-dotted"></div>
            <span>220</span>
          </div>
                    <div className="flex w-full p-2">
            <span>Auction{'\u00A0'}House</span>
            <div className="w-full border-b-2 border-dotted"></div>
            <span>230</span>
          </div>
        </div>
        <div>
        </div>
      </div>
            <p className="p-2 mt-2">
            Use the remote control to navigate through the portfolio sections.
            Use the expand button for more information
          </p>
    </div>
  );
}

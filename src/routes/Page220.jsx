import DateBar from "../components/DateBar";

export default function Channel220({ input, currentView }) {
  return (
    <div className="w-[512px] h-[384px] bg-black flex flex-col items-center text-white p-2">
      <DateBar input={input} currentView={currentView}/>
      <h1 className="text-left w-full text-2xl bg-[#8c00ff] font-bold pb-4 pl-4">Holidaze</h1>
      <div  className="w-full flex p-2 mt-2">
        <div className="flex flex-col w-full border-[#8c00ff] border-2 pb-2">
            <p>
                Holidaze is a booking and venue management website. It allows users to book venues for events, manage bookings, and view available dates. The website is built using React and TailwindCSS. It features a user-friendly interface and responsive design, making it accessible on both desktop and mobile devices.
            </p>
            <p>
              Made for the Final Project during the Frontend Development program at Noroff School of Technology and Digital Media.
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

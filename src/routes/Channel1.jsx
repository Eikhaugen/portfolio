export default function Channel1() {
  return (
    <div className="w-[512px] h-[384px] bg-black flex flex-col items-center text-white p-2">
      <div className="w-full flex items-center justify-between p-2">
        <span>100</span>
        <span>Wed 28th 2025</span>
        <span>10:30</span>
      </div>
      <h1 className="text-left w-full text-2xl bg-[#0000ff] font-bold pb-4 pl-4">Thomas Eikhaugen's Portfolio</h1>
      <p className="p-2">
        Welcome to my portfolio! Here you can find information about my projects, skills, and experience.
         Feel free to explore and get in touch if you have any questions or would like to collaborate.
      </p>
      <div  className="w-full flex p-2 mt-2">
        <div className="flex flex-col w-full border-[#ff0000] border-2 pb-2">
          <div className="flex w-full p-2">
            <span>Index</span>
            <div className="w-full border-b-2 border-dotted"></div>
            <span>101</span>
          </div>
          <div className="h-full w-[4px] bg-[#ff0000] mr-2 ml-2"></div>
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
          <div className="h-full w-[4px] bg-[#ff0000] mr-2 ml-2"></div>
          <div className="flex w-full p-2">
            <span>Contact</span>
            <div className="w-full border-b-2 border-dotted"></div>
            <span>400</span>
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

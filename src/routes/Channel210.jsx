import DateBar from "../components/DateBar";

export default function Channel210({ input }) {
  return (
    <div className="w-[512px] h-[384px] bg-black flex flex-col items-center text-white p-2">
      <DateBar input={input} />
      <h1 className="text-left w-full text-2xl bg-[#ff0000] font-bold pb-4 pl-4">Anemic Heroes</h1>
        <img src="/anemic-heroes.png" alt="" />
      <div  className="w-full flex p-2 mt-2">
        <div className="flex flex-col w-full border-[#ff0000] border-2 pb-2">
            <p>
                Anemic Heroes is a game made for the Agency 2 course at Noroff School of Technology and Digital Media. It is a turn-based RPG with a focus on storytelling and character development.
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

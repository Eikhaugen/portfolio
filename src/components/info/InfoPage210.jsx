export default function InfoPage210() {
  return (
    <div className="max-w-3xl mx-auto p-4 text-white">
      <h3 className="text-2xl font-bold mb-4">Anemic Heroes</h3>

      <img
        src="/Anemic-Heroes.png"
        alt="Anemic Heroes splash screen"
        className="w-full rounded-lg mb-4"
      />

      <p className="text-base text-gray-300 mb-6">
        Anemic Heroes is a turn-based dungeon crawler game developed as part of the Agency 2 course at Noroff School of Technology and Digital Media. The game features inventory management, character progression, and a simple battle system. It is designed to be played in a web browser and is built using React, JavaScript, and TailwindCSS.
      </p>

      <img
        src="/Anemic-Heroes-character-select.png"
        alt="Character selection screen"
        className="w-full rounded-lg mb-4"
      />
      <p className="mb-6">Anemic Heroes features three player classes - Mage, Warrior and Rogue.</p>

      <img
        src="/Anemic-Heroes-questlog.png"
        alt="Quest log"
        className="w-full rounded-lg mb-4"
      />
      <p className="mb-6">Featuring quests the player can complete for rewards.</p>

      <img
        src="/Anemic-Heroes-battle.png"
        alt="Battle screen"
        className="w-full rounded-lg mb-4"
      />
      <p className="mb-6">Turn-based battles with a simple battle system.</p>

      <p className="mb-6">Built using React, JavaScript and TailwindCSS.</p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="https://anemic-heroes.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-center"
        >
          Live Demo
        </a>
        <a
          href="https://github.com/AnemicGames/AnemicHeroes"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded text-center"
        >
          GitHub Repo
        </a>
      </div>
    </div>
  );
}

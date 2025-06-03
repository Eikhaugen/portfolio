export default function InfoPage300() {
  return (
    <div className="max-w-3xl mx-auto p-4 text-white">
      <h3 className="text-2xl font-bold mb-4">About me</h3>

      <p className="text-base text-gray-300 mb-2">
        Hi I'm Thomas Eikhaugen!
      </p>
      <p className="text-base text-gray-300 mb-2">
        I am a frontend developer.
      </p>
      <p className="text-base text-gray-300 mb-2">
        I have a passion for learning and exploring tech.
      </p>
      <p className="text-base text-gray-300 mb-6">
        I am always looking for new challenges and opportunities to grow as a developer.
      </p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">My Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            { src: "/html5-original.svg", alt: "HTML5", label: "HTML" },
            { src: "/css3-original.svg", alt: "CSS3", label: "CSS" },
            { src: "/javascript-original.svg", alt: "JavaScript", label: "JavaScript" },
            { src: "/python-original.svg", alt: "Python", label: "Python" },
            { src: "/git-original.svg", alt: "Git", label: "Git" },
            { src: "/figma-original.svg", alt: "Figma", label: "Figma" },
          ].map(({ src, alt, label }) => (
            <div key={label} className="border-2 border-transparent rounded-lg p-4 bg-gray-800 hover:border-blue-500 transition">
              <div className="flex flex-col items-center">
                <img src={src} alt={`${alt} logo`} className="h-12 mb-2" aria-hidden="true" />
                <span className="text-sm text-gray-200">{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

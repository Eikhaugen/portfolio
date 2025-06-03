export default function InfoPage230() {
    return (
      <div className="max-w-3xl mx-auto p-4 text-white">
      <h3 className="text-2xl font-bold mb-4">Auction House</h3>

      <img
        src="/auction-house.png"
        alt="Auction House splash screen"
        className="w-full rounded-lg mb-4"
      />

      <p className="text-base text-gray-300 mb-6">
        This project is an auction website built as part of Semester Project 2. The goal is to create a fully functional front-end application that interacts with a provided auction API. The platform allows registered users to list items for auction, place bids, and manage credits. Non-registered users can browse listings but cannot bid.
      </p>

      <h4 className="text-xl font-bold mb-4">✨ Features:</h4>
      <ul className="list-disc list-inside text-gray-300 mb-6">
        <li>User Authentication: Register, log in, and log out.</li>
        <li>Create Listings: Users can create new auction listings with images, titles, and descriptions.</li>
        <li>Bid on Items: Place bids on listed items and see bids.</li>
        <li>Search & Filter: Search for listings and sort them by different criteria (e.g., newest, alphabetically, ending soon).</li>
        <li>Profile Management: Manage user profile, update avatar, banner and bio, and see listings.</li>
        <li>Responsive Design: Fully responsive for desktop, tablet, and mobile views.</li>
      </ul>

      <h4 className="text-xl font-bold mb-4">🛠️ Built with:</h4>
      <ul className="list-disc list-inside text-gray-300 mb-6">
        <li>HTML5</li>
        <li>CSS3 / Tailwind CSS</li>
        <li>JavaScript (ES6)</li>
        <li>Vite</li>
        <li>Font Awesome (for icons)</li>
        <li>Netlify (for deployment)</li>
        <li>RESTful API (provided by Noroff)</li>
      </ul>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
        href="https://grand-pika-ed478d.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-center"
        >
        Live Demo
        </a>
        <a
        href="https://github.com/Eikhaugen/Semester-Project-2"
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
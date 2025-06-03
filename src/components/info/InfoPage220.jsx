export default function InfoPage220() {
    return (
      <div className="max-w-3xl mx-auto p-4 text-white">
      <h3 className="text-2xl font-bold mb-4">Holidaze</h3>

      <img
        src="/holidaze.png"
        alt="Holidaze splash screen"
        className="w-full rounded-lg mb-4"
      />

      <p className="text-base text-gray-300 mb-6">
        Holidaze is a venue booking platform where users can browse, book, and manage venues. Users can sign up as venue managers, create venues and see bookings made to their venues.
      </p>

      <h4 className="text-xl font-semibold mb-4">✨ Features:</h4>
      <ul className="list-disc list-inside text-gray-300 mb-6">
        <li><strong>User Authentication:</strong></li>
        <ul className="list-disc list-inside pl-6">
        <li>Register new users.</li>
        <li>Login for existing users.</li>
        <li>Logout functionality that clears the token from the browser.</li>
        </ul>
        <li>Can search for venues.</li>
        <li>Can book a stay at a venue.</li>
        <li>Can register as a venue manager.</li>
        <li><strong>Venue Managers:</strong></li>
        <ul className="list-disc list-inside pl-6">
        <li>Create new venue.</li>
        <li>Edit existing venue.</li>
        <li>Delete venue.</li>
        <li>View upcoming and past bookings made to venues they manage.</li>
        </ul>
      </ul>

      <h4 className="text-xl font-semibold mb-4">🛠️ Built with:</h4>
      <ul className="list-disc list-inside text-gray-300 mb-6">
        <li>React – UI library for building interactive user interfaces</li>
        <li>React Router – Declarative routing for React</li>
        <li>Tailwind CSS – Utility-first CSS framework</li>
        <li>Vite – Lightning-fast frontend build tool</li>
        <li>Zustand – Small, fast, and scalable bearbones state-management solution</li>
        <li>React Hook Form – Performant, flexible form validation</li>
        <li>React Toastify – Toast notifications for React</li>
        <li>React Modal – Accessible modal dialog component</li>
        <li>React Swipeable – Track swipe gestures for touch-based interactions</li>
        <li>Leaflet – Mobile-friendly interactive maps</li>
        <li>React Leaflet – React components for Leaflet maps</li>
        <li>Lucide React – Beautiful & consistent icon toolkit for React</li>
        <li>React Date Range – Date range picker component for React</li>
        <li>React Calendar – Calendar component for picking dates</li>
        <li>date-fns – Modern JavaScript date utility library</li>
      </ul>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
        href="https://classy-arithmetic-0d74f4.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-center"
        >
        Live Demo
        </a>
        <a
        href="https://github.com/Eikhaugen/Eikhaugen-spring-fed2"
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
export default function InfoPage400() {
  return (
    <div className="max-w-3xl mx-auto p-4 text-white">
      <h3 className="text-2xl font-bold mb-4">Contact</h3>

      <div className="mb-6">
        <p className="text-base text-gray-300 mb-2">
          If you have any questions, want to work together, or just want to say hello?
        </p>
        <p className="text-base text-gray-300">
          Feel free to leave me a message here, you can also find me on LinkedIn and GitHub.
        </p>
      </div>

      <div className="flex gap-4 mb-6 text-3xl">
        <a
          href="https://github.com/Eikhaugen"
          aria-label="Go to my GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <i className="fa-brands fa-square-github" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/thomas-eikhaugen-897234264/"
          aria-label="Go to my LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
        </a>
      </div>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        action="/"
        className="space-y-4"
      >
        <input type="hidden" name="form-name" value="contact" />

        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="3"
          required
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400"
        ></textarea>

        <div className="border-2 border-blue-500 rounded-lg inline-block hover:border-blue-700 transition">
          <button
            type="submit"
            name="submit"
            className="contactFormBTN px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

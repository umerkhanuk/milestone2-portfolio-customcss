const contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="w-full max-w-lg bg-[#333646] text-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-white text-center">Contact Us</h2>

        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your email"
          />
        </div>

        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full border-2 border-[#fcb532] text-[#fcb532] font-bold py-2 px-4 rounded-lg  transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
export default contact

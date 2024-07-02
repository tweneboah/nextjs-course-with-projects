import {
  FaRoute,
  FaSpinner,
  FaDatabase,
  FaExclamationTriangle,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full bg-blue-500 text-white text-center py-20">
        <h1 className="text-5xl font-bold">Explore Next.js Features</h1>
        <p className="text-lg mt-4 px-4">
          Master Next.js by building a complete web application with us.
        </p>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
        {/* Route Handlers Card */}
        <div className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center">
          <FaRoute className="text-4xl text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold">Route Handlers</h2>
          <p className="text-gray-600 text-center mt-2">
            Learn to efficiently manage API routes and server-side logic
            seamlessly.
          </p>
        </div>

        {/* Loading Card */}
        <div className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center">
          <FaSpinner className="text-4xl text-green-500 mb-4 animate-spin" />
          <h2 className="text-xl font-semibold">Loading</h2>
          <p className="text-gray-600 text-center mt-2">
            Understand handling async operations and state with visual feedback.
          </p>
        </div>

        {/* Error Handling Card */}
        <div className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center">
          <FaExclamationTriangle className="text-4xl text-red-500 mb-4" />
          <h2 className="text-xl font-semibold">Error Handling</h2>
          <p className="text-gray-600 text-center mt-2">
            Master the art of gracefully managing exceptions and displaying
            errors effectively.
          </p>
        </div>

        {/* Data Fetching Card */}
        <div className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center">
          <FaDatabase className="text-4xl text-yellow-500 mb-4" />
          <h2 className="text-xl font-semibold">Data Fetching</h2>
          <p className="text-gray-600 text-center mt-2">
            Discover how to use static generation and server-side rendering for
            optimal performance.
          </p>
        </div>
      </div>
    </div>
  );
}
